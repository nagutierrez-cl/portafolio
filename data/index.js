export const skills = [
    {
        label: 'Html',
        img: '/skills/html.svg'
    },
    {
        label: 'Css',
        img: '/skills/css.svg'
    },
    {
        label: 'Javascript',
        img: '/skills/javascript.svg'
    },
    {
        label: 'Typescript',
        img: '/skills/typescript.svg'
    },
    {
        label: 'ReactJs',
        img: '/skills/react.svg'
    },
    {
        label: 'Redux',
        img: '/skills/redux.svg'
    },
    {
        label: 'NextJs',
        img: '/skills/next.svg'
    },
    {
        label: 'VueJs',
        img: '/skills/vue.svg'
    },
    {
        label: 'Pinia',
        img: '/skills/pinia.svg'
    },
    {
        label: 'Bootstrap',
        img: '/skills/bootstrap.svg'
    },
    {
        label: 'Material UI',
        img: '/skills/material-ui.svg'
    },
    {
        label: 'Ant Design',
        img: '/skills/antd.svg'
    },
    {
        label: 'ChartJs',
        img: '/skills/chartjs.svg'
    },
    {
        label: 'NodeJs',
        img: '/skills/node.svg'
    },
    {
        label: 'Express',
        img: '/skills/express.svg'
    },
    {
        label: 'Php',
        img: '/skills/php.svg'
    },
    {
        label: 'Laravel',
        img: '/skills/laravel.svg'
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
        img: '/skills/git.svg'
    },
    {
        label: 'Github',
        img: '/skills/github.svg'
    },
    {
        label: 'Postman',
        img: '/skills/postman.svg'
    }
]

export const projects = [
    {
        img: '/projects/PokemonApp.webp',
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
        img: '/projects/calendar.webp',
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
        img: '/projects/HHRR.webp',
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