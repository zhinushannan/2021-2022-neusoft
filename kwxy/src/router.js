import Vue from "vue"
import VueRouter from "vue-router"

import Index from "./view/index"
import Main from "./view/main"
import Lanqiao from "./view/lanqiao"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
        children: [
            {
                path: "main",
                name: "Main",
                component: Main
            },
            {
                path: "lanqiao",
                name: "Lanqiao",
                component: Lanqiao
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
