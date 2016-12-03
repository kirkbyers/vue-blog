<template>
    <div id="draft-edit">
        <input type="text" v-model="draft.title">
        <textarea name="" id="" cols="30" rows="10" v-model="draft.content"></textarea>
        <button v-on:click="updateDraft(draft)">Save</button>
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
        publishDraft () {}
    },
    watch: {
        '$route': 'fetchDraft'
    }
}

</script>

<style></style>