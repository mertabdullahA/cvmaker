// src/components/Step4Summary.js
import React from "react";

const Step4Summary = ({ workExperience, education, skills, prevStep }) => {
    return (
        <div>
            <h2>CV Özeti</h2>
            <p><strong>İş Deneyimi:</strong> {workExperience}</p>
            <p><strong>Eğitim:</strong> {education}</p>
            <p><strong>Beceriler:</strong> {skills}</p>
            <button onClick={prevStep}>Geri</button>
        </div>
    );
};

export default Step4Summary;
