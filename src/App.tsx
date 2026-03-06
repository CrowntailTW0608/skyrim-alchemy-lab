import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FlaskConical, Info, X, ChevronRight, Beaker, Scale, Coins, Sparkles, Plus, Trash2, Wand2, ChevronUp, ChevronDown } from 'lucide-react';
import { INGREDIENTS, Ingredient, EFFECT_VALUES } from './data/ingredients';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [workbench, setWorkbench] = useState<Ingredient[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: 'name' | 'value', direction: 'asc' | 'desc' }>({ key: 'name', direction: 'asc' });
  const [activeTab, setActiveTab] = useState<'list' | 'lab'>('list');

  const filteredIngredients = useMemo(() => {
    return INGREDIENTS.filter(ing => 
      ing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ing.nameZh.includes(searchTerm)
    ).sort((a, b) => {
      if (sortConfig.key === 'name') {
        const comparison = a.name.localeCompare(b.name);
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      } else {
        const comparison = a.value - b.value;
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }
    });
  }, [searchTerm, sortConfig]);

  const toggleSort = (key: 'name' | 'value') => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // 計算當前工作台產生的藥水效果
  const potionResult = useMemo(() => {
    if (workbench.length < 2) return null;

    const allEffects: Record<string, { count: number; zh: string }> = {};
    
    // 統計所有效果出現次數
    workbench.forEach(ing => {
      ing.effects.forEach((eff, idx) => {
        if (!allEffects[eff]) {
          allEffects[eff] = { count: 1, zh: ing.effectsZh[idx] };
        } else {
          allEffects[eff].count++;
        }
      });
    });

    // 只有出現 2 次以上的效果才會生效
    const activeEffects = Object.entries(allEffects)
      .filter(([_, data]) => data.count >= 2)
      .map(([name, data]) => ({ name, zh: data.zh }));

    const totalValue = activeEffects.reduce((sum, eff) => {
      return sum + (EFFECT_VALUES[eff.name] || 10);
    }, 0);

    return {
      effects: activeEffects,
      value: Math.floor(totalValue * 1.5 * (workbench.length === 3 ? 1.2 : 1)) // 三種材料加成
    };
  }, [workbench]);

  // 智慧建議：根據當前工作台推薦下一個材料
  const suggestions = useMemo(() => {
    if (workbench.length === 0 || workbench.length >= 3) return [];

    return INGREDIENTS.filter(ing => !workbench.find(w => w.id === ing.id))
      .map(ing => {
        // 模擬加入這個材料後的結果
        const tempWorkbench = [...workbench, ing];
        const allEffects: Record<string, number> = {};
        tempWorkbench.forEach(w => {
          w.effects.forEach(eff => {
            allEffects[eff] = (allEffects[eff] || 0) + 1;
          });
        });

        const activeEffects = Object.entries(allEffects).filter(([_, count]) => count >= 2);
        const newEffectsCount = activeEffects.length;
        
        const estimatedValue = activeEffects.reduce((sum, [name]) => {
          return sum + (EFFECT_VALUES[name] || 10);
        }, 0);

        return {
          ingredient: ing,
          newEffectsCount,
          estimatedValue: Math.floor(estimatedValue * 1.5)
        };
      })
      .filter(s => s.newEffectsCount > 0)
      .sort((a, b) => b.estimatedValue - a.estimatedValue)
      .slice(0, 12); // 只顯示前 12 個最強建議
  }, [workbench]);

  const addToWorkbench = (ing: Ingredient) => {
    if (workbench.length < 3 && !workbench.find(w => w.id === ing.id)) {
      setWorkbench([...workbench, ing]);
    }
  };

  const removeFromWorkbench = (id: string) => {
    setWorkbench(workbench.filter(w => w.id !== id));
  };

  const clearWorkbench = () => setWorkbench([]);

  return (
    <div className="h-screen flex flex-col p-4 md:p-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <header className="mb-4 md:mb-6 shrink-0 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-serif font-bold tracking-tight mb-1 md:mb-2 whitespace-nowrap">
            SKYRIM <span className="italic font-normal">Alchemy Lab</span>
          </h1>
          <p className="text-[9px] md:text-sm uppercase tracking-widest opacity-60 font-mono">
            Professional 3-Ingredient Potion Workbench
          </p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
          <input 
            type="text"
            placeholder="Search ingredients..."
            className="w-full bg-white border border-black/20 px-10 py-3 rounded-none focus:outline-none focus:border-black transition-colors font-mono text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Mobile Tabs Navigation */}
      <div className="flex lg:hidden mb-4 shrink-0 border-b border-black/10">
        <button 
          onClick={() => setActiveTab('list')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-all ${activeTab === 'list' ? 'border-b-2 border-black font-bold' : 'opacity-40'}`}
        >
          Ingredients
        </button>
        <button 
          onClick={() => setActiveTab('lab')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-all relative ${activeTab === 'lab' ? 'border-b-2 border-black font-bold' : 'opacity-40'}`}
        >
          Lab 
          {workbench.length > 0 && (
            <span className="ml-2 bg-black text-white px-1.5 py-0.5 rounded-full text-[8px]">
              {workbench.length}/3
            </span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-0">
        {/* Left: Ingredient List - Hidden on mobile if lab tab is active */}
        <div className={`lg:col-span-4 flex flex-col gap-4 min-h-0 ${activeTab === 'lab' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="skyrim-card overflow-hidden flex flex-col flex-1 min-h-0">
            <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent bg-white">
              <div className="data-row bg-black text-white cursor-default sticky top-0 z-20 border-b border-white/10">
                <div 
                  className="col-header text-white/70 flex items-center gap-1 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('name')}
                >
                  Name
                  {sortConfig.key === 'name' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </div>
                <div 
                  className="col-header text-white/70 text-right flex items-center justify-end gap-1 cursor-pointer hover:text-white transition-colors"
                  onClick={() => toggleSort('value')}
                >
                  Val
                  {sortConfig.key === 'value' && (
                    sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                  )}
                </div>
                <div className="col-header text-white/70 text-right">Add</div>
              </div>
              
              {filteredIngredients.map(ing => {
                const isInWorkbench = workbench.find(w => w.id === ing.id);
                return (
                  <div 
                    key={ing.id} 
                    className={`data-row ${isInWorkbench ? 'opacity-30 pointer-events-none' : ''}`}
                    onClick={() => !isInWorkbench && addToWorkbench(ing)}
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">{ing.name}</span>
                      <span className="text-xs opacity-60">{ing.nameZh}</span>
                    </div>
                    <div className="data-value text-right text-xs self-center">{ing.value}</div>
                    <div className="flex justify-end items-center">
                      <Plus className="w-4 h-4 opacity-20" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Workbench & Results - Hidden on mobile if list tab is active */}
        <div className={`lg:col-span-8 overflow-y-auto space-y-8 min-h-0 ${activeTab === 'list' ? 'hidden lg:block' : 'block'}`}>
          {/* Workbench Slots */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl md:text-2xl font-bold italic flex items-center gap-2">
                <Wand2 className="w-5 h-5 md:w-6 md:h-6" /> Alchemy Workbench
              </h2>
              {workbench.length > 0 && (
                <button 
                  onClick={clearWorkbench}
                  className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Clear
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[0, 1, 2].map(idx => {
                const ing = workbench[idx];
                return (
                  <div 
                    key={idx}
                    className={`h-32 md:h-40 skyrim-card flex flex-col items-center justify-center p-2 md:p-4 text-center transition-all ${!ing ? 'border-dashed opacity-40' : ''}`}
                  >
                    {ing ? (
                      <>
                        <Beaker className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 opacity-20" />
                        <span className="font-bold text-[10px] md:text-sm leading-tight truncate w-full">{ing.name}</span>
                        <span className="text-[10px] opacity-60 truncate w-full">{ing.nameZh}</span>
                        <button 
                          onClick={() => removeFromWorkbench(ing.id)}
                          className="mt-2 md:mt-3 text-[8px] font-mono uppercase tracking-tighter border border-black/10 px-2 py-1 hover:bg-black hover:text-white transition-colors"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <div className="flex flex-col items-center opacity-40">
                        <Plus className="w-4 h-4 md:w-6 md:h-6 mb-1 md:mb-2" />
                        <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest">Slot {idx + 1}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Potion Result Area */}
          <AnimatePresence mode="wait">
            {potionResult ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="skyrim-card p-4 md:p-8 bg-emerald-50/30 border-emerald-900/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <FlaskConical className="w-24 h-24 md:w-32 md:h-32 text-emerald-900" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 md:mb-6">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                    <h3 className="font-serif text-lg md:text-2xl font-bold">Brewed Potion Result</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-4">
                      <h4 className="col-header">Active Effects</h4>
                      <div className="flex flex-wrap gap-2">
                        {potionResult.effects.map((eff, i) => (
                          <div key={i} className="bg-emerald-900 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-sm text-[10px] md:text-xs font-bold flex items-center gap-2">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/40 rounded-full" />
                            {eff.zh}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-4">
                      <h4 className="col-header">Potion Value</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-5xl font-serif font-bold text-emerald-800">{potionResult.value}</span>
                        <span className="text-[10px] md:text-sm font-mono opacity-60 uppercase tracking-widest">Gold</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : workbench.length === 1 ? (
              <div className="p-6 md:p-8 border border-dashed border-black/10 rounded-lg text-center opacity-40 italic font-serif text-sm">
                Add at least one more ingredient to see potion results.
              </div>
            ) : null}
          </AnimatePresence>

          {/* Smart Suggestions */}
          {workbench.length > 0 && workbench.length < 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black pb-2">
                <h3 className="font-serif text-lg md:text-xl font-bold italic">Smart Suggestions</h3>
                <span className="text-[8px] md:text-[10px] font-mono opacity-40 uppercase tracking-widest">Optimized</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {suggestions.map((s, idx) => (
                  <motion.div 
                    key={s.ingredient.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="skyrim-card p-3 md:p-4 cursor-pointer group"
                    onClick={() => addToWorkbench(s.ingredient)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-bold text-[10px] md:text-xs leading-tight group-hover:underline">{s.ingredient.name}</h4>
                        <p className="text-xs opacity-70 font-medium">{s.ingredient.nameZh}</p>
                      </div>
                      <div className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-[8px] font-bold">
                        +{s.newEffectsCount}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 md:mt-3 pt-2 border-t border-black/5">
                      <div className="flex items-center gap-1 opacity-40">
                        <Coins className="w-3 h-3" />
                        <span className="text-[10px] font-mono">{s.estimatedValue}</span>
                      </div>
                      <Plus className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-4 pt-4 shrink-0 border-t border-black/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest opacity-40">
        <div>Skyrim Alchemy Workbench v2.0.0</div>
        <div className="flex gap-6">
          <span>Total Ingredients: {INGREDIENTS.length}</span>
          <span>Last Updated: 2026-03-05</span>
        </div>
      </footer>
    </div>
  );
}
