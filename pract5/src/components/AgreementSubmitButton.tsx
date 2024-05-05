import React from 'react'
import {getCheckboxState} from "../selectors/selectors.ts";
import {useSelector} from "react-redux";

const AgreementSubmitButton: React.FC = () => {
    const checkboxName = 'agree';
    const agreed = useSelector(getCheckboxState(checkboxName));

    return <input type="button" value="Submit" disabled={!agreed} />;
}

export default AgreementSubmitButton
