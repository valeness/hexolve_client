<template>
    <!--<new_post></new_post>-->
    <loginbox></loginbox>
</template>

<script>
    import new_post from './new_post';
    import loginbox from './loginbox';
    export default {
        name: 'main',
        components: {
            new_post,
            loginbox
        },
        data () {
            return {
                msg: 'Hello'
            }
        }
    }
</script>

<style scoped>

</style>
