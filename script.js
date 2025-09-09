document.getElementById("mainForm").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted");

  const cancerType = document.getElementById("cancerType").value.trim().toLowerCase();
  const stage = parseInt(document.getElementById("stage").value);
  const age = parseInt(document.getElementById("age").value);

  if (!cancerType || isNaN(stage) || isNaN(age)) {
    document.getElementById("results").innerHTML = `<p>Please fill out all fields correctly.</p>`;
    return;
  }

  const treatment = "Example treatment for " + cancerType + " (Stage " + stage + ", Age " + age + ")";
  const hospitals = ["Adyar Cancer Institute, Chennai", "GKNM Hospital, Coimbatore"];
  const hospitalList = hospitals.map(h => `<li>${h}</li>`).join("");

  document.getElementById("results").innerHTML = `
    <h3>Treatment Suggestion:</h3>
    <p>${treatment}</p>
    <h3>Recommended Hospitals in Tamil Nadu:</h3>
    <ul>${hospitalList}</ul>
  `;
});
