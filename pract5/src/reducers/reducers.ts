import { CHECKBOX_CLICK } from '../actionTypes.ts'

const initialState: Record<string, boolean> = {}

export const checkboxReducer = (
    state = initialState,
    action: { type: string; payload?: string },
) => {
    if (action.type === CHECKBOX_CLICK && action.payload) {
        return { ...state, [action.payload]: !state[action.payload] }
    }
    return state
}
