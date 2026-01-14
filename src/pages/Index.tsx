import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FamilyMember {
  id: string;
  name: string;
  title: string;
  years: string;
  reign?: string;
  level: number;
  position: number;
  description: string;
  achievements?: string[];
}

const familyData: Record<string, FamilyMember> = {
  'mikhail': {
    id: 'mikhail',
    name: 'Михаил Фёдорович',
    title: 'Основатель династии',
    years: '1596-1645',
    reign: '1613-1645',
    level: 0,
    position: 0,
    description: 'Первый русский царь из династии Романовых, избранный Земским собором.',
    achievements: [
      'Основатель династии Романовых',
      'Восстановление страны после Смутного времени',
      'Заключение Столбовского и Деулинского мира'
    ]
  },
  'alexei': {
    id: 'alexei',
    name: 'Алексей Михайлович',
    title: 'Тишайший',
    years: '1629-1676',
    reign: '1645-1676',
    level: 1,
    position: 0,
    description: 'Тишайший царь, проводивший политику укрепления самодержавия.',
    achievements: [
      'Присоединение Украины к России',
      'Соборное уложение 1649 года'
    ]
  },
  'fedor': {
    id: 'fedor',
    name: 'Фёдор III',
    title: 'Реформатор',
    years: '1661-1682',
    reign: '1676-1682',
    level: 2,
    position: -1,
    description: 'Старший сын Алексея Михайловича, проводивший реформы управления.',
    achievements: ['Отмена местничества', 'Военные реформы']
  },
  'peter': {
    id: 'peter',
    name: 'Пётр I Великий',
    title: 'Первый император',
    years: '1672-1725',
    reign: '1682-1725',
    level: 2,
    position: 1,
    description: 'Последний царь всея Руси и первый Император Всероссийский.',
    achievements: [
      'Основание Санкт-Петербурга',
      'Создание Российского флота',
      'Победа в Северной войне'
    ]
  },
  'elizabeth': {
    id: 'elizabeth',
    name: 'Елизавета Петровна',
    title: 'Дочь Петра',
    years: '1709-1762',
    reign: '1741-1762',
    level: 3,
    position: 1,
    description: 'Дочь Петра I, продолжившая курс на европеизацию России.',
    achievements: ['Основание Московского университета', 'Создание Академии художеств']
  },
  'catherine': {
    id: 'catherine',
    name: 'Екатерина II',
    title: 'Великая',
    years: '1729-1796',
    reign: '1762-1796',
    level: 4,
    position: 0,
    description: 'Великая императрица, эпоха которой названа золотым веком Российской империи.',
    achievements: [
      'Расширение территории империи',
      'Просвещённый абсолютизм',
      'Жалованная грамота дворянству'
    ]
  },
  'paul': {
    id: 'paul',
    name: 'Павел I',
    title: 'Император',
    years: '1754-1801',
    reign: '1796-1801',
    level: 5,
    position: 0,
    description: 'Сын Екатерины II, проводивший политику централизации власти.',
    achievements: ['Закон о престолонаследии', 'Военные реформы']
  },
  'alexander1': {
    id: 'alexander1',
    name: 'Александр I',
    title: 'Благословенный',
    years: '1777-1825',
    reign: '1801-1825',
    level: 6,
    position: -1,
    description: 'Победитель Наполеона, проводивший либеральные реформы.',
    achievements: ['Победа над Наполеоном', 'Венский конгресс']
  },
  'nicholas1': {
    id: 'nicholas1',
    name: 'Николай I',
    title: 'Император',
    years: '1796-1855',
    reign: '1825-1855',
    level: 6,
    position: 1,
    description: 'Брат Александра I, укрепивший самодержавную власть.',
    achievements: ['Кодификация законов', 'Строительство железных дорог']
  },
  'alexander2': {
    id: 'alexander2',
    name: 'Александр II',
    title: 'Освободитель',
    years: '1818-1881',
    reign: '1855-1881',
    level: 7,
    position: 1,
    description: 'Царь-реформатор, отменивший крепостное право в России.',
    achievements: ['Отмена крепостного права (1861)', 'Судебная реформа']
  },
  'alexander3': {
    id: 'alexander3',
    name: 'Александр III',
    title: 'Миротворец',
    years: '1845-1894',
    reign: '1881-1894',
    level: 8,
    position: 1,
    description: 'Проводил политику контрреформ и укрепления самодержавия.',
    achievements: ['Мирная внешняя политика', 'Индустриализация страны']
  },
  'nicholas2': {
    id: 'nicholas2',
    name: 'Николай II',
    title: 'Последний император',
    years: '1868-1918',
    reign: '1894-1917',
    level: 9,
    position: 1,
    description: 'Последний российский император, отрёкшийся от престола в 1917 году.',
    achievements: ['Созыв Государственной думы', 'Столыпинские реформы']
  }
};

const Index = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const branches = [
    { from: 'mikhail', to: 'alexei' },
    { from: 'alexei', to: 'fedor' },
    { from: 'alexei', to: 'peter' },
    { from: 'peter', to: 'elizabeth' },
    { from: 'elizabeth', to: 'catherine' },
    { from: 'catherine', to: 'paul' },
    { from: 'paul', to: 'alexander1' },
    { from: 'paul', to: 'nicholas1' },
    { from: 'nicholas1', to: 'alexander2' },
    { from: 'alexander2', to: 'alexander3' },
    { from: 'alexander3', to: 'nicholas2' }
  ];

  const currentMember = selectedMember ? familyData[selectedMember] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-green-50">
      <header className="border-b border-tree-bark/20 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-center text-tree-bark">
            Древо династии Романовых
          </h1>
          <p className="text-center text-tree-bark/70 mt-2 font-light flex items-center justify-center gap-2">
            <Icon name="TreeDeciduous" size={18} />
            <span>1613 — 1917 • Три столетия правления</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full relative">
            <div className="relative min-h-[1400px] flex justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient id="branchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A0826D" />
                    <stop offset="50%" stopColor="#8B7355" />
                    <stop offset="100%" stopColor="#5D4E37" />
                  </linearGradient>
                  <filter id="branchShadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                    <feOffset dx="1" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {branches.map((branch, idx) => {
                  const fromMember = familyData[branch.from];
                  const toMember = familyData[branch.to];
                  
                  const centerX = 50;
                  const fromX = centerX + fromMember.position * 15;
                  const fromY = 95 - fromMember.level * 10;
                  const toX = centerX + toMember.position * 15;
                  const toY = 95 - toMember.level * 10;
                  
                  const midY1 = fromY - 3;
                  const midY2 = toY + 3;
                  
                  return (
                    <g key={idx}>
                      <path
                        d={`M ${fromX}% ${fromY}% C ${fromX}% ${midY1}%, ${toX}% ${midY2}%, ${toX}% ${toY}%`}
                        stroke="url(#branchGradient)"
                        strokeWidth="4"
                        fill="none"
                        filter="url(#branchShadow)"
                        className="animate-grow"
                        strokeLinecap="round"
                        style={{ 
                          animationDelay: `${idx * 0.1}s`,
                          transformOrigin: `${fromX}% ${fromY}%`
                        }}
                      />
                      <path
                        d={`M ${fromX}% ${fromY}% C ${fromX}% ${midY1}%, ${toX}% ${midY2}%, ${toX}% ${toY}%`}
                        stroke="rgba(139, 115, 85, 0.3)"
                        strokeWidth="6"
                        fill="none"
                        className="animate-grow"
                        strokeLinecap="round"
                        style={{ 
                          animationDelay: `${idx * 0.1}s`,
                          transformOrigin: `${fromX}% ${fromY}%`,
                          filter: 'blur(2px)'
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-40 bg-gradient-to-t from-tree-bark via-tree-branch to-tree-branch rounded-t-3xl animate-grow shadow-2xl" style={{ zIndex: 0 }}>
                <div className="absolute inset-0 rounded-t-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-tree-bark/40 via-transparent to-tree-bark/40" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.15) 4px, rgba(0,0,0,0.15) 5px), repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(0,0,0,0.08) 8px, rgba(0,0,0,0.08) 10px)'
                  }} />
                  <div className="absolute top-0 left-1/4 w-1 h-12 bg-tree-bark/30 rounded-full transform -rotate-12" />
                  <div className="absolute top-0 right-1/4 w-1 h-12 bg-tree-bark/30 rounded-full transform rotate-12" />
                </div>
              </div>

              {Object.values(familyData).map((member, idx) => {
                const centerX = 50;
                const x = centerX + member.position * 15;
                const y = 95 - member.level * 10;
                const isSelected = selectedMember === member.id;
                
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member.id)}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10,
                      animationDelay: `${idx * 0.15}s`
                    }}
                  >
                    <div className={`animate-scale-in ${!isSelected && 'animate-sway'}`}>
                      <div className={`relative transition-all duration-300 ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}>
                        <div className={`w-24 h-28 relative ${
                          isSelected 
                            ? 'shadow-2xl shadow-royal-gold/50' 
                            : 'shadow-xl hover:shadow-2xl'
                        } transition-all duration-300`}
                        style={{
                          clipPath: 'ellipse(45% 48% at 50% 45%)',
                        }}>
                          <div className={`absolute inset-0 ${
                            isSelected 
                              ? 'bg-gradient-to-br from-royal-gold via-tree-leaf to-royal-gold' 
                              : 'bg-gradient-to-br from-tree-leaf via-tree-leafLight to-tree-leaf'
                          }`} />
                          <div className="absolute inset-3 bg-white/20 backdrop-blur-sm"
                          style={{
                            clipPath: 'ellipse(45% 48% at 50% 45%)',
                          }} />
                          
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                            <Icon 
                              name="Crown" 
                              size={16} 
                              className={`${isSelected ? 'text-royal-navy' : 'text-tree-bark'} mb-1 transition-colors`}
                            />
                            <p className={`font-cormorant font-bold text-[10px] leading-tight ${
                              isSelected ? 'text-royal-navy' : 'text-tree-bark'
                            }`}>
                              {member.name.split(' ')[0]}
                            </p>
                            <p className={`font-cormorant text-[8px] ${
                              isSelected ? 'text-royal-navy/80' : 'text-tree-bark/70'
                            }`}>
                              {member.name.split(' ')[1]}
                            </p>
                          </div>
                        </div>

                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-gradient-to-b from-tree-branch to-tree-bark rounded-full shadow-sm" />
                        <div className="absolute -bottom-2 left-[45%] w-0.5 h-2 bg-tree-branch/70 rounded-full transform -rotate-45" />
                        <div className="absolute -bottom-2 left-[55%] w-0.5 h-2 bg-tree-branch/70 rounded-full transform rotate-45" />
                        
                        {member.reign && (
                          <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold transition-all duration-300 ${
                            isSelected ? 'text-royal-gold scale-110' : 'text-tree-bark/60 group-hover:text-tree-bark'
                          }`}>
                            {member.reign}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-96 lg:sticky lg:top-24">
            {currentMember ? (
              <Card className="border-royal-gold/30 shadow-xl animate-fade-in">
                <CardHeader className="bg-gradient-to-br from-royal-gold/10 via-tree-leaf/10 to-transparent">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-cormorant text-2xl text-tree-bark">
                        {currentMember.name}
                      </CardTitle>
                      <CardDescription className="text-base text-royal-gold font-semibold mt-1">
                        {currentMember.title}
                      </CardDescription>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="text-tree-bark/50 hover:text-tree-bark transition-colors"
                    >
                      <Icon name="X" size={20} />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-2 text-sm text-tree-bark/70">
                    <Icon name="Calendar" size={16} />
                    <span>{currentMember.years}</span>
                  </div>
                  {currentMember.reign && (
                    <div className="flex items-center gap-2 text-sm text-royal-gold">
                      <Icon name="Crown" size={16} />
                      <span>Правление: {currentMember.reign}</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed text-tree-bark">
                    {currentMember.description}
                  </p>
                  {currentMember.achievements && currentMember.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-tree-bark">
                        <Icon name="Award" size={16} className="text-royal-gold" />
                        Достижения
                      </h4>
                      <ul className="space-y-1.5 text-sm">
                        {currentMember.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-tree-bark/80">
                            <span className="text-royal-gold mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-tree-branch/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-cormorant text-2xl text-tree-bark">
                    Династия Романовых
                  </CardTitle>
                  <CardDescription className="text-base">
                    Выберите правителя на древе, чтобы узнать подробности
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-tree-leaf/10 rounded-lg">
                    <Icon name="Info" size={20} className="text-royal-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-tree-bark/80 leading-relaxed">
                      Кликните на листок с именем правителя, чтобы увидеть биографию, 
                      годы правления и ключевые достижения
                    </p>
                  </div>
                  <div className="prose prose-sm max-w-none space-y-3 text-tree-bark/70">
                    <p className="leading-relaxed">
                      Династия Романовых правила Россией более трёхсот лет (1613-1917). 
                      За это время страна превратилась из царства в могущественную империю.
                    </p>
                    <p className="leading-relaxed">
                      На древе представлены 12 ключевых правителей династии — от основателя 
                      Михаила Фёдоровича до последнего императора Николая II.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <section className="mt-16 max-w-4xl mx-auto">
          <Card className="border-tree-branch/30 bg-gradient-to-br from-white to-tree-leaf/5 shadow-xl">
            <CardHeader>
              <CardTitle className="font-cormorant text-3xl text-center text-tree-bark">
                История династии Романовых
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-tree-bark/80">
              <p className="leading-relaxed">
                Династия началась с избрания на царство шестнадцатилетнего Михаила Фёдоровича 
                Романова в 1613 году, после окончания Смутного времени. Романовы смогли 
                восстановить государственность и укрепить центральную власть.
              </p>
              <p className="leading-relaxed">
                При Петре I Великом Россия стала империей и начала активную модернизацию 
                по европейскому образцу. Екатерина II продолжила курс на просвещение и 
                расширение территории. XIX век был отмечен победой над Наполеоном, отменой 
                крепостного права и бурным промышленным развитием.
              </p>
              <p className="leading-relaxed">
                Династия завершилась отречением Николая II в феврале 1917 года. В июле 
                1918 года последний император и его семья были расстреляны в Екатеринбурге. 
                В 2000 году Романовы были канонизированы Русской православной церковью 
                как страстотерпцы.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-tree-bark/20 mt-16 py-8 text-center text-sm text-tree-bark/60 bg-white/50">
        <p className="flex items-center justify-center gap-2">
          <Icon name="TreeDeciduous" size={16} />
          <span>Династия Романовых • 1613-1917</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;