function getSymptomsByType(type) {
  const symptomData = {
    breast: [
      "Lump in breast or armpit",
      "Nipple discharge (not breast milk)",
      "Skin dimpling or redness",
      "Pain in breast or nipple",
      "Nipple retraction"
    ],
    lung: [
      "Persistent cough",
      "Chest pain",
      "Shortness of breath",
      "Coughing up blood",
      "Unexplained weight loss"
    ],
    colon: [
      "Blood in stool",
      "Changes in bowel habits",
      "Abdominal pain or bloating",
      "Fatigue",
      "Unexplained weight loss"
    ],
    leukemia: [
      "Fatigue",
      "Frequent infections",
      "Easy bruising or bleeding",
      "Bone pain",
      "Swollen lymph nodes"
    ]
  };

  return symptomData[type] || ["Symptoms vary — consult a specialist"];
}
