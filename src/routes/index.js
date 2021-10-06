import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Docs from './Docs'
import DocsId from './DocsId'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHistory(),
    scrollBehavior:()=>({top:0}),

    routes:[
        {
            path: '/',
            name:'Home',
            component:Home
        },
        {
            path:'/about',
            name:'About',
            component:About
        },
        {
            path:'/documents',
            component:Docs
            // children:[//Docs에서 어디에서 출력할지 정해야함
            //     {
            //         path:':id',
            //         component:DocsId
            //     }
            // ]
        },
        {
            path:'/documents/:id',
            name:'docsId',
            component:DocsId
        },
        {
            path:'/:notFount(.*)',
            component:NotFound
        }
    ]
})