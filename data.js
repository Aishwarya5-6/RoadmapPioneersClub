/* ============================================================
   PIONEERS ROADMAP HUB — DATA FILE
   ------------------------------------------------------------
   Everything the site displays lives in this one object.
   To add/edit a domain, sub-domain, or roadmap, just edit the
   plain JS/JSON below — no need to touch script.js or index.html.
   ============================================================ */

const ROADMAP_DATA = {
  engineering: {
    id: "engineering",
    name: "Engineering & Technology",
    icon: "💻",
    tagline: "Build, code, design and engineer the future",
    subdomains: {
      "ai-ml": {
        id: "ai-ml",
        name: "Artificial Intelligence & Machine Learning",
        icon: "🤖",
        intro: {
          what: "AI & ML is the field of building systems that learn patterns from data and make predictions or decisions, powering everything from chatbots to self-driving cars.",
          who: "Students who love mathematics, logical thinking, and want to build intelligent systems that can see, understand language, or make decisions."
        },
        beginner: {
          topics: ["Python programming basics", "Mathematics: linear algebra, probability & statistics", "Basic data structures & algorithms", "Introduction to Machine Learning concepts"],
          skills: ["Writing clean Python code", "Working with NumPy & Pandas", "Basic data visualization (Matplotlib)", "Understanding supervised vs unsupervised learning"]
        },
        intermediate: {
          concepts: ["Regression, classification & clustering algorithms", "Neural networks & backpropagation", "Feature engineering & model evaluation", "Introduction to Deep Learning (CNNs, RNNs)"],
          tools: ["Scikit-learn", "TensorFlow / Keras", "PyTorch", "Jupyter Notebook / Google Colab"]
        },
        advanced: {
          skills: ["Transformers & Large Language Models", "Reinforcement Learning", "MLOps & model deployment", "Model optimization & explainable AI"],
          research: ["Generative AI (GANs, Diffusion Models)", "Computer Vision research", "Natural Language Processing", "AI Ethics & Responsible AI"]
        },
        projects: [
          "Build a spam email classifier using Scikit-learn",
          "Create a handwritten digit recognizer using a neural network (MNIST)",
          "Build a movie recommendation system",
          "Develop a chatbot using NLP & transformer models",
          "Create an end-to-end deployed ML app (e.g., disease prediction) with a live API"
        ],
        tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Google Colab", "Docker"],
        resources: [
          "Andrew Ng's Machine Learning course (Coursera, free audit)",
          "fast.ai — Practical Deep Learning for Coders",
          "Kaggle Learn micro-courses & competitions",
          "freeCodeCamp Machine Learning with Python",
          "3Blue1Brown Neural Networks YouTube series"
        ],
        careers: ["Machine Learning Engineer", "Data Scientist", "AI Research Engineer", "NLP Engineer", "Computer Vision Engineer"]
      },
      "software-dev": {
        id: "software-dev",
        name: "Software Development",
        icon: "🧑‍💻",
        intro: {
          what: "Software Development is designing, building, and maintaining applications — websites, mobile apps, and large-scale systems that people use every day.",
          who: "Students who enjoy problem-solving, building things end-to-end, and want a versatile, high-demand career in tech."
        },
        beginner: {
          topics: ["Programming fundamentals (C/C++/Python/Java)", "Data structures & algorithms", "Version control with Git & GitHub", "Basic HTML, CSS & JavaScript"],
          skills: ["Writing & debugging code", "Using the command line", "Understanding OOP concepts", "Solving basic coding problems"]
        },
        intermediate: {
          concepts: ["Frontend frameworks (React/Vue/Angular)", "Backend development & REST APIs", "Databases (SQL & NoSQL)", "Software design patterns & clean code"],
          tools: ["VS Code", "Node.js / Express", "Postman", "MongoDB / MySQL", "GitHub"]
        },
        advanced: {
          skills: ["System design & scalability", "Microservices architecture", "CI/CD pipelines", "Testing & performance optimization"],
          research: ["Distributed systems", "Cloud-native application design", "Security in software systems", "Low-latency system engineering"]
        },
        projects: [
          "Build a personal portfolio website with HTML/CSS/JS",
          "Create a to-do list app with local storage",
          "Build a full-stack blog application (MERN stack)",
          "Develop a real-time chat application using WebSockets",
          "Design a scalable e-commerce platform with microservices"
        ],
        tools: ["Git & GitHub", "VS Code", "React", "Node.js", "MongoDB", "Docker", "Postman"],
        resources: [
          "freeCodeCamp full curriculum",
          "The Odin Project (full stack web dev)",
          "CS50 by Harvard (edX, free)",
          "roadmap.sh developer roadmaps",
          "MDN Web Docs for web fundamentals"
        ],
        careers: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Mobile App Developer"]
      },
      "data-science": {
        id: "data-science",
        name: "Data Science",
        icon: "📊",
        intro: {
          what: "Data Science is the practice of extracting insights and value from data using statistics, programming, and visualization to help organizations make decisions.",
          who: "Students who enjoy working with numbers, spotting patterns, and telling stories through data."
        },
        beginner: {
          topics: ["Statistics & probability fundamentals", "Python or R programming", "Excel & data cleaning basics", "SQL for querying data"],
          skills: ["Data cleaning & wrangling", "Basic data visualization", "Descriptive statistics", "Writing SQL queries"]
        },
        intermediate: {
          concepts: ["Exploratory Data Analysis (EDA)", "Machine learning for data science", "Data storytelling & dashboards", "A/B testing & hypothesis testing"],
          tools: ["Pandas / NumPy", "Power BI / Tableau", "Scikit-learn", "PostgreSQL"]
        },
        advanced: {
          skills: ["Big data processing", "Predictive modeling at scale", "Time series forecasting", "Building data pipelines"],
          research: ["Deep learning for structured data", "Causal inference", "Data engineering & ETL systems", "Business intelligence strategy"]
        },
        projects: [
          "Analyze and visualize a public dataset (e.g., COVID-19 or IPL data)",
          "Build an interactive dashboard using Power BI or Tableau",
          "Create a sales forecasting model using time series analysis",
          "Perform customer segmentation using clustering",
          "Build an end-to-end data pipeline with a predictive dashboard"
        ],
        tools: ["Python", "Pandas", "Power BI", "Tableau", "SQL", "Jupyter Notebook", "Apache Spark"],
        resources: [
          "Kaggle Learn (free micro-courses)",
          "Google Data Analytics Certificate (Coursera)",
          "StatQuest YouTube channel",
          "Khan Academy Statistics & Probability",
          "Mode Analytics SQL tutorial"
        ],
        careers: ["Data Analyst", "Data Scientist", "Business Intelligence Analyst", "Data Engineer", "Analytics Consultant"]
      },
      "cyber-security": {
        id: "cyber-security",
        name: "Cyber Security",
        icon: "🛡️",
        intro: {
          what: "Cyber Security involves protecting systems, networks, and data from digital attacks, unauthorized access, and breaches.",
          who: "Students who are curious about how systems break, enjoy puzzles, and want to protect the digital world."
        },
        beginner: {
          topics: ["Networking basics (TCP/IP, DNS, OSI model)", "Operating systems (Linux fundamentals)", "Basics of cryptography", "Introduction to cyber threats & attacks"],
          skills: ["Using Linux command line", "Understanding firewalls & VPNs", "Basic scripting (Python/Bash)", "Recognizing phishing & social engineering"]
        },
        intermediate: {
          concepts: ["Ethical hacking & penetration testing", "Web application security (OWASP Top 10)", "Malware analysis basics", "Security policies & risk assessment"],
          tools: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Kali Linux"]
        },
        advanced: {
          skills: ["Advanced penetration testing", "Digital forensics", "Cloud security", "Red teaming & incident response"],
          research: ["Zero-day vulnerability research", "AI in cyber security", "Blockchain security", "IoT security"]
        },
        projects: [
          "Set up a home lab with Kali Linux & practice basic scanning",
          "Build a simple password strength checker & hash cracker",
          "Perform a web app penetration test on a practice site (DVWA)",
          "Create a network intrusion detection system",
          "Conduct a full security audit & write a professional pentest report"
        ],
        tools: ["Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Nmap", "OWASP ZAP"],
        resources: [
          "TryHackMe (free beginner rooms)",
          "Hack The Box Academy",
          "OWASP official documentation",
          "Cybrary free courses",
          "Professor Messer Security+ videos"
        ],
        careers: ["Security Analyst", "Penetration Tester", "SOC Analyst", "Security Engineer", "Digital Forensics Investigator"]
      },
      "cloud-computing": {
        id: "cloud-computing",
        name: "Cloud Computing",
        icon: "☁️",
        intro: {
          what: "Cloud Computing is delivering computing services — servers, storage, databases, networking — over the internet, powering nearly every modern application.",
          who: "Students interested in infrastructure, scalability, and how modern apps are deployed and run globally."
        },
        beginner: {
          topics: ["Cloud computing fundamentals (IaaS, PaaS, SaaS)", "Basic networking concepts", "Linux fundamentals", "Introduction to virtualization"],
          skills: ["Navigating a cloud console (AWS/Azure/GCP)", "Basic Linux command line usage", "Understanding storage & compute services", "Setting up a virtual machine"]
        },
        intermediate: {
          concepts: ["Cloud architecture design", "Containers & orchestration", "Infrastructure as Code (IaC)", "Cloud security basics"],
          tools: ["AWS / Azure / GCP", "Docker", "Kubernetes", "Terraform"]
        },
        advanced: {
          skills: ["Multi-cloud & hybrid cloud strategy", "Serverless architecture", "Cost optimization at scale", "DevOps & CI/CD on cloud"],
          research: ["Edge computing", "Cloud-native security", "FinOps (cloud financial management)", "Distributed cloud systems"]
        },
        projects: [
          "Host a static website on AWS S3 with a custom domain",
          "Deploy a web app on an EC2 / Azure VM instance",
          "Containerize an application with Docker and deploy it",
          "Set up a Kubernetes cluster to manage microservices",
          "Build a fully automated CI/CD pipeline deploying to the cloud"
        ],
        tools: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "Jenkins"],
        resources: [
          "AWS Cloud Practitioner Essentials (free)",
          "Microsoft Learn Azure Fundamentals",
          "Google Cloud Skills Boost free labs",
          "KodeKloud free Kubernetes course",
          "freeCodeCamp DevOps & Cloud tutorials"
        ],
        careers: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer", "Cloud Architect", "Cloud Security Engineer"]
      },
      "electronics-iot": {
        id: "electronics-iot",
        name: "Electronics & IoT",
        icon: "🔌",
        intro: {
          what: "Electronics & IoT focuses on designing circuits and connected smart devices that sense, communicate, and act in the physical world.",
          who: "Students who enjoy hands-on hardware tinkering, circuits, and building smart connected gadgets."
        },
        beginner: {
          topics: ["Basic electronics (circuits, resistors, capacitors)", "Digital logic & microcontrollers", "Introduction to sensors & actuators", "Basic C/Python programming"],
          skills: ["Reading circuit diagrams", "Soldering & breadboarding", "Programming a microcontroller", "Using multimeters"]
        },
        intermediate: {
          concepts: ["Embedded systems programming", "Communication protocols (I2C, SPI, UART)", "IoT architecture & cloud connectivity", "PCB design basics"],
          tools: ["Arduino", "Raspberry Pi", "ESP32/ESP8266", "KiCad / Eagle (PCB design)"]
        },
        advanced: {
          skills: ["Real-time operating systems (RTOS)", "Edge AI on embedded devices", "Industrial IoT & automation", "Wireless protocols (LoRa, Zigbee, 5G IoT)"],
          research: ["Smart cities & sensor networks", "Wearable technology", "Energy-efficient IoT design", "Robotics integration"]
        },
        projects: [
          "Build a home automation system controlled via a mobile app",
          "Create a weather monitoring station with sensors",
          "Build a smart irrigation system using soil moisture sensors",
          "Develop a IoT-based health monitoring wearable",
          "Design a full smart-city prototype (traffic/parking/lighting) with cloud dashboard"
        ],
        tools: ["Arduino IDE", "Raspberry Pi", "MQTT", "Blynk / Node-RED", "KiCad", "Proteus"],
        resources: [
          "Arduino official tutorials",
          "Raspberry Pi Foundation free projects",
          "Coursera Introduction to IoT (free audit)",
          "Random Nerd Tutorials (ESP32/ESP8266)",
          "YouTube: GreatScott! & Andreas Spiess"
        ],
        careers: ["Embedded Systems Engineer", "IoT Developer", "Hardware Design Engineer", "Robotics Engineer", "Firmware Engineer"]
      },
      mechanical: {
        id: "mechanical",
        name: "Mechanical Engineering",
        icon: "⚙️",
        intro: {
          what: "Mechanical Engineering applies physics and materials science to design, analyze, and manufacture mechanical systems — from engines to robots.",
          who: "Students who like understanding how machines work and enjoy design, physics, and hands-on building."
        },
        beginner: {
          topics: ["Engineering mechanics & thermodynamics", "Strength of materials", "Engineering drawing & CAD basics", "Manufacturing processes fundamentals"],
          skills: ["Reading technical drawings", "Basic CAD modeling", "Understanding stress, strain & forces", "Basic workshop practice"]
        },
        intermediate: {
          concepts: ["Machine design", "Fluid mechanics & heat transfer", "CAD/CAM & simulation", "Automation & mechatronics basics"],
          tools: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB"]
        },
        advanced: {
          skills: ["Finite Element Analysis (FEA)", "Robotics & automation systems", "Advanced manufacturing (CNC, 3D printing)", "Product design & prototyping"],
          research: ["Sustainable/green manufacturing", "Electric vehicle design", "Robotics & AI-driven automation", "Advanced materials & composites"]
        },
        projects: [
          "Design a simple mechanical component in AutoCAD/SolidWorks",
          "Build a 3D-printed mechanical assembly (e.g., a gear train)",
          "Design and simulate a heat exchanger",
          "Build a small robotic arm prototype",
          "Design and analyze an electric vehicle chassis/component using FEA"
        ],
        tools: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB", "Fusion 360", "CNC machines / 3D printers"],
        resources: [
          "NPTEL Mechanical Engineering courses (free)",
          "MIT OpenCourseWare Mechanical Engineering",
          "Coursera Introduction to Engineering Mechanics",
          "YouTube: Learn Engineering channel",
          "GrabCAD community for CAD models"
        ],
        careers: ["Design Engineer", "Manufacturing Engineer", "Automotive Engineer", "Robotics Engineer", "R&D Engineer"]
      },
      civil: {
        id: "civil",
        name: "Civil Engineering",
        icon: "🏗️",
        intro: {
          what: "Civil Engineering is the design, construction, and maintenance of infrastructure — buildings, roads, bridges, and water systems.",
          who: "Students interested in construction, infrastructure, and shaping the physical world around communities."
        },
        beginner: {
          topics: ["Engineering mechanics & surveying", "Building materials basics", "Structural analysis fundamentals", "Engineering drawing & AutoCAD basics"],
          skills: ["Reading structural drawings", "Basic surveying techniques", "Understanding load & stress in structures", "Basic CAD drafting"]
        },
        intermediate: {
          concepts: ["Structural design (RCC & steel)", "Geotechnical engineering", "Transportation engineering", "Construction management basics"],
          tools: ["AutoCAD", "STAAD.Pro", "Revit", "MS Project"]
        },
        advanced: {
          skills: ["Earthquake-resistant design", "Sustainable & green building design", "Advanced structural analysis (BIM)", "Project & cost management"],
          research: ["Smart infrastructure & sensors", "Sustainable construction materials", "Disaster-resilient structures", "Urban infrastructure planning"]
        },
        projects: [
          "Create a site survey & topographic map using surveying tools",
          "Design a simple RCC beam/column using STAAD.Pro",
          "Model a small building using Revit (BIM)",
          "Design a water supply/drainage system for a locality",
          "Design a complete multi-storey structure with cost estimation & sustainability plan"
        ],
        tools: ["AutoCAD", "STAAD.Pro", "Revit/BIM", "MS Project", "Primavera", "Total Station"],
        resources: [
          "NPTEL Civil Engineering free courses",
          "Coursera Construction Management specialization",
          "YouTube: The Efficient Engineer",
          "IS Codes (Bureau of Indian Standards) references",
          "Autodesk free student licenses & tutorials"
        ],
        careers: ["Structural Engineer", "Site Engineer", "Construction Manager", "Urban Infrastructure Planner", "Geotechnical Engineer"]
      },
      electrical: {
        id: "electrical",
        name: "Electrical Engineering",
        icon: "⚡",
        intro: {
          what: "Electrical Engineering deals with the study and application of electricity, electronics, and electromagnetism in power systems and devices.",
          who: "Students who are curious about power systems, circuits, and how electricity is generated, transmitted, and used."
        },
        beginner: {
          topics: ["Circuit theory (DC & AC)", "Electrical measurements", "Basic electronics", "Electromagnetism fundamentals"],
          skills: ["Analyzing simple circuits", "Using multimeters & oscilloscopes", "Reading circuit diagrams", "Basic MATLAB/Simulink usage"]
        },
        intermediate: {
          concepts: ["Power systems & machines", "Control systems", "Power electronics", "Signal processing basics"],
          tools: ["MATLAB/Simulink", "PSpice", "ETAP", "Arduino for prototyping"]
        },
        advanced: {
          skills: ["Renewable energy systems design", "Smart grid technology", "Electric vehicle powertrains", "Advanced control systems"],
          research: ["Renewable & solar energy systems", "Smart grid & energy storage", "Power electronics for EVs", "High-voltage engineering"]
        },
        projects: [
          "Build a simple DC motor speed controller",
          "Design a solar-powered charging circuit",
          "Simulate a power distribution system in ETAP/Simulink",
          "Build an automatic power factor correction system",
          "Design a small-scale smart grid prototype with renewable integration"
        ],
        tools: ["MATLAB/Simulink", "ETAP", "PSpice", "Arduino", "AutoCAD Electrical"],
        resources: [
          "NPTEL Electrical Engineering courses (free)",
          "MIT OpenCourseWare Circuits & Electronics",
          "Coursera Power Systems specialization",
          "YouTube: ALL ABOUT ELECTRONICS",
          "All About Circuits online textbook"
        ],
        careers: ["Electrical Design Engineer", "Power Systems Engineer", "Control Systems Engineer", "Renewable Energy Engineer", "Instrumentation Engineer"]
      }
    }
  },

  business: {
    id: "business",
    name: "Business & Management",
    icon: "🏢",
    tagline: "Lead, strategize and grow organizations",
    subdomains: {
      marketing: {
        id: "marketing",
        name: "Marketing",
        icon: "📣",
        intro: {
          what: "Marketing is the practice of promoting and selling products or services, including researching, advertising, and understanding customers.",
          who: "Students who are creative, love storytelling, understand people, and enjoy building brands."
        },
        beginner: {
          topics: ["Marketing fundamentals (4Ps)", "Consumer behavior basics", "Introduction to digital marketing", "Branding basics"],
          skills: ["Basic market research", "Content writing", "Social media posting", "Understanding target audiences"]
        },
        intermediate: {
          concepts: ["SEO & SEM", "Social media marketing strategy", "Email & content marketing", "Marketing analytics"],
          tools: ["Google Analytics", "Canva", "Meta Business Suite", "Mailchimp", "SEMrush"]
        },
        advanced: {
          skills: ["Performance marketing & paid ads (Google/Meta Ads)", "Brand strategy & positioning", "Marketing automation", "Data-driven campaign optimization"],
          research: ["AI in marketing (personalization)", "Influencer marketing strategy", "Customer experience (CX) design", "Growth hacking"]
        },
        projects: [
          "Create a social media content calendar for a mock brand",
          "Run a small SEO-optimized blog and track traffic growth",
          "Design and launch a mock Google/Meta ad campaign",
          "Conduct market research & create a go-to-market strategy",
          "Build a full digital marketing campaign with analytics report for a real/mock product"
        ],
        tools: ["Google Analytics", "Canva", "HubSpot", "Meta Ads Manager", "SEMrush/Ahrefs"],
        resources: [
          "Google Digital Garage (free certification)",
          "HubSpot Academy free courses",
          "Coursera Digital Marketing Specialization (free audit)",
          "Neil Patel's marketing blog",
          "YouTube: Think Media & Simplilearn Marketing"
        ],
        careers: ["Digital Marketing Executive", "Brand Manager", "SEO Specialist", "Social Media Manager", "Marketing Analyst"]
      },
      finance: {
        id: "finance",
        name: "Finance",
        icon: "💰",
        intro: {
          what: "Finance covers managing money — investments, budgeting, banking, and financial planning for individuals and organizations.",
          who: "Students who are analytical, detail-oriented, and interested in money, markets, and investments."
        },
        beginner: {
          topics: ["Basics of accounting", "Personal finance & budgeting", "Introduction to financial markets", "Time value of money"],
          skills: ["Reading financial statements", "Basic Excel for finance", "Understanding stocks & bonds basics", "Budget planning"]
        },
        intermediate: {
          concepts: ["Corporate finance", "Financial modeling & valuation", "Investment analysis & portfolio management", "Risk management basics"],
          tools: ["Excel (advanced)", "Bloomberg Terminal basics", "Financial modeling templates", "Power BI"]
        },
        advanced: {
          skills: ["Equity research & valuation", "Derivatives & risk management", "Mergers & acquisitions analysis", "Quantitative finance"],
          research: ["FinTech & blockchain finance", "Algorithmic trading", "ESG & sustainable investing", "Behavioral finance"]
        },
        projects: [
          "Create a personal budgeting spreadsheet with financial goals",
          "Analyze a public company's financial statements",
          "Build a stock portfolio tracker with mock investments",
          "Create a financial model & valuation for a startup",
          "Conduct an equity research report on a listed company"
        ],
        tools: ["Excel", "Bloomberg/Reuters basics", "Power BI", "Tally (accounting)", "Financial modeling templates"],
        resources: [
          "Corporate Finance Institute (CFI) free resources",
          "Khan Academy Finance & Capital Markets",
          "NSE/BSE investor education modules (India)",
          "Coursera Financial Markets by Yale (free audit)",
          "Investopedia articles & tutorials"
        ],
        careers: ["Financial Analyst", "Investment Banking Analyst", "Equity Research Analyst", "Financial Planner", "Corporate Finance Associate"]
      },
      hr: {
        id: "hr",
        name: "Human Resources",
        icon: "🧑‍🤝‍🧑",
        intro: {
          what: "Human Resources manages the people side of organizations — hiring, training, culture, and employee well-being.",
          who: "Students who are empathetic, good communicators, and interested in people, culture, and organizational behavior."
        },
        beginner: {
          topics: ["Organizational behavior basics", "Recruitment & selection fundamentals", "Labor laws basics", "Communication skills"],
          skills: ["Resume screening basics", "Conducting basic interviews", "Understanding workplace policies", "Interpersonal communication"]
        },
        intermediate: {
          concepts: ["Talent acquisition & onboarding", "Performance management systems", "Compensation & benefits", "Employee engagement strategies"],
          tools: ["HRIS software (e.g., Zoho People, SAP SuccessFactors)", "LinkedIn Recruiter basics", "MS Excel for HR analytics", "Google Forms/Surveys"]
        },
        advanced: {
          skills: ["HR analytics & people data", "Organizational development & change management", "Strategic workforce planning", "Diversity, equity & inclusion (DEI) programs"],
          research: ["AI in recruitment", "Remote/hybrid work culture design", "Employee wellness & mental health programs", "People analytics"]
        },
        projects: [
          "Create a mock job description & recruitment plan",
          "Design an employee onboarding program",
          "Conduct a mock employee engagement survey & analyze results",
          "Build an HR analytics dashboard (attrition, engagement)",
          "Design a full talent management strategy for a mock company"
        ],
        tools: ["Zoho People", "LinkedIn Recruiter", "MS Excel", "Google Workspace", "SAP SuccessFactors basics"],
        resources: [
          "SHRM free HR resources",
          "Coursera Human Resource Management specialization (free audit)",
          "HR Certification Institute (HRCI) study material",
          "LinkedIn Learning HR courses",
          "YouTube: HR Bartender & AIHR channel"
        ],
        careers: ["HR Executive", "Talent Acquisition Specialist", "HR Business Partner", "Compensation & Benefits Analyst", "Learning & Development Specialist"]
      },
      entrepreneurship: {
        id: "entrepreneurship",
        name: "Entrepreneurship",
        icon: "🚀",
        intro: {
          what: "Entrepreneurship is about identifying opportunities, building new ventures, and creating value through innovative products or services.",
          who: "Students who are risk-takers, self-driven, and passionate about building something of their own."
        },
        beginner: {
          topics: ["Idea generation & validation", "Business model basics (Business Model Canvas)", "Introduction to startups & the startup ecosystem", "Basic financial literacy"],
          skills: ["Market research", "Pitching ideas", "Basic budgeting", "Networking & communication"]
        },
        intermediate: {
          concepts: ["MVP development & lean startup methodology", "Fundraising basics (angel/VC)", "Marketing & customer acquisition for startups", "Legal basics (registration, IP)"],
          tools: ["Business Model Canvas", "Canva/Figma for pitch decks", "Google Forms for surveys", "No-code tools (e.g., Bubble, Notion)"]
        },
        advanced: {
          skills: ["Scaling a business", "Fundraising & investor relations", "Building & leading teams", "Strategic partnerships & growth strategy"],
          research: ["Social entrepreneurship & impact startups", "Deep-tech entrepreneurship", "Startup ecosystem policy", "Venture capital trends"]
        },
        projects: [
          "Validate a business idea through customer interviews",
          "Create a Business Model Canvas for a startup idea",
          "Build a simple MVP/prototype (app, website, or product)",
          "Create a pitch deck and present to a mock panel",
          "Launch a mini startup/project and track real user feedback"
        ],
        tools: ["Business Model Canvas", "Figma/Canva", "Notion", "Google Analytics", "Pitch deck templates"],
        resources: [
          "Y Combinator Startup School (free)",
          "NPTEL Entrepreneurship courses",
          "Coursera Entrepreneurship Specialization (free audit)",
          "Startup India learning resources",
          "The Lean Startup by Eric Ries (book)"
        ],
        careers: ["Startup Founder", "Business Development Manager", "Product Manager", "Innovation Consultant", "Venture Capital Analyst"]
      },
      "business-analytics": {
        id: "business-analytics",
        name: "Business Analytics",
        icon: "📈",
        intro: {
          what: "Business Analytics uses data analysis and statistical methods to help businesses make informed strategic decisions.",
          who: "Students who like both business strategy and working with data & numbers."
        },
        beginner: {
          topics: ["Excel fundamentals", "Basic statistics for business", "Introduction to business analytics", "Data visualization basics"],
          skills: ["Building simple Excel reports", "Interpreting business metrics", "Basic charting & dashboards", "Understanding KPIs"]
        },
        intermediate: {
          concepts: ["SQL for business data", "Data visualization with Power BI/Tableau", "Predictive analytics basics", "Business intelligence reporting"],
          tools: ["Power BI", "Tableau", "SQL", "Advanced Excel"]
        },
        advanced: {
          skills: ["Predictive modeling for business decisions", "Big data analytics for enterprises", "Strategic decision-making frameworks", "Building analytics dashboards for leadership"],
          research: ["AI-driven business intelligence", "Customer analytics & personalization", "Supply chain analytics", "Prescriptive analytics"]
        },
        projects: [
          "Build a sales performance dashboard in Excel/Power BI",
          "Analyze customer data to identify buying patterns",
          "Create a KPI tracking dashboard for a mock company",
          "Build a predictive model for customer churn",
          "Design a complete BI reporting system for business decision-making"
        ],
        tools: ["Power BI", "Tableau", "SQL", "Excel", "Python (basic for analytics)"],
        resources: [
          "Google Data Analytics Certificate (Coursera, free audit)",
          "Coursera Business Analytics Specialization",
          "Khan Academy Statistics",
          "Microsoft Power BI free learning path",
          "Kaggle datasets for business analytics practice"
        ],
        careers: ["Business Analyst", "Data Analyst", "BI Developer", "Strategy Analyst", "Management Consultant"]
      },
      operations: {
        id: "operations",
        name: "Operations Management",
        icon: "🏭",
        intro: {
          what: "Operations Management focuses on designing and controlling the processes of production and business operations efficiently.",
          who: "Students who are organized, process-oriented, and interested in efficiency, logistics, and supply chains."
        },
        beginner: {
          topics: ["Introduction to operations management", "Supply chain basics", "Quality management fundamentals", "Basic process mapping"],
          skills: ["Process flow mapping", "Basic inventory management", "Understanding lean principles", "Excel for operations tracking"]
        },
        intermediate: {
          concepts: ["Supply chain management", "Inventory & demand forecasting", "Lean Six Sigma methodology", "Project management basics"],
          tools: ["MS Project", "Excel (advanced)", "ERP basics (SAP)", "Process mapping tools (Lucidchart)"]
        },
        advanced: {
          skills: ["Supply chain optimization & analytics", "Six Sigma / process improvement leadership", "Global logistics management", "Operations strategy"],
          research: ["AI in supply chain management", "Sustainable operations & green logistics", "Industry 4.0 & smart manufacturing", "Digital supply chain twins"]
        },
        projects: [
          "Map and optimize a process flow for a mock business",
          "Create an inventory management spreadsheet with reorder points",
          "Conduct a mini Lean Six Sigma project on a real/mock process",
          "Design a supply chain network for a product",
          "Build a full operations improvement plan with cost-benefit analysis"
        ],
        tools: ["MS Project", "SAP (basics)", "Lucidchart", "Excel", "Six Sigma tools"],
        resources: [
          "Coursera Operations Management Specialization (free audit)",
          "NPTEL Supply Chain Management courses",
          "ASQ (American Society for Quality) free resources",
          "LinkedIn Learning Lean Six Sigma courses",
          "MIT OpenCourseWare Operations Management"
        ],
        careers: ["Operations Manager", "Supply Chain Analyst", "Logistics Manager", "Process Improvement Consultant", "Production Planner"]
      }
    }
  },

  architecture: {
    id: "architecture",
    name: "Architecture & Design",
    icon: "🏛",
    tagline: "Design spaces that shape how people live",
    subdomains: {
      "arch-design": {
        id: "arch-design",
        name: "Architectural Design",
        icon: "🏙️",
        intro: {
          what: "Architectural Design is the art and science of designing buildings and structures that are functional, safe, and aesthetically pleasing.",
          who: "Students who are creative, spatially aware, and enjoy blending art with engineering."
        },
        beginner: {
          topics: ["Basics of architectural drawing", "Design principles & elements", "History of architecture", "Introduction to CAD"],
          skills: ["Freehand sketching", "Basic drafting", "Scale & proportion understanding", "Basic AutoCAD usage"]
        },
        intermediate: {
          concepts: ["Building codes & construction basics", "Site planning & analysis", "Design studio projects", "Material & structural systems"],
          tools: ["AutoCAD", "SketchUp", "Revit", "Adobe Photoshop/Illustrator"]
        },
        advanced: {
          skills: ["Advanced building design & detailing", "Parametric & computational design", "Sustainable design integration", "Presentation & portfolio development"],
          research: ["Smart buildings & responsive architecture", "Sustainable & net-zero design", "Adaptive reuse of heritage structures", "Urban regeneration"]
        },
        projects: [
          "Sketch and design a small residential unit floor plan",
          "Create a 3D model of a building using SketchUp",
          "Design a community center with site planning considerations",
          "Develop a sustainable building design concept",
          "Create a complete architectural portfolio with a signature design project"
        ],
        tools: ["AutoCAD", "SketchUp", "Revit", "Lumion", "Adobe Creative Suite"],
        resources: [
          "NPTEL Architecture courses (free)",
          "ArchDaily for design inspiration & case studies",
          "YouTube: The B1M & Balkrishna Doshi lectures",
          "Coursera Introduction to Architecture (free audit)",
          "Autodesk free student software & tutorials"
        ],
        careers: ["Architect", "Design Architect", "Urban Designer", "Architectural Visualizer", "Design Consultant"]
      },
      "interior-design": {
        id: "interior-design",
        name: "Interior Design",
        icon: "🛋️",
        intro: {
          what: "Interior Design is planning and designing indoor spaces to be functional, safe, and visually appealing for the people who use them.",
          who: "Students with an eye for aesthetics, colors, and space who enjoy transforming interiors."
        },
        beginner: {
          topics: ["Elements & principles of design", "Color theory & materials", "Basic space planning", "Introduction to furniture & ergonomics"],
          skills: ["Sketching floor plans", "Understanding color palettes", "Basic material selection", "Mood board creation"]
        },
        intermediate: {
          concepts: ["Lighting design", "Space planning for different spaces (residential/commercial)", "Furniture & fixture design", "Building codes for interiors"],
          tools: ["AutoCAD", "SketchUp", "3ds Max", "Photoshop for renders"]
        },
        advanced: {
          skills: ["3D visualization & photorealistic rendering", "Sustainable & biophilic interior design", "Commercial project management", "Client presentation & portfolio building"],
          research: ["Smart home interior integration", "Universal & accessible design", "Sustainable materials in interiors", "Wellness-focused design"]
        },
        projects: [
          "Design a mood board and color scheme for a room",
          "Create a floor plan for a small apartment",
          "Design and render a living room in 3ds Max/SketchUp",
          "Design a commercial space (café/office) layout",
          "Create a complete interior design portfolio project with renders"
        ],
        tools: ["AutoCAD", "SketchUp", "3ds Max", "V-Ray", "Photoshop"],
        resources: [
          "YouTube: SketchUp free tutorials",
          "Coursera Interior Design Specialization (free audit)",
          "Pinterest & Houzz for design inspiration",
          "NPTEL courses on Interior Design basics",
          "Autodesk & SketchUp free student licenses"
        ],
        careers: ["Interior Designer", "Space Planner", "Furniture Designer", "3D Visualizer", "Design Consultant"]
      },
      "urban-planning": {
        id: "urban-planning",
        name: "Urban Planning",
        icon: "🌆",
        intro: {
          what: "Urban Planning is designing and organizing cities, towns, and communities to make them functional, sustainable, and livable.",
          who: "Students interested in cities, infrastructure, policy, and improving life at a community scale."
        },
        beginner: {
          topics: ["Introduction to urban planning", "Basics of GIS & mapping", "Land use & zoning basics", "Urban geography fundamentals"],
          skills: ["Reading maps & site plans", "Basic GIS software usage", "Data collection for planning", "Understanding zoning regulations"]
        },
        intermediate: {
          concepts: ["Transportation planning", "Housing & land use policy", "Environmental planning", "Community engagement methods"],
          tools: ["QGIS / ArcGIS", "AutoCAD", "SketchUp for urban models", "Excel for demographic data"]
        },
        advanced: {
          skills: ["Smart city planning & data-driven design", "Sustainable urban development", "Policy analysis & advocacy", "Regional & metropolitan planning"],
          research: ["Smart cities & IoT-integrated infrastructure", "Climate-resilient urban design", "Affordable housing policy", "Transit-oriented development"]
        },
        projects: [
          "Map land use patterns of a local neighborhood using GIS",
          "Analyze traffic flow and propose improvements for an area",
          "Design a walkable/mixed-use neighborhood concept",
          "Create a community development proposal with stakeholder input",
          "Design a complete smart-city sustainability plan for a district"
        ],
        tools: ["QGIS", "ArcGIS", "AutoCAD", "SketchUp", "Excel/Power BI for demographic analysis"],
        resources: [
          "Coursera City Planning courses (free audit)",
          "NPTEL Urban Planning courses",
          "QGIS free official tutorials",
          "Strong Towns blog & resources",
          "UN-Habitat free publications on urban development"
        ],
        careers: ["Urban Planner", "GIS Analyst", "Transportation Planner", "Policy Analyst", "Urban Designer"]
      },
      "sustainable-arch": {
        id: "sustainable-arch",
        name: "Sustainable Architecture",
        icon: "🌱",
        intro: {
          what: "Sustainable Architecture focuses on designing energy-efficient, eco-friendly buildings that minimize environmental impact.",
          who: "Students who care about the environment and want to combine design with sustainability."
        },
        beginner: {
          topics: ["Basics of green building concepts", "Climate-responsive design principles", "Introduction to renewable energy in buildings", "Sustainable materials basics"],
          skills: ["Identifying passive design strategies", "Basic understanding of green building rating systems (LEED/GRIHA)", "Site orientation analysis", "Basic sketching for sustainable concepts"]
        },
        intermediate: {
          concepts: ["Energy modeling & simulation", "Green building certification processes", "Water conservation systems", "Renewable energy integration (solar, wind)"],
          tools: ["AutoCAD", "Revit", "Green Building Studio", "ECOTECT / IES-VE for energy simulation"]
        },
        advanced: {
          skills: ["Net-zero energy building design", "Advanced energy modeling & simulation", "Life-cycle assessment of materials", "Green certification consulting (LEED AP, GRIHA)"],
          research: ["Net-zero & carbon-neutral buildings", "Circular economy in construction", "Bio-based & recycled building materials", "Climate adaptive architecture"]
        },
        projects: [
          "Analyze the sun path & climate data for a building site",
          "Design a passive solar house concept",
          "Create an energy-efficiency simulation for a small building",
          "Design a rainwater harvesting & greywater recycling system",
          "Design a complete net-zero energy building concept with certification plan"
        ],
        tools: ["Revit", "IES-VE", "Green Building Studio", "AutoCAD", "SketchUp"],
        resources: [
          "USGBC (LEED) free learning resources",
          "GRIHA Council free study material (India)",
          "Coursera Sustainable Building Design courses (free audit)",
          "YouTube: Sustainability by Design",
          "NPTEL Green Building courses"
        ],
        careers: ["Sustainable Design Architect", "Green Building Consultant", "Energy Analyst", "LEED/GRIHA Consultant", "Environmental Design Specialist"]
      },
      "3d-modelling": {
        id: "3d-modelling",
        name: "3D Modelling",
        icon: "🧊",
        intro: {
          what: "3D Modelling is creating three-dimensional digital representations of objects, buildings, or environments for visualization, animation, or manufacturing.",
          who: "Students who enjoy visual design, technology, and creating realistic or artistic 3D visuals."
        },
        beginner: {
          topics: ["Basics of 3D geometry & modelling", "Introduction to modelling software", "Basic texturing & materials", "Lighting fundamentals"],
          skills: ["Creating basic 3D shapes", "Applying simple textures", "Basic camera & lighting setup", "Exporting/rendering basic models"]
        },
        intermediate: {
          concepts: ["Advanced modelling techniques (hard surface/organic)", "Texturing & UV mapping", "Rendering engines & realistic lighting", "Basic animation principles"],
          tools: ["Blender", "3ds Max", "SketchUp", "V-Ray / Corona Renderer"]
        },
        advanced: {
          skills: ["Photorealistic rendering & visualization", "Architectural walkthroughs & animation", "Game asset modelling", "VR/AR content creation"],
          research: ["Real-time rendering (Unreal/Unity)", "Procedural modelling & generative design", "AI-assisted 3D content generation", "Virtual & augmented reality environments"]
        },
        projects: [
          "Model a simple household object in Blender",
          "Create a textured 3D model of a room interior",
          "Design a photorealistic render of a building exterior",
          "Create a short architectural walkthrough animation",
          "Build an interactive 3D environment for VR/game use"
        ],
        tools: ["Blender", "3ds Max", "SketchUp", "V-Ray", "Unreal Engine/Unity (for real-time viz)"],
        resources: [
          "Blender Guru free tutorials (YouTube)",
          "Blender official documentation & free courses",
          "CG Cookie free lessons",
          "YouTube: Grant Abbitt (Blender for beginners)",
          "Sketchfab community models for reference"
        ],
        careers: ["3D Visualizer", "Architectural Animator", "Game Asset Artist", "VR/AR Content Creator", "Product Visualization Designer"]
      }
    }
  },

  pharmacy: {
    id: "pharmacy",
    name: "Pharmacy & Life Sciences",
    icon: "💊",
    tagline: "Discover, develop and deliver healthcare solutions",
    subdomains: {
      "clinical-pharmacy": {
        id: "clinical-pharmacy",
        name: "Clinical Pharmacy",
        icon: "🩺",
        intro: {
          what: "Clinical Pharmacy focuses on optimizing medication use and patient care by working directly with patients and healthcare teams.",
          who: "Students who are patient-focused, detail-oriented, and interested in direct healthcare delivery."
        },
        beginner: {
          topics: ["Human anatomy & physiology basics", "Pharmacology fundamentals", "Introduction to pharmaceutics", "Basic patient care concepts"],
          skills: ["Understanding drug classifications", "Basic dosage calculations", "Patient communication basics", "Reading prescriptions"]
        },
        intermediate: {
          concepts: ["Pharmacotherapeutics", "Clinical case studies & disease management", "Drug interactions & adverse effects monitoring", "Hospital pharmacy practice"],
          tools: ["Clinical Pharmacology references (e.g., Micromedex)", "Electronic Health Record (EHR) systems basics", "Drug interaction checker tools", "Clinical guidelines (WHO/ICMR)"]
        },
        advanced: {
          skills: ["Clinical rounds & patient counseling", "Therapeutic drug monitoring", "Medication therapy management", "Evidence-based clinical decision making"],
          research: ["Personalized/precision medicine", "Clinical pharmacokinetics research", "Pharmacovigilance studies", "Geriatric & pediatric clinical pharmacy"]
        },
        projects: [
          "Create drug information leaflets for common medications",
          "Conduct a mock patient counseling session",
          "Analyze a clinical case study & propose a treatment plan",
          "Prepare a medication therapy management report",
          "Conduct a mini pharmacovigilance/adverse drug reaction study"
        ],
        tools: ["Micromedex", "Lexicomp", "Electronic Health Records", "Clinical guidelines databases", "Drug interaction checkers"],
        resources: [
          "WHO Essential Medicines List & guidelines (free)",
          "NPTEL Clinical Pharmacy courses",
          "Coursera Clinical Pharmacology courses (free audit)",
          "Medscape free clinical resources",
          "PubMed for research articles"
        ],
        careers: ["Clinical Pharmacist", "Hospital Pharmacist", "Medication Therapy Manager", "Pharmacovigilance Associate", "Clinical Research Associate"]
      },
      "pharma-research": {
        id: "pharma-research",
        name: "Pharmaceutical Research",
        icon: "🧪",
        intro: {
          what: "Pharmaceutical Research involves discovering, testing, and improving medicines through scientific investigation.",
          who: "Students curious about science, experimentation, and discovering new treatments."
        },
        beginner: {
          topics: ["Basic pharmaceutical chemistry", "Introduction to research methodology", "Laboratory safety & techniques", "Basic biostatistics"],
          skills: ["Basic lab techniques (titration, extraction)", "Literature review skills", "Data recording & documentation", "Basic use of Excel for data"]
        },
        intermediate: {
          concepts: ["Drug design & discovery basics", "Analytical techniques (HPLC, spectroscopy)", "Preclinical study design", "Research ethics & documentation (GLP)"],
          tools: ["HPLC & spectrophotometers", "ChemDraw", "SPSS/Excel for statistics", "Reference management tools (Mendeley/Zotero)"]
        },
        advanced: {
          skills: ["Computer-aided drug design (CADD)", "Advanced analytical method development", "Clinical trial design basics", "Scientific writing & publication"],
          research: ["Novel drug delivery systems", "Nanotechnology in pharmaceuticals", "Natural product drug discovery", "Computational drug discovery (in-silico)"]
        },
        projects: [
          "Conduct a literature review on a disease/drug class",
          "Perform basic extraction & characterization of a plant compound",
          "Use HPLC to analyze a drug sample (lab exercise)",
          "Design a simple in-silico drug docking study",
          "Write and present a mini research paper on a novel drug delivery concept"
        ],
        tools: ["HPLC", "ChemDraw", "AutoDock (molecular docking)", "SPSS", "Mendeley/Zotero"],
        resources: [
          "PubMed & Google Scholar for research papers",
          "NPTEL Pharmaceutical Sciences courses",
          "Coursera Drug Discovery courses (free audit)",
          "ResearchGate for connecting with researchers",
          "RCSB Protein Data Bank for structural research"
        ],
        careers: ["Research Scientist", "R&D Associate", "Analytical Chemist", "Clinical Research Scientist", "Formulation Scientist"]
      },
      "drug-development": {
        id: "drug-development",
        name: "Drug Development",
        icon: "💉",
        intro: {
          what: "Drug Development is the end-to-end process of bringing a new medicine from discovery to market, including formulation and clinical trials.",
          who: "Students interested in the full lifecycle of how a medicine is created, tested, and approved."
        },
        beginner: {
          topics: ["Basics of drug discovery process", "Introduction to pharmacokinetics & pharmacodynamics", "Basic formulation science", "Overview of clinical trial phases"],
          skills: ["Understanding drug development pipeline", "Basic dosage form knowledge", "Reading clinical trial summaries", "Basic lab documentation"]
        },
        intermediate: {
          concepts: ["Formulation & dosage form design", "Preclinical & clinical trial design", "Bioavailability & bioequivalence studies", "Quality control & assurance basics"],
          tools: ["Design of Experiments (DoE) software", "Dissolution testing apparatus", "Formulation software tools", "Clinical trial management systems basics"]
        },
        advanced: {
          skills: ["Advanced formulation development (novel drug delivery)", "Clinical trial management", "Regulatory submission preparation", "Scale-up & manufacturing process design"],
          research: ["Biologics & biosimilars development", "Targeted drug delivery systems", "Personalized medicine formulations", "AI in drug development"]
        },
        projects: [
          "Study and present phases of clinical trials for a known drug",
          "Design a simple tablet/capsule formulation on paper",
          "Conduct a dissolution test experiment (lab)",
          "Analyze bioavailability data of a drug",
          "Create a complete drug development case study from discovery to launch"
        ],
        tools: ["Dissolution testing apparatus", "DoE software (Design-Expert)", "Clinical trial databases (ClinicalTrials.gov)", "Formulation simulation tools"],
        resources: [
          "ClinicalTrials.gov for real trial data",
          "NPTEL Pharmaceutics courses",
          "Coursera Clinical Trials courses (free audit)",
          "FDA & CDSCO guidance documents (free)",
          "WHO Good Manufacturing Practice guidelines"
        ],
        careers: ["Formulation Scientist", "Clinical Research Associate", "Drug Development Manager", "Regulatory Submission Specialist", "Process Development Scientist"]
      },
      "regulatory-affairs": {
        id: "regulatory-affairs",
        name: "Regulatory Affairs",
        icon: "📋",
        intro: {
          what: "Regulatory Affairs ensures pharmaceutical products meet legal, safety, and quality standards required for approval and market access.",
          who: "Students who are detail-oriented, enjoy documentation and compliance, and want a bridge role between science and law."
        },
        beginner: {
          topics: ["Introduction to drug regulations", "Basics of Good Manufacturing Practice (GMP)", "Overview of regulatory bodies (FDA, CDSCO, EMA)", "Basic documentation practices"],
          skills: ["Understanding regulatory terminology", "Basic document preparation", "Reading regulatory guidelines", "Attention to detail in compliance"]
        },
        intermediate: {
          concepts: ["Drug approval process & dossier preparation", "Labeling & packaging regulations", "Post-market surveillance & pharmacovigilance", "International regulatory harmonization (ICH guidelines)"],
          tools: ["eCTD (electronic Common Technical Document) software", "Regulatory information management systems", "MS Word/Excel for documentation", "Compliance tracking tools"]
        },
        advanced: {
          skills: ["Global regulatory strategy", "Regulatory submissions for multiple markets", "Managing audits & inspections", "Leading cross-functional regulatory teams"],
          research: ["Regulatory science for biologics & biosimilars", "AI-based regulatory compliance tools", "Evolving global regulatory frameworks", "Fast-track/accelerated approval pathways"]
        },
        projects: [
          "Study and summarize the drug approval process in India (CDSCO) or US (FDA)",
          "Prepare a mock product labeling document as per regulations",
          "Create a mock regulatory dossier outline (CTD format)",
          "Analyze a case study of a drug recall & regulatory response",
          "Prepare a complete regulatory submission plan for a new drug"
        ],
        tools: ["eCTD software", "Regulatory databases (CDSCO, FDA, EMA portals)", "MS Office Suite", "Compliance management tools"],
        resources: [
          "CDSCO official website & guidelines (India)",
          "US FDA guidance documents (free)",
          "ICH official guidelines (free)",
          "Coursera Regulatory Affairs courses (free audit)",
          "RAPS (Regulatory Affairs Professionals Society) resources"
        ],
        careers: ["Regulatory Affairs Associate", "Regulatory Affairs Manager", "Compliance Officer", "Quality Assurance Specialist", "Drug Safety Associate"]
      },
      "pharma-industry": {
        id: "pharma-industry",
        name: "Pharmaceutical Industry",
        icon: "🏭",
        intro: {
          what: "The Pharmaceutical Industry covers the manufacturing, quality control, marketing, and business side of producing medicines at scale.",
          who: "Students interested in the business, manufacturing, and industrial side of pharmaceuticals."
        },
        beginner: {
          topics: ["Introduction to pharmaceutical manufacturing", "Basics of Good Manufacturing Practices (GMP)", "Quality control & quality assurance basics", "Supply chain basics in pharma"],
          skills: ["Understanding manufacturing workflows", "Basic quality testing concepts", "Documentation & SOP understanding", "Basic industrial safety practices"]
        },
        intermediate: {
          concepts: ["Production planning & scale-up", "Quality management systems (QMS)", "Pharma supply chain & logistics", "Sales & marketing in pharma"],
          tools: ["ERP systems (SAP for pharma)", "Quality management software", "Batch manufacturing record systems", "MS Excel/Power BI for reporting"]
        },
        advanced: {
          skills: ["Plant/manufacturing operations management", "Pharma business strategy & product management", "Global pharma market analysis", "Leadership in cross-functional pharma teams"],
          research: ["Industry 4.0 in pharma manufacturing", "AI-driven quality control", "Sustainable pharma manufacturing", "Emerging market pharma strategy"]
        },
        projects: [
          "Study and present a pharmaceutical manufacturing process flow",
          "Create a basic quality control checklist for a dosage form",
          "Analyze the supply chain of a pharma company",
          "Design a mock product launch/marketing strategy for a drug",
          "Create a complete case study on a pharma company's operations & strategy"
        ],
        tools: ["SAP (Pharma module)", "QMS software", "MS Excel/Power BI", "Batch record systems"],
        resources: [
          "WHO GMP guidelines (free)",
          "NPTEL Pharmaceutical Industry courses",
          "Coursera Pharma Business courses (free audit)",
          "Pharma industry reports (IQVIA, McKinsey — free summaries)",
          "PharmaTutor & PharmaState free articles"
        ],
        careers: ["Production Manager", "Quality Assurance Manager", "Pharma Business Analyst", "Supply Chain Manager", "Product Manager (Pharma)"]
      }
    }
  },

  "pure-sciences": {
    id: "pure-sciences",
    name: "Pure Sciences",
    icon: "🔬",
    tagline: "Explore the fundamental laws of nature and numbers",
    categories: {
      physics: {
        id: "physics",
        name: "Physics",
        icon: "🪐",
        subdomains: {
          astrophysics: {
            id: "astrophysics",
            name: "Astrophysics",
            icon: "🌌",
            intro: {
              what: "Astrophysics studies the physics of celestial objects — stars, galaxies, black holes, and the universe as a whole.",
              who: "Students fascinated by space, the cosmos, and the fundamental nature of the universe."
            },
            beginner: {
              topics: ["Classical mechanics & gravitation", "Basics of astronomy", "Introduction to the solar system & stars", "Basic calculus & physics math"],
              skills: ["Understanding celestial coordinate systems", "Basic telescope usage", "Simple orbital calculations", "Reading star charts"]
            },
            intermediate: {
              concepts: ["Stellar evolution", "Electromagnetic spectrum & spectroscopy", "General relativity basics", "Cosmology fundamentals"],
              tools: ["Python for astronomy (Astropy)", "Stellarium software", "MATLAB for simulations", "Telescope & spectroscope"]
            },
            advanced: {
              skills: ["Numerical simulations of astrophysical systems", "Data analysis from telescopes/surveys", "Gravitational wave physics", "Advanced cosmology & dark matter research"],
              research: ["Black hole physics", "Exoplanet research", "Dark matter & dark energy studies", "Gravitational wave astronomy"]
            },
            projects: [
              "Track and plot planetary motion using basic physics equations",
              "Analyze a public dataset of star magnitudes/spectra",
              "Simulate a simple two-body gravitational system in Python",
              "Study and present findings on an exoplanet discovery",
              "Analyze real telescope/astronomical survey data (e.g., NASA open data) for a mini research project"
            ],
            tools: ["Python (Astropy, NumPy)", "Stellarium", "MATLAB", "NASA open datasets"],
            resources: [
              "NASA's free educational resources & open data",
              "Coursera Astronomy courses (free audit)",
              "MIT OpenCourseWare Astrophysics",
              "YouTube: PBS Space Time",
              "Khan Academy Cosmology & Astronomy"
            ],
            careers: ["Astrophysicist", "Research Scientist", "Data Scientist (Astronomy)", "Science Communicator", "Observatory Technician"]
          },
          "quantum-physics": {
            id: "quantum-physics",
            name: "Quantum Physics",
            icon: "⚛️",
            intro: {
              what: "Quantum Physics studies the behavior of matter and energy at the smallest scales — atoms, particles, and subatomic phenomena.",
              who: "Students who enjoy abstract thinking, mathematics, and exploring the strange rules governing reality."
            },
            beginner: {
              topics: ["Classical mechanics & waves", "Basic linear algebra & calculus", "Introduction to atomic structure", "Basics of wave-particle duality"],
              skills: ["Understanding wave functions conceptually", "Basic probability theory", "Solving simple Schrödinger equation problems", "Mathematical problem solving"]
            },
            intermediate: {
              concepts: ["Quantum mechanics formalism", "Quantum states & superposition", "Quantum entanglement basics", "Introduction to quantum computing"],
              tools: ["Python (NumPy, QuTiP)", "MATLAB", "Qiskit (IBM Quantum)", "Mathematica"]
            },
            advanced: {
              skills: ["Quantum field theory basics", "Quantum computing algorithms", "Advanced quantum simulations", "Research-level mathematical modeling"],
              research: ["Quantum computing & information theory", "Quantum cryptography", "Condensed matter quantum physics", "Quantum optics"]
            },
            projects: [
              "Solve and visualize the particle-in-a-box problem",
              "Simulate a simple quantum system in Python",
              "Build a basic quantum circuit using Qiskit",
              "Study and present quantum entanglement experiments",
              "Implement a simple quantum algorithm (e.g., Grover's search) on a quantum simulator"
            ],
            tools: ["Qiskit", "Python (QuTiP, NumPy)", "MATLAB", "Mathematica"],
            resources: [
              "IBM Quantum Experience free learning resources",
              "MIT OpenCourseWare Quantum Physics",
              "Coursera Quantum Mechanics courses (free audit)",
              "YouTube: 3Blue1Brown & minutephysics",
              "Qiskit Textbook (free online)"
            ],
            careers: ["Quantum Researcher", "Quantum Computing Engineer", "Physicist", "R&D Scientist", "Academic Researcher"]
          },
          "computational-physics": {
            id: "computational-physics",
            name: "Computational Physics",
            icon: "💻",
            intro: {
              what: "Computational Physics uses computer simulations and numerical methods to solve complex physics problems that can't be solved analytically.",
              who: "Students who enjoy both physics and programming, and want to model real-world physical systems."
            },
            beginner: {
              topics: ["Basic physics (mechanics, thermodynamics)", "Introduction to programming (Python/C++)", "Numerical methods basics", "Basic linear algebra"],
              skills: ["Writing basic simulation code", "Plotting data with Matplotlib", "Solving simple differential equations numerically", "Debugging scientific code"]
            },
            intermediate: {
              concepts: ["Numerical integration & differentiation", "Monte Carlo simulations", "Molecular dynamics basics", "Finite difference/element methods"],
              tools: ["Python (SciPy, NumPy, Matplotlib)", "MATLAB", "C++ for performance-critical code", "Jupyter Notebook"]
            },
            advanced: {
              skills: ["High-performance computing (HPC)", "Parallel computing for simulations", "Machine learning for physics modeling", "Advanced simulation frameworks (LAMMPS, GROMACS)"],
              research: ["Computational fluid dynamics", "Quantum simulations", "Climate & astrophysical modeling", "AI-driven physics discovery"]
            },
            projects: [
              "Simulate projectile motion with air resistance numerically",
              "Build a Monte Carlo simulation (e.g., estimating Pi)",
              "Model simple harmonic motion & damped oscillations",
              "Simulate molecular dynamics of a simple particle system",
              "Build a computational model for a real-world system (e.g., climate/fluid flow) with visualization"
            ],
            tools: ["Python (SciPy/NumPy)", "MATLAB", "LAMMPS", "Jupyter Notebook", "C++"],
            resources: [
              "MIT OpenCourseWare Computational Physics",
              "Coursera Computational Methods courses (free audit)",
              "freeCodeCamp Python for scientific computing",
              "YouTube: Computational physics lecture series",
              "SciPy & NumPy official documentation"
            ],
            careers: ["Computational Physicist", "Research Scientist", "Simulation Engineer", "Data Scientist", "HPC Engineer"]
          },
          "material-science": {
            id: "material-science",
            name: "Material Science",
            icon: "🧱",
            intro: {
              what: "Material Science studies the properties and applications of materials — metals, polymers, ceramics, and nanomaterials — used to build everything around us.",
              who: "Students interested in how materials work at atomic/molecular levels and want to design new materials for technology."
            },
            beginner: {
              topics: ["Basics of atomic structure & bonding", "Introduction to material classes (metals, polymers, ceramics)", "Basic mechanical properties of materials", "Crystallography basics"],
              skills: ["Identifying material properties", "Basic lab testing (hardness, tensile tests)", "Reading phase diagrams", "Basic material selection"]
            },
            intermediate: {
              concepts: ["Material characterization techniques (XRD, SEM)", "Phase diagrams & transformations", "Polymer & composite materials", "Corrosion & material degradation"],
              tools: ["XRD & SEM (characterization tools)", "MATLAB for material modeling", "Material databases (e.g., MatWeb)", "Basic CAD for material design"]
            },
            advanced: {
              skills: ["Nanomaterials & nanotechnology", "Advanced characterization (TEM, spectroscopy)", "Computational material design", "Materials for energy applications (batteries, solar)"],
              research: ["2D materials (graphene) research", "Smart & self-healing materials", "Biomaterials for medical applications", "Sustainable/green materials"]
            },
            projects: [
              "Test and compare mechanical properties of common materials",
              "Study phase diagrams of a metal alloy system",
              "Analyze material samples using available characterization data",
              "Research and present on a nanomaterial application (e.g., graphene)",
              "Design a material selection report for a specific engineering application"
            ],
            tools: ["XRD/SEM data analysis software", "MATLAB", "MatWeb database", "CAD software"],
            resources: [
              "MIT OpenCourseWare Materials Science & Engineering",
              "NPTEL Material Science courses (free)",
              "Coursera Materials Science courses (free audit)",
              "MatWeb material property database (free)",
              "YouTube: Materials Science channel by Real Engineering"
            ],
            careers: ["Materials Scientist", "R&D Engineer", "Quality Engineer", "Nanotechnology Researcher", "Process Engineer"]
          }
        }
      },
      mathematics: {
        id: "mathematics",
        name: "Mathematics",
        icon: "➗",
        subdomains: {
          "applied-mathematics": {
            id: "applied-mathematics",
            name: "Applied Mathematics",
            icon: "📐",
            intro: {
              what: "Applied Mathematics uses mathematical methods and models to solve real-world problems in science, engineering, and industry.",
              who: "Students who love math and want to apply it to solve practical, real-world problems."
            },
            beginner: {
              topics: ["Calculus (differential & integral)", "Linear algebra basics", "Basic differential equations", "Introduction to mathematical modeling"],
              skills: ["Solving calculus problems", "Basic matrix operations", "Setting up simple mathematical models", "Basic graphing & interpretation"]
            },
            intermediate: {
              concepts: ["Advanced differential equations (PDEs)", "Numerical methods", "Optimization techniques", "Probability & stochastic processes"],
              tools: ["MATLAB", "Python (SciPy/SymPy)", "Mathematica", "R"]
            },
            advanced: {
              skills: ["Mathematical modeling for complex systems", "Advanced optimization & operations research", "Computational mathematics", "Research-level applied math methods"],
              research: ["Mathematical biology", "Fluid dynamics modeling", "Financial mathematics modeling", "Network & graph theory applications"]
            },
            projects: [
              "Model population growth using differential equations",
              "Solve an optimization problem using linear programming",
              "Build a numerical solver for a differential equation in Python/MATLAB",
              "Model a real-world system (e.g., traffic flow or epidemic spread)",
              "Create a complete mathematical model with simulation & analysis for a chosen real-world problem"
            ],
            tools: ["MATLAB", "Python (NumPy/SciPy)", "Mathematica", "R"],
            resources: [
              "MIT OpenCourseWare Applied Mathematics",
              "Khan Academy Calculus & Differential Equations",
              "Coursera Mathematics for Engineers (free audit)",
              "Paul's Online Math Notes (free)",
              "3Blue1Brown Essence of Calculus/Linear Algebra series"
            ],
            careers: ["Applied Mathematician", "Operations Research Analyst", "Quantitative Analyst", "Research Scientist", "Data Scientist"]
          },
          statistics: {
            id: "statistics",
            name: "Statistics",
            icon: "📊",
            intro: {
              what: "Statistics is the science of collecting, analyzing, interpreting, and presenting data to make informed decisions under uncertainty.",
              who: "Students who enjoy working with data, probability, and drawing insights from numbers."
            },
            beginner: {
              topics: ["Descriptive statistics", "Probability fundamentals", "Basic data collection & sampling methods", "Introduction to distributions"],
              skills: ["Calculating mean/median/variance", "Basic probability calculations", "Creating basic charts & graphs", "Interpreting simple datasets"]
            },
            intermediate: {
              concepts: ["Hypothesis testing", "Regression analysis", "ANOVA & experimental design", "Statistical inference"],
              tools: ["R", "Python (Pandas, SciPy)", "SPSS", "Excel (statistical functions)"]
            },
            advanced: {
              skills: ["Bayesian statistics", "Multivariate analysis", "Time series analysis", "Statistical modeling for machine learning"],
              research: ["Biostatistics", "Statistical genomics", "Survey sampling theory", "Causal inference methods"]
            },
            projects: [
              "Analyze a small dataset and present descriptive statistics",
              "Conduct a hypothesis test on survey data",
              "Build a linear regression model to predict an outcome",
              "Perform time series analysis on stock/weather data",
              "Conduct a complete statistical study (data collection to inference) on a real-world question"
            ],
            tools: ["R", "Python", "SPSS", "Excel", "Minitab"],
            resources: [
              "Khan Academy Statistics & Probability",
              "StatQuest YouTube channel",
              "Coursera Statistics with R (free audit)",
              "OpenIntro Statistics (free textbook)",
              "Kaggle Learn statistics micro-courses"
            ],
            careers: ["Statistician", "Data Analyst", "Biostatistician", "Research Analyst", "Quantitative Researcher"]
          },
          "ai-ml-mathematics": {
            id: "ai-ml-mathematics",
            name: "AI/ML Mathematics",
            icon: "🧮",
            intro: {
              what: "AI/ML Mathematics covers the mathematical foundations — linear algebra, calculus, probability — that power machine learning and AI algorithms.",
              who: "Students who want to deeply understand how AI/ML algorithms work under the hood, not just use them."
            },
            beginner: {
              topics: ["Linear algebra (vectors, matrices)", "Calculus (derivatives, gradients)", "Basic probability & statistics", "Introduction to optimization"],
              skills: ["Matrix operations", "Computing gradients by hand", "Basic probability calculations", "Reading mathematical notation in ML papers"]
            },
            intermediate: {
              concepts: ["Gradient descent & optimization algorithms", "Eigenvalues/eigenvectors & PCA", "Probability distributions in ML", "Multivariable calculus for ML"],
              tools: ["Python (NumPy)", "MATLAB", "Jupyter Notebook", "SymPy for symbolic math"]
            },
            advanced: {
              skills: ["Advanced optimization (convex optimization)", "Matrix calculus for deep learning", "Information theory for ML", "Mathematical foundations of neural networks"],
              research: ["Theoretical foundations of deep learning", "Optimization theory research", "Statistical learning theory", "Mathematics of generative models"]
            },
            projects: [
              "Implement gradient descent from scratch in Python",
              "Perform PCA on a dataset and visualize dimensionality reduction",
              "Derive and implement backpropagation manually for a small neural network",
              "Explore probability distributions used in ML with visualizations",
              "Build a mathematical explainer project deriving the math behind a popular ML algorithm"
            ],
            tools: ["Python (NumPy)", "MATLAB", "Jupyter Notebook", "SymPy"],
            resources: [
              "3Blue1Brown Essence of Linear Algebra & Neural Networks",
              "Mathematics for Machine Learning specialization (Coursera, free audit)",
              "Khan Academy Linear Algebra & Calculus",
              "StatQuest YouTube channel",
              "MIT OpenCourseWare Linear Algebra (Gilbert Strang)"
            ],
            careers: ["ML Research Engineer", "AI Researcher", "Data Scientist", "Quantitative Researcher", "Applied Scientist"]
          },
          "financial-mathematics": {
            id: "financial-mathematics",
            name: "Financial Mathematics",
            icon: "💹",
            intro: {
              what: "Financial Mathematics applies mathematical and statistical methods to model financial markets, pricing, and risk.",
              who: "Students who enjoy math and are interested in markets, investments, and quantitative finance."
            },
            beginner: {
              topics: ["Basics of interest & time value of money", "Probability theory", "Introduction to financial markets", "Basic statistics"],
              skills: ["Calculating compound interest & annuities", "Basic probability computations", "Reading financial data", "Basic Excel modeling"]
            },
            intermediate: {
              concepts: ["Stochastic processes basics", "Option pricing (Black-Scholes model)", "Portfolio theory & risk management", "Time series analysis for finance"],
              tools: ["Python (NumPy/Pandas)", "R", "Excel (financial modeling)", "MATLAB"]
            },
            advanced: {
              skills: ["Derivatives pricing models", "Quantitative risk modeling", "Algorithmic trading strategy design", "Advanced stochastic calculus"],
              research: ["High-frequency trading models", "Risk management in derivatives", "Behavioral finance modeling", "Cryptocurrency & DeFi mathematics"]
            },
            projects: [
              "Build a compound interest & loan amortization calculator",
              "Implement the Black-Scholes option pricing model in Python",
              "Analyze historical stock data and compute risk metrics (volatility, Sharpe ratio)",
              "Build a simple portfolio optimization model",
              "Create a basic algorithmic trading strategy backtest"
            ],
            tools: ["Python (NumPy/Pandas)", "R", "Excel", "MATLAB", "QuantLib"],
            resources: [
              "Coursera Financial Engineering & Risk Management (free audit)",
              "Khan Academy Finance & Capital Markets",
              "MIT OpenCourseWare Mathematics for Finance",
              "QuantStart free quant finance tutorials",
              "Investopedia for financial concepts"
            ],
            careers: ["Quantitative Analyst", "Risk Analyst", "Financial Engineer", "Actuary", "Algorithmic Trader"]
          },
          cryptography: {
            id: "cryptography",
            name: "Cryptography",
            icon: "🔐",
            intro: {
              what: "Cryptography is the mathematical science of securing information — encrypting data so only intended recipients can read it.",
              who: "Students who enjoy number theory, security, and solving intricate mathematical puzzles."
            },
            beginner: {
              topics: ["Number theory basics", "Basics of encryption & decryption", "Classical ciphers (Caesar, Vigenère)", "Introduction to modular arithmetic"],
              skills: ["Solving basic cipher problems", "Basic modular arithmetic calculations", "Understanding symmetric vs asymmetric encryption", "Basic Python scripting"]
            },
            intermediate: {
              concepts: ["Symmetric encryption (AES)", "Asymmetric encryption (RSA)", "Hash functions & digital signatures", "Public key infrastructure (PKI)"],
              tools: ["Python (PyCryptodome)", "OpenSSL", "CyberChef", "Wireshark for protocol analysis"]
            },
            advanced: {
              skills: ["Elliptic curve cryptography", "Zero-knowledge proofs", "Cryptanalysis techniques", "Blockchain & cryptographic protocols"],
              research: ["Post-quantum cryptography", "Homomorphic encryption", "Blockchain cryptography research", "Secure multi-party computation"]
            },
            projects: [
              "Implement a classical cipher (Caesar/Vigenère) in Python",
              "Build an RSA encryption/decryption tool from scratch",
              "Implement a hashing-based password storage system",
              "Analyze and break a weak encryption scheme (CTF-style challenge)",
              "Build a mini blockchain implementation demonstrating cryptographic hashing & signatures"
            ],
            tools: ["Python (PyCryptodome)", "OpenSSL", "CyberChef", "CryptoHack platform"],
            resources: [
              "CryptoHack (free interactive cryptography challenges)",
              "Coursera Cryptography I by Stanford (free audit)",
              "Khan Academy Cryptography basics",
              "Practical Cryptography (free online book)",
              "YouTube: Computerphile Cryptography series"
            ],
            careers: ["Cryptographer", "Security Researcher", "Blockchain Developer", "Cryptanalyst", "Security Engineer"]
          }
        }
      },
      chemistry: {
        id: "chemistry",
        name: "Chemistry",
        icon: "🧫",
        subdomains: {
          "organic-chemistry": {
            id: "organic-chemistry",
            name: "Organic Chemistry",
            icon: "⚗️",
            intro: {
              what: "Organic Chemistry is the study of carbon-containing compounds, their structures, properties, and reactions.",
              who: "Students who enjoy molecular puzzles, reaction mechanisms, and building/breaking molecules."
            },
            beginner: {
              topics: ["Basics of atomic structure & bonding", "Nomenclature of organic compounds", "Functional groups", "Basic reaction types (substitution, addition)"],
              skills: ["Drawing molecular structures", "Naming organic compounds (IUPAC)", "Identifying functional groups", "Basic lab safety & techniques"]
            },
            intermediate: {
              concepts: ["Reaction mechanisms", "Stereochemistry", "Spectroscopy basics (NMR, IR)", "Organic synthesis strategies"],
              tools: ["ChemDraw", "NMR/IR spectrometers", "Basic lab glassware & techniques", "Reaction prediction software"]
            },
            advanced: {
              skills: ["Advanced organic synthesis (total synthesis)", "Catalysis & green chemistry methods", "Advanced spectroscopic analysis", "Medicinal chemistry applications"],
              research: ["Drug synthesis & medicinal chemistry", "Green & sustainable synthesis methods", "Natural product synthesis", "Catalysis research"]
            },
            projects: [
              "Draw and name a series of organic compounds with functional groups",
              "Perform a basic organic synthesis experiment (e.g., aspirin synthesis) in lab",
              "Interpret NMR/IR spectra for a given compound",
              "Research and present a total synthesis pathway of a known drug molecule",
              "Design a green chemistry route for a common organic reaction"
            ],
            tools: ["ChemDraw", "NMR & IR spectrometers", "Lab glassware", "Reaction databases (Reaxys basics)"],
            resources: [
              "Khan Academy Organic Chemistry",
              "MIT OpenCourseWare Organic Chemistry",
              "Coursera Organic Chemistry courses (free audit)",
              "Master Organic Chemistry (free blog)",
              "YouTube: Organic Chemistry Tutor"
            ],
            careers: ["Organic Chemist", "Medicinal Chemist", "R&D Scientist", "Process Chemist", "Quality Control Chemist"]
          },
          "analytical-chemistry": {
            id: "analytical-chemistry",
            name: "Analytical Chemistry",
            icon: "🧪",
            intro: {
              what: "Analytical Chemistry focuses on identifying and quantifying the chemical composition of substances using instruments and techniques.",
              who: "Students who enjoy precision, lab work, and using instruments to solve chemical puzzles."
            },
            beginner: {
              topics: ["Basics of quantitative & qualitative analysis", "Titration techniques", "Basic laboratory safety & measurement", "Introduction to analytical instruments"],
              skills: ["Performing titrations accurately", "Preparing solutions & standards", "Basic error/uncertainty analysis", "Lab report writing"]
            },
            intermediate: {
              concepts: ["Chromatography (HPLC, GC)", "Spectroscopic methods (UV-Vis, AAS)", "Method validation basics", "Quality control in analysis"],
              tools: ["HPLC & GC instruments", "UV-Vis spectrophotometer", "Atomic Absorption Spectroscopy (AAS)", "Excel for data analysis"]
            },
            advanced: {
              skills: ["Mass spectrometry techniques", "Advanced method development & validation", "Trace analysis & forensic chemistry", "Environmental & food analysis techniques"],
              research: ["Forensic analytical chemistry", "Environmental monitoring techniques", "Food safety analysis", "Advanced mass spectrometry research"]
            },
            projects: [
              "Perform acid-base titration to determine concentration of a solution",
              "Use UV-Vis spectroscopy to determine concentration of a colored compound",
              "Analyze a water/soil sample for contaminants",
              "Perform HPLC analysis of a mixture (lab exercise)",
              "Design and validate an analytical method for detecting a specific compound"
            ],
            tools: ["HPLC", "GC", "UV-Vis Spectrophotometer", "AAS", "Mass Spectrometer"],
            resources: [
              "NPTEL Analytical Chemistry courses (free)",
              "Khan Academy Chemistry fundamentals",
              "Coursera Analytical Chemistry courses (free audit)",
              "LibreTexts Analytical Chemistry (free textbook)",
              "YouTube: Analytical chemistry lab technique videos"
            ],
            careers: ["Analytical Chemist", "Quality Control Analyst", "Forensic Scientist", "Environmental Analyst", "Food Safety Analyst"]
          },
          biochemistry: {
            id: "biochemistry",
            name: "Biochemistry",
            icon: "🧬",
            intro: {
              what: "Biochemistry studies the chemical processes within living organisms — from DNA and proteins to metabolism.",
              who: "Students interested in the chemistry of life, biology, and medical/biological research."
            },
            beginner: {
              topics: ["Basics of biomolecules (proteins, carbs, lipids, nucleic acids)", "Cell biology fundamentals", "Basic enzyme chemistry", "Introduction to metabolism"],
              skills: ["Identifying biomolecule structures", "Basic lab techniques (pipetting, solution prep)", "Understanding enzyme function basics", "Reading biochemical pathways"]
            },
            intermediate: {
              concepts: ["Metabolic pathways (glycolysis, Krebs cycle)", "Molecular biology techniques (PCR, gel electrophoresis)", "Protein structure & function", "Enzyme kinetics"],
              tools: ["PCR machines", "Gel electrophoresis equipment", "Spectrophotometers", "Bioinformatics tools (BLAST)"]
            },
            advanced: {
              skills: ["Advanced molecular biology techniques (CRISPR, cloning)", "Proteomics & genomics analysis", "Structural biology (X-ray crystallography, cryo-EM)", "Computational biochemistry"],
              research: ["Cancer biochemistry research", "Genetic engineering & CRISPR research", "Drug-target interaction studies", "Systems biology"]
            },
            projects: [
              "Extract and identify biomolecules from a sample (e.g., DNA extraction)",
              "Study and present a metabolic pathway with diagrams",
              "Perform a gel electrophoresis experiment (lab)",
              "Analyze protein structure using bioinformatics tools (e.g., PyMOL)",
              "Conduct a mini research project on an enzyme's kinetics or a gene's function"
            ],
            tools: ["PCR machine", "Gel electrophoresis", "PyMOL", "BLAST", "Spectrophotometer"],
            resources: [
              "Khan Academy Biochemistry",
              "MIT OpenCourseWare Biology & Biochemistry",
              "NPTEL Biochemistry courses (free)",
              "NCBI free bioinformatics resources",
              "YouTube: Crash Course Biology/Chemistry"
            ],
            careers: ["Biochemist", "Molecular Biologist", "Research Scientist", "Clinical Lab Scientist", "Biotechnology Researcher"]
          },
          "green-chemistry": {
            id: "green-chemistry",
            name: "Green Chemistry",
            icon: "🌿",
            intro: {
              what: "Green Chemistry designs chemical products and processes that reduce or eliminate the use and generation of hazardous substances.",
              who: "Students who care about sustainability and want to make chemistry safer for people and the planet."
            },
            beginner: {
              topics: ["12 Principles of Green Chemistry", "Basics of environmental chemistry", "Introduction to sustainable materials", "Basic waste management concepts"],
              skills: ["Identifying green vs hazardous processes", "Basic life-cycle thinking", "Understanding atom economy", "Basic lab safety with eco-friendly practices"]
            },
            intermediate: {
              concepts: ["Green solvents & catalysts", "Renewable feedstocks", "Waste minimization techniques", "Life-cycle assessment (LCA)"],
              tools: ["LCA software basics", "Green chemistry databases", "Lab equipment for solvent-free reactions", "Excel for sustainability metrics"]
            },
            advanced: {
              skills: ["Designing green synthesis routes", "Biocatalysis & enzymatic processes", "Green chemistry metrics & assessment", "Industrial green chemistry implementation"],
              research: ["Biodegradable polymer research", "Renewable energy chemistry", "Green nanotechnology", "Circular economy chemistry"]
            },
            projects: [
              "Analyze a common industrial reaction and redesign it using green principles",
              "Calculate the atom economy & E-factor of a chemical reaction",
              "Research and present on green solvents used in industry",
              "Design a solvent-free or catalytic reaction experiment",
              "Create a life-cycle assessment report for a chemical product"
            ],
            tools: ["LCA software (SimaPro basics)", "Green chemistry metrics calculators", "Lab equipment", "Chemical databases"],
            resources: [
              "ACS Green Chemistry Institute free resources",
              "Coursera Green Chemistry courses (free audit)",
              "NPTEL Green Chemistry courses",
              "EPA Green Chemistry resources (free)",
              "YouTube: Green Chemistry lecture series"
            ],
            careers: ["Green Chemist", "Sustainability Consultant", "Environmental Chemist", "R&D Scientist (Sustainable Products)", "Process Engineer"]
          },
          "materials-chemistry": {
            id: "materials-chemistry",
            name: "Materials Chemistry",
            icon: "🔩",
            intro: {
              what: "Materials Chemistry studies the synthesis and chemical properties of materials used in technology — polymers, nanomaterials, and composites.",
              who: "Students who enjoy chemistry and want to design new materials for real-world technology applications."
            },
            beginner: {
              topics: ["Basics of polymer chemistry", "Introduction to nanomaterials", "Solid-state chemistry basics", "Basic material characterization concepts"],
              skills: ["Understanding polymer structures", "Basic material synthesis techniques", "Reading material property data", "Basic lab safety for materials synthesis"]
            },
            intermediate: {
              concepts: ["Polymer synthesis & characterization", "Nanomaterial synthesis methods", "Materials characterization techniques (XRD, SEM, TEM)", "Composite materials chemistry"],
              tools: ["XRD & SEM instruments", "Polymer synthesis lab setups", "Basic spectroscopy tools", "Material databases"]
            },
            advanced: {
              skills: ["Advanced nanomaterial synthesis (quantum dots, graphene)", "Smart materials design", "Materials for energy storage (batteries, supercapacitors)", "Computational materials chemistry"],
              research: ["2D materials research (graphene, MXenes)", "Energy storage materials research", "Smart & responsive materials", "Sustainable/biodegradable materials"]
            },
            projects: [
              "Synthesize a simple polymer in a lab experiment",
              "Study and characterize a nanomaterial sample using available data",
              "Research and present on graphene or another 2D material",
              "Design a material for a specific application (e.g., battery electrode)",
              "Conduct a mini research project synthesizing & characterizing a novel material composite"
            ],
            tools: ["XRD", "SEM/TEM", "Spectroscopy tools", "Polymer synthesis lab equipment"],
            resources: [
              "MIT OpenCourseWare Materials Chemistry",
              "NPTEL Materials Chemistry courses (free)",
              "Coursera Materials Science & Chemistry courses (free audit)",
              "Royal Society of Chemistry free resources",
              "YouTube: NileRed (chemistry experiments)"
            ],
            careers: ["Materials Chemist", "R&D Scientist", "Polymer Scientist", "Nanotechnology Researcher", "Process Development Chemist"]
          }
        }
      }
    }
  }
};
