<script>
import {mapState, mapMutations, mapActions} from "vuex";

export default {
    methods: {
        ...mapMutations({
            setFirstName: 'user/setFirstName',
            setLastName: 'user/setLastName',
            setEmail: 'user/setEmail',
            addUser: 'user/addUser'
        }),

        ...mapActions({
            addUser: 'user/addUser'
        }),
        addUser() {
            const newUser = {
                id: this.maxId + 1,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email
            };
            this.$store.dispatch('user/addUser', newUser)
            this.user.firstName = ''
            this.user.lastName = ''
            this.user.email = ''
        }
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
            users: state => state.user.users,
            authUser: state => state.user.authUser,
            authUserArr: state => state.user.authUserArr
        }),
        maxId() {
            return this.users.length > 0
                ? Math.max(...this.users.map(user => user.id))
                : 0;
        }
    }


}
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <my-button @click="addUser">Add User</my-button>
            <div>
                <p><strong>FirstName</strong></p>
                <my-input
                        :model-value="user.firstName"
                        @update:model-value="setFirstName"
                />
            </div>
            <div>
                <p><strong>LastName</strong></p>
                <my-input
                        :model-value="user.lastName"
                        @update:model-value="setLastName"/>
            </div>
            <div>
                <p><strong>Email</strong></p>
                <my-input
                        :model-value="user.email"
                        @update:model-value="setEmail"/>
            </div>

        </div>
        <h2>Logined user: {{authUserArr[0].email}}</h2>
    </div>
</template>

<style scoped>
input {
    width: 150px;
    height: 30px;
    font-size: 20px;
}

.wrapper {
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
}

button {
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
.container{
    display: flex;
    text-align: center;
    align-items: center;
}

.container h2{
    margin-left: 20px;
}
</style>