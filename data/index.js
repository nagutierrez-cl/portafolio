export const skills = [
    {
        label: 'Html',
        img: '/skills/html.png'
    },
    {
        label: 'Css',
        img: '/skills/css.png'
    },
    {
        label: 'Javascript',
        img: '/skills/javascript.png'
    },
    {
        label: 'Typescript',
        img: '/skills/typescript.svg'
    },
    {
        label: 'ReactJs',
        img: '/skills/react.png'
    },
    {
        label: 'Redux',
        img: '/skills/redux.png'
    },
    {
        label: 'NextJs',
        img: '/skills/next.svg'
    },
    {
        label: 'VueJs',
        img: '/skills/vue.png'
    },
    {
        label: 'Pinia',
        img: '/skills/pinia.svg'
    },
    {
        label: 'Bootstrap',
        img: '/skills/bootstrap.png'
    },
    {
        label: 'Material UI',
        img: '/skills/material-ui.png'
    },
    {
        label: 'Ant Design',
        img: '/skills/antd.svg'
    },
    {
        label: 'ChartJs',
        img: '/skills/chartjs.png'
    },
    {
        label: 'NodeJs',
        img: '/skills/node.png'
    },
    {
        label: 'Express',
        img: '/skills/express.svg'
    },
    {
        label: 'Php',
        img: '/skills/php.png'
    },
    {
        label: 'Laravel',
        img: '/skills/laravel.png'
    },
    {
        label: 'SQL',
        img: '/skills/mysql.svg'
    },
    {
        label: 'MongoDB',
        img: '/skills/mongo.svg'
    },
    {
        label: 'Git',
        img: '/skills/git.png'
    },
    {
        label: 'Github',
        img: '/skills/github.png'
    },
    {
        label: 'Postman',
        img: '/skills/postman.png'
    }
]

export const projects = [
    {
        img: '/projects/PokemonApp.png',
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
        img: '/projects/calendar.png',
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
        img: '/projects/HHRR.png',
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