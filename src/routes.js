import VueRouter from 'vue-router';

import PublicAppComponent from './components/public-app/public-app.vue';
import BlogPostsComponent from './components/blog-posts/blog-posts.vue';
import LoginComponent from './components/login/login.vue';
import AdminComponent from './components/admin/admin.vue';
import DraftEditComponent from './components/draft-edit/draft-edit.vue';

import authGaurd from './services/auth-gaurd';

import App from './App.vue';

const routes = [
    {
        path: '/',
        name: '',
        component: PublicAppComponent,
        children: [
            {
                path: '',
                name: 'home',
                component:BlogPostsComponent
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminComponent,
        beforeEnter: authGaurd
    },
    {
        path: '/draftedit/:draftId',
        name: 'draftEdit',
        component: DraftEditComponent,
        beforeEnter: authGaurd
    },
    {
        path: '/postedit/:postId',
        name: 'postEdit'
    }
];

const router = new VueRouter({
    routes
});

export default router;
