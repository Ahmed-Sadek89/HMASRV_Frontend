import { createStore } from 'vuex'
import getResultsFromFetching from './getResultsFromFetching ';
import setResultInMutation from './setResultInMutation';

export default createStore({
  state: {
    adminUserState: {
      data: [],
    },
    assignedUserState: {
      data: [],
    },
    taskState: {
      data: [],
    },
    toAssignedUserState: {
      data: []
    }
  },
  getters: {
  },
  mutations: {
    setAdminUsersMutation(state, { data }) {
      setResultInMutation(state.adminUserState, { data })
    },
    setAssignedUsersMutation(state, { data }) {
      setResultInMutation(state.assignedUserState, { data })
    },
    setTasksMutation(state, { data }) {
      setResultInMutation(state.taskState, { data })
    },
    setTopAssignedUsers(state, { data }) {
      setResultInMutation(state.toAssignedUserState, { data })
    }
  },
  actions: {
    getAdminUsers({ commit }) {
      const mutationName: string = 'setAdminUsersMutation';
      const apiQuery: string = `user?role=admin`
      getResultsFromFetching(commit, apiQuery, mutationName)
    },

    getAssignedUsers({ commit }) {
      const mutationName: string = 'setAssignedUsersMutation';
      const apiQuery: string = `user?role=assigned`
      getResultsFromFetching(commit, apiQuery, mutationName)
    },

    getTasks({ commit }, payload) {
      const mutationName: string = 'setTasksMutation';
      const apiQuery: string = `task?page=${payload}`
      getResultsFromFetching(commit, apiQuery, mutationName)
    },

    getTopAssignedUsers({ commit }) {
      const mutationName: string = 'setTopAssignedUsers';
      const apiQuery: string = `user/top-assigned`
      getResultsFromFetching(commit, apiQuery, mutationName)
    },
  },
  modules: {
  }
})
