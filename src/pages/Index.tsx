import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface FamilyMember {
  id: string;
  name: string;
  title: string;
  years: string;
  reign?: string;
  children?: string[];
  parents?: string[];
  description: string;
  achievements?: string[];
}

const familyData: Record<string, FamilyMember> = {
  'mikhail': {
    id: 'mikhail',
    name: 'Михаил Фёдорович',
    title: 'Царь и Великий князь всея Руси',
    years: '1596-1645',
    reign: '1613-1645',
    children: ['alexei'],
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
    title: 'Царь и Великий князь всея Руси',
    years: '1629-1676',
    reign: '1645-1676',
    parents: ['mikhail'],
    children: ['fedor', 'peter'],
    description: 'Тишайший царь, проводивший политику укрепления самодержавия.',
    achievements: [
      'Присоединение Украины к России',
      'Соборное уложение 1649 года',
      'Церковная реформа патриарха Никона'
    ]
  },
  'fedor': {
    id: 'fedor',
    name: 'Фёдор III Алексеевич',
    title: 'Царь и Великий князь всея Руси',
    years: '1661-1682',
    reign: '1676-1682',
    parents: ['alexei'],
    description: 'Старший сын Алексея Михайловича, проводивший реформы управления.',
    achievements: [
      'Отмена местничества',
      'Военные реформы',
      'Развитие образования'
    ]
  },
  'peter': {
    id: 'peter',
    name: 'Пётр I Великий',
    title: 'Император Всероссийский',
    years: '1672-1725',
    reign: '1682-1725',
    parents: ['alexei'],
    children: ['elizabeth'],
    description: 'Последний царь всея Руси и первый Император Всероссийский.',
    achievements: [
      'Основание Санкт-Петербурга',
      'Создание Российского флота',
      'Победа в Северной войне',
      'Модернизация государства'
    ]
  },
  'elizabeth': {
    id: 'elizabeth',
    name: 'Елизавета Петровна',
    title: 'Императрица Всероссийская',
    years: '1709-1762',
    reign: '1741-1762',
    parents: ['peter'],
    description: 'Дочь Петра I, продолжившая курс на европеизацию России.',
    achievements: [
      'Основание Московского университета',
      'Создание Академии художеств',
      'Участие в Семилетней войне'
    ]
  },
  'catherine': {
    id: 'catherine',
    name: 'Екатерина II Великая',
    title: 'Императрица Всероссийская',
    years: '1729-1796',
    reign: '1762-1796',
    children: ['paul'],
    description: 'Великая императрица, эпоха которой названа золотым веком Российской империи.',
    achievements: [
      'Расширение территории империи',
      'Просвещённый абсолютизм',
      'Жалованная грамота дворянству',
      'Культурный расцвет России'
    ]
  },
  'paul': {
    id: 'paul',
    name: 'Павел I',
    title: 'Император Всероссийский',
    years: '1754-1801',
    reign: '1796-1801',
    parents: ['catherine'],
    children: ['alexander1', 'nicholas1'],
    description: 'Сын Екатерины II, проводивший политику централизации власти.',
    achievements: [
      'Закон о престолонаследии',
      'Военные реформы',
      'Рыцарский орден Мальты'
    ]
  },
  'alexander1': {
    id: 'alexander1',
    name: 'Александр I Благословенный',
    title: 'Император Всероссийский',
    years: '1777-1825',
    reign: '1801-1825',
    parents: ['paul'],
    description: 'Победитель Наполеона, проводивший либеральные реформы.',
    achievements: [
      'Победа над Наполеоном',
      'Венский конгресс',
      'Создание Царства Польского',
      'Либеральные реформы начала царствования'
    ]
  },
  'nicholas1': {
    id: 'nicholas1',
    name: 'Николай I',
    title: 'Император Всероссийский',
    years: '1796-1855',
    reign: '1825-1855',
    parents: ['paul'],
    children: ['alexander2'],
    description: 'Брат Александра I, укрепивший самодержавную власть.',
    achievements: [
      'Кодификация законов',
      'Подавление восстания декабристов',
      'Строительство железных дорог'
    ]
  },
  'alexander2': {
    id: 'alexander2',
    name: 'Александр II Освободитель',
    title: 'Император Всероссийский',
    years: '1818-1881',
    reign: '1855-1881',
    parents: ['nicholas1'],
    children: ['alexander3'],
    description: 'Царь-реформатор, отменивший крепостное право в России.',
    achievements: [
      'Отмена крепостного права (1861)',
      'Судебная реформа',
      'Военные реформы',
      'Земская и городская реформы'
    ]
  },
  'alexander3': {
    id: 'alexander3',
    name: 'Александр III Миротворец',
    title: 'Император Всероссийский',
    years: '1845-1894',
    reign: '1881-1894',
    parents: ['alexander2'],
    children: ['nicholas2'],
    description: 'Проводил политику контрреформ и укрепления самодержавия.',
    achievements: [
      'Мирная внешняя политика',
      'Индустриализация страны',
      'Укрепление государственности'
    ]
  },
  'nicholas2': {
    id: 'nicholas2',
    name: 'Николай II',
    title: 'Император Всероссийский',
    years: '1868-1918',
    reign: '1894-1917',
    parents: ['alexander3'],
    description: 'Последний российский император, отрёкшийся от престола в 1917 году.',
    achievements: [
      'Созыв Государственной думы',
      'Столыпинские реформы',
      'Участие в Гаагских конференциях'
    ]
  }
};

const timeline = [
  { year: '1613', event: 'Избрание Михаила Романова на царство', description: 'Земский собор избрал 16-летнего Михаила Фёдоровича царём, положив начало династии Романовых' },
  { year: '1645', event: 'Начало правления Алексея Михайловича', description: 'Тишайший царь начал своё 31-летнее царствование' },
  { year: '1682', event: 'Начало правления Петра I', description: 'Пётр I стал царём в возрасте 10 лет, разделив власть с братом Иваном V' },
  { year: '1703', event: 'Основание Санкт-Петербурга', description: 'Пётр I основал новую столицу России на берегах Невы' },
  { year: '1721', event: 'Провозглашение Российской империи', description: 'Пётр I принял титул Императора Всероссийского' },
  { year: '1762', event: 'Начало правления Екатерины II', description: 'Начался золотой век Российской империи' },
  { year: '1812', event: 'Отечественная война', description: 'Александр I одержал победу над Наполеоном' },
  { year: '1861', event: 'Отмена крепостного права', description: 'Александр II освободил 23 миллиона крепостных крестьян' },
  { year: '1894', event: 'Начало правления Николая II', description: 'Последний российский император вступил на престол' },
  { year: '1917', event: 'Отречение Николая II', description: 'Февральская революция положила конец трёхсотлетнему правлению Романовых' },
  { year: '1918', event: 'Расстрел царской семьи', description: 'Трагическая гибель последнего императора и его семьи в Екатеринбурге' }
];

const Index = () => {
  const [selectedMember, setSelectedMember] = useState<string>('mikhail');

  const renderFamilyTree = () => {
    const generations = [
      ['mikhail'],
      ['alexei'],
      ['fedor', 'peter'],
      ['elizabeth'],
      ['catherine'],
      ['paul'],
      ['alexander1', 'nicholas1'],
      ['alexander2'],
      ['alexander3'],
      ['nicholas2']
    ];

    return (
      <div className="space-y-12 py-8">
        {generations.map((generation, genIndex) => (
          <div key={genIndex} className="relative">
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {generation.map((memberId) => {
                const member = familyData[memberId];
                const isSelected = selectedMember === memberId;
                return (
                  <button
                    key={memberId}
                    onClick={() => setSelectedMember(memberId)}
                    className={`group relative transition-all duration-300 ${
                      isSelected ? 'scale-105' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-32 h-32 rounded-full border-4 flex items-center justify-center text-center p-2 transition-all duration-300 ${
                        isSelected
                          ? 'border-royal-gold bg-royal-gold/10 shadow-xl shadow-royal-gold/20'
                          : 'border-primary bg-card hover:border-royal-gold/50 hover:shadow-lg'
                      }`}
                    >
                      <div>
                        <p className="font-cormorant font-semibold text-xs leading-tight">
                          {member.name.split(' ')[0]}
                        </p>
                        <p className="font-cormorant text-[10px] opacity-70 mt-0.5">
                          {member.name.split(' ')[1]}
                        </p>
                      </div>
                    </div>
                    {member.reign && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                        {member.reign}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {genIndex < generations.length - 1 && (
              <div className="flex justify-center mt-8 mb-4">
                <Icon name="ChevronDown" className="text-royal-gold opacity-40" size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const currentMember = familyData[selectedMember];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-center">
            Династия Романовых
          </h1>
          <p className="text-center text-muted-foreground mt-2 font-light">
            1613 — 1917 • Три столетия правления
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="tree" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="tree" className="flex items-center gap-2">
              <Icon name="Network" size={16} />
              <span>Генеалогия</span>
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              <span>Члены семьи</span>
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Хроника</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tree" className="animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="font-cormorant text-2xl">
                      Генеалогическое древо
                    </CardTitle>
                    <CardDescription>
                      Нажмите на члена семьи, чтобы узнать подробности
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    {renderFamilyTree()}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="border-royal-gold/30 sticky top-24 animate-scale-in">
                  <CardHeader className="bg-gradient-to-br from-royal-gold/5 to-transparent">
                    <CardTitle className="font-cormorant text-2xl">
                      {currentMember.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {currentMember.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{currentMember.years}</span>
                    </div>
                    {currentMember.reign && (
                      <div className="flex items-center gap-2 text-sm text-royal-gold">
                        <Icon name="Crown" size={16} />
                        <span>Правление: {currentMember.reign}</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">
                      {currentMember.description}
                    </p>
                    {currentMember.achievements && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Award" size={16} className="text-royal-gold" />
                          Достижения
                        </h4>
                        <ul className="space-y-1.5 text-sm">
                          {currentMember.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-royal-gold mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(familyData).map((member) => (
                <Card
                  key={member.id}
                  className="group hover:border-royal-gold/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedMember(member.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-cormorant text-xl group-hover:text-royal-gold transition-colors">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {member.title}
                        </CardDescription>
                      </div>
                      {member.reign && (
                        <Icon name="Crown" size={20} className="text-royal-gold" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        <span>{member.years}</span>
                      </div>
                      {member.reign && (
                        <div className="flex items-center gap-2 text-royal-gold text-xs">
                          <Icon name="Shield" size={14} />
                          <span>Правление: {member.reign}</span>
                        </div>
                      )}
                      <p className="text-xs leading-relaxed mt-3 line-clamp-3">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="animate-fade-in">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-cormorant text-3xl">
                  Историческая хроника
                </CardTitle>
                <CardDescription>
                  Ключевые события династии Романовых
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-gold via-royal-gold/50 to-transparent" />
                  <div className="space-y-8">
                    {timeline.map((item, idx) => (
                      <div
                        key={idx}
                        className="relative pl-20 animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-royal-gold flex items-center justify-center border-4 border-background">
                          <div className="w-2 h-2 rounded-full bg-background" />
                        </div>
                        <div className="mb-1">
                          <span className="inline-block bg-royal-gold/10 text-royal-gold px-3 py-1 rounded-full text-sm font-semibold">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-cormorant font-semibold text-xl mb-2">
                          {item.event}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mt-16 max-w-4xl mx-auto">
          <Card className="border-border/50 bg-gradient-to-br from-card to-muted/20">
            <CardHeader>
              <CardTitle className="font-cormorant text-3xl text-center">
                История династии
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-4 text-foreground">
              <p className="leading-relaxed">
                Династия Романовых правила Российским государством с 1613 по 1917 год — более трёхсот лет. 
                Эта эпоха стала временем превращения России из царства в могущественную империю, охватывающую огромные территории.
              </p>
              <p className="leading-relaxed">
                Династия началась с избрания на царство шестнадцатилетнего Михаила Фёдоровича Романова в 1613 году, 
                после окончания Смутного времени. Романовы смогли восстановить государственность и укрепить центральную власть.
              </p>
              <p className="leading-relaxed">
                При Петре I Великом Россия стала империей и начала активную модернизацию по европейскому образцу. 
                Екатерина II продолжила курс на просвещение и расширение территории. XIX век был отмечен победой над Наполеоном, 
                отменой крепостного права и бурным промышленным развитием.
              </p>
              <p className="leading-relaxed">
                Династия завершилась отречением Николая II в феврале 1917 года в ходе революции. 
                В июле 1918 года последний император и его семья были расстреляны в Екатеринбурге. 
                В 2000 году Романовы были канонизированы Русской православной церковью как страстотерпцы.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border/40 mt-16 py-8 text-center text-sm text-muted-foreground">
        <p>Династия Романовых • 1613-1917</p>
      </footer>
    </div>
  );
};

export default Index;
