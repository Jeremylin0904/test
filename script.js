const roadmap = [
  {
    step: "Step 1",
    title: "Healthcare Foundations",
    detail: "Learn clinical workflows, care teams, and common patient journey maps.",
  },
  {
    step: "Step 2",
    title: "Data Literacy",
    detail: "Study EHR structures, coding systems (ICD/SNOMED), and data cleaning.",
  },
  {
    step: "Step 3",
    title: "ML + Deep Learning",
    detail: "Build and evaluate models on healthcare tabular, text, and imaging datasets.",
  },
  {
    step: "Step 4",
    title: "Trustworthy AI",
    detail: "Focus on explainability, bias mitigation, and validation in clinical settings.",
  },
  {
    step: "Step 5",
    title: "Regulation + Deployment",
    detail: "Understand FDA pathways, quality systems, and post-market monitoring.",
  },
  {
    step: "Step 6",
    title: "Portfolio + Impact",
    detail: "Publish case studies and demonstrate measurable clinical value.",
  },
];

const tips = [
  "Start every project by defining the clinical decision it supports.",
  "Track class imbalance early—healthcare datasets are often skewed.",
  "Document model limitations in plain language for non-technical users.",
  "Evaluate fairness across age, sex, and socioeconomic groups.",
  "Pair AUROC with calibration plots before claiming model readiness.",
];

const cardContainer = document.getElementById("roadmap-cards");
const tipButton = document.getElementById("tip-btn");
const tipOutput = document.getElementById("tip-output");

roadmap.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <p>${item.step}</p>
    <h3>${item.title}</h3>
    <p>${item.detail}</p>
  `;
  cardContainer.appendChild(card);
});

tipButton.addEventListener("click", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipOutput.textContent = `Tip: ${randomTip}`;
});
