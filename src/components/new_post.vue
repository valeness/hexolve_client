<template>
    <div class="new-post-container">
        <div class="new-post-header">
            Hello World
        </div>

        <div class="new-post-subject-container" id="subject" contenteditable="true" v-on:focus="focus_field" v-on:blur="blur_field('Subject', $event)">
            {{subject}}
        </div>

        <div class="new-post-body-container" id="body" contenteditable="true" v-on:focus="focus_field" v-on:blur="blur_field('Body', $event)">
            {{body}}
        </div>

        <div class="button-bar">
            <v_button ></v_button>
        </div>

    </div>
</template>

<script>
    import v_button from './v_button';
    export default {
        name : 'new_post',
        data : function() {
            return {
                subject : 'Subject',
                body : 'Body'
            }
        },
        components : {
            v_button : v_button
        },
        methods : {
            blur_field(default_value, event) {
                var current_value = $.trim($(event.target).html()).toLowerCase();
                if(current_value == '' || current_value.length <= 0) {
                    $(event.target).html(default_value);
                }
            },
            focus_field(event) {
                var current_value = $.trim($(event.target).html()).toLowerCase();
                if(current_value == this[$(event.target).attr('id')].toLowerCase()) {
                    $(event.target).html('');
                }
            }
        }
    };
</script>

<style scoped>
    .new-post-container {
        color: #FFF;
        background: #363636;
        width: 600px;
        height: 600px;
        position: absolute;
        bottom: 0;
        right: 15px;
        display: flex;
        flex-direction: column;
    }

    .disabled-text {

    }

    .new-post-header {
        padding: 11px;
        background: #FFF;
        color: #262626;
        border:1px solid #FFF;
    }

    .new-post-subject-container {
        outline: 0;
        padding:12px;
        border:1px solid #ccc;
        border-bottom: none;
    }

    .new-post-body-container {
        outline: 0;
        padding: 5px;
        padding-left: 12px;
        height:100%;
        border:1px solid #ccc;
        border-bottom: none;
    }

    .button-bar {
        padding: 12px;
        background: #FFF;
    }
</style>