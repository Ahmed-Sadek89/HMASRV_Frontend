type stateType = {
    data: any[] | null,
}

const setResultInMutation = (
    state: stateType,
    payload: stateType,
) => {
    // console.log({ data: payload.data, error: payload.error, loading: payload.loading })
    state.data = payload.data;
}

export default setResultInMutation