function getTNHospitalsByType(type) {
  const hospitalData = {
    breast: ["Adyar Cancer Institute, Chennai", "GKNM Hospital, Coimbatore"],
    lung: ["Apollo Specialty Hospital, Chennai", "KMCH, Coimbatore"],
    colon: ["PSG Hospitals, Coimbatore", "Madurai Government Rajaji Hospital"],
    leukemia: ["Sri Ramachandra Medical Centre, Chennai", "CMC Vellore"]
  };

  return hospitalData[type] || ["General Oncology Center, Tamil Nadu"];
}
