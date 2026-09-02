// All content here is sourced directly from the uploaded resume.
// Placeholders are clearly marked — replace them with real info/assets.

import intellivestImage from "../assets/intellivest.jpg";
import carWindowImage from "../assets/automatic_car_window.jpg";
import steganographyImage from "../assets/steganography.jpg";
import circuitCertificateImage from "../assets/circuit_prototyping_certificate.png";
import inventeronCertificateImage from "../assets/inventeron_certificate.png";


export const profile = {
  name: "Yathik K",   
 title: "Electronics & Communication Engineer",
  subtitle: "Embedded Systems · BMS Operations · AutoCAD · AutoCAD Electrical ",
  phone: "+91-9741432959",
  email: "yathikdvg2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/yathik-k-b37498281", // PLACEHOLDER: Add LinkedIn URL
  github: null, // PLACEHOLDER: Add GitHub URL
photo: `${import.meta.env.BASE_URL}images/profile.jpg`, // PLACEHOLDER: replace with real photo
  intro:   
  "Electronics & Communication Engineering graduate with a strong foundation in Embedded Systems and hands-on experience in BMS operations within a data-centre environment. Trained in AutoCAD and AutoCAD Electrical, with practical exposure to 2D drafting, electrical schematics, wiring diagrams and technical documentation.",
  about:
  "Electronics & Communication Engineering graduate with a practical engineering background developed through Embedded Systems training, academic projects, and hands-on experience in Building Management Systems. Gained real-world exposure as a BMS Operator in a data-centre environment, monitoring HVAC, AHU, chiller and power systems. Further expanded my technical skills through AutoCAD and AutoCAD Electrical training, with hands-on exposure to 2D drafting, electrical schematics, wiring diagrams and technical documentation.",
};

export const journey = [              
  {
    stage: "Engineering",
    type: "Education",
    note: "B.E. — Electronics & Communication, GM Institute of Technology",
    date: "Dec 2020 – Jun 2024",
  },
  
  {
    stage: "Embedded Systems Training",
    type: "Training",
    note: "Emertxe Information Technologies, Bengaluru",
    date: "June 2024 – Feb 2025",
  },
  
  {
    stage: "CISCO — BMS Operator",
    type: "Experience",
    note: "Data-centre BMS operations, Bengaluru",
    date: "June 2025 – May 2026",
  },
  {
    stage: "AutoCAD & AutoCAD Electrical Training",
    type: "Training",
    note: "CADD Training Centre, Davanagere",
   date: "July 2026 – Sept 2026",
  },
];

export const strengths = [
  {
    title: "Practical Engineering",
    text: "Applies electronics and embedded-systems fundamentals to real hardware — from sensor-driven safety systems to microcontroller projects.",
  },
  {
    title: "Technical Monitoring",
    text: "Operated a Building Management System in a live data-centre environment, tracking HVAC, AHU, chiller and power systems.",
  },
  {
    title: "Problem Identification",
    text: "Identified BMS alarms and faults and routed them to the maintenance team for quick action.",
  },
  {
    title: "Design & Documentation",
    text: "Trained in AutoCAD and AutoCAD Electrical — schematics, wiring diagrams, panel layouts and daily technical logging.",
  },
];

export const skillCategories = [
  {
    category: "Programming",
    skills: ["C Programming", "C++"],
  },
  {
    category: "Embedded Systems",
    skills: [
      "Microcontrollers",
    "Microprocessors",
    "Embedded Linux",
    ],
  },
  {
    category: "BMS & Data Centre Operations",
    skills: ["BMS Monitoring", "HVAC", "AHU", "Chiller", "UPS", "PAC", "Alarm Monitoring"],
  },
  {
    category: "CAD & Design",
    skills: ["AutoCAD", "2D Drafting", "Layers", "Blocks", "Dimensions", "Annotations", "Hatch", "Modify Tools"],
  },
  {
    category: "AutoCAD Electrical",
    skills: [
      "Electrical Schematics",
      "Wiring Diagrams",
      "Electrical Symbols",
      "Wire Numbering",
      "Component Tagging",
      "Panel Layouts",
    ],
  },
];

export const experience = {
  company: "CISCO",
  location: "Bengaluru",
  role: "BMS Operator",
  duration: "June 2025 – May 2026",
  responsibilities: [
    "Monitored and operated the Building Management System (BMS) in a data centre environment.",
    "Monitored HVAC, AHU, chiller, and power systems through BMS.",
    "Identified alarms and faults and informed maintenance team for quick action.",
    "Maintained daily logbook and reports.",
  ],
};

export const trainings = [
  {
    title: "Advanced Embedded System Trainee",
    org: "Emertxe Information Technologies",
    location: "Bengaluru",
    date: "June 2024  – Jan 2025",
    description: "Hands-on technical training program in advanced embedded systems and Gained practical exposure to microcontrollers, embedded C/C++ programming, sensors and hardware interfacing.",
  },
  {
    title: "AutoCAD & AutoCAD Electrical Training",
    org: "CADD Training Centre",
    location: "Davanagere",
    date: "July 2026  – Sept 2026",
    description:
      "Hands-on training in 2D drafting, electrical schematics, wiring diagrams, electrical symbols and basic design documentation.",
    points: ["2D drafting", "Electrical schematics", "Wiring diagrams", "Electrical symbols", "Basic design documentation"],
  },
];

export const projects = [
  {
    type: "Academic Project",
    title: "Automatic Car Window Opening and Closing System Using Smoke Detector",
    date: "17 June – 13 July 2023",
    overview:
      "A safety-focused embedded system that reacts to smoke detection by automatically operating a car's windows.",
    objective:
      "Developed a system that automatically opens and closes car windows when smoke is detected, enhancing safety and ventilation.",
    technologies: ["Smoke Sensors", "Arduino UNO IDE", "Motor Drivers","Buzzer","LCD"],
    image: carWindowImage, // PLACEHOLDER: add project image
  },
  {
    type: "Academic Project",
    title: "Intellivest — Stay Bright, Stay Safe on Every Turn",
    date: "4 April – 3 May 2024",
    overview: "A wearable smart-safety vest built for workers and cyclists who need better visibility on the road.",
    objective: "Developed a smart safety vest to enhance visibility and safety for workers and cyclists.",
    technologies: ["High-visibility LEDs", "ADXL345 Sensor", "IR Sensor", "GPS","Blynk Application" ,"ESP32 Microcontroller","Buzzer"],
   image: intellivestImage,// PLACEHOLDER: add project image
  },
  {
    type: "Training Project",
    title: "Image Steganography Using LSB Encoding and Decoding",
    date: "2 Sept – 20 Sept 2024",
    overview: "A C-based data-hiding tool built during embedded-systems training.",
    objective:
      "Hide text-format data inside an image by replacing the Least Significant Bits of the image with secret text/data.",
    technologies: ["Advanced C File Operations", "Pointers", "Bitwise Operations", "Command Line Arguments"],
    image: steganographyImage, // PLACEHOLDER: add project image
  },
];

export const education = [
  {
    institution: "GM Institute of Technology",
    location: "Davanagere",
    program: "Bachelor of Engineering in Electronic and Communication",
    date: "December 2020 – June 2024",
    score: "CGPA: 7.06",
  },
  {
    institution: "Siddaganga PU Science College",
    location: "Davanagere",
    program: "Pre-University College",
    date: "June 2018 – June 2020",
    score: "Percentage: 71.33%",
  },
  {
    institution: "Sri Taralabalu Jagadguru Educational Institution",
    location: "Davanagere",
    program: "SSLC State Board",
    date: "2018",
    score: "Percentage: 79.36%",
  },
];

export const certifications = [
  {
    title: "Circuit Prototyping | Workshop",
    org: "Rlogic Technologies",
    date: "25 – 27 February 2022",
    image: circuitCertificateImage,// PLACEHOLDER: add certificate image
  },
  {
    title: "Design and Development of Embedded Systems and IoT | Internship",
    org: "Inventeron Technologies",
    date: "14 Aug – 14 Sept 2023",
    image: inventeronCertificateImage,// PLACEHOLDER: add certificate image
  },
];

export const languages = ["Kannada", "English", "Hindi"];
