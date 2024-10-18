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
   
  },
  getters: {
  },
  mutations: {
    setAdminUsersMutation(state, { data }) {
      setResultInMutation(state.adminUserState, { data })
    },
    setAssignedUsersMutation(state, { data }) {
      setResultInMutation(state.assignedUserState, { data })
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
  },
  modules: {
  }
})
