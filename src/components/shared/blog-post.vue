<template>
    <div id="blog-post">
        <h3>{{ title }}</h3>
        <div v-html="content"></div>
    </div>
</template>

<script>

export default {
    name: 'blog-post',
    props: ['title', 'content']
}
</script>

<style></style>