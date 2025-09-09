function getSymptomsByType(type) {
  const symptomData = {
    breast: ["Lump in breast", "Nipple discharge", "Skin changes"],
    lung: ["Persistent cough", "Chest pain", "Shortness of breath"],
    colon: ["Blood in stool", "Abdominal pain", "Unexplained weight loss"],
    leukemia: ["Fatigue", "Frequent infections", "Easy bruising"]
  };

  return symptomData[type] || ["Symptoms vary — consult a specialist"];
}
