<template>
    <div id="blog-posts">
        <blog-post v-for="post in reversedBlogPosts" v-bind:title="post.title" v-bind:content="post.content"></blog-post>
    </div>
</template>

<script>
import firebase from '../../services/firebase';
import BlogPostComponent from '../shared/blog-post.vue'

const db = firebase.database();

export default {
    name: 'blog-posts',
    components: {
        'blog-post': BlogPostComponent
    },
    firebase: {
        blogPosts: db.ref('/posts')
    },
    computed: {
        reversedBlogPosts () {
            return this.blogPosts.reverse()
        }
    }
}
</script>

<style></style>