<template>
    <div id="post-edit">
        <input type="text" v-model="post.title">
        <textarea name="" id="" cols="30" rows="10" v-model="post.content"></textarea>
        <button v-on:click="updatePost(post)">Save</button>
        <button v-on:click="deletePost(post)">Delete</button>
    </div>
</template>

<script>
import firebase from '../../services/firebase';

const db = firebase.database();

export default {
    name: 'post-edit',
    data () {
        return {
            post: {
                title: '',
                content: ''
            }
        };
    },
    firebase () {
        const routeParams = this.$route.params;
        return {
            post: {
                source: db.ref(`/posts/${routeParams.postId}`),
                asObject: true
            },
            posts: db.ref('/posts'),
            posts: db.ref('/posts'),
            archive: db.ref('/archive')
        }
    },
    methods: {
        updatePost (post) {
            const tempPost = Object.assign({}, post);
            delete tempPost['.key'];
            this.$firebaseRefs.post.set(tempPost);
        },
        fetchPost () {
            const routeParams = this.$route.params;
            this.$router.push(`/postedit/${routeParams.postId}`)
        },
        publishPost (post) {
            const tempPost = Object.assign({}, post);
            const routeParams = this.$route.params;
            delete tempPost['.key'];
            this.$firebaseRefs.posts.child(post['.key']).remove();
            this.$firebaseRefs.posts.push(tempPost);
            this.$router.push(`/post/${this.$firebaseRefs.posts.length - 1}`);
        },
        deletePost (post) {
            this.$firebaseRefs.posts.child(post['.key']).remove();
            this.$router.push('/admin');
        }
    },
    watch: {
        '$route': 'fetchPost'
    }
}

</script>

<style></style>