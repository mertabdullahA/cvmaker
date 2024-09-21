// src/components/Step3Skills.js
import React from "react";

const Step3Skills = ({ skills, setSkills, nextStep, prevStep }) => {
    return (
        <div>
            <h2>Beceriler</h2>
            <input
                type="text"
                placeholder="Becerilerinizi girin"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />
            <button onClick={prevStep}>Geri</button>
            <button onClick={nextStep}>CV'yi Göster</button>
        </div>
    );
};

export default Step3Skills;
