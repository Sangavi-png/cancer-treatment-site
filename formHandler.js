function getFormData() {
  const cancerType = document.getElementById("cancerType").value.trim().toLowerCase();
  const stage = document.getElementById("stage").value;
  const age = parseInt(document.getElementById("age").value);

  return { cancerType, stage, age };
}

function validateForm({ cancerType, stage, age }) {
  return cancerType && stage && !isNaN(age);
}
