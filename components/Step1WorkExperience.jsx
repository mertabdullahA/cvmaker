// src/components/Step1WorkExperience.js
import React from "react";

const Step1WorkExperience = ({ workExperience, setWorkExperience, nextStep }) => {
    return (
        <div>
            <h2>İş Deneyimi</h2>
            <input
                type="text"
                placeholder="İş deneyimi girin"
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
            />
            <button onClick={nextStep}>İleri</button>
        </div>
    );
};

export default Step1WorkExperience;
