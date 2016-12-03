import PublicAppComponent from './components/public-app/public-app.vue';
import BlogPostsComponent from './components/blog-posts/blog-posts.vue';
import LoginComponent from './components/login/login.vue';
import AdminComponent from './components/admin/admin.vue';

import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: PublicAppComponent,
        children: [
            {
                path: '',
                name: 'blog-posts',
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
        component: AdminComponent
    },
    {
        path: '/draftedit/:draftId',
        name: 'draftEdit'
    },
    {
        path: '/postedit/:postId',
        name: 'postEdit'
    }
];


export default routes;
