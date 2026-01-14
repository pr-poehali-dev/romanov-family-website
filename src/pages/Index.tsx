import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface RulerData {
  id: string;
  name: string;
  title: string;
  years: string;
  reign: string;
  bio: string;
  achievements: string[];
  children?: string[];
}

const rulers: Record<string, RulerData> = {
  mikhail: {
    id: 'mikhail',
    name: 'Михаил Фёдорович',
    title: 'Основатель династии',
    years: '1596–1645',
    reign: '1613–1645',
    bio: 'Первый русский царь из династии Романовых, избранный Земским собором после Смутного времени.',
    achievements: ['Основание династии Романовых', 'Восстановление государственности', 'Заключение Столбовского мира'],
    children: ['alexei']
  },
  alexei: {
    id: 'alexei',
    name: 'Алексей Михайлович',
    title: 'Тишайший',
    years: '1629–1676',
    reign: '1645–1676',
    bio: 'Второй царь династии Романовых, прозванный Тишайшим за спокойный характер.',
    achievements: ['Соборное уложение 1649 года', 'Присоединение Украины', 'Церковная реформа'],
    children: ['fedor', 'peter']
  },
  fedor: {
    id: 'fedor',
    name: 'Фёдор III Алексеевич',
    title: 'Реформатор',
    years: '1661–1682',
    reign: '1676–1682',
    bio: 'Старший сын Алексея Михайловича, болезненный, но образованный правитель.',
    achievements: ['Отмена местничества', 'Военные реформы', 'Развитие образования']
  },
  peter: {
    id: 'peter',
    name: 'Пётр I Великий',
    title: 'Император Всероссийский',
    years: '1672–1725',
    reign: '1682–1725',
    bio: 'Последний царь всея Руси и первый Император Всероссийский. Реформатор и военный гений.',
    achievements: ['Основание Санкт-Петербурга', 'Создание флота', 'Победа в Северной войне', 'Модернизация России'],
    children: ['elizabeth']
  },
  elizabeth: {
    id: 'elizabeth',
    name: 'Елизавета Петровна',
    title: 'Дочь Петра',
    years: '1709–1762',
    reign: '1741–1762',
    bio: 'Дочь Петра I, продолжившая политику европеизации и просвещения.',
    achievements: ['Основание МГУ', 'Создание Академии художеств', 'Расцвет культуры'],
    children: ['catherine']
  },
  catherine: {
    id: 'catherine',
    name: 'Екатерина II Великая',
    title: 'Просвещённая императрица',
    years: '1729–1796',
    reign: '1762–1796',
    bio: 'Великая императрица, эпоха которой названа золотым веком Российской империи.',
    achievements: ['Расширение империи', 'Просвещённый абсолютизм', 'Жалованная грамота дворянству', 'Культурный расцвет'],
    children: ['paul']
  },
  paul: {
    id: 'paul',
    name: 'Павел I',
    title: 'Император',
    years: '1754–1801',
    reign: '1796–1801',
    bio: 'Сын Екатерины II, проводивший политику укрепления самодержавия.',
    achievements: ['Закон о престолонаследии', 'Военные реформы', 'Ограничение дворянских привилегий'],
    children: ['alexander1', 'nicholas1']
  },
  alexander1: {
    id: 'alexander1',
    name: 'Александр I Благословенный',
    title: 'Победитель Наполеона',
    years: '1777–1825',
    reign: '1801–1825',
    bio: 'Император, победивший Наполеона и проводивший либеральные реформы.',
    achievements: ['Победа над Наполеоном', 'Венский конгресс', 'Либеральные реформы']
  },
  nicholas1: {
    id: 'nicholas1',
    name: 'Николай I',
    title: 'Император',
    years: '1796–1855',
    reign: '1825–1855',
    bio: 'Брат Александра I, укрепивший самодержавную власть.',
    achievements: ['Кодификация законов', 'Строительство железных дорог', 'Подавление восстаний'],
    children: ['alexander2']
  },
  alexander2: {
    id: 'alexander2',
    name: 'Александр II Освободитель',
    title: 'Царь-реформатор',
    years: '1818–1881',
    reign: '1855–1881',
    bio: 'Император-реформатор, отменивший крепостное право в России.',
    achievements: ['Отмена крепостного права', 'Судебная реформа', 'Военные реформы', 'Земская реформа'],
    children: ['alexander3']
  },
  alexander3: {
    id: 'alexander3',
    name: 'Александр III Миротворец',
    title: 'Император',
    years: '1845–1894',
    reign: '1881–1894',
    bio: 'Император, проводивший политику контрреформ и укрепления традиций.',
    achievements: ['Мирная внешняя политика', 'Индустриализация', 'Укрепление самодержавия'],
    children: ['nicholas2']
  },
  nicholas2: {
    id: 'nicholas2',
    name: 'Николай II',
    title: 'Последний император',
    years: '1868–1918',
    reign: '1894–1917',
    bio: 'Последний российский император, царствование которого закончилось революцией.',
    achievements: ['Созыв Государственной думы', 'Столыпинские реформы', 'Гаагские конференции']
  }
};

const Index = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderTree = (rulerId: string, level: number = 0) => {
    const ruler = rulers[rulerId];
    const isSelected = selectedId === rulerId;

    return (
      <div key={rulerId} className="flex flex-col items-center">
        <button
          onClick={() => setSelectedId(rulerId)}
          className={`group relative transition-all duration-500 ${
            isSelected ? 'scale-105' : 'hover:scale-105'
          }`}
        >
          <div
            className={`relative w-72 p-6 rounded-xl transition-all duration-500 backdrop-blur-sm ${
              isSelected
                ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 border-2 border-primary shadow-2xl shadow-primary/50'
                : 'bg-card/50 border border-border hover:border-primary/50 shadow-xl hover:shadow-2xl'
            }`}
          >
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Crown" className="text-background" size={24} />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-cormorant font-bold text-2xl text-foreground mb-1">
                  {ruler.name}
                </h3>
                <p className="text-primary text-sm font-semibold">{ruler.title}</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="Calendar" size={14} />
                <span>{ruler.years}</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon name="Shield" size={14} />
                <span>Правление: {ruler.reign}</span>
              </div>
            </div>

            {isSelected && (
              <div className="mt-4 pt-4 border-t border-primary/30 space-y-3 animate-fade-in">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {ruler.bio}
                </p>
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
                    <Icon name="Award" size={12} />
                    Достижения
                  </h4>
                  <ul className="space-y-1">
                    {ruler.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </button>

        {ruler.children && ruler.children.length > 0 && (
          <div className="relative mt-8">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
            
            <div className={`flex gap-12 relative ${ruler.children.length > 1 ? 'justify-center' : ''}`}>
              {ruler.children.length > 1 && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              )}
              
              {ruler.children.map((childId, idx) => (
                <div key={childId} className="relative flex flex-col items-center">
                  {ruler.children && ruler.children.length > 1 && (
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary/20" />
                  )}
                  <div className="mt-8">
                    {renderTree(childId, level + 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
            1613—1917 • Три столетия на российском престоле
          </p>
        </div>
      </header>

      <main className="relative container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl mb-12">
            <CardHeader>
              <div className="text-center space-y-2">
                <p className="text-muted-foreground leading-relaxed">
                  Династия Романовых правила Российским государством более 300 лет — с 1613 по 1917 год.
                  За это время Россия превратилась из царства в могущественную империю.
                </p>
                <p className="text-sm text-primary flex items-center justify-center gap-2">
                  <Icon name="Info" size={16} />
                  Нажмите на карточку правителя, чтобы узнать подробности
                </p>
              </div>
            </CardHeader>
          </Card>

          <div className="flex justify-center pb-16">
            {renderTree('mikhail')}
          </div>
        </div>
      </main>

      <footer className="relative border-t border-border/50 backdrop-blur-xl bg-card/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Icon name="Crown" size={14} className="text-primary" />
            <span>Династия Романовых • 1613–1917</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
