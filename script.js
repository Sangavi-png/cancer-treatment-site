
document.getElementById("mainForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = getFormData();

  if (!validateForm(formData)) {
    document.getElementById("results").innerHTML = `<p>Please fill out all fields correctly.</p>`;
    return;
  }

  let treatment = "";

  // Treatment logic based on cancer type and stage
  switch (formData.cancerType) {
    case "breast":
      treatment = formData.stage === "early" ? "Surgery + Hormone Therapy" : "Chemotherapy + Targeted Therapy";
      break;
    case "lung":
      treatment = formData.stage === "early" ? "Surgery + Radiation" : "Chemotherapy + Immunotherapy";
      break;
    case "colon":
      treatment = formData.stage === "early" ? "Surgery + Monitoring" : "Chemotherapy + Radiation";
      break;
    case "leukemia":
      treatment = formData.stage === "early" ? "Targeted Therapy + Monitoring" : "Bone Marrow Transplant + Chemotherapy";
      break;
    default:
      treatment = "Consult an oncologist for a personalized treatment plan.";
  }

  // Age-based adjustment
  if (formData.age < 18) {
    treatment += " (Pediatric oncology recommended)";
  } else if (formData.age >= 18 && formData.age <= 40) {
    treatment += " (Consider fertility preservation)";
  } else if (formData.age > 40 && formData.age <= 65) {
    treatment += " (Standard protocols apply)";
  } else {
    treatment += " (Geriatric oncology consultation advised)";
  }

  const hospitals = getHospitalsByType(formData.cancerType);
  const hospitalList = hospitals.map(h => `<li>${h}</li>`).join("");

  document.getElementById("results").innerHTML = `
    <h3>Treatment Suggestion:</h3>
    <p>${treatment}</p>
    <h3>Recommended Hospitals:</h3>
    <ul>${hospitalList}</ul>
  `;
});
