import React from 'react'
import Checkbox from './Checkbox.tsx'
import AgreementSubmitButton from "./AgreementSubmitButton.tsx";

const LicenseAgreement: React.FC = () => {
    return (
        <div>
            <p>
                Some license text here
            </p>
            <Checkbox name="agree" label="Agree"/>
            <AgreementSubmitButton/>
        </div>
    );
};

export default LicenseAgreement;
