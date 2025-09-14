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
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2025/2012-04-19-mlg/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2025/2012-03-21-eni/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/typograms/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2015/formatting-and-links/";
          
        },
      },{id: "post-корпус-переводов-как-инструмент-лингвостиховедческого-исследования",
        
          title: "Корпус переводов как инструмент лингвостиховедческого исследования",
        
        description: "Гаспаровские чтения",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2012/corpus/";
          
        },
      },{id: "post-йосип-пупачич-море",
        
          title: "Йосип Пупачич — Море",
        
        description: "перевод с хорватского",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/portfolio/html/2007/more/";
          
        },
      },{id: "post-село-горюхино-и-его-обитатели",
        
          title: "Село Горюхино и его обитатели",
        
        description: "о прозе Юрия Горюхина",
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
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/portfolio/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/portfolio/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-выступление-на-семинаре-аффордансы-добра-и-зла-дальнее-чтение",
          title: 'Выступление на семинаре аффордансы добра и зла: дальнее чтение',
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
