import { IS_LOADIND } from './type'

export const uiLoading = () => (dispatch) => {
    return dispatch({type: IS_LOADIND})
}