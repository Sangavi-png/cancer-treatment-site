document.getElementById("mainForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = getFormData();

  if (!validateForm(formData)) {
    document.getElementById("results").innerHTML = `<p>Please fill out all fields correctly.</p>`;
    return;
  }

  let treatment = "";

  // ✅ Updated treatment logic for stage 1–6
  switch (formData.cancerType) {
    case "breast":
      if (formData.stage <= 2) {
        treatment = "Lumpectomy + Hormone Therapy";
      } else if (formData.stage <= 4) {
        treatment = "Mastectomy + Chemotherapy";
      } else {
        treatment = "Advanced Chemotherapy + Targeted Therapy";
      }
      break;

    case "lung":
      if (formData.stage <= 2) {
        treatment = "Surgery + Radiation";
      } else if (formData.stage <= 4) {
        treatment = "Chemotherapy + Immunotherapy";
      } else {
        treatment = "Palliative Care + Targeted Therapy";
      }
      break;

    case "colon":
      if (formData.stage <= 2) {
        treatment = "Surgery + Monitoring";
      } else if (formData.stage <= 4) {
        treatment = "Chemotherapy + Radiation";
      } else {
        treatment = "Advanced Chemotherapy + Supportive Care";
      }
      break;

    case "leukemia":
      if (formData.stage <= 2) {
        treatment = "Targeted Therapy + Monitoring";
      } else if (formData.stage <= 4) {
        treatment = "Chemotherapy + Immunotherapy";
      } else {
        treatment = "Bone Marrow Transplant + Intensive Care";
      }
      break;

    default:
      treatment = "Consult an oncologist for a personalized treatment plan.";
  }

  // ✅ Age-based adjustment
  if (formData.age < 18) {
    treatment += " (Pediatric oncology recommended)";
  } else if (formData.age >= 18 && formData.age <= 40) {
    treatment += " (Consider fertility preservation)";
  } else if (formData.age > 40 && formData.age <= 65) {
    treatment += " (Standard protocols apply)";
  } else {
    treatment += " (Geriatric oncology consultation advised)";
  }

  // ✅ Use Tamil Nadu hospitals only
  const hospitals = getTNHospitalsByType(formData.cancerType);
  const hospitalList = hospitals.map(h => `<li>${h}</li>`).join("");

  // ✅ Display results
  document.getElementById("results").innerHTML = `
    <h3>Treatment Suggestion:</h3>
    <p>${treatment}</p>
    <h3>Recommended Hospitals in Tamil Nadu:</h3>
    <ul>${hospitalList}</ul>
  `;
});
