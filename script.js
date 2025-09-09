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
      treatment = formData.stage <= 2 ? "Lumpectomy + Hormone Therapy"
                : formData.stage <= 4 ? "Mastectomy + Chemotherapy"
                : "Advanced Chemotherapy + Targeted Therapy";
      break;

    case "lung":
      treatment = formData.stage <= 2 ? "Surgery + Radiation"
                : formData.stage <= 4 ? "Chemotherapy + Immunotherapy"
                : "Palliative Care + Targeted Therapy";
      break;

    case "colon":
      treatment = formData.stage <= 2 ? "Surgery + Monitoring"
                : formData.stage <= 4 ? "Chemotherapy + Radiation"
                : "Advanced Chemotherapy + Supportive Care";
      break;

    case "leukemia":
      treatment = formData.stage <= 2 ? "Targeted Therapy + Monitoring"
                : formData.stage <= 4 ? "Chemotherapy + Immunotherapy"
                : "Bone Marrow Transplant + Intensive Care";
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
