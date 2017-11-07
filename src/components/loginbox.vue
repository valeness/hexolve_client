<template>
    <div class="register-container">

        <toast></toast>

        <input_box id="username" type="text" placeholder="Username"></input_box>
        <input_box id="password" type="password" placeholder="Password"></input_box>
        <input_box id="confirm_password" type="password" placeholder="Confirm Password"></input_box>

        <div class="login-toggle" v-on:click="toggleForm($event)">{{ action_msg }}</div>

        <div class="button-container">
            <v_button clicky="click" v-on:click="login"></v_button>
        </div>

    </div>
</template>

<script>
    import input_box from './input_box';
    import v_button from './v_button';
    import toast from './toast';
    import api from '../util/api'
    import {bus} from '../util/bus'
    export default {
        name : 'loginbox',
        data : function() {
            return {
                login_text : 'Or Login',
                register_text : 'Or Register',
                action_msg : 'Or Login'
            }
        },
        components : {
            'input_box' : input_box,
            'v_button' : v_button,
            'toast' : toast
        },
        methods : {

            toggleForm : function(event) {
                const c = $(event.target);

                if(this.action_msg == this.login_text) {
                    $('[id=confirm_password]').hide();
                } else {
                    $('[id=confirm_password]').show();
                }

                this.action_msg = this.action_msg == this.login_text ? this.register_text : this.login_text;
            },

            login : function() {
                var self = this;
                // Get data

                const username = $('[id=username]').val();
                const password = $('[id=password]').val();
                const confirm_password = $('[id=confirm_password]').val();

                let slug = 'registerUser';
                if(this.action_msg == this.register_text) {
                    slug = 'authenticateUser';
                }

                api.get('https://valeness.hexolve.com/auth/api/' + slug, {
                    username,
                    password,
                    confirm_password
                }, function(r) {
                    if(typeof r.jwt != 'undefined') {
                        localStorage.setItem('jwt', r.jwt);
                        bus.$emit('toast-show', 'Successfully Registered!');
                    }
                },
                function(r) {
                    r = r.responseJSON;

                    var msg = [];
                    $.each(r, function (ind, val) {
                        msg.push(val);
                    });

                    bus.$emit('toast-show', msg.join('-'));
                });
            }
        }
    };
</script>

<style scoped>

    .toast {
        color: #262626;
        font-family: arial,sans-serif;
        padding: 7px 18px;
        position:fixed;
        bottom: 15px;
        left: 15px;
        background: #69B76B;
        transition: .35s all cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }

    .toast.hidden {
        bottom: -120px;
        transition: .35s all cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }

    .register-container {
        display: flex;
        width: 60%;
        margin: 0 auto;
        flex-wrap: wrap;
    }

    .login-toggle {
        display: block;
        font-size: 14px;
        color: #69B76B;
        text-decoration: underline;
        cursor: pointer;
        padding: 14px;
        text-indent: 10px;
    }

</style>