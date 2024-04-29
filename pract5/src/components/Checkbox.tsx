import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCheckboxState} from "../selectors/selectors.ts";
import {checkboxClick} from "../actions/actions.ts";

const Checkbox: React.FC<{ name: string; label: string }> = ({name, label}) => {
    const checked = useSelector(getCheckboxState(name));

    const dispatch = useDispatch();

    const handleClick = React.useCallback(() => {
        dispatch(checkboxClick(name));
    }, [dispatch, name]);

    return (
        <div>
            <input id={name} type="checkbox" checked={checked} onChange={handleClick} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Checkbox;
