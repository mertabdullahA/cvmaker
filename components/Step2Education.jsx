// src/components/Step2Education.js
import React from "react";

const Step2Education = ({ education, setEducation, nextStep, prevStep }) => {
    return (
        <div>
            <h2>Eğitim Bilgileri</h2>
            <input
                type="text"
                placeholder="Eğitim bilgilerini girin"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
            />
            <button onClick={prevStep}>Geri</button>
            <button onClick={nextStep}>İleri</button>
        </div>
    );
};

export default Step2Education;
