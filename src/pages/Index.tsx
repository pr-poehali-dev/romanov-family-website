import { useState, useEffect, useMemo, memo } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PersonData {
  id: string;
  name: string;
  title: string;
  years: string;
  reign?: string;
  bio: string;
  type: 'ruler' | 'spouse' | 'relative';
  gender: 'male' | 'female';
  achievements?: string[];
  children?: string[];
  spouse?: string[];
}

const familyTree: Record<string, PersonData> = {
  mikhail: {
    id: 'mikhail',
    name: 'Михаил Фёдорович',
    title: 'Основатель династии',
    years: '1596–1645',
    reign: '1613–1645',
    bio: 'Первый русский царь из династии Романовых, избранный Земским собором.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Основание династии', 'Восстановление государственности'],
    spouse: ['evdokia'],
    children: ['alexei']
  },
  evdokia: {
    id: 'evdokia',
    name: 'Евдокия Стрешнева',
    title: 'Царица',
    years: '1608–1645',
    bio: 'Супруга Михаила Фёдоровича, мать Алексея Михайловича.',
    type: 'spouse',
    gender: 'female',
    children: ['alexei']
  },
  alexei: {
    id: 'alexei',
    name: 'Алексей Михайлович',
    title: 'Тишайший',
    years: '1629–1676',
    reign: '1645–1676',
    bio: 'Второй царь династии Романовых, отец Петра I.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Соборное уложение', 'Присоединение Украины'],
    spouse: ['maria_m', 'natalya_n'],
    children: ['fedor', 'sophia', 'ivan5', 'peter']
  },
  maria_m: {
    id: 'maria_m',
    name: 'Мария Милославская',
    title: 'Царица (1-я жена)',
    years: '1624–1669',
    bio: 'Первая жена Алексея Михайловича, мать 13 детей.',
    type: 'spouse',
    gender: 'female',
    children: ['fedor', 'sophia', 'ivan5']
  },
  natalya_n: {
    id: 'natalya_n',
    name: 'Наталья Нарышкина',
    title: 'Царица (2-я жена)',
    years: '1651–1694',
    bio: 'Вторая жена Алексея Михайловича, мать Петра I.',
    type: 'spouse',
    gender: 'female',
    children: ['peter']
  },
  fedor: {
    id: 'fedor',
    name: 'Фёдор III Алексеевич',
    title: 'Царь',
    years: '1661–1682',
    reign: '1676–1682',
    bio: 'Старший сын Алексея Михайловича и Марии Милославской.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Отмена местничества', 'Реформы']
  },
  sophia: {
    id: 'sophia',
    name: 'Софья Алексеевна',
    title: 'Регентша',
    years: '1657–1704',
    reign: '1682–1689 (регентство)',
    bio: 'Правительница России при малолетних братьях Иване V и Петре I.',
    type: 'relative',
    gender: 'female',
    achievements: ['Регентство', 'Крымские походы']
  },
  ivan5: {
    id: 'ivan5',
    name: 'Иван V Алексеевич',
    title: 'Соправитель',
    years: '1666–1696',
    reign: '1682–1696',
    bio: 'Соправитель Петра I, отец императрицы Анны Иоанновны.',
    type: 'ruler',
    gender: 'male',
    spouse: ['praskovya'],
    children: ['anna_i']
  },
  praskovya: {
    id: 'praskovya',
    name: 'Прасковья Салтыкова',
    title: 'Царица',
    years: '1664–1723',
    bio: 'Супруга Ивана V, мать трёх дочерей.',
    type: 'spouse',
    gender: 'female',
    children: ['anna_i']
  },
  anna_i: {
    id: 'anna_i',
    name: 'Анна Иоанновна',
    title: 'Императрица',
    years: '1693–1740',
    reign: '1730–1740',
    bio: 'Дочь Ивана V, племянница Петра I, императрица России.',
    type: 'ruler',
    gender: 'female',
    achievements: ['Укрепление империи', 'Война с Турцией']
  },
  peter: {
    id: 'peter',
    name: 'Пётр I Великий',
    title: 'Император',
    years: '1672–1725',
    reign: '1682–1725',
    bio: 'Первый российский император, реформатор и основатель Санкт-Петербурга.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Основание Санкт-Петербурга', 'Северная война', 'Модернизация'],
    spouse: ['catherine1'],
    children: ['anna_p', 'elizabeth']
  },
  catherine1: {
    id: 'catherine1',
    name: 'Екатерина I',
    title: 'Императрица',
    years: '1684–1727',
    reign: '1725–1727',
    bio: 'Жена Петра I, первая российская императрица.',
    type: 'ruler',
    gender: 'female',
    children: ['anna_p', 'elizabeth']
  },
  anna_p: {
    id: 'anna_p',
    name: 'Анна Петровна',
    title: 'Цесаревна',
    years: '1708–1728',
    bio: 'Дочь Петра I, мать императора Петра III.',
    type: 'relative',
    gender: 'female',
    children: ['peter3']
  },
  peter3: {
    id: 'peter3',
    name: 'Пётр III',
    title: 'Император',
    years: '1728–1762',
    reign: '1761–1762',
    bio: 'Внук Петра I, муж Екатерины II, свергнут через полгода.',
    type: 'ruler',
    gender: 'male',
    spouse: ['catherine2'],
    children: ['paul']
  },
  elizabeth: {
    id: 'elizabeth',
    name: 'Елизавета Петровна',
    title: 'Императрица',
    years: '1709–1762',
    reign: '1741–1762',
    bio: 'Дочь Петра I, продолжившая политику европеизации.',
    type: 'ruler',
    gender: 'female',
    achievements: ['Основание МГУ', 'Академия художеств']
  },
  catherine2: {
    id: 'catherine2',
    name: 'Екатерина II Великая',
    title: 'Императрица',
    years: '1729–1796',
    reign: '1762–1796',
    bio: 'Великая императрица, золотой век Российской империи.',
    type: 'ruler',
    gender: 'female',
    achievements: ['Расширение империи', 'Просвещённый абсолютизм', 'Культурный расцвет'],
    children: ['paul']
  },
  paul: {
    id: 'paul',
    name: 'Павел I',
    title: 'Император',
    years: '1754–1801',
    reign: '1796–1801',
    bio: 'Сын Екатерины II, проводивший политику укрепления власти.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Закон о престолонаследии', 'Военные реформы'],
    spouse: ['maria_f'],
    children: ['alexander1', 'constantine', 'nicholas1']
  },
  maria_f: {
    id: 'maria_f',
    name: 'Мария Фёдоровна',
    title: 'Императрица',
    years: '1759–1828',
    bio: 'Супруга Павла I, мать императоров Александра I и Николая I.',
    type: 'spouse',
    gender: 'female',
    children: ['alexander1', 'constantine', 'nicholas1']
  },
  alexander1: {
    id: 'alexander1',
    name: 'Александр I Благословенный',
    title: 'Император',
    years: '1777–1825',
    reign: '1801–1825',
    bio: 'Победитель Наполеона, проводивший либеральные реформы.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Победа над Наполеоном', 'Венский конгресс']
  },
  constantine: {
    id: 'constantine',
    name: 'Константин Павлович',
    title: 'Великий князь',
    years: '1779–1831',
    bio: 'Брат Александра I, отказался от престола в пользу Николая I.',
    type: 'relative',
    gender: 'male'
  },
  nicholas1: {
    id: 'nicholas1',
    name: 'Николай I',
    title: 'Император',
    years: '1796–1855',
    reign: '1825–1855',
    bio: 'Брат Александра I, укрепивший самодержавную власть.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Кодификация законов', 'Строительство железных дорог'],
    spouse: ['alexandra_f'],
    children: ['alexander2']
  },
  alexandra_f: {
    id: 'alexandra_f',
    name: 'Александра Фёдоровна',
    title: 'Императрица',
    years: '1798–1860',
    bio: 'Супруга Николая I, прусская принцесса.',
    type: 'spouse',
    gender: 'female',
    children: ['alexander2']
  },
  alexander2: {
    id: 'alexander2',
    name: 'Александр II Освободитель',
    title: 'Император',
    years: '1818–1881',
    reign: '1855–1881',
    bio: 'Царь-реформатор, отменивший крепостное право.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Отмена крепостного права', 'Великие реформы'],
    spouse: ['maria_a'],
    children: ['alexander3']
  },
  maria_a: {
    id: 'maria_a',
    name: 'Мария Александровна',
    title: 'Императрица',
    years: '1824–1880',
    bio: 'Супруга Александра II, немецкая принцесса.',
    type: 'spouse',
    gender: 'female',
    children: ['alexander3']
  },
  alexander3: {
    id: 'alexander3',
    name: 'Александр III Миротворец',
    title: 'Император',
    years: '1845–1894',
    reign: '1881–1894',
    bio: 'Проводил политику укрепления самодержавия.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Мирная политика', 'Индустриализация'],
    spouse: ['maria_f2'],
    children: ['nicholas2']
  },
  maria_f2: {
    id: 'maria_f2',
    name: 'Мария Фёдоровна',
    title: 'Императрица',
    years: '1847–1928',
    bio: 'Супруга Александра III, датская принцесса, мать Николая II.',
    type: 'spouse',
    gender: 'female',
    children: ['nicholas2']
  },
  nicholas2: {
    id: 'nicholas2',
    name: 'Николай II',
    title: 'Последний император',
    years: '1868–1918',
    reign: '1894–1917',
    bio: 'Последний российский император, расстрелян большевиками.',
    type: 'ruler',
    gender: 'male',
    achievements: ['Созыв Думы', 'Столыпинские реформы'],
    spouse: ['alexandra_f2'],
    children: ['alexei_n', 'olga', 'tatyana', 'maria_n', 'anastasia']
  },
  alexandra_f2: {
    id: 'alexandra_f2',
    name: 'Александра Фёдоровна',
    title: 'Императрица',
    years: '1872–1918',
    bio: 'Супруга Николая II, немецкая принцесса, расстреляна с семьёй.',
    type: 'spouse',
    gender: 'female',
    children: ['alexei_n', 'olga', 'tatyana', 'maria_n', 'anastasia']
  },
  alexei_n: {
    id: 'alexei_n',
    name: 'Алексей Николаевич',
    title: 'Цесаревич',
    years: '1904–1918',
    bio: 'Наследник престола, страдал гемофилией, расстрелян в 14 лет.',
    type: 'relative',
    gender: 'male'
  },
  olga: {
    id: 'olga',
    name: 'Ольга Николаевна',
    title: 'Великая княжна',
    years: '1895–1918',
    bio: 'Старшая дочь Николая II.',
    type: 'relative',
    gender: 'female'
  },
  tatyana: {
    id: 'tatyana',
    name: 'Татьяна Николаевна',
    title: 'Великая княжна',
    years: '1897–1918',
    bio: 'Вторая дочь Николая II.',
    type: 'relative',
    gender: 'female'
  },
  maria_n: {
    id: 'maria_n',
    name: 'Мария Николаевна',
    title: 'Великая княжна',
    years: '1899–1918',
    bio: 'Третья дочь Николая II.',
    type: 'relative',
    gender: 'female'
  },
  anastasia: {
    id: 'anastasia',
    name: 'Анастасия Николаевна',
    title: 'Великая княжна',
    years: '1901–1918',
    bio: 'Младшая дочь Николая II.',
    type: 'relative',
    gender: 'female'
  }
};

const Index = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const highlightedBranch = useMemo(() => {
    if (!selectedId) return new Set<string>();
    
    const getAllDescendants = (personId: string): string[] => {
      const person = familyTree[personId];
      if (!person) return [];
      
      const descendants: string[] = [personId];
      
      if (person.spouse) {
        descendants.push(...person.spouse);
      }
      
      if (person.children) {
        person.children.forEach(childId => {
          descendants.push(...getAllDescendants(childId));
        });
      }
      
      return descendants;
    };

    const getAllAncestors = (personId: string): string[] => {
      const ancestors: string[] = [];
      
      Object.values(familyTree).forEach(person => {
        if (person.children?.includes(personId)) {
          ancestors.push(person.id);
          if (person.spouse) {
            ancestors.push(...person.spouse);
          }
          ancestors.push(...getAllAncestors(person.id));
        }
      });
      
      return ancestors;
    };
    
    return new Set([
      ...getAllAncestors(selectedId),
      ...getAllDescendants(selectedId)
    ]);
  }, [selectedId]);

  const getIconForPerson = (person: PersonData) => {
    if (person.type === 'ruler') return 'Crown';
    if (person.type === 'spouse') return 'Heart';
    return 'User';
  };

  const renderPerson = (personId: string, level: number = 0) => {
    const person = familyTree[personId];
    const isSelected = selectedId === personId;
    const isHighlighted = highlightedBranch.has(personId);
    const isRuler = person.type === 'ruler';
    const isSpouse = person.type === 'spouse';

    return (
      <div key={personId} className="flex flex-col items-center">
        <button
          onClick={() => setSelectedId(personId)}
          className={`group relative transition-all duration-500 ${
            isSelected ? 'scale-105' : 'hover:scale-105'
          }`}
        >
          <div
            className={`relative p-5 rounded-xl transition-all duration-500 backdrop-blur-sm ${
              isRuler ? 'w-72' : 'w-64'
            } ${
              isSelected
                ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 border-2 border-primary shadow-2xl shadow-primary/50'
                : isHighlighted
                ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border border-primary/40 shadow-xl shadow-primary/30'
                : `${isRuler ? 'bg-card/60' : isSpouse ? 'bg-card/40' : 'bg-card/30'} border border-border hover:border-primary/50 shadow-lg hover:shadow-xl`
            }`}
          >
            <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
              isRuler ? 'bg-primary' : isSpouse ? 'bg-pink-500' : 'bg-muted'
            }`}>
              <Icon name={getIconForPerson(person)} className={isRuler || isSpouse ? 'text-background' : 'text-foreground'} size={20} />
            </div>

            <div className="space-y-2">
              <div>
                <h3 className={`font-cormorant font-bold ${isRuler ? 'text-xl' : 'text-lg'} text-foreground mb-0.5`}>
                  {person.name}
                </h3>
                <p className={`${isRuler ? 'text-primary' : isSpouse ? 'text-pink-400' : 'text-muted-foreground'} text-xs font-semibold`}>
                  {person.title}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="Calendar" size={12} />
                <span>{person.years}</span>
              </div>

              {person.reign && (
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <Icon name="Shield" size={12} />
                  <span>{person.reign}</span>
                </div>
              )}
            </div>

            {isSelected && (
              <div className="mt-3 pt-3 border-t border-primary/30 space-y-2 animate-fade-in">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
                {person.achievements && person.achievements.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-primary mb-1.5 flex items-center gap-1">
                      <Icon name="Award" size={10} />
                      Достижения
                    </h4>
                    <ul className="space-y-0.5">
                      {person.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-[10px] text-muted-foreground flex items-start gap-1.5">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </button>

        <div className="mt-8 flex flex-col items-center">
          {person.spouse && person.spouse.length > 0 && (
            <div className="relative mb-8">
                  <div 
                className={`absolute top-1/2 left-0 right-0 h-1 rounded-full transition-all duration-500 ${
                  isHighlighted 
                    ? 'bg-gradient-to-r from-pink-500/80 via-pink-500 to-pink-500/80' 
                    : 'bg-gradient-to-r from-pink-500/40 via-pink-500/60 to-pink-500/40'
                }`}
                style={{ transform: 'translateY(-50%)' }} 
              />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-4 border-background transition-all duration-500 ${
                isHighlighted ? 'bg-pink-500 scale-110' : 'bg-pink-500'
              }`}>
                <Icon name="Heart" size={16} className="text-white" />
              </div>
              
              <div className="flex gap-6 relative z-10">
                {person.spouse.map(spouseId => (
                  <div key={spouseId}>
                    {renderPerson(spouseId, level)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {person.children && person.children.length > 0 && (
            <div className="relative">
              <div className={`absolute left-1/2 -translate-x-1/2 -top-8 w-1 h-8 rounded-full shadow-sm transition-all duration-500 ${
                isHighlighted 
                  ? 'bg-gradient-to-b from-primary via-primary to-primary/80' 
                  : 'bg-gradient-to-b from-primary via-primary/70 to-primary/50'
              }`} />
              
              <div className={`flex gap-12 relative ${person.children.length > 1 ? 'justify-center' : ''}`}>
                {person.children.length > 1 && (
                  <>
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1 rounded-full shadow-sm transition-all duration-500 ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-transparent via-primary to-transparent'
                          : 'bg-gradient-to-r from-transparent via-primary to-transparent'
                      }`}
                      style={{ boxShadow: isHighlighted ? '0 0 15px rgba(212, 175, 55, 0.6)' : '0 0 10px rgba(212, 175, 55, 0.3)' }} 
                    />
                    <svg className="absolute top-0 left-0 right-0 h-1 pointer-events-none" style={{ top: '-2px' }}>
                      <defs>
                        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
                          <path d="M0,0 L0,6 L6,3 z" fill="rgb(212, 175, 55)" opacity="0.6" />
                        </marker>
                      </defs>
                    </svg>
                  </>
                )}
                
                {person.children.map((childId, idx) => (
                  <div key={childId} className="relative flex flex-col items-center">
                    {person.children && person.children.length > 1 && (
                      <>
                        <div className={`absolute -top-0 left-1/2 -translate-x-1/2 w-1 h-8 rounded-full transition-all duration-500 ${
                          isHighlighted
                            ? 'bg-gradient-to-b from-primary to-primary/60'
                            : 'bg-gradient-to-b from-primary/70 to-primary/40'
                        }`} />
                        <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg border-2 border-background transition-all duration-500 ${
                          isHighlighted ? 'bg-primary scale-125' : 'bg-primary'
                        }`} />
                      </>
                    )}
                    <div className="mt-8">
                      {renderPerson(childId, level + 1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <header className="relative border-b border-border/50 backdrop-blur-xl bg-card/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4">
            <Icon name="Crown" className="text-primary" size={32} />
            <h1 className="text-5xl font-cormorant font-bold text-center bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              Династия Романовых
            </h1>
            <Icon name="Crown" className="text-primary" size={32} />
          </div>
          <p className="text-center text-muted-foreground mt-3 text-lg">
            1613—1917 • Полное генеалогическое древо
          </p>
        </div>
      </header>

      <main className="relative container mx-auto px-4 py-16">
        <div className="max-w-[1800px] mx-auto">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl mb-12">
            <CardHeader>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Полное генеалогическое древо династии Романовых включает правителей, их супругов, детей и родственников.
                </p>
                <div className="flex items-center justify-center gap-8 text-sm flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Crown" size={14} className="text-background" />
                    </div>
                    <span className="text-primary">Правители</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
                      <Icon name="Heart" size={14} className="text-background" />
                    </div>
                    <span className="text-pink-400">Супруги</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <Icon name="User" size={14} className="text-foreground" />
                    </div>
                    <span className="text-muted-foreground">Родственники</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8 pt-3 border-t border-border/30">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
                    <span className="text-muted-foreground">Родитель → Дети</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500/50 to-pink-500/50 rounded-full" />
                    <span className="text-muted-foreground">Брак</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="flex justify-center pb-16 overflow-x-auto">
            <div className="inline-block min-w-full">
              {renderPerson('mikhail')}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-border/50 backdrop-blur-xl bg-card/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Icon name="Crown" size={14} className="text-primary" />
            <span>Династия Романовых • 1613–1917 • {Object.keys(familyTree).length} членов семьи</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;