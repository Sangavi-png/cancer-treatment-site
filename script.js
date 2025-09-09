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
      treatment = [
        "Monitoring or localized surgery (carcinoma in situ)",
        "Lumpectomy + Hormone Therapy",
        "Mastectomy + Chemotherapy",
        "Chemotherapy + Radiation + Targeted Therapy",
        "Palliative Chemotherapy + Hormone or Targeted Therapy"
      ][formData.stage];
      break;

    case "lung":
      treatment = [
        "Observation or biopsy (pre-invasive)",
        "Surgery + Radiation",
        "Chemotherapy + Immunotherapy",
        "Combined modality treatment",
        "Targeted Therapy + Palliative Care"
      ][formData.stage];
      break;

    case "colon":
      treatment = [
        "Polyp removal + Monitoring",
        "Surgery + Follow-up",
        "Surgery + Chemotherapy",
        "Chemotherapy + Radiation",
        "Advanced Chemotherapy + Supportive Care"
      ][formData.stage];
      break;

    case "leukemia":
      treatment = [
        "Monitoring (early detection)",
        "Targeted Therapy",
        "Chemotherapy",
        "Chemotherapy + Immunotherapy",
        "Bone Marrow Transplant + Intensive Care"
      ][formData.stage];
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
