document.getElementById("mainForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const cancerType = document.getElementById("cancerType").value;
  const stage = document.getElementById("stage").value;
  const age = parseInt(document.getElementById("age").value);
  const resultsDiv = document.getElementById("results");

  if (!cancerType || !stage || isNaN(age)) {
    resultsDiv.innerHTML = `<p>Please fill out all fields correctly.</p>`;
    return;
  }

  let treatment = "";

  // Treatment logic based on cancer type and stage
  if (cancerType === "breast") {
    treatment = stage === "early" ? "Surgery + Hormone Therapy" : "Chemotherapy + Targeted Therapy";
  } else if (cancerType === "lung") {
    treatment = stage === "early" ? "Surgery + Radiation" : "Chemotherapy + Immunotherapy";
  } else if (cancerType === "colon") {
    treatment = stage === "early" ? "Surgery + Monitoring" : "Chemotherapy + Radiation";
  } else if (cancerType === "leukemia") {
    treatment = stage === "early" ? "Targeted Therapy + Monitoring" : "Bone Marrow Transplant + Chemotherapy";
  }

  // Age-based adjustment
  if (age < 18) {
    treatment += " (Pediatric oncology recommended)";
  } else if (age >= 18 && age <= 40) {
    treatment += " (Consider fertility preservation)";
  } else if (age > 40 && age <= 65) {
    treatment += " (Standard protocols apply)";
  } else {
    treatment += " (Geriatric oncology consultation advised)";
  }

  const hospitals = getHospitalsByType(cancerType);
  const hospitalList = hospitals.map(h => `<li>${h}</li>`).join("");

  resultsDiv.innerHTML = `
    <h3>Treatment Suggestion:</h3>
    <p>${treatment}</p>
    <h3>Recommended Hospitals:</h3>
    <ul>${hospitalList}</ul>
  `;
});
