document.getElementById("mainForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = getFormData();

  if (!validateForm(formData)) {
    document.getElementById("results").innerHTML = `<p>Please fill out all fields correctly.</p>`;
    return;
  }

  let treatment = "";

  switch (formData.cancerType) {
    case "breast":
      if (formData.stage === 0) {
        treatment = "Monitoring or localized surgery (carcinoma in situ)";
      } else if (formData.stage === 1) {
        treatment = "Lumpectomy + Hormone Therapy";
      } else if (formData.stage === 2) {
        treatment = "Mastectomy + Chemotherapy";
      } else if (formData.stage === 3) {
        treatment = "Chemotherapy + Radiation + Targeted Therapy";
      } else {
        treatment = "Advanced Chemotherapy + Palliative Care";
      }
      break;

    case "lung":
      if (formData.stage === 0) {
        treatment = "Observation or biopsy (pre-invasive)";
      } else if (formData.stage === 1) {
        treatment = "Surgery + Radiation";
      } else if (formData.stage === 2) {
        treatment = "Chemotherapy + Immunotherapy";
      } else if (formData.stage === 3) {
        treatment = "Combined modality treatment";
      } else {
        treatment = "Palliative Care + Targeted Therapy";
      }
      break;

    case "colon":
      if (formData.stage === 0) {
        treatment = "Polyp removal + Monitoring";
      } else if (formData.stage === 1) {
        treatment = "Surgery + Follow-up";
      } else if (formData.stage === 2) {
        treatment = "Surgery + Chemotherapy";
      } else if (formData.stage === 3) {
        treatment = "Chemotherapy + Radiation";
      } else {
        treatment = "Advanced Chemotherapy + Supportive Care";
      }
      break;

    case "leukemia":
      if (formData.stage === 0) {
        treatment = "Monitoring (early detection)";
      } else if (formData.stage === 1) {
        treatment = "Targeted Therapy";
      } else if (formData.stage === 2) {
        treatment = "Chemotherapy";
      } else if (formData.stage === 3) {
        treatment = "Chemotherapy + Immunotherapy";
      } else {
        treatment = "Bone Marrow Transplant + Intensive Care";
      }
      break;

    default:
      treatment = "Consult an oncologist for a personalized treatment plan.";
  }

  if (formData.age < 18) {
    treatment += " (Pediatric oncology recommended)";
  } else if (formData.age <= 40) {
    treatment += " (Consider fertility preservation)";
  } else if (formData.age <= 65) {
    treatment += " (Standard protocols apply)";
  } else {
    treatment += " (Geriatric oncology consultation advised)";
  }

  const symptoms = getSymptomsByType(formData.cancerType);
  const hospitals = getTNHospitalsByType(formData.cancerType);

  const symptomList = symptoms.map(s => `<li>${s}</li>`).join("");
  const hospitalList = hospitals.map(h => `<li>${h}</li>`).join("");

  document.getElementById("results").innerHTML = `
    <h3>Common Symptoms:</h3>
    <ul>${symptomList}</ul>
    <h3>Treatment Suggestion:</h3>
    <p>${treatment}</p>
    <h3>Recommended Hospitals in Tamil Nadu:</h3>
    <ul>${hospitalList}</ul>
  `;
});
