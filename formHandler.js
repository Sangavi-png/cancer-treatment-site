function getFormData() {
  const cancerType = document.getElementById("cancerType").value.trim().toLowerCase();
  const symptoms = document.getElementById("symptoms").value.trim().toLowerCase();
  const stage = parseInt(document.getElementById("stage").value);
  const age = parseInt(document.getElementById("age").value);

  return { cancerType, symptoms, stage, age };
}

function validateForm({ cancerType, symptoms, stage, age }) {
  return cancerType && symptoms && !isNaN(stage) && !isNaN(age);
}
