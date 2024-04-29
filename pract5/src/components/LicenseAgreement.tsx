import React from 'react'
import Checkbox from './Checkbox.tsx'
import AgreeementSubmitButton from "./AgreeementSubmitButton.tsx";

const LicenseAgreement: React.FC = () => {
    return (
        <div>
            <Checkbox name="agree" label="Agree"/>
            <AgreeementSubmitButton/>
        </div>
    );
};

export default LicenseAgreement;
