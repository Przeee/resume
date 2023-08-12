// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Kirova 18',
}

var footer = {
  social: {
    email: {
      href: 'mailto:dmytro@mail.com',
      text: 'dmytro@mail.com',
    },
    phone: {
      href: 'tel:+380670000123',
      text: '+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: `
        Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        'HTML',
        'CSS',
        'Hendlebars',
        'VS Code',
        'Git',
        'Terminal',
        'NPM',
      ],
      hobbies: [
        {
          name: 'Sports',
          isMain: true,
        },
        {
          name: 'Education',
          isMain: false,
        },
        {
          name: 'Travel',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      location: [
        {
          name: 'Grygory Skovoroda',
          isEnd: true,
        },
        {
          name: 'Pereyaslav Hmel',
          isEnd: false,
        },
        {
          name: 'RVUFk',
          isEnd: true,
        },
        {
          name: 'Shkola',
          isEnd: true,
        },
        {
          name: 'ItBrains',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'certificates 1',
          id: 1,
        },
        {
          name: 'certificates 2',
          id: 2,
        },
        {
          name: 'certificates 3',
          id: 3,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 1,

          projects: [
            {
              stackAmount: '3',
              avardAmount: '2',
              name: 'Resume',
              url: 'https://resume.com.ua',
              about:
                'Something neitral text about my project',
              stacks: [
                {
                  name: 'ReactJs',
                },
                {
                  name: 'HTML | CSS',
                },
                {
                  name: 'NodeJS',
                },
              ],
              avards: [
                {
                  name: 'neitral text',
                },
                {
                  name: 'neitral text number 2',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
