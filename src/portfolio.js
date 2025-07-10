/* Tarun Bikkunur – portfolio.js
 * Minimal, clean exports (no duplicate identifiers)
 */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/********************* Splash Screen *********************/
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/********************* Illustration *********************/
const illustration = {animated: true};

/********************* Greeting *********************/
const greeting = {
  username: "Tarun Bikkunur",
  title: "Hi all, I'm Tarun",
  subTitle:
    "DevSecOps & Cloud Engineer | Data & AI Enthusiast | Full-Stack Developer — Building Secure, Scalable & Data-Driven Systems | Always Learning 🚀",
  resumeLink: "https://drive.google.com/YOUR_RESUME.pdf",
  displayGreeting: true
};

/********************* Social Links *********************/
const socialMediaLinks = {
  github: "https://github.com/Tarunsaib9",
  linkedin: "https://linkedin.com/in/tarunsai94",
  gmail: "tarunsaib9@gmail.com",
  display: true
};

/********************* Skills Section *********************/
const skillsSection = {
  display: true,
  title: "What I Do",
  subTitle:
    "Secure, scalable, data-driven cloud solutions via DevSecOps & AI/ML.",
  skills: [
    "⚡ Terraform & Kubernetes IaC + CI/CD",
    "⚡ Full-stack apps (React, Node.js, Python, .NET)",
    "⚡ FinOps cost-optimised multi-cloud",
    "⚡ GPT/AI integration & data pipelines"
  ],
  softwareSkills: [
    {skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: ".NET", fontAwesomeClassname: "fab fa-microsoft"}, // or 'fas fa-code'
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-server"}, // generic icon
    {skillName: "Terraform", fontAwesomeClassname: "fas fa-code-branch"}
  ]
};

/********************* Tech-Stack Bars *********************/
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "DevSecOps / Cloud", progressPercentage: "90%"},
    {Stack: "Full-Stack", progressPercentage: "80%"},
    {Stack: "AI / Data", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

/********************* Work Experience *********************/
const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevSecOps Engineer",
      company: "TREEZ",
      companylogo: require("./assets/images/treez.png"),
      date: "May 2023 – Sep 2024",
      desc: "• Delivered AWS FinOps dashboards • Integrated SaaS + SSO • Terraform + EKS",
      descBullets: [
        "Real-time cost visualisation dashboards",
        "Azure AD single sign-on",
        "IaC with Terraform and Helm"
      ]
    },
    {
      role: "DevOps & Full-Stack Engineer",
      company: "CIBC",
      companylogo: require("./assets/images/cibc.png"),
      date: "May 2021 – Mar 2023",
      desc: "• Migrated legacy apps to Azure • React dashboards • GitHub Actions CI/CD",
      descBullets: [
        "Monolith-to-Azure migration",
        "GitHub Actions CI/CD pipelines",
        "React/.NET dashboard development"
      ]
    },
    {
      role: "DevOps Engineer (Developer)",
      company: "Aequilibrium",
      companylogo: require("./assets/images/aequilibrium.png"),
      date: "Jun 2019 – May 2021",
      desc: "• Hybrid-cloud CI/CD • Node.js & Python microservices • Karpenter autoscaling",
      descBullets: [
        "Hybrid cloud deployments",
        "Node.js & Python micro-services",
        "Autoscaling with Prometheus + Karpenter"
      ]
    }
  ]
};

/********************* Education *********************/
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "NYIT Vancouver (2017 – 2019)",
      logo: "nyitLogo.png",
      subHeader: "M.S. in Information, Network & Cybersecurity",
      desc: "Specialized in Cloud Security, Risk Management, and Applied Analytics.",
      descBullets: [
        "Advanced Cybersecurity Practices & Applied Data Analytics with SQL"
      ]
    },
    {
      schoolName: "JNTU Hyderabad (2012 – 2016)",
      logo: "jntuLogo.png",
      subHeader: "B.Tech in Electronics & Communication Engineering",
      desc: "Hands-on focus in automation, web technologies, and IoT systems.",
      descBullets: ["OS, Software Engineering, Networking, MATLAB, Web Tech"]
    }
  ]
};

/********************* Big Projects *********************/
const bigProjects = [
  /* ───────────────────────────── 1 ───────────────────────────── */
  {
    image: "techsyit.png", // company logo or hero graphic (add to /assets/images/)
    projectName: "Founder & CTO",
    projectDesc:
      "We design and deliver software with a focus on development, security, data, and AI - built for real-world impact, the startup mindset",
    footerLinks: [{name: "Website", url: "https://techsyitsolutions.com/"}],
    display: true
  },

  /* ───────────────────────────── 2 ───────────────────────────── */
  {
    image: "smart.png", // put the image in /src/assets/images/
    projectName: "Smart Safety Assistant",
    projectDesc: "AI chatbot + Streamlit dashboard.",
    footerLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Tarunsaib9/smart-safety-assistant"
      }
    ],
    display: true // ← set false to hide this tile
  }
];

/********************* Achievements / Certs *********************/
const achievementSection = {
  title: "Certifications",
  subtitle: "Key certifications demonstrating cloud & AI expertise.",
  achievementsCards: [
    {
      title: "Azure AI-900",
      image: require("./assets/images/certifications/azure.png")
    },
    {
      title: "IBM ACE Essentials",
      image: require("./assets/images/certifications/IBM.png")
    },
    {
      title: "Databricks GenAI",
      image: require("./assets/images/certifications/databricks.png")
    },
    {
      title: "AWS Certified Solutions Architect - Associate ",
      image: require("./assets/images/certifications/aws.png")
    }
  ],
  display: true
};

/********************* Contact *********************/
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just say hi.",
  number: "+1-604-300-4634",
  email_address: "tarunsaib9@gmail.com"
};

const isHireable = false;

/********************* Disabled Optional Sections *********************/
const blogSection = {display: false};
const talkSection = {display: false};
const podcastSection = {display: false};
const twitterDetails = {userName: "", display: false};

/********************* Aggregate Export *********************/
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails
};
