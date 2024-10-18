import { Commit } from "vuex"
import { apiFetch } from "./apiFetch"

const getResultsFromFetching = async (
    commit: Commit,
    apiQuery: string,
    mutationName: string
) => {
    // fetching is loading
    // console.log("fetching is loading")
    commit(mutationName, {
        data: [],
    })
    await apiFetch(apiQuery)
        .then((res: any) => {
            // fetching success
            // console.log("fetching is success")
            commit(mutationName, {
                data: res.data,
            })
        })
        .catch(() => {
            // fetching error
            commit(mutationName, {
                data: [],
            })
        })
}

export default getResultsFromFetching