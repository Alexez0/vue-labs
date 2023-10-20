<script>
import {mapState, mapMutations, mapActions} from "vuex";

export default {
    methods: {
        ...mapMutations({
            setAuthUserEmail: 'user/setAuthUserEmail',
            setAuthUserPassword: 'user/setAuthUserPassword',
            addAuthUser: "user/addAuthUser",
        }),
        ...mapActions({
            addAuthUser: 'user/addAuthUser'
        }),
        login() {
            if (this.authUser.email && this.authUser.password !== '') {
                const newUser = {
                    email: this.authUser.email,
                    password: this.authUser.password
                }
                this.$store.dispatch('user/addAuthUser', newUser)
                this.authUser.password = ''
                this.authUser.email = ''
                this.$router.push('/users')
            }
        }
    },
    computed: {
        ...mapState({
            authUser: state => state.user.authUser,
            authUserArr: state => state.user.authUserArr
        })
    }
}

</script>

<template>
    <div class="container">
        <h1>Welcome</h1>
        <p>Login to get started</p>
        <form>
            <my-input placeholder="Email"
                      :model-value="authUser.email"
                      @update:model-value="setAuthUserEmail"/>

            <my-input type="password" placeholder="Password"
                      :model-value="authUser.password"
                      @update:model-value="setAuthUserPassword"/>

            <my-button @click.prevent.stop="login">Login</my-button>
        </form>
        <div class="reg">
            <p>First time here? <span>Create your account.</span></p>
        </div>
    </div>
</template>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.reg {
    height: 50px;
    width: 300px;
    background: darkgray;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.reg span {
    color: darkred;
    cursor: pointer;
}

.reg span:hover {
    text-decoration: underline;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>