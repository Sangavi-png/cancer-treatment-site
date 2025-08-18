<h2>Find Hospitals by Cancer Type</h2>

<label for="cancerType">Select Cancer Type:</label>
<select id="cancerType" name="cancerType">
  <option value="">--Choose--</option>
  <option value="breast">Breast Cancer</option>
  <option value="lung">Lung Cancer</option>
  <option value="colon">Colon Cancer</option>
  <option value="leukemia">Leukemia</option>
</select>

<br><br>
<button onclick="showHospitals()">Find Hospitals</button>

<div id="hospitalResults"></div>

<script>
  const hospitalSuggestions = {
    breast: ["Tata Memorial Hospital, Mumbai", "AIIMS, Delhi"],
    lung: ["Apollo Hospitals, Chennai", "Fortis Memorial, Gurgaon"],
    colon: ["Christian Medical College, Vellore", "Kokilaben Hospital, Mumbai"],
    leukemia: ["Rajiv Gandhi Cancer Institute, Delhi", "Kidwai Memorial, Bangalore"]
  };

  function showHospitals() {
    const type = document.getElementById("cancerType").value;
    const resultsDiv = document.getElementById("hospitalResults");

    if (hospitalSuggestions[type]) {
      const list = hospitalSuggestions[type]
        .map(hospital => `<li>${hospital}</li>`)
        .join("");
      resultsDiv.innerHTML = `<ul>${list}</ul>`;
    } else {
      resultsDiv.innerHTML = "Please select a valid cancer type.";
    }
  }
</script>
