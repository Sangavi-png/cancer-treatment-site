function getHospitalsByType(type) {
  const hospitalData = {
    breast: ["Tata Memorial Hospital, Mumbai", "AIIMS, Delhi"],
    lung: ["Apollo Hospitals, Chennai", "Fortis Memorial, Gurgaon"],
    colon: ["CMC Vellore", "Max Super Specialty, Delhi"],
    leukemia: ["Narayana Health, Bangalore", "Kokilaben Hospital, Mumbai"]
  };

  return hospitalData[type] || ["General Oncology Center"];
}
