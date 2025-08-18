// Cancer data: treatment suggestions + hospital names
const cancerData = {
  breast: {
    treatment: "Common treatments include surgery, radiation therapy, chemotherapy, and hormone therapy.",
    hospitals: [
      "Tata Memorial Hospital, Mumbai",
      "AIIMS, Delhi",
      "Adyar Cancer Institute, Chennai"
    ]
  },
  lung: {
    treatment: "Treatment may involve surgery, chemotherapy, targeted therapy, and immunotherapy.",
    hospitals: [
      "Apollo Hospitals, Chennai",
      "Fortis Memorial Research Institute, Gurgaon",
      "Manipal Hospital, Bangalore"
    ]
  },
  colon: {
    treatment: "Surgery is often the first step, followed by chemotherapy or radiation depending on the stage.",
    hospitals: [
      "Christian Medical College, Vellore",
      "Kokilaben Hospital, Mumbai",
      "Max Super Specialty Hospital, Delhi"
    ]
  },
  leukemia: {
    treatment: "Chemotherapy is the main treatment, sometimes combined with stem cell transplant or targeted therapy.",
    hospitals: [
      "Rajiv Gandhi Cancer Institute, Delhi",
      "Kidwai Memorial Institute of Oncology, Bangalore",
      "HCG Cancer Centre, Ahmedabad"
    ]
  }
};

// Handle form submission
document.getElementById("cancerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  const type = document.getElementById("cancerType").value;
  const resultsDiv = document.getElementById("results");

  if (cancerData[type]) {
    const treatment = cancerData[type].treatment;
    const hospitalList = cancerData[type].hospitals
      .map(hospital => `<li>${hospital}</li>`)
      .join("");

    resultsDiv.innerHTML = `
      <h3>Treatment Suggestion:</h3>
      <p>${treatment}</p>
      <h3>Recommended Hospitals:</h3>
      <ul>${hospitalList}</ul>
    `;
  } else {
    resultsDiv.innerHTML = `<p>Please select a valid cancer type.</p>`;
  }
});
