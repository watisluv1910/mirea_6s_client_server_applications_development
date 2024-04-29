import { CHECKBOX_CLICK } from '../actionTypes.ts'
import { checkboxClick } from './actions.ts'

describe('checkboxClick', () => {
    it('returns checkboxClick action with action name in payload', () => {
        const checkboxName = 'anyCheckbox'

        const result = checkboxClick(checkboxName)

        expect(result).toEqual({ type: CHECKBOX_CLICK, payload: checkboxName })
    })
})
