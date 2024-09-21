import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
    const progress = (step / totalSteps) * 100; // Mevcut adımın yüzdesi

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
