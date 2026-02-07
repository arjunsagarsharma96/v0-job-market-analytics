export interface JobListing {
  id: number
  job_title: string
  location: string
  avg_salary: number
  experience_required: number
  skills: string
  industry: string
  company: string
}

export const jobListings: JobListing[] = [
  { id: 1, job_title: "Software Engineer", location: "Bangalore", avg_salary: 1800000, experience_required: 3, skills: "Python,JavaScript,React", industry: "IT", company: "TCS" },
  { id: 2, job_title: "Data Scientist", location: "Hyderabad", avg_salary: 2200000, experience_required: 4, skills: "Python,Machine Learning,SQL", industry: "IT", company: "Infosys" },
  { id: 3, job_title: "Product Manager", location: "Mumbai", avg_salary: 2800000, experience_required: 6, skills: "Strategy,Analytics,Leadership", industry: "Finance", company: "HDFC" },
  { id: 4, job_title: "Software Engineer", location: "Pune", avg_salary: 1500000, experience_required: 2, skills: "Java,Spring,AWS", industry: "IT", company: "Wipro" },
  { id: 5, job_title: "Data Scientist", location: "Bangalore", avg_salary: 2500000, experience_required: 5, skills: "Python,Deep Learning,TensorFlow", industry: "IT", company: "Google" },
  { id: 6, job_title: "DevOps Engineer", location: "Hyderabad", avg_salary: 1900000, experience_required: 3, skills: "Docker,Kubernetes,AWS", industry: "IT", company: "Amazon" },
  { id: 7, job_title: "UI/UX Designer", location: "Bangalore", avg_salary: 1400000, experience_required: 2, skills: "Figma,Sketch,CSS", industry: "IT", company: "Flipkart" },
  { id: 8, job_title: "Software Engineer", location: "Delhi", avg_salary: 1600000, experience_required: 3, skills: "Python,Django,PostgreSQL", industry: "E-commerce", company: "Snapdeal" },
  { id: 9, job_title: "Data Analyst", location: "Mumbai", avg_salary: 1200000, experience_required: 2, skills: "SQL,Excel,Tableau", industry: "Finance", company: "ICICI" },
  { id: 10, job_title: "Product Manager", location: "Bangalore", avg_salary: 3200000, experience_required: 8, skills: "Strategy,Data Analysis,Agile", industry: "IT", company: "Microsoft" },
  { id: 11, job_title: "Software Engineer", location: "Chennai", avg_salary: 1400000, experience_required: 2, skills: "JavaScript,Node.js,MongoDB", industry: "IT", company: "Zoho" },
  { id: 12, job_title: "Data Scientist", location: "Pune", avg_salary: 2000000, experience_required: 4, skills: "R,Python,Statistics", industry: "Healthcare", company: "Medlife" },
  { id: 13, job_title: "DevOps Engineer", location: "Bangalore", avg_salary: 2100000, experience_required: 4, skills: "Jenkins,Terraform,Azure", industry: "IT", company: "Accenture" },
  { id: 14, job_title: "Software Engineer", location: "Hyderabad", avg_salary: 2000000, experience_required: 4, skills: "Go,Microservices,gRPC", industry: "IT", company: "ServiceNow" },
  { id: 15, job_title: "Data Analyst", location: "Delhi", avg_salary: 1100000, experience_required: 1, skills: "Python,SQL,Power BI", industry: "Retail", company: "Reliance" },
  { id: 16, job_title: "UI/UX Designer", location: "Mumbai", avg_salary: 1600000, experience_required: 3, skills: "Figma,Adobe XD,Prototyping", industry: "Media", company: "Times" },
  { id: 17, job_title: "Product Manager", location: "Hyderabad", avg_salary: 2600000, experience_required: 5, skills: "Roadmapping,User Research,SQL", industry: "IT", company: "Salesforce" },
  { id: 18, job_title: "Software Engineer", location: "Bangalore", avg_salary: 2800000, experience_required: 6, skills: "Rust,C++,Systems", industry: "IT", company: "NVIDIA" },
  { id: 19, job_title: "DevOps Engineer", location: "Pune", avg_salary: 1700000, experience_required: 3, skills: "AWS,CI/CD,Linux", industry: "IT", company: "Persistent" },
  { id: 20, job_title: "Data Scientist", location: "Delhi", avg_salary: 1800000, experience_required: 3, skills: "Python,NLP,SpaCy", industry: "E-commerce", company: "Paytm" },
  { id: 21, job_title: "Software Engineer", location: "Mumbai", avg_salary: 2200000, experience_required: 5, skills: "React,TypeScript,GraphQL", industry: "Finance", company: "Goldman Sachs" },
  { id: 22, job_title: "Data Analyst", location: "Chennai", avg_salary: 1000000, experience_required: 1, skills: "Excel,SQL,Python", industry: "Manufacturing", company: "TVS" },
  { id: 23, job_title: "UI/UX Designer", location: "Delhi", avg_salary: 1300000, experience_required: 2, skills: "Wireframing,CSS,Figma", industry: "E-commerce", company: "Myntra" },
  { id: 24, job_title: "Product Manager", location: "Pune", avg_salary: 2400000, experience_required: 5, skills: "Analytics,Strategy,Scrum", industry: "IT", company: "Thoughtworks" },
  { id: 25, job_title: "Software Engineer", location: "Bangalore", avg_salary: 3500000, experience_required: 8, skills: "Python,Kubernetes,ML Ops", industry: "IT", company: "Meta" },
  { id: 26, job_title: "DevOps Engineer", location: "Chennai", avg_salary: 1600000, experience_required: 2, skills: "Docker,AWS,Shell", industry: "IT", company: "HCL" },
  { id: 27, job_title: "Data Scientist", location: "Mumbai", avg_salary: 2400000, experience_required: 5, skills: "Python,PyTorch,Computer Vision", industry: "Healthcare", company: "Apollo" },
  { id: 28, job_title: "Software Engineer", location: "Hyderabad", avg_salary: 1700000, experience_required: 3, skills: "Angular,Java,MySQL", industry: "IT", company: "Deloitte" },
  { id: 29, job_title: "Data Analyst", location: "Bangalore", avg_salary: 1300000, experience_required: 2, skills: "Tableau,Python,SQL", industry: "IT", company: "Capgemini" },
  { id: 30, job_title: "Software Engineer", location: "Delhi", avg_salary: 1900000, experience_required: 4, skills: "React,Node.js,Redis", industry: "E-commerce", company: "Amazon" },
  { id: 31, job_title: "UI/UX Designer", location: "Pune", avg_salary: 1200000, experience_required: 1, skills: "Figma,User Research,HTML", industry: "IT", company: "Infosys" },
  { id: 32, job_title: "Product Manager", location: "Chennai", avg_salary: 2200000, experience_required: 4, skills: "OKR,Metrics,Communication", industry: "IT", company: "Freshworks" },
  { id: 33, job_title: "DevOps Engineer", location: "Mumbai", avg_salary: 2300000, experience_required: 5, skills: "GCP,Ansible,Monitoring", industry: "Finance", company: "JPMorgan" },
  { id: 34, job_title: "Software Engineer", location: "Chennai", avg_salary: 1200000, experience_required: 1, skills: "Python,Flask,SQL", industry: "IT", company: "CTS" },
  { id: 35, job_title: "Data Scientist", location: "Bangalore", avg_salary: 2900000, experience_required: 6, skills: "Python,MLOps,AWS SageMaker", industry: "IT", company: "Amazon" },
  { id: 36, job_title: "Software Engineer", location: "Pune", avg_salary: 2400000, experience_required: 5, skills: "Scala,Spark,Kafka", industry: "IT", company: "ThoughtSpot" },
  { id: 37, job_title: "Data Analyst", location: "Hyderabad", avg_salary: 1100000, experience_required: 1, skills: "SQL,Excel,Looker", industry: "Retail", company: "BigBasket" },
  { id: 38, job_title: "Software Engineer", location: "Bangalore", avg_salary: 3000000, experience_required: 7, skills: "Java,Distributed Systems,AWS", industry: "IT", company: "Oracle" },
  { id: 39, job_title: "DevOps Engineer", location: "Delhi", avg_salary: 1800000, experience_required: 3, skills: "Terraform,Prometheus,Grafana", industry: "IT", company: "PayU" },
  { id: 40, job_title: "Product Manager", location: "Bangalore", avg_salary: 3500000, experience_required: 9, skills: "Vision,Strategy,P&L", industry: "IT", company: "Apple" },
  { id: 41, job_title: "Software Engineer", location: "Hyderabad", avg_salary: 1600000, experience_required: 2, skills: "C#,.NET,Azure", industry: "IT", company: "Microsoft" },
  { id: 42, job_title: "Data Scientist", location: "Chennai", avg_salary: 1700000, experience_required: 3, skills: "Python,Scikit-learn,Pandas", industry: "Manufacturing", company: "Caterpillar" },
  { id: 43, job_title: "UI/UX Designer", location: "Hyderabad", avg_salary: 1500000, experience_required: 3, skills: "Design Systems,Figma,Motion", industry: "IT", company: "Adobe" },
  { id: 44, job_title: "Software Engineer", location: "Mumbai", avg_salary: 2600000, experience_required: 6, skills: "Python,FastAPI,Elasticsearch", industry: "Finance", company: "Morgan Stanley" },
  { id: 45, job_title: "DevOps Engineer", location: "Bangalore", avg_salary: 2500000, experience_required: 5, skills: "Kubernetes,Helm,ArgoCD", industry: "IT", company: "Atlassian" },
  { id: 46, job_title: "Data Analyst", location: "Pune", avg_salary: 1200000, experience_required: 2, skills: "Power BI,SQL,DAX", industry: "IT", company: "Tech Mahindra" },
  { id: 47, job_title: "Software Engineer", location: "Delhi", avg_salary: 2100000, experience_required: 4, skills: "Vue.js,Python,Docker", industry: "E-commerce", company: "Meesho" },
  { id: 48, job_title: "Product Manager", location: "Mumbai", avg_salary: 3000000, experience_required: 7, skills: "GTM,Pricing,Analytics", industry: "Finance", company: "Kotak" },
  { id: 49, job_title: "Software Engineer", location: "Bangalore", avg_salary: 3200000, experience_required: 7, skills: "System Design,Java,Microservices", industry: "IT", company: "Uber" },
  { id: 50, job_title: "Data Scientist", location: "Pune", avg_salary: 2100000, experience_required: 4, skills: "Python,Time Series,SQL", industry: "IT", company: "Mu Sigma" },
]

export function getUniqueValues<K extends keyof JobListing>(data: JobListing[], key: K): string[] {
  return [...new Set(data.map((item) => String(item[key])))].sort()
}

export function formatSalary(value: number): string {
  if (value >= 1000000) return `${(value / 100000).toFixed(1)}L`
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
  return String(value)
}

export function formatSalaryFull(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}
