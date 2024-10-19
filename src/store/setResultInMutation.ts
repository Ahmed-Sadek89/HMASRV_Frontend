type stateType = {
    data: any[] | null,
}

const setResultInMutation = (
    state: stateType,
    payload: stateType,
) => {
    state.data = payload.data;
}

export default setResultInMutation