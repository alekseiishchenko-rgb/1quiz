
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { QUESTIONS, DIRECTORS } from './constants';
import { QuizState, DirectorId, DirectorResult } from './types';
import { generatePersonalizedAnalysis } from './services/gemini';

const FadeIn: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out fill-mode-forwards ${className}`}>
    {children}
  </div>
);

const App: React.FC = () => {
  const [screen, setScreen] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    scores: Object.keys(DIRECTORS).reduce((acc, key) => {
      acc[key as DirectorId] = 0;
      return acc;
    }, {} as Record<DirectorId, number>),
    answers: []
  });
  
  const [personalizedInsight, setPersonalizedInsight] = useState<string>("");
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);

  const handleStart = () => {
    setScreen('quiz');
  };

  const currentQuestion = QUESTIONS[state.currentQuestionIndex];

  const resultDirector = useMemo(() => {
    let maxScore = -1;
    let winners: DirectorId[] = [];
    
    (Object.keys(state.scores) as DirectorId[]).forEach(id => {
      if (state.scores[id] > maxScore) {
        maxScore = state.scores[id];
        winners = [id];
      } else if (state.scores[id] === maxScore) {
        winners.push(id);
      }
    });
    
    return DIRECTORS[winners[0]] || DIRECTORS['Tarkovsky'];
  }, [state.scores]);

  const handleAnswer = useCallback((optionId: string, points: DirectorId[]) => {
    const selectedOption = currentQuestion.options.find(o => o.id === optionId);
    const isLast = state.currentQuestionIndex === QUESTIONS.length - 1;

    setState(prev => {
      const newScores = { ...prev.scores };
      points.forEach(director => {
        newScores[director] = (newScores[director] || 0) + 1;
      });
      
      return {
        ...prev,
        currentQuestionIndex: isLast ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
        scores: newScores,
        answers: [...prev.answers, selectedOption?.text || ""]
      };
    });

    if (isLast) {
      setScreen('result');
    }
  }, [state.currentQuestionIndex, currentQuestion]);

  useEffect(() => {
    if (screen === 'result' && !personalizedInsight && !isLoadingInsight) {
      setIsLoadingInsight(true);
      generatePersonalizedAnalysis(resultDirector.name, state.answers)
        .then(insight => {
          setPersonalizedInsight(insight);
          setIsLoadingInsight(false);
        })
        .catch(() => setIsLoadingInsight(false));
    }
  }, [screen, resultDirector.name, state.answers, personalizedInsight, isLoadingInsight]);

  const progress = ((state.currentQuestionIndex) / QUESTIONS.length) * 100;

  const formatName = (fullName: string) => {
    const parts = fullName.split(' ');
    if (parts.length === 1) return { first: parts[0], last: '' };
    return { first: parts[0], last: parts.slice(1).join(' ') };
  };

  const formattedName = formatName(resultDirector.name);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white flex flex-col items-center justify-between">
      {/* Header */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-white/5 z-50">
        <div className="text-xl font-bold tracking-tighter uppercase cursor-pointer" onClick={() => window.location.reload()}>Synchronize</div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
          <span>Кино</span>
          <span>Искусство</span>
          <span>Культура</span>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center w-full max-w-7xl mx-auto p-6">
        {screen === 'welcome' && (
          <FadeIn className="text-center space-y-12">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-2 leading-[0.85]">
                РЕЖИССЕРСКИЙ <br/><span className="text-neutral-800">ПОЧЕРК</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 font-light serif italic max-w-2xl mx-auto">
                Исследуйте свою визуальную идентичность через призму великих мастеров мирового кино.
              </p>
            </div>
            
            <button 
              onClick={handleStart}
              className="group relative inline-flex items-center gap-4 px-14 py-6 bg-white text-black text-xs font-bold uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-red-600 hover:text-white"
            >
              Начать исследование
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </FadeIn>
        )}

        {screen === 'quiz' && currentQuestion && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Левая колонка: Изображение */}
            <FadeIn key={`img-${currentQuestion.id}`} className="hidden lg:block relative group">
              <div className="aspect-[4/5] overflow-hidden border border-white/5">
                <img 
                  src={currentQuestion.imageUrl} 
                  alt="Cinematic background"
                  className="w-full h-full object-cover grayscale transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-red-600/30"></div>
            </FadeIn>

            {/* Правая колонка: Вопрос и варианты */}
            <div className="w-full space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h2 className="text-xs uppercase tracking-[0.3em] text-red-600 font-bold">Кадр {currentQuestion.id} — {QUESTIONS.length}</h2>
                  <div className="text-[10px] font-mono text-neutral-700 tracking-widest">{Math.round(progress)}% ЭКСПОЗИЦИИ</div>
                </div>
                <div className="h-[1px] w-full bg-neutral-900 overflow-hidden">
                  <div 
                    className="h-full bg-red-600 transition-all duration-1000 cubic-bezier(0.65, 0, 0.35, 1)" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <FadeIn key={`text-${currentQuestion.id}`} className="space-y-10">
                <h3 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                  {currentQuestion.text}
                </h3>
                
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id, option.points)}
                      className="w-full text-left p-6 border border-white/10 hover:border-white transition-all duration-500 group relative flex items-center justify-between"
                    >
                      <span className="text-lg md:text-xl text-neutral-400 group-hover:text-white transition-colors">
                        {option.text}
                      </span>
                      <div className="w-0 h-full absolute left-0 top-0 bg-white/5 group-hover:w-full transition-all duration-500 -z-10"></div>
                    </button>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        )}

        {screen === 'result' && (
          <FadeIn className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Фото и имя */}
              <div className="lg:col-span-5 space-y-10">
                <div className="aspect-[4/5] relative overflow-hidden group border border-white/10 shadow-2xl">
                  <img 
                    src={resultDirector.imageUrl} 
                    alt={resultDirector.name}
                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-[10px] font-bold uppercase tracking-[0.4em] px-4 py-2 shadow-2xl">
                      Ваш результат
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[1.1] overflow-visible">
                    <span className="block">{formattedName.first}</span>
                    <span className="block text-neutral-800 lg:text-neutral-700 mt-[-0.1em]">{formattedName.last}</span>
                  </h1>
                </div>
              </div>
              
              {/* Описание и CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-16">
                <div className="space-y-12">
                  <div className="space-y-8">
                    <p className="text-2xl md:text-4xl text-neutral-200 leading-tight font-light italic serif border-l-4 border-red-600 pl-8 lg:pl-12">
                      {resultDirector.description}
                    </p>
                  </div>

                  <div className="pt-12 border-t border-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-grow bg-white/10"></div>
                      <h4 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold whitespace-nowrap">Персональный разбор</h4>
                      <div className="h-px flex-grow bg-white/10"></div>
                    </div>
                    
                    {isLoadingInsight ? (
                      <div className="flex gap-2 items-center h-12 justify-center lg:justify-start">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce delay-150"></div>
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce delay-300"></div>
                      </div>
                    ) : (
                      <div className="relative">
                        <p className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight max-w-2xl serif italic">
                          "{personalizedInsight || "Ваш киноязык — это путешествие вглубь человеческой души через безупречную форму."}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex flex-col sm:flex-row gap-4 xl:gap-6">
                    <a 
                      href="https://online.synchronize.ru/catalogue" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex-grow relative overflow-hidden bg-white text-black px-10 py-7 text-xs font-bold uppercase tracking-[0.4em] text-center transition-all hover:bg-red-600 hover:text-white"
                    >
                      <span className="relative z-10">Каталог курсов по кино</span>
                      <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <button 
                      onClick={() => window.location.reload()}
                      className="px-8 py-7 border border-white/20 text-[10px] uppercase tracking-[0.4em] hover:border-white transition-all text-neutral-500 hover:text-white flex-shrink-0"
                    >
                      Заново
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6 opacity-40 grayscale group cursor-default">
                    <div className="text-[8px] uppercase tracking-[0.5em] font-bold">Партнеры исследования:</div>
                    <div className="flex gap-4 items-center">
                       <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-[10px] font-bold">S</div>
                       <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-[10px] font-bold italic">C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </main>
      
      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 opacity-30 mt-16">
        <div className="text-[9px] uppercase tracking-[0.5em] font-medium text-center md:text-left">
          Синхронизация • Лекторий в Москве и онлайн • {new Date().getFullYear()}
        </div>
        <div className="flex gap-12 text-[9px] uppercase tracking-[0.5em] font-bold">
          <a href="#" className="hover:text-red-600 transition-colors">Vk</a>
          <a href="#" className="hover:text-red-600 transition-colors">Tg</a>
          <a href="#" className="hover:text-red-600 transition-colors">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
