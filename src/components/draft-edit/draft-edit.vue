<template>
    <div id="draft-edit">
        <input type="text" v-model="draft.title">
        <textarea name="" id="" cols="30" rows="10" v-model="draft.content"></textarea>
        <button v-on:click="updateDraft(draft)">Save</button>
        <button v-on:click="publishDraft(draft)">Publish</button>
    </div>
</template>

<script>
import firebase from '../../services/firebase';

const db = firebase.database();

export default {
    name: 'draft-edit',
    data () {
        return {
            draft: {
                title: '',
                content: ''
            }
        };
    },
    firebase () {
        const routeParams = this.$route.params;
        return {
            draft: {
                source: db.ref(`/drafts/${routeParams.draftId}`),
                asObject: true
            },
            drafts: db.ref('/drafts'),
            posts: db.ref('/posts'),
            archive: db.ref('/archive')
        }
    },
    methods: {
        updateDraft (draft) {
            const tempDraft = Object.assign({}, draft);
            delete tempDraft['.key'];
            this.$firebaseRefs.draft.set(tempDraft);
        },
        fetchDraft () {
            const routeParams = this.$route.params;
            this.$router.push(`/draftedit/${routeParams.draftId}`)
        },
        publishDraft (draft) {
            const tempDraft = Object.assign({}, draft);
            const routeParams = this.$route.params;
            delete tempDraft['.key'];
            this.$firebaseRefs.drafts.child(draft['.key']).remove();
            this.$firebaseRefs.posts.push(tempDraft);
            this.$router.push(`/post/${this.$firebaseRefs.posts.length - 1}`);
        },
        deleteDraft (draft) {
            this.$firebaseRefs.drafts.child(draft['.key']).remove();
            this.$router.push('/admin');
        }
    },
    watch: {
        '$route': 'fetchDraft'
    }
}

</script>

<style></style>