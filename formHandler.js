function getFormData() {
  const cancerType = document.getElementById("cancerType").value.trim().toLowerCase();
  const stage = parseInt(document.getElementById("stage").value);
  const age = parseInt(document.getElementById("age").value);

  return { cancerType, stage, age };
}

function validateForm({ cancerType, stage, age }) {
  return cancerType && !isNaN(stage) && !isNaN(age);
}
