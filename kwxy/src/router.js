import Vue from "vue"
import VueRouter from "vue-router"

import Index from "./view/index"
import Main from "./view/main"
import Lanqiao from "./view/lanqiao"
import School from "./view/school"
import TeacherList from "./view/teacher_list"
import Teachers from "./view/teachers"
import Students from "./view/students"

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
            },
            {
                path: "teacherList",
                name: "TeacherList",
                component: TeacherList
            },
            {
                path: "school",
                name: "School",
                component: School
            },
            {
                path: "teachers",
                name: "Teachers",
                component: Teachers
            },
            {
                path: "students",
                name: "Students",
                component: Students
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
