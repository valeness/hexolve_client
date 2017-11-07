<template>
    <div class="button-container">
        <button class="button" :clicky="clicky" @click="clicked">{{ msg }}</button>
    </div>
</template>

<script>
    export default {
        name : 'v_button',
        props : ['clicky'],
        data : function() {
            return {
                msg : 'Submit'
            }
        },
        methods : {
            clicked : function() {
                this.$emit(this.clicky);
            }
        }
    };
</script>

<style>

    .button-container {
        width:100%;
        display: block;
    }

    button.button {
        padding: 5px 10px;
        background: #4caf50;
        border:2px solid #4caf50;
    }
</style>