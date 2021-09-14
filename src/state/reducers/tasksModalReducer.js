import { SHOW_MODAL, HIDE_MODAL } from '../actionCreators/actionTypes'

const reducer = (state = { isModalOn: false }, action) => {
    let updated = {}
    switch (action.type) {
        case (SHOW_MODAL):
            updated.isModalOn = true 
            return updated
            
            case (HIDE_MODAL):
            updated.isModalOn = false 
            return updated

        default:
            return state
    }
}

export default reducer