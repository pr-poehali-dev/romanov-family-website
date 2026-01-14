export interface PersonData {
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

export const familyTree: Record<string, PersonData> = {
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
