// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/portfolio/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/publications/";
          },
        },{id: "nav-html",
          title: "html",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/html/index.html";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "web-services, podcasts, datasets, models, fonts, games.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "учебные материалы читаемых курсов",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/teaching/";
          },
        },{id: "nav-data",
          title: "data",
          description: "datasets, preprints, citable software, thesus review",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/data/";
          },
        },{id: "nav-journals",
          title: "journals",
          description: "journals I started",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/journals/";
          },
        },{id: "post-режиссёр-говорухин-против-кино",
        
          title: "Режиссёр Говорухин против кино",
        
        description: "Как отсылка к структурной лингвистике стала посланием целой эпохе",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2021/govorukhin/";
          
        },
      },{id: "post-животный-мир-слова-о-полку-игореве-в-переводе-филиппа-супо",
        
          title: "Животный мир «Слова о полку Игореве» в переводе Филиппа Супо",
        
        description: "О животных во французском переводе «Слова о полку Игореве»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/animalw/";
          
        },
      },{id: "post-воскресение-жанра-сетевая-эротическая-литература",
        
          title: "Воскресение жанра — сетевая эротическая литература",
        
        description: "Об эротической литературе",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/erotic/";
          
        },
      },{id: "post-что-такое-филология",
        
          title: "Что такое филология?",
        
        description: "Об определении",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/whatis/";
          
        },
      },{id: "post-корпус-переводов-как-инструмент-лингвостиховедческого-исследования",
        
          title: "Корпус переводов как инструмент лингвостиховедческого исследования",
        
        description: "Гаспаровские чтения",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/corpus/";
          
        },
      },{id: "post-точность-перевода-методика-гаспарова-и-психолингвистический-эксперимент",
        
          title: "Точность перевода. Методика Гаспарова и психолингвистический эксперимент",
        
        description: "Гаспаровские чтения",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/mlg/";
          
        },
      },{id: "post-доклад-об-электронном-научном-издании-фольклорный-архив-башкирского-государственного-университета",
        
          title: "Доклад об Электронном научном издании Фольклорный архив Башкирского государственного университета",
        
        description: "Фольклор и постфольклор. Структура, типология, семиотика",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/eni/";
          
        },
      },{id: "post-научный-архив-профессора-р-г-назирова",
        
          title: "Научный архив профессора Р. Г. Назирова",
        
        description: "Описание архива ученого",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2011/archnazirov/";
          
        },
      },{id: "post-сюрреалистическая-рецепция-фольклорных-мотивов-в-стихотворении-а-бретона-le-puits-enchante",
        
          title: "Сюрреалистическая рецепция фольклорных мотивов в стихотворении А. Бретона «Le puits enchante»",
        
        description: "О сюрреалистической поэзии",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2011/puitench/";
          
        },
      },{id: "post-филипп-супо-о-слове-о-полку-игореве",
        
          title: "Филипп Супо о «Слове о полку Игореве»",
        
        description: "Комментированный перевод статьи Ф. Супо",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2011/soupaultpreface/";
          
        },
      },{id: "post-рецензия-на-сборник-система-языка",
        
          title: "Рецензия на сборник Система языка",
        
        description: "Рецензия на сборник статей о лингвистике",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2010/reviewsystem/";
          
        },
      },{id: "post-жанр-поэтического-искусства-буало-как-системное-и-внесистемное-явление",
        
          title: "Жанр «Поэтического искусства» Буало как системное и внесистемное явление",
        
        description: "О том, насколько «Поэтическое искусство» вписывается в концепцию классицизма",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2009/boileau/";
          
        },
      },{id: "post-рецензия-на-книгу-дж-каллера-теория-литературы",
        
          title: "Рецензия на книгу Дж. Каллера Теория литературы",
        
        description: "Рецензия на книгу о теории литературы",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2009/reviewkaller/";
          
        },
      },{id: "post-типология-филологических-антиответов-фоновые-знания-и-речевые-регистры",
        
          title: "Типология филологических «антиответов» фоновые знания и речевые регистры",
        
        description: "Об ошибочных ответах студентов на экзамене по литературе",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2008/typesanti/";
          
        },
      },{id: "post-василь-ханнанов-инфанты-памяти-наиля-латфуллина",
        
          title: "Василь Ханнанов. Инфанты — памяти Наиля Латфуллина",
        
        description: "О выставке Василя Ханнанова",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2008/infanty/";
          
        },
      },{id: "post-рец-на-кн-смирнов-а-е-слово-о-полку-игореве-перевод-с-древнерусского-статьи-комментарии",
        
          title: "Рец. на кн. Смирнов А. Е. Слово о полку Игореве. Перевод с древнерусского,...",
        
        description: "Рецензия на издание нового перевода «Слова о полку Игореве»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2008/smirnov/";
          
        },
      },{id: "post-французские-стихотворения-ф-и-тютчева-в-свете-авторской-лексикографии",
        
          title: "Французские стихотворения Ф. И. Тютчева в свете авторской лексикографии",
        
        description: "Тютчев в словаре",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2007/autlex/";
          
        },
      },{id: "post-вавилонская-библиотека",
        
          title: "Вавилонская библиотека",
        
        description: "Вариант статьи для Википедии",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2007/babel/";
          
        },
      },{id: "post-йосип-пупачич-море",
        
          title: "Йосип Пупачич — Море",
        
        description: "Перевод с хорватского",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2007/more/";
          
        },
      },{id: "post-о-чём-разговаривают-птицы-или-молчащие-картины",
        
          title: "О чём разговаривают Птицы, или Молчащие картины",
        
        description: "О картинах Александра Соболева",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2007/sobolev/";
          
        },
      },{id: "post-мир-запахов-в-слове-и-цвете",
        
          title: "Мир запахов в слове и цвете",
        
        description: "Об экранизации романа «Парфюмер»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/zapax/";
          
        },
      },{id: "post-несвоевременные-мысли-анатолия-яковлева",
        
          title: "Несвоевременные мысли Анатолия Яковлева",
        
        description: "О поэзии Анатолия Яковлева",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/yakovlev/";
          
        },
      },{id: "post-семь-дней-творения",
        
          title: "Семь дней творения",
        
        description: "О картинах Василя Ханнанова",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/7dney/";
          
        },
      },{id: "post-писатель-сорокин-я-путешествую-по-моим-внутренним-литературным-провинциям",
        
          title: "Писатель Сорокин — «Я путешествую по моим внутренним литературным провинциям»",
        
        description: "Интервью с Владимиром Сорокиным",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/sorokin/";
          
        },
      },{id: "post-на-трансцендентную-злобу-дня",
        
          title: "На трансцендентную злобу дня",
        
        description: "О творческом объединении «Фантасофия»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/transcendent/";
          
        },
      },{id: "post-утро-стрелецкой-казни",
        
          title: "Утро Стрелецкой казни",
        
        description: "Ответ на статью Александра Стрельца «Литература Башкортостана»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/strelec/";
          
        },
      },{id: "post-20-лет-мифа",
        
          title: "20 лет мифа",
        
        description: "О выставке Василя Ханнанова",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/20years/";
          
        },
      },{id: "post-геометрия-борьбы-земли-и-неба",
        
          title: "Геометрия борьбы Земли и Неба",
        
        description: "О картине Наиля Латфуллина «Формула незавершенного устремления»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/geometry/";
          
        },
      },{id: "post-взгляд-на-уфимскую-литературу-в-2006-году-первое-полугодие",
        
          title: "Взгляд на уфимскую литературу в 2006 году (первое полугодие)",
        
        description: "Обзор русскоязычной литературы Уфы",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/vzglyad/";
          
        },
      },{id: "post-жемчужная-тоска",
        
          title: "Жемчужная тоска",
        
        description: "О повести Игоря Савельева «Когда мне было тридцать»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/toska/";
          
        },
      },{id: "post-писатель-фрики-и-общественный-договор",
        
          title: "Писатель, «фрики» и общественный договор",
        
        description: "О псевдонаучных идеях Э. Мулдашева",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2006/freak/";
          
        },
      },{id: "post-роман-парфюмер-элитный-продукт-массового-потребления",
        
          title: "Роман «Парфюмер» — Элитный продукт массового потребления",
        
        description: "О романе Патрика Зюскинда",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2005/parfumer/";
          
        },
      },{id: "post-интервью-с-дмитрием-горчевым",
        
          title: "Интервью с Дмитрием Горчевым",
        
        description: "Горчев дает интервью",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2005/gorchev/";
          
        },
      },{id: "post-зашифрованный-дэн-браун",
        
          title: "Зашифрованный Дэн Браун",
        
        description: "О романе Дэна Брауна «Код да Винчи»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2005/brown/";
          
        },
      },{id: "post-антимиры-науки",
        
          title: "Антимиры науки",
        
        description: "О лжеученых",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2005/antimir/";
          
        },
      },{id: "post-отрицание-и-пространство",
        
          title: "Отрицание и пространство",
        
        description: "О коллективной выставке «Не-места»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2005/otricanie/";
          
        },
      },{id: "post-победа-марксизма-над-языкознанием",
        
          title: "Победа марксизма над языкознанием",
        
        description: "Рецензия на книгу Михаила Вайскопфа «Писатель Сталин»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2004/marxism/";
          
        },
      },{id: "post-эстетика-интереса",
        
          title: "Эстетика интереса",
        
        description: "О рассказе «Реванш» Станислава Когана",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2004/aesthetics/";
          
        },
      },{id: "post-бледный-бледный-город",
        
          title: "Бледный «Бледный город»",
        
        description: "О повести И. Савельева",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2004/bledny/";
          
        },
      },{id: "post-уфимский-феномен-шевчук-и-земфира-как-башкирский-брэнд",
        
          title: "«Уфимский феномен» — Шевчук и Земфира как башкирский брэнд",
        
        description: "О том, как слушать тексты песен Шевчука и Земфиры",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2004/ufimsky/";
          
        },
      },{id: "post-село-горюхино-и-его-обитатели",
        
          title: "Село Горюхино и его обитатели",
        
        description: "О прозе Юрия Горюхина",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2003/selo-goryukhino/";
          
        },
      },{id: "post-полковникка-бер-кемдә-яҙмай",
        
          title: "Полковникка бер кемдә яҙмай",
        
        description: "Перевод на башкирский язык песни «Полковнику никто не пишет»",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2003/polkovnikka/";
          
        },
      },{id: "post-закон-всемирного-тяготения-рассказ",
        
          title: "Закон всемирного тяготения. Рассказ",
        
        description: "Рассказ о том, как Ньютон становится Буддой",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2001/zakonv/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/the_godfather/";
            },},{id: "news-выступление-на-9-м-колмогоровском-семинаре-по-компьютерной-лингвистике-и-наукам-о-языке",
          title: 'Выступление на 9-м Колмогоровском семинаре по компьютерной лингвистике и наукам о языке',
          description: "",
          section: "News",},{id: "news-выступление-на-радио-маяк-научно-технический-прогресс-как-научно-технический-прогресс-повлиял-на-литературу-microphone",
          title: 'Выступление на радио «Маяк»: Научно-технический прогресс. Как научно-технический прогресс повлиял на литературу :microphone:...',
          description: "",
          section: "News",},{id: "news-выступление-на-семинаре-аффордансы-добра-и-зла-дальнее-чтение",
          title: 'Выступление на семинаре аффордансы добра и зла: дальнее чтение',
          description: "",
          section: "News",},{id: "news-выступление-на-дискуссии-будущее-графического-дизайна",
          title: 'Выступление на дискуссии Будущее графического дизайна',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/portfolio/news/announcement_20250921/";
            },},{id: "news-выступление-на-радио-маяк-как-устроены-вселенные-в-литературе-microphone",
          title: 'Выступление на радио «Маяк»: Как устроены вселенные в литературе :microphone:',
          description: "",
          section: "News",},{id: "news-выступление-на-конференции-большое-время-михаила-бахтина-к-130-летию-со-дня-рождения-мыслителя",
          title: 'Выступление на конференции «Большое Время» Михаила Бахтина. К 130-летию со дня рождения мыслителя...',
          description: "",
          section: "News",},{id: "news-выступление-на-радио-россии-об-изучении-русского-языка-спортсменами-легионерами-microphone",
          title: 'Выступление на «Радио России» об изучении русского языка спортсменами-легионерами :microphone:',
          description: "",
          section: "News",},{id: "news-выступление-на-радио-маяк-в-программе-физики-и-лирики-о-феврале-в-жизни-и-творчестве-русских-писателей-microphone",
          title: 'Выступление на радио «Маяк» в программе «Физики и лирики» о феврале в жизни...',
          description: "",
          section: "News",},{id: "news-выступление-на-радио-маяк-в-программе-физики-и-лирики-о-тютчеве-и-фете-microphone",
          title: 'Выступление на радио «Маяк» в программе «Физики и лирики» о Тютчеве и Фете...',
          description: "",
          section: "News",},{id: "projects-w2v-russian-fiction",
          title: 'w2v-russian-fiction',
          description: "Большая векторная модель русской художественной прозы",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/10_project/";
            },},{id: "projects-русскоязычные-биграммы-xx-века",
          title: 'Русскоязычные биграммы XX века',
          description: "Преобразованные в подходящий для исследования вид русскоязычные биграммы из коллекции Google Ngrams с 1918 до 2010 года",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/11_project/";
            },},{id: "projects-некраткие-содежания",
          title: 'Некраткие содежания',
          description: "Аудиоэссе о текстах и литературе",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/12_project/";
            },},{id: "projects-автандил",
          title: 'Автандил',
          description: "Язык программирования для нужд Digital Humanities",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/13_project/";
            },},{id: "projects-римский-календарь",
          title: 'Римский календарь',
          description: "Перевод дат современного календаря в даты древнеримского календаря",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/14_project/";
            },},{id: "projects-параллельный-корпус-переводов-слова-о-полку-игореве",
          title: 'Параллельный корпус переводов «Слова о полку Игореве»',
          description: "Электронный инструмент для сопоставительного чтения переводов средневекового памятника",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/1_project/";
            },},{id: "projects-basmorph",
          title: 'basmorph',
          description: "Морфологический анализатор башкирского языка на Python",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/2_project/";
            },},{id: "projects-национальный-корпус-русского-языка",
          title: 'Национальный корпус русского языка',
          description: "Коллекция текстов на русском языке, оснащенная разметкой и инструментами поиска",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/3_project/";
            },},{id: "projects-сеть-персоналий-в-словаре-русских-писателей-xviii-века",
          title: 'Сеть персоналий в Словаре русских писателей XVIII века',
          description: "Междустатейные ссылки в виде графа",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/4_project/";
            },},{id: "projects-векторные-романы",
          title: 'Векторные романы',
          description: "Компьютерно измененные тексты русской классики",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/5_project/";
            },},{id: "projects-лига-айвы",
          title: 'Лига Айвы',
          description: "Подкаст об университете",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/6_project/";
            },},{id: "projects-демонтаж-красноречия",
          title: 'Демонтаж красноречия',
          description: "Просветительский проект",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/7_project/";
            },},{id: "projects-шрифты",
          title: 'Шрифты',
          description: "Гарнитуры, стилизованные под типографию XVIII века и древнеримский курсив",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/8_project/";
            },},{id: "projects-шахматный-дуатлон",
          title: 'Шахматный дуатлон',
          description: "Игра, соединяющая шахматы и го",
          section: "Projects",handler: () => {
              window.location.href = "/portfolio/projects/9_project/";
            },},{
        id: 'social-academia_edu',
        title: 'Academia_edu',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/nevmenandr.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%76%6D%65%6E%61%6E%64%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-flickr',
        title: 'Flickr',
        section: 'Socials',
        handler: () => {
          window.open("https://www.flickr.com/nevmenandr", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nevmenandr", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mastodon.social/@nevmenandr", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9099-0436", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/phy74/", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Boris-Orekhov/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/portfolio/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EMcL0ioAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57190401804", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2080424505", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/nevmenandr", "_blank");
        },
      },{
        id: 'social-wikidata',
        title: 'Wikidata',
        section: 'Socials',
        handler: () => {
          window.open("https://www.wikidata.org/wiki/Q58437028", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.hse.ru/staff/borekhov", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/nevmenandr", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@HumanitiesUnveiledFromJournalt", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/nevmenandr", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
