document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Treatment suggestions will be shown here!");
});
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const type = document.getElementById("cancerType").value.toLowerCase();
  const stage = document.getElementById("stage").value;

  let suggestion = "Please consult a specialist for personalized care.";

  if (type === "breast" && stage === "1") {
    suggestion = "Lumpectomy and radiation therapy are common options.";
  } else if (type === "lung" && stage === "3") {
    suggestion = "Chemotherapy combined with radiation may be recommended.";
  }

  alert(suggestion);
});
