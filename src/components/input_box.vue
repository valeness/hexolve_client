<template>
    <div class="input-box">
        <input :type="type" :id="id" :placeholder="placeholder">
    </div>
</template>

<script>
    export default {
        name : 'input_box',
        data : function() {
            return {

            }
        },
        props : [
            'id', 'type', 'placeholder'
        ],
        components : {

        },
        methods : {

        }
    };
</script>

<style scoped>

    .input-box {
        width: 100%;
        display: block;
    }

    .input-box input {
        width: 100%;
        padding: 6px;
        background: #262626;
        border: none;
        border-bottom: 3px solid #69B76B;
        border-right: 8px solid #262626;
        margin-top: 15px;
        font-size: 16px;
    }

</style>