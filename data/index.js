export const skills = [
    {
        label: 'Html',
        img: '/html.png'
    },
    {
        label: 'Css',
        img: '/css.png'
    },
    {
        label: 'Javascript',
        img: '/javascript.png'
    },
    {
        label: 'Typescript',
        img: '/typescript.svg'
    },
    {
        label: 'ReactJs',
        img: '/react.png'
    },
    {
        label: 'Redux',
        img: '/redux.png'
    },
    {
        label: 'NextJs',
        img: '/next.svg'
    },
    {
        label: 'VueJs',
        img: '/vue.png'
    },
    {
        label: 'Pinia',
        img: '/pinia.svg'
    },
    {
        label: 'Bootstrap',
        img: '/bootstrap.png'
    },
    {
        label: 'Material UI',
        img: '/material-ui.png'
    },
    {
        label: 'Ant Design',
        img: '/antd.svg'
    },
    {
        label: 'ChartJs',
        img: '/chartjs.png'
    },
    {
        label: 'NodeJs',
        img: '/node.png'
    },
    {
        label: 'Express',
        img: '/express.svg'
    },
    {
        label: 'Php',
        img: '/php.png'
    },
    {
        label: 'Laravel',
        img: '/laravel.png'
    },
    {
        label: 'SQL',
        img: '/mysql.svg'
    },
    {
        label: 'MongoDB',
        img: '/mongo.svg'
    },
    {
        label: 'Git',
        img: '/git.png'
    },
    {
        label: 'Github',
        img: '/github.png'
    },
    {
        label: 'Postman',
        img: '/postman.png'
    }
]

export const projects = [
    {
        img: '/PokemonApp.png',
        title: {
            en: 'Pokemon App',
            es: 'App Pokemón'
        },
        description: {
            en: 'App made in a NextJs in order to learn and understand dynamic routes, SSG and ISR. Initially has the first 151 pokemons but the rest can be accesed through the search bar, the new page is rendered on demand.',
            es: 'Aplicación construida con NextJs con el fin de aprender y entender las rutas dinámicas, SSG y ISR. Inicialmente tiene los primeros 151 pokemones, pero el resto puede ser accedido por el buscador, la página nueva es renderizada bajo demanda.',
        },
        technologies: ['Typescript', 'ReactJs', 'NextJs', 'Material UI', 'ChartJs'],
        github: 'https://github.com/nagutierrez-cl/pokemon-next',
        url: 'https://pokemon-nagutierrez-cl.vercel.app',
    },
    {
        img: '/calendar.png',
        title: {
            en: 'MERN Calendar App',
            es: 'Calendario MERN'
        },
        description: {
            en: 'Calendar app made in a ReactJs course as a final project to consolidate all the knowledge learnt in ReactJs, NodeJs, ExpressJs and MongoDB. Demo got shut down with the removal of heroku free plan.',
            es: 'Aplicación de calendario construida en un curso de ReactJs como proyecto final para consolidar todos los conocimientos aprendidos de ReactJs, NodeJs, ExpressJs y MongoDB. La demo no está disponible por la eliminación del plan gratis de Heroku.',
        },
        technologies: ['ReactJs', 'Redux', 'Bootstrap', 'NodeJs', 'Express', 'MongoDB'],
        github: 'https://github.com/nagutierrez-cl/calendar',
        url: '',
    },
    {
        img: '/HR/home.png',
        title: {
            en: 'Freelance HR App',
            es: 'App RRHH Frelance',
        },
        description: {
            en: 'A solution was designed and implemented for the department of HR of a local company, working with personal data of workers and applicants. The hiring process was facilitated thanks to the solution provided.',
            es: 'Aplicación diseñada e implementada para solucionar el requerimiento del departamento de RRHH de una empresa local, se trabajó con la información personal de los trabajadores y postulantes. El proceso de contratación se agilizó gracias a la solución entregada.',
        },
        technologies: ['ReactJs', 'Redux', 'Bootstrap', 'NodeJs', 'Express', 'MongoDB'],
        github: '',
        url: '',
        modal: true,
    },
]