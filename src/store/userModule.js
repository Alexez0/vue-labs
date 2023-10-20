
export const userModule = {
    state: () => ({
        user: {
            firstName: '',
            lastName: '',
            email: ''
        },

        users: [
            {id: 1, firstName: 'John', lastName: 'Doe', email: 'jonh@mail.ru'},
            {id: 2, firstName: 'Dhiraj', lastName: 'Ray', email: 'only2dhsdir@gmail.com'},
        ],
        authUser: {
            email: '',
            password: '',
        },

        authUserArr: []
    }),
    mutations:{
        setFirstName(state, firstname){
            state.user.firstName = firstname
        },
        setLastName(state, lastname){
            state.user.lastName = lastname
        },
        setEmail(state, email){
            state.user.email = email
        },

        setAuthUserEmail(state, email){
            state.authUser.email = email
        },
        setAuthUserPassword(state, password){
            state.authUser.password = password
        },

        addUser(state, user){
            state.users.push(user)
        },

        setDeleteUser(state,userId) {
            state.users = state.users.filter(user => user.id !== userId)
        },

        addAuthUser(state, user){
            state.authUserArr.push(user)
        },
        clearAuthUser(state){
            state.authUserArr.shift()
        }

    },

    actions:{
        addUser({commit}, user){
            commit('addUser', user)
        },

        deleteUser({commit}, userId) {
            commit('setDeleteUser', userId)
        },
        addAuthUser({commit}, user) {
            commit('addAuthUser', user)
        }
    },
    namespaced: true
}