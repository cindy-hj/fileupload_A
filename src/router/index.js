import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FileListView from '../views/FileListView.vue'
import FileUploadView from '../views/FileUploadView.vue'
import FileImageView from '../views/FileImageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/filelist',
    name: 'filelist',
    component: FileListView
  },
  {
    path: '/fileupload',
    name: 'fileupload',
    component: FileUploadView
  },
  {
    path: '/fileimage',
    name: 'fileimage',
    component: FileImageView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
