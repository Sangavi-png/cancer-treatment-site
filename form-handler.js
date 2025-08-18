document.getElementById("cancerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form reload

  const type = document.getElementById("cancerType").value;
  const resultsDiv = document.getElementById("results");
  const info = getCancerInfo(type);

  if (info) {
    const hospitalList = info.hospitals.map(h => `<li>${h}</li>`).join("");
    resultsDiv.innerHTML = `
      <h3>Treatment Suggestion:</h3>
      <p>${info.treatment}</p>
      <h3>Recommended Hospitals:</h3>
      <ul>${hospitalList}</ul>
    `;
  } else {
    resultsDiv.innerHTML = `<p>Please select a valid cancer type.</p>`;
  }
});
