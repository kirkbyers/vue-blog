<template>
    <div id="admin-main">
        <h1>Admin pannel</h1>
        <div>
            <h2>Drafts</h2>
            <ul>
                <li v-for="draft in blogDrafts">
                    <router-link v-bind:to="{ name: 'draftEdit', params: { draftId: draft['.key'] } }">{{draft.title}}</router-link>
                </li>
            </ul>
        </div>
        <hr>
        <div>
            <h2>Posts</h2>
            <ul>
                <li v-for="post in blogPosts">
                    <router-link :to="{name: 'postEdit', params: { postId: post['.key']}}">{{post.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import firebase from '../../services/firebase';

const db = firebase.database();

export default {
    name: 'admin-main',
    firebase: {
        blogPosts: db.ref('/posts'),
        blogDrafts: db.ref('/drafts')
    }
}
</script>

<style></style>