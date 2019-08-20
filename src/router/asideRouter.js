export default [{
        path: '/home',
        name: 'home',
        component: () => import('../views/home/Home')
    },
    {
        path: '/rtext',
        name: 'rtext',
        component: () => import('../views/richText/RichText')
    },
    {
        path: '/notebook',
        name: 'notebook',
        component: () => import('../views/note/Note')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('../views/todo/Todo')
    },
    {
        path: '/timeLine',
        name: 'timeLine',
        component: () => import('../views/timeLine/TimeLine')
    },
    {
        path: '/canvas',
        name: 'canvas',
        component: () => import('../views/canvas/Canvas')
    }
]