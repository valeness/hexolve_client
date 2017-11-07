<template>
    <div class="toast hidden">{{msg}}</div>
</template>

<script>
    import {bus} from '../util/bus'

    let data = {
        msg : 'Hello Worldz'
    };

    const toast = {
        name : 'toast',
        props : [],
        data : function() {
            return data
        },
        methods : {
            show : function(message, type, timeout) {
                if(timeout === undefined) {
                    timeout = 5000;
                }

                if(type === undefined) {
                    type = ''
                }

                data.msg = message;

                const $toast = $('.toast');
                $toast.removeClass('hidden');
                window.setTimeout(function() {
                    $('.toast').addClass('hidden');
                }, timeout)
            }
        }
    };

    bus.$on('toast-show', function(message, type, timeout) {
        toast.methods.show(message, type, timeout);
    });

    export default toast;
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