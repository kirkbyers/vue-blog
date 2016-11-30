import PublicAppComponent from './components/public-app/public-app.vue';
import BlogPostsComponent from './components/blog-posts/blog-posts.vue';
import LoginComponent from './components/login/login.vue';

import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'public-app',
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
    }
];


export default routes;
