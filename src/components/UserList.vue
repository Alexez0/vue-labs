<script>
import {mapState, mapMutations, mapActions} from "vuex";

export default {
    methods:{
        ...mapActions({
            deleteUser: "user/deleteUser"
        }),
        ...mapMutations({
            deleteUser: "user/setDeleteUser",
            clearAuthUser: 'user/clearAuthUser'
        }),
        deleteUser(userId) {
            this.$store.dispatch('user/deleteUser', userId);
        },
        clear(){
            this.clearAuthUser()
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
            users: state => state.user.users,
        })
    },
}
</script>

<template>
    <div v-if="users.length > 0">
        <h1>Users</h1>
        <div class="wrapper" v-for="user in users" :key="user.id">
            <div class="item">
                <h2>Id</h2>
                <div>{{ user.id }}</div>
            </div>
            <div class="item">
                <h2>Firstname</h2>
                <div>{{ user.firstName }}</div>
            </div>
            <div class="item">
                <h2>Lastname</h2>
                <div>{{ user.lastName }}</div>
            </div>
            <div class="item">
                <h2>Email</h2>
                <div>{{ user.email }}</div>
            </div>
            <div class="item">
                <h2>Action</h2>
                <my-button @click="deleteUser(user.id)">Delete</my-button>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>Users not found</h2>
    </div>
    <my-button @click="clear">Quit</my-button>
</template>

<style scoped>
.wrapper{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    width: 50%;
    font-size: 20px;
}
.item{
    width: 18%;
}
.item div{
    word-wrap: break-word;
}
</style>