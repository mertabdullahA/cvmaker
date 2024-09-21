import React, { useState } from "react";
import Step1WorkExperience from "./components/Step1WorkExperience";
import Step2Education from "./components/Step2Education";
import Step3Skills from "./components/Step3Skills";
import Step4Summary from "./components/Step4Summary";
import './App.css'; // CSS dosyasını dahil edin

function App() {
  const [step, setStep] = useState(1); // Adım numarasını tutar
  const totalSteps = 4; // Toplam adım sayısı

  const [workExperience, setWorkExperience] = useState(""); // İş deneyimi state'i
  const [education, setEducation] = useState(""); // Eğitim state'i
  const [skills, setSkills] = useState(""); // Beceriler state'i

  // Adımları değiştirmek için fonksiyonlar
  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // İlerleme barı genişliğini hesaplayan fonksiyon
  const getProgressBarWidth = () => {
    return `${(step / totalSteps) * 100}%`;
  };

  // Adımları render eden fonksiyon
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1WorkExperience
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2Education
            education={education}
            setEducation={setEducation}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Step3Skills
            skills={skills}
            setSkills={setSkills}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Step4Summary
            workExperience={workExperience}
            education={education}
            skills={skills}
            prevStep={prevStep}
          />
        );
      default:
        return <div>Adım bulunamadı!</div>;
    }
  };

  return (
    <div className="container">
      <h2>CV Oluşturucu</h2>
      <div className="underline"></div>

      {/* İlerleme barı */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: getProgressBarWidth() }}></div>
      </div>

      {/* Kaçıncı adımda olduğumuzu gösteren metin */}
      <div className="step">Adım {step} / {totalSteps}</div>

      {/* Sayfa içerikleri */}
      {renderStep()}
    </div>
  );
}

export default App;
