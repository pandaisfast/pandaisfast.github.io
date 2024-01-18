---
layout: page
permalink: /index.html
title: Mission
datatable: true
---

<style>

.job-category {
  background-color: #e7f6e8;
  border-radius: 5px;
  padding: 3px 6px;
  margin: 0 2px;
  display: inline-block;
  color: #333;
  font-weight: bold;
  font-size: 0.95em; /* Slightly smaller font size for better fit */
}

/* Adding a fun and inviting message for the expanding list */
.expand-list-message {
  color: #3498db;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 20px;
}

/* Cat Emoji */
.cat-emoji {
  display: inline-block;
  margin-right: 5px;
  transform: translateY(3px); /* Aligns the cat emoji with the text */
}


/* Open Jobs Section Styles */
/* .current-date {
  background-color: #f8f9fa;
  border-left: 4px solid #2ecc71;
  padding: 20px;
  margin-bottom: 30px;
}

.current-date p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #34495e;
} */

.current-date_general {
  background-color: #f8f9fa;
  border-left: 4px solid #2ecc71;
  padding: 10px;
  margin-bottom: 10px;
}

.current-date_general p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #34495e;
}



.jobs-count {
  font-size: 1.2em;
  font-weight: bold;
  color: #16a085;
}

.jobs-count #count {
  font-weight: bold;
  color: #2ecc71;
}

.date {
  font-weight: bold;
}

/* DataTable Styles */
/* Adjusting the padding for compact table */
table.dataTable.compact thead th,
table.dataTable.compact tbody td {
  padding: 4px 5px; /* Adjusted padding for better spacing */
}

table.dataTable.compact thead th {
  background-color: #2c3e50;
  color: #ecf0f1;
}

table.dataTable.compact tbody td {
  background-color: #ecf0f1;
  color: #34495e;
}

/* Make the first column stand out with better contrast */
/* table.dataTable.compact thead th:first-child {
  background-color: #145A32; /* Dark green background */
  color: #FFFFFF; /* White text for contrast */
}

/* Make the first column body cells stand out with better contrast */
table.dataTable.compact tbody td:first-child {
  background-color: #1C2833; /* Even darker background for better contrast */
  color: #FFFFFF; /* White text for high contrast */
  font-weight: bold; /* Optional: Makes the text bold for better legibility */
} */

/* Custom button style for pagination */
.dataTables_wrapper .dataTables_paginate .paginate_button {
  background-color: #2ecc71;
  color: white !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  background-color: #27ae60 !important;
}




table.dataTable {
  width: 1000px !important; /* Fixed width for the entire table */
  table-layout: fixed; /* This helps enforce fixed column widths */
  margin: 0 auto; /* Center the table */
}

.dataTables_wrapper {
  width: 100%;
  overflow-x: auto; /* Allows horizontal scrolling on smaller screens */
}

/* If you want to apply a fixed width to each column equally, you can do this */
table.dataTable.compact th,
table.dataTable.compact td {
  width: 130px !important; /* This will apply a fixed width to all columns, adjust as needed */
}

/* Column specific widths, adjust as needed */
table.dataTable.compact th:first-child,
table.dataTable.compact td:first-child {
width: 10%;
}

table.dataTable.compact th:nth-child(2),
table.dataTable.compact td:nth-child(2) {
width: 30%;
}

/* Ensure that the column widths do not stretch beyond the table's fixed width */

/* table.dataTable.compact thead th,
table.dataTable.compact tbody td {
overflow: hidden; / Keep content within the cell /
white-space: nowrap; / Prevent text from wrapping /
text-overflow: ellipsis; / Add an ellipsis to text that's too long to fit */
} */

</style>

## Open Jobs

<div class="current-date_general date-display">
  <p>
    <span class="jobs-count">
      <span id="count">3,000+</span> jobs in California are recently posted in the past  <span id="count">72 hours</span>.
    </span>
  </p>
  <p>
    Last Updated on:
    <span class="date"> Jan 17, 2024 </span>,
    San Francisco Time.
  </p>
  
    The website is under development and provides most jobs in California or US Remote. More jobs from states will be added when I have time to automate manual scripts and clean datasets. Meanwhile, welcome feedback and bug report.
  
  <p> </p>
  The jobs in our list include: 
    <span class="job-category">Data Science 📊</span>, 
    <span class="job-category">HR / Recruiting 👥</span>, 
    <span class="job-category">Designers 🎨</span>, 
    <span class="job-category">Software Engineering 💻</span>, 
    <span class="job-category">Product Management 📈</span>,
    <span class="job-category">Marketing & Sales 📢</span>,
    <span class="job-category">Data Engineering 🔢</span>, 
    <span class="job-category">Project Management 📝</span>, 
    <span class="job-category">Education & Teaching 🎓</span>, 
    <span class="job-category">Medical & Healthcare 🏥</span>, 
    <span class="job-category">Finance & Accounting 💲</span>, 
    <span class="job-category">Legal ⚖️</span>, 
    <span class="expanding-list">and more on the way... 😺</span>

</div>


<!-- jQuery library -->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

<!-- DataTables CSS  - need to update this part to make compact tables-->
<link rel="stylesheet" type="text/css" href="assets/css/jquery.dataTables.css">
<!-- <link rel="stylesheet" type="text/css" href="assets/css/jquery.dataTables.min.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css"> -->
<!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css"> -->

<!-- DataTables JS -->
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>


<div class="datatable-begin"></div>

| Company | Job | Posted | City | State | WFH | Job-Family |
| --- | --- | --- | --- | --- | --- | --- |
| Qualitest | #12429 SAP HCM Consultant/SME | 2024-01-14 | United States | CA | Remote |  |
| Harris Computer | (Remote) Full Stack Angular Developer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Sam's Club | (USA) Bakery Lead | 2024-01-14 | Vacaville | CA |  |  |
| Walmart | (USA) Senior Manager, Software Engineering - Traffic Foundation | 2024-01-15 | Sunnyvale | CA |  | Software Engineering |
| Walmart | (USA) Staff, Product Manager Marketplace Returns - Customer Experience | 2024-01-16 | Sunnyvale | CA |  | Product Management |
| Piper Companies | **TS/SCI** Database Engineer **TS/SCI** | 2024-01-14 | San Diego | CA | Hybrid | Software Engineering |
| Synechron | .NET Fullstack Developer | 2024-01-15 | Atlanta | GA | Hybrid | Software Engineering |
| Noir | .NET Software Engineer | 2024-01-14 | San Diego | CA | On-site | Software Engineering |
| Noir | .NET Software Engineer - San Diego | 2024-01-14 | San Diego | CA | Hybrid | Software Engineering |
| Noir | .NET Software Engineer – Long Beach, CA | 2024-01-14 | Long Beach | CA | On-site | Software Engineering |
| AIDS Healthcare Foundation | .Net Developer | 2024-01-15 | Los Angeles | CA | On-site | Software Engineering |
| Kelly Science, Engineering, Technology & Telecom | .Net Developer | 2024-01-15 | Bridgeton | MO | On-site | Software Engineering |
| WilmerHale | 2024 1L Diversity Public Interest Fellowship | 2024-01-16 | Los Angeles | CA | On-site |  |
| WilmerHale | 2024 1L Diversity Public Interest Fellowship | 2024-01-16 | Palo Alto | CA | On-site |  |
| WilmerHale | 2024 1L Diversity Public Interest Fellowship | 2024-01-16 | San Francisco | CA | On-site |  |
| Uber | 2024 Finance Transformation Project Intern, US | 2024-01-16 | Dallas | TX |  | Finance & Accounting |
| Uber | 2024 Finance Transformation Project Intern, US | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| Uber | 2024 PhD Applied Scientist (Non-Econ) Intern, United States | 2024-01-16 | New York | NY |  |  |
| Uber | 2024 PhD Software Engineer Intern, United States | 2024-01-16 | New York | NY |  | Software Engineering |
| Uber | 2024 PhD Software Engineer Intern, United States | 2024-01-16 | San Francisco | CA |  | Software Engineering |
| Uber | 2024 PhD Software Engineer Intern, United States | 2024-01-16 | Sunnyvale | CA |  | Software Engineering |
| Uber | 2024 Software Engineering UberSTAR Internship, Computing Talent Initiative | 2024-01-16 | Seattle | WA |  | Software Engineering |
| IBM | 2024 Summer Intern: Back End Developer | 2024-01-16 | San Jose | CA |  | Software Engineering |
| California State University-Sacramento | 2024-25 AY Lecturer Pool - Information Systems & Business Analytics | 2024-01-16 | Sacramento | CA | On-site | Education & Teaching,Data Science |
| California State University-Sacramento | 2024-25 AY Lecturer Pool - Strategy & Entrepreneurship | 2024-01-16 | Sacramento | CA | On-site | Education & Teaching |
| Riot Games | 3D Character Artist III - Entertainment, Consumer Products | 2024-01-15 | Los Angeles | CA | On-site |  |
| Tesla | ADAS Technical Project Manager, Fleet | 2024-01-16 | Palo Alto | CA | On-site | Project Management |
| Rich Products Corporation | AEN Field Operations Specialist (Human Resources) - West | 2024-01-16 | California | CA |  |  |
| Hewlett Packard Enterprise | AI Frontend Engineer | 2024-01-16 | California | CA | Hybrid | Software Engineering |
| Alibaba Group | AI Product Manager | 2024-01-14 | Sunnyvale | CA |  | Product Management |
| Crossover  | AI Prompt Engineer, gt.school (Remote) - $100,000/year USD | 2024-01-15 | Boston | MA | Remote |  |
| Crossover  | AI Prompt Engineer, gt.school (Remote) - $100,000/year USD | 2024-01-15 | Chicago | IL | Remote |  |
| Crossover  | AI Prompt Engineer, gt.school (Remote) - $100,000/year USD | 2024-01-15 | New York | NY | Remote |  |
| Crossover  | AI Prompt Engineer, gt.school (Remote) - $100,000/year USD | 2024-01-15 | United States | CA | Remote |  |
| Crossover  | AI Prompt Engineer, gt.school (Remote) - $100,000/year USD | 2024-01-15 | Yonkers | NY | Remote |  |
| Crossover  | AI Prompt Engineer, gt.school (Remote) - $100,000/year USD | 2024-01-14 | United States | CA | Remote |  |
| Crossover  | AI Super Engineer, Trilogy (Remote) - $200,000/year USD | 2024-01-15 | Boston | MA | Remote |  |
| Crossover  | AI Super Engineer, Trilogy (Remote) - $200,000/year USD | 2024-01-15 | Seattle | WA | Remote |  |
| Outlier | AI Training for Nuclear Physics Experts | 2024-01-15 | San Francisco | CA | Remote |  |
| Mastech Digital | AI/ML Developer | 2024-01-16 | United States | CA | Remote | Data Science,Software Engineering |
| HYR Global Source Inc | AI/ML Engineer with Contact Center Exp | 2024-01-14 | San Francisco | CA | Remote | Data Science,Software Engineering |
| PTC | ALM Solution Sales Specialist | 2024-01-14 | Sacramento | CA | Remote | Marketing & Sales |
| IvyMax Inc | AP Microeconomics Teacher | 2024-01-14 | Cupertino | CA | Hybrid | Education & Teaching |
| IvyMax Inc | AP Microeconomics Teacher | 2024-01-14 | Irvine | CA | Hybrid | Education & Teaching |
| IvyMax Inc | AP Microeconomics Teacher | 2024-01-14 | Pleasanton | CA | Hybrid | Education & Teaching |
| IvyMax Inc | AP Microeconomics Teacher | 2024-01-14 | San Diego | CA | Hybrid | Education & Teaching |
| IvyMax Inc | AP Microeconomics Teacher | 2024-01-14 | San Gabriel | CA | Hybrid | Education & Teaching |
| Meta | ASIC Engineer, Design Verification | 2024-01-14 | Sunnyvale | CA |  |  |
| Meta | ASIC Engineer, Implementation | 2024-01-15 | Sunnyvale | CA |  |  |
| Samsung Semiconductor | ASIC Layout Designer Engineer (Contractor) | 2024-01-16 | San Jose | CA | On-site | Designers |
| People Tech Group Inc | AWS Data Engineer | 2024-01-15 | Seattle | WA | On-site | Data Engineering |
| Accenture | AWS Offering Lead | 2024-01-14 | Irvine | CA |  | Marketing & Sales |
| Accenture | AWS Offering Lead | 2024-01-14 | Los Angeles Metropolitan Area | CA |  | Marketing & Sales |
| Accenture | AWS Offering Lead | 2024-01-14 | Mountain View | CA |  | Marketing & Sales |
| Accenture | AWS Offering Lead | 2024-01-14 | Sacramento | CA |  | Marketing & Sales |
| Accenture | AWS Offering Lead | 2024-01-14 | San Diego | CA |  | Marketing & Sales |
| Accenture | AWS Offering Lead | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Accenture | AWS Offering Lead | 2024-01-14 | Walnut Creek | CA |  | Marketing & Sales |
| H&R Block | Accelerated Tax Associate | 2024-01-16 |  California |  | On-site | Finance & Accounting |
| H&R Block | Accelerated Tax Associate | 2024-01-16 | Los Angeles | CA | On-site | Finance & Accounting |
| H&R Block | Accelerated Tax Associate | 2024-01-16 | Vacaville | CA | On-site | Finance & Accounting |
| Esri | Accessibility Engineer II | 2024-01-15 | Redlands | CA | Hybrid |  |
| Veeva Systems | Account Based Marketing (ABM) - Senior Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Area 23 | Account Director - Area 23 | 2024-01-15 | New York City Metropolitan Area |  | Hybrid |  |
| Adobe | Account Director, Enterprise Sales - CMT | 2024-01-15 | Georgia | GA | Remote | Marketing & Sales |
| Adobe | Account Director, Enterprise Sales - CMT | 2024-01-15 | Illinois | IL | Remote | Marketing & Sales |
| Betts | Account Executive | 2024-01-14 | San Francisco Bay Area | CA | On-site | Marketing & Sales |
| Bounce Logistics | Account Executive | 2024-01-14 | Irvine | CA | On-site | Marketing & Sales |
| MXR Imaging | Account Executive | 2024-01-14 | Sacramento | CA | Remote | Marketing & Sales |
| Partners Personnel | Account Executive | 2024-01-14 | San Fernando | CA | On-site | Marketing & Sales |
| SnapMagic | Account Executive | 2024-01-15 | Redwood City | CA | On-site | Marketing & Sales |
| Stampli | Account Executive | 2024-01-14 | Mountain View | CA |  | Marketing & Sales |
| Orora Packaging Solutions | Account Executive - Orange County | 2024-01-14 | Orange County | CA | Hybrid | Marketing & Sales |
| Rippling | Account Executive - SMB - West | 2024-01-15 | San Francisco | CA | On-site | Marketing & Sales |
| Orora Packaging Solutions | Account Executive - Sacramento | 2024-01-14 | Sacramento | CA | Hybrid | Marketing & Sales |
| NBCUniversal Telemundo Enterprises | Account Executive - Telemundo Fresno | 2024-01-14 | Fresno | CA | On-site | Marketing & Sales |
| Siemens Healthineers | Account Executive, Los Angeles Region | 2024-01-15 | Los Angeles | CA | On-site | Marketing & Sales |
| Casbon & Associates LLC | Account Manager | 2024-01-14 | Los Angeles | CA | Hybrid | Marketing & Sales |
| Covetrus | Account Manager | 2024-01-14 | Thousand Oaks | CA | On-site | Marketing & Sales |
| FOSS Software Services | Account Manager | 2024-01-15 | San Ramon | CA | Hybrid | Marketing & Sales |
| Fieldwire by Hilti | Account Manager | 2024-01-15 | San Mateo | CA | Hybrid | Marketing & Sales |
| Partners Personnel | Account Manager | 2024-01-14 | Long Beach | CA | On-site | Marketing & Sales |
| Varonis | Account Manager | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Uber | Account Manager - Dallas, (Spanish Speaking) | 2024-01-16 | Dallas | TX |  | Marketing & Sales |
| Alera Group, Inc. | Account Manager - Property & Casualty | 2024-01-14 | Newport Beach | CA | Hybrid | Marketing & Sales |
| Skiltrek | Account Manager / Recruiter (Contract or Permanent - Staffing Industry) - Remote / Virtual | 2024-01-16 | Los Angeles | CA | Remote | Marketing & Sales,HR & Recruiting |
| Uber | Account Manager, Midwest | 2024-01-16 | Chicago | IL |  | Marketing & Sales |
| Kalsec Inc. | Account Manager- Southern California (REMOTE) | 2024-01-14 | Los Angeles Metropolitan Area | CA | Remote | Marketing & Sales |
| University of Southern California | Account Representative | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site |  |
| Uber | Account Representative, Nashville | 2024-01-16 | Nashville | TN |  |  |
| Uber | Account Representative, South Jersey | 2024-01-16 | New York | NY |  |  |
| Edelman | Account Supervisor, Employee Experience | 2024-01-14 | San Francisco | CA | Hybrid |  |
| Watershed | Account executive, enterprise | 2024-01-15 | San Francisco | CA | Remote | Marketing & Sales |
| Abacus Group, LLC | Accounting & Finance Recruiter | 2024-01-16 | Encinitas | CA | Hybrid | Finance & Accounting,HR & Recruiting |
| RightWorks | Accounting/Payroll Assistant - 1711595 | 2024-01-14 |  California |  | On-site | Finance & Accounting,HR & Recruiting |
| Speedwork -- LinkedIn Ads Agency | Ad Design and Copywriting Specialist | 2024-01-14 | United States | CA | Remote |  |
| VIZIO | Ad Operations Specialist | 2024-01-14 | Irvine | CA | On-site |  |
| VIZIO | Ad Operations Specialist | 2024-01-14 | Los Angeles | CA | On-site |  |
| TikTok | Ad Tech Product Counsel | 2024-01-14 | Los Angeles | CA |  |  |
| TikTok | Ad Tech Product Counsel | 2024-01-14 | San Jose | CA |  |  |
| Arrow Search Partners | Administrative Assistant | 2024-01-14 | San Francisco | CA |  |  |
| DSV - Global Transport and Logistics | Administrative Assistant | 2024-01-14 | Torrance | CA | On-site |  |
| Cisco | Administrative Assistant, Director, CX Product Strategy | 2024-01-15 | San Jose | CA |  |  |
| KYYBA Inc | Adobe Analytics Implementation Engineer | 2024-01-14 | United States | CA | Remote | Data Science |
| Planned Parenthood of Greater New York | Adult Sexuality Educator | 2024-01-15 | Hempstead | NY | Hybrid | Education & Teaching |
| Chamberlain University | Advanced Physical Assessment (NR509) - Visiting Professor (Part-time/Remote) | 2024-01-16 | United States | CA | Remote | Education & Teaching |
| CGI | Advantage HR ERP Trainer | 2024-01-16 | Los Angeles | CA |  | HR & Recruiting |
| Alibaba Group | Advertising Senior Product Manager | 2024-01-16 | Sunnyvale | CA |  | Product Management |
| Alibaba Group | Advertising Senior Product Manager | 2024-01-14 | Sunnyvale | CA |  | Product Management |
| Bank of America | Advisor Development Program - Financial Solutions Advisor Trainee: Gaithersburg Square Financial Center | 2024-01-16 | Gaithersburg | MD |  |  |
| Children's Hospital Los Angeles (CHLA) | Affirmative Action Program Manager / HR - Operational Excellence | 2024-01-14 | Los Angeles | CA | On-site | HR & Recruiting,Project Management |
| American Express Global Business Travel | After Hours Travel Counselor | 2024-01-16 | United States | CA | Remote |  |
| MANITOU Group | After Sales Support Manager - West | 2024-01-14 | Greater Sacramento | CA |  | Marketing & Sales |
| Aspire Public Schools | After School Educator | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| Wilbur-Ellis | Agriculture Customer Service Representative (Rio Linda, CA) | 2024-01-14 | Rio Linda | CA | On-site | Marketing & Sales |
| Exponent | Agrigenomics Scientist (Ph.D.) | 2024-01-14 | Alameda County | CA |  |  |
| Channel Impact | Alliance Marketing Specialist | 2024-01-14 | California | CA | Remote | Marketing & Sales |
| Varonis | Alliances Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| InterVision Systems | Amazon Connect Software Development Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Albertsons Companies | Analyst - Analytical Consulting (421712) | 2024-01-15 | Pleasanton | CA | Hybrid |  |
| United Airlines | Analyst - Data Protection & Privacy | 2024-01-15 | Chicago | IL |  |  |
| AGS Cyber | Analyst Relations Director | 2024-01-14 | United States | CA | Remote |  |
| Wilshire | Analyst, Legal & Compliance | 2024-01-16 | Santa Monica | CA | Hybrid |  |
| Health Care Service Corporation | Analytics Consultant | 2024-01-15 | Chicago | IL |  | Data Science |
| Netflix | Analytics Engineer (L5) - Playback Data and Tooling | 2024-01-16 | Los Gatos | CA |  | Data Science |
| Clevertech | Android Developer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Anthropologie | Anthropologie Department Manager: Service & Styling | 2024-01-14 | Fresno | CA | On-site |  |
| 5.11 Tactical | Apparel Designer | 2024-01-16 | Costa Mesa | CA | On-site | Designers |
| hackajob | Application Security Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Evinex | Applications Developer (Java & SQL) | 2024-01-16 | Riverside | CA | On-site | Software Engineering |
| Oracle | Applications Developer 3 | 2024-01-14 | Pleasanton | CA | On-site | Software Engineering |
| Oracle | Applications Developer 3 | 2024-01-14 | Redwood City | CA | On-site | Software Engineering |
| Uber | Applied Scientist II - Marketplace Pricing | 2024-01-16 | New York | NY |  | Finance & Accounting |
| Uber | Applied Scientist II - Marketplace Pricing | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| Uber | Applied Scientist II - Marketplace Pricing | 2024-01-16 | Sunnyvale | CA |  | Finance & Accounting |
| Randstad USA | Architectural Sales Representative | 2024-01-14 | San Diego | CA | On-site | Marketing & Sales |
| JPMorgan Chase & Co. | Area Data Owner - Acquisition Marketing Platform - Senior Associate | 2024-01-15 | Columbus | OH |  | Marketing & Sales |
| Raising Cane's Chicken Fingers | Area Leader of Recruiting - San Fernando | 2024-01-16 | San Fernando | CA | On-site |  |
| Amazon | Area Manager II - Moreno Valley, CA | 2024-01-15 | Moreno Valley | CA |  |  |
| Kreg Therapeutics | Area Vice President of Sales- Northern California & Pacific Northwest | 2024-01-15 | San Francisco Bay Area | CA | On-site | Marketing & Sales |
| Hartounian, A Professional Law Corporation | Armenian Speaking Personal Injury Legal Assistant/Case Manager | 2024-01-14 | Glendale | CA | On-site | Legal |
| Prodware Solutions | Artificial Intelligence Engineer | 2024-01-14 | United States | CA | Remote | Data Science,Software Engineering |
| Lawrence Harvey | Artificial Intelligence Engineer - Consulting Firm - Remote | 2024-01-15 | United States | CA | Remote | Data Science,Software Engineering |
| HDR | Assistant Bridge Engineering Project Manager | 2024-01-16 | Los Angeles | CA | On-site | Software Engineering,Project Management |
| Cal Poly Associated Students, Inc | Assistant Coordinator - Marketing (Creative Operations) | 2024-01-15 | San Luis Obispo | CA | On-site | Marketing & Sales |
| Liaison Landscapes Inc. | Assistant Designer | 2024-01-16 | Concord | CA | Hybrid | Designers |
| Vince | Assistant Designer, Women's Soft Wovens | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Designers |
| Westcliff University | Assistant Director of Human Resources | 2024-01-15 | Irvine | CA | Hybrid |  |
| Moody's Analytics | Assistant General Counsel | 2024-01-16 | San Francisco | CA | On-site |  |
| JDHuntr In-House Counsel Jobs | Assistant General Counsel - Television Production | 2024-01-14 | Los Angeles | CA | On-site |  |
| Mathnasium (Operated by Lossing Enterprises, LLC) | Assistant Learning Center Manager | 2024-01-15 | San Diego | CA | On-site |  |
| Armstrong Garden Centers, Inc. | Assistant Manager in Training (Retail-Garden Center) | 2024-01-14 | Encinitas | CA | On-site |  |
| lululemon | Assistant Manager, Guest Experience - Wayland Square, Providence Rhode Island | 2024-01-16 | Providence | RI | On-site |  |
| Strategic Education, Inc | Assistant Professor, Counselor Education, GuidedPath | 2024-01-16 | United States | CA | Remote | Education & Teaching |
| Strategic Education, Inc | Assistant Professor, Master and Doctor of Human Services, GuidedPath | 2024-01-16 | United States | CA | Remote | Education & Teaching,Medical & Healthcare |
| A Square Group (ASG) | Assistant Project Manager | 2024-01-16 | Arlington | VA | On-site | Project Management |
| Gulfstream Strategic Placements | Assistant Project Manager | 2024-01-14 | Orange County | CA | On-site | Project Management |
| Legends | Assistant Project Manager | 2024-01-16 | Culver City | CA | On-site | Project Management |
| Lids | Assistant Store Manager PT | 2024-01-14 | Los Angeles | CA |  |  |
| Extra Space Storage | Assistant Store Manager($16-$18 + monthly incentive opportunities) | 2024-01-14 | Indio | CA | On-site |  |
| Extra Space Storage | Assistant Store Manager($17-$18/hr) | 2024-01-14 | Walnut | CA | On-site | HR & Recruiting |
| SEPHORA | Assistant Store Manager, Times Square | 2024-01-16 | New York | NY |  |  |
| Pacific Union College | Assistant or Associate or Full Professor of Nursing | 2024-01-16 | Angwin | CA | On-site | Education & Teaching |
| UC Irvine | Assistant, Associate or Full Professor, In-Residence - Division of Infectious Diseases | 2024-01-16 | Irvine | CA | On-site | Education & Teaching |
| The Clorox Company | Assoc Mgr Analytic Insights | 2024-01-14 | California | CA | On-site |  |
| Standish Management, LLC | Associate | 2024-01-14 | San Francisco | CA | Hybrid |  |
| Johnson & Johnson | Associate Account Executive - Riverside & San Bernardino, CA - Ethicon US LLC | 2024-01-15 | San Bernardino | CA | On-site | Marketing & Sales |
| Bremer Whyte Brown & O'Meara, LLP | Associate Attorney | 2024-01-16 | Walnut Creek | CA | Hybrid | Legal |
| Dennis P. Block & Associates | Associate Attorney | 2024-01-14 | Burbank | CA | On-site | Legal |
| Desai Law APC | Associate Attorney | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site | Legal |
| Haraka Headhunters | Associate Attorney | 2024-01-14 | United States | CA | Remote | Legal |
| Jones & Dyer, A Professional Corporation | Associate Attorney | 2024-01-16 | Greater Sacramento | CA | On-site | Legal |
| MANDARICH LAW GROUP, LLP | Associate Attorney | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Legal |
| BIBIYAN LAW GROUP, PC | Associate Attorney (Labor & Employment Litigation) | 2024-01-14 | Beverly Hills | CA | Hybrid | Legal |
| RightWorks | Associate Attorney Employment Litigation - 1680753 | 2024-01-14 | Irvine | CA | On-site | Legal |
| RightWorks | Associate Attorney Employment Litigation - 1680802 | 2024-01-14 | San Francisco | CA | On-site | Legal |
| RightWorks | Associate Attorney Employment Litigation - 1680814 | 2024-01-14 | Sacramento | CA | On-site | Legal |
| RightWorks | Associate Attorney Employment/PEO Litigation - 1680834 | 2024-01-14 | Los Angeles | CA | On-site | Legal |
| RightWorks | Associate Attorney Traditional Labor - 1680788 | 2024-01-14 | San Francisco | CA | Hybrid | Legal |
| FrancisLorraine | Associate Attorney - Labor and Employment | 2024-01-14 | Los Angeles | CA | Hybrid | Legal |
| Gallagher | Associate Compensation Consultant (Remote - Work From Home) | 2024-01-15 | Berkeley | CA |  | Finance & Accounting |
| JDHuntr In-House Counsel Jobs | Associate Counsel - Regulatory and Licensing Affairs | 2024-01-14 | Rancho Cucamonga | CA | On-site |  |
| Uber | Associate Creative Director, Copy | 2024-01-16 | San Francisco | CA |  |  |
| NBCUniversal | Associate Designer | 2024-01-16 | Los Angeles Metropolitan Area | CA | Hybrid | Designers |
| Banana Republic | Associate Designer, Men’s Tailoring | 2024-01-16 | San Francisco Bay Area | CA | On-site | Designers |
| CrossCountry Consulting | Associate Director - Finance Transformation (NY) | 2024-01-15 | New York | NY | Hybrid | Finance & Accounting |
| ClickJobs.io | Associate Director - Fraud Technology Lead | 2024-01-15 | New York | NY | On-site |  |
| AIDS Healthcare Foundation | Associate Director of Creative Design | 2024-01-15 | Los Angeles | CA | On-site |  |
| Eli Lilly and Company | Associate Director – Business Insights & Analytics – Healthcare Organization (HCO) Analytics | 2024-01-15 | Indianapolis | IN |  | Data Science |
| OneMain Financial | Associate Director, Risk | 2024-01-15 | Wilmington | DE | On-site |  |
| Raytheon | Associate Director, Sales and Business Development - Autonomy - Active TOP SECRET clearance required Day 1 (ONSITE) | 2024-01-15 | McKinney | TX | On-site | Marketing & Sales |
| Western Dental & Orthodontics | Associate Doctor | 2024-01-14 | Salinas | CA | On-site | Medical & Healthcare |
| SCA Health | Associate General Counsel | 2024-01-14 | United States | CA | Remote |  |
| LA Clippers | Associate General Counsel, Venues | 2024-01-14 | Los Angeles | CA | Hybrid |  |
| Privia Health | Associate Growth Director | 2024-01-15 | Fresno | CA | Remote |  |
| DoorDash | Associate Manager, New Verticals - Ads Strategy & Analytics | 2024-01-14 | San Francisco | CA |  | Data Science |
| Northrop Grumman | Associate Packaging Designer / Engineer | 2024-01-16 | Palmdale | CA |  | Designers |
| Webologix Ltd/ INC | Associate Practice Director- Generative AI  | 2024-01-15 | New Jersey | NJ | On-site |  |
| Barksdale Control Products | Associate Product Manager | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Product Management |
| IXL Learning | Associate Product Manager, Teacher Analytics | 2024-01-16 | San Mateo | CA | Hybrid | Education & Teaching,Data Science,Product Management |
| Choosehire, Inc.  | Associate Recruiter | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | HR & Recruiting |
| Choosehire, Inc.  | Associate Recruiter | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site | HR & Recruiting |
| BioSpace | Associate Scientist Mammalian Protein Expression | 2024-01-14 | South San Francisco | CA | Hybrid |  |
| USRA | Associate Scientist, Environmental Data Sciences | 2024-01-14 | Mountain View | CA | Hybrid |  |
| H&R Block | Associate Team Leader | 2024-01-16 | Truckee | CA | On-site |  |
| Prospect Health | Associate Veterinarian Doctor, Palm Desert, California J167636 | 2024-01-14 | Palm Desert | CA | On-site | Medical & Healthcare |
| University of California, San Francisco | Associate/Full Professor of Surgery – General Surgeon | 2024-01-16 | San Francisco | CA | On-site | Education & Teaching,Medical & Healthcare |
| Fujitani Consulting | Attorney | 2024-01-16 | Sacramento | CA | On-site | Legal |
| Fujitani Consulting | Attorney | 2024-01-14 | Sacramento | CA | On-site | Legal |
| Kiewit | Attorney | 2024-01-14 | United States | CA | Remote | Legal |
| McClure & Feuer | Attorney | 2024-01-14 | California | CA | Hybrid | Legal |
| Smarter Logistics | Attorney | 2024-01-14 | Beverly Hills | CA | On-site | Legal |
| State Farm | Attorney | 2024-01-16 | Sacramento | CA |  | Legal |
| State Farm | Attorney | 2024-01-15 | Costa Mesa | CA | Hybrid | Legal |
| Viper Staffing Services | Attorney | 2024-01-16 | Glendale | CA | On-site | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Lancaster | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Los Angeles | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Pasadena | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Pomona | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Rancho Cucamonga | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Riverside | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | San Diego | CA | Remote | Legal |
| Farmers Insurance | Attorney - Southern CA | 2024-01-15 | Santa Ana | CA | Remote | Legal |
| Latham & Watkins | Attorney Recruiting Intern - Bay Area, CA | 2024-01-16 | San Francisco | CA | On-site | Legal |
| Elliott Scott HR | Attorney Recruiting Senior Coordinator - Legal Services - San Francisco | 2024-01-16 | San Francisco | CA |  | Legal |
| Consumer Financial Protection Bureau | Attorney-Advisor (Enforcement Attorney) | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | Legal |
| LHH | Attorney/Workplace Investigator | 2024-01-16 | California | CA | Remote | Legal |
| Amber Interiors Design | AutoCAD Designer | 2024-01-16 | Los Angeles | CA | Hybrid | Designers |
| Arthrex | Automation Software QA Engineer II | 2024-01-14 | Walnut | CA | On-site | Software Engineering |
| PER International | Automotive Digital Hardware Engineering, Principal or Architect | 2024-01-14 | San Jose | CA | Hybrid | Software Engineering |
| Ken Garff Automotive Group | Automotive Sales Manager | 2024-01-14 | California | CA | On-site | Marketing & Sales |
| Skydio | Autonomy Engineer Intern | 2024-01-14 | San Mateo | CA |  |  |
| St. John's Community Health | BI Software Engineer | 2024-01-16 | Los Angeles | CA |  | Software Engineering |
| Kubala Engineers | BIM Manager | 2024-01-15 | Houston | TX | On-site |  |
| Bergelectric | BIM Project Coordinator | 2024-01-14 | Rancho Cordova | CA | On-site |  |
| Bottega Veneta | BOTTEGA VENETA Stock Associate, Saks Beverly Hills | 2024-01-14 | Beverly Hills | CA | On-site |  |
| Babich & Associates | BUSINESS ANALYST | 2024-01-15 | Dallas | TX | Hybrid | Finance & Accounting,Data Science |
| eNGINE | Back End Developer - .NET | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Salesforce | Backend Software Development Engineer- Senior/Lead/Principal | 2024-01-14 | San Francisco | CA | Hybrid | Software Engineering |
| Pave | Backend Software Engineer | 2024-01-15 | San Francisco Bay Area | CA | On-site | Software Engineering |
| Lawrence Harvey | Battery Data Engineer | 2024-01-14 | United States | CA | Remote | Data Engineering |
| Montage Health | Benefit Specialist | 2024-01-16 | Monterey | CA | On-site |  |
| Trilyon, Inc. | Benefits Analyst | 2024-01-14 | San Jose | CA | Hybrid | Finance & Accounting,HR & Recruiting |
| HUB International | Benefits Analyst II, Employee Benefits | 2024-01-15 | San Diego | CA | On-site | Finance & Accounting,HR & Recruiting |
| Brown & Brown Insurance | Benefits Specialist | 2024-01-15 | United States | CA | Remote | Finance & Accounting,HR & Recruiting |
| Ann & Robert H. Lurie Children's Hospital of Chicago | Bilingual Parent Educator | 2024-01-15 | Streeterville | IL | On-site | Education & Teaching |
| HireIO, Inc. | Bilingual Recruiter | 2024-01-16 | San Jose | CA | On-site | HR & Recruiting |
| Envision Education | Biology Teacher | 2024-01-16 | Oakland | CA | On-site | Education & Teaching |
| H&R Block | Block Advisor Accelerated Tax Associate | 2024-01-16 | Elk Grove | CA | On-site | Finance & Accounting |
| H&R Block | Block Advisor Accelerated Tax Associate | 2024-01-16 | Lafayette | CA | On-site | Finance & Accounting |
| H&R Block | Block Advisor Accelerated Tax Associate | 2024-01-16 | San Francisco | CA | On-site | Finance & Accounting |
| H&R Block | Block Advisors Receptionist | 2024-01-16 |  California |  | On-site |  |
| H&R Block | Block Advisors Receptionist | 2024-01-16 | Menlo Park | CA | On-site |  |
| H&R Block | Block Advisors Receptionist | 2024-01-16 | San Carlos | CA | On-site |  |
| Maxim Healthcare Services (Home Care) | Board Certified Behavior Analyst (83k-90k Plus sign on Bonus) | 2024-01-15 | Temecula | CA | On-site |  |
| Bass Pro Shops | Boat & ATV Sales Consultant | 2024-01-14 | Irvine | CA | On-site | Marketing & Sales |
| GEICO | Bodily Injury Attorney I - Sacramento, CA (HYBRID) | 2024-01-16 | Sacramento | CA | Hybrid | Legal |
| H&R Block | Bookkeeper - Franchise Location | 2024-01-16 | Sonora | CA | On-site |  |
| JPMorgan Chase & Co. | Branch Manager - Market Square Branch - Pittsburgh, PA | 2024-01-16 | Pittsburgh | PA |  |  |
| Branch | Branch Talent Pool | 2024-01-15 | United States | CA | Remote |  |
| Macy's | Brand Ambassador - Designer Handbags, Del Amo Fashion Center - Full Time | 2024-01-16 | Torrance | CA | On-site | Marketing & Sales,Designers |
| Simply Good Foods USA, Inc.  | Brand Manager | 2024-01-14 | El Segundo | CA | Hybrid | Marketing & Sales |
| Neiman Marcus Group | Brand Manager, Alexander McQueen-San Francisco | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| ARCH Preneurs | Brand Representative | 2024-01-14 | Elk Grove | CA | On-site |  |
| ARCH Preneurs | Brand Representative | 2024-01-14 | San Jose | CA | On-site |  |
| Adobe | Build and Release Automation Engineer | 2024-01-15 | New York | NY |  | Software Engineering |
| Gordon Rees Scully Mansukhani, LLP | Business & Commercial Litigation Attorneys (2-10 years) | 2024-01-16 | San Diego | CA | On-site |  |
| JPMorgan Chase & Co. | Business Analysis Manager - VP - Public Sector Operations | 2024-01-15 | Chicago | IL |  |  |
| Baird | Business Analyst - Fixed Income Capital Markets | 2024-01-15 | Milwaukee | WI | Hybrid | Finance & Accounting,Data Science |
| Aditi Consulting | Business Analyst - III | 2024-01-15 | San Francisco | CA |  | Finance & Accounting,Data Science |
| Amazon | Business Analyst II, Strategic Account Services | 2024-01-15 | Seattle | WA |  | Finance & Accounting,Data Science |
| Aditi Consulting | Business Analyst IV | 2024-01-14 | Sunnyvale | CA |  | Finance & Accounting,Data Science |
| Aditi Consulting | Business Analyst Non IT - 2 | 2024-01-15 | Chicago | IL |  | Finance & Accounting,Data Science |
| Amazon | Business Analyst, Amazon | 2024-01-15 | Seattle | WA |  | Finance & Accounting,Data Science |
| Medix™ | Business Analyst, Clinical Research | 2024-01-15 | Boston | MA | Hybrid | Finance & Accounting,Data Science |
| Crossover  | Business Analyst, gt.school (Remote) - $100,000/year USD | 2024-01-15 | Boston | MA | Remote | Finance & Accounting,Data Science |
| North American Bancard | Business Development Director (ISO Recruiter) | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| IDMERIT | Business Development Executive | 2024-01-14 | Carlsbad | CA | Hybrid | Marketing & Sales |
| Johnson Service Group, Inc. | Business Development Manager | 2024-01-14 | San Jose | CA | Hybrid | Finance & Accounting,Marketing & Sales |
| Tenet Healthcare | Business Development Manager | 2024-01-14 | Fountain Valley | CA | On-site | Finance & Accounting,Marketing & Sales |
| The Mice Groups, Inc. | Business Development Manager | 2024-01-14 | Fremont | CA | Hybrid | Finance & Accounting,Marketing & Sales |
| LS Direct | Business Development Manager - Apparel Marketing | 2024-01-14 | United States | CA | Remote | Finance & Accounting,Marketing & Sales |
| TriMas Packaging | Business Development Manager - West Coast | 2024-01-14 | Los Angeles Metropolitan Area | CA | Remote | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | Boston | MA | On-site | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | Buffalo | NY | On-site | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | New York | NY | On-site | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | Newark | NJ | On-site | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | Philadelphia | PA | On-site | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | Providence | RI | On-site | Finance & Accounting,Marketing & Sales |
| Eurofins PSS Insourcing Solutions | Business Development Manager – Northeastern US | 2024-01-15 | Washington | WA | On-site | Finance & Accounting,Marketing & Sales |
| Uber | Business Development Manager, Autonomous Vehicles & 3rd Party Partnerships | 2024-01-16 | New York | NY |  | Marketing & Sales,Finance & Accounting |
| Uber | Business Development Manager, Autonomous Vehicles & 3rd Party Partnerships | 2024-01-16 | San Francisco | CA |  | Marketing & Sales,Finance & Accounting |
| Aisera | Business Development Manager, Strategic Partnerships | 2024-01-14 | Palo Alto | CA |  | Finance & Accounting,Marketing & Sales |
| CohnReznick LLP | Business Development Manager/Director- Netsuite | 2024-01-15 | Tysons Corner | VA | Remote | Finance & Accounting,Marketing & Sales |
| Insight Global | Business Development Representative | 2024-01-15 | Denver | CO | Hybrid | Finance & Accounting,Marketing & Sales |
| WalkMe™ | Business Development Representative | 2024-01-15 | San Francisco | CA | Hybrid | Finance & Accounting,Marketing & Sales |
| Rocket Software | Business Development Representative (BDR) | 2024-01-15 | United States | CA | Remote | Finance & Accounting,Marketing & Sales |
| Uber | Business Development Representative, U4B | 2024-01-16 | New York | NY |  | Marketing & Sales,Finance & Accounting |
| Hot Topic | Business Intelligence Analyst | 2024-01-16 | City of Industry | CA | On-site | Data Science,Finance & Accounting |
| Wipfli | Business Intelligence Consultant I | 2024-01-15 | Chicago | IL | On-site |  |
| Amazon | Business Intelligence Engineer, Amazon Health - Storefront Tech, Analytics & Data Engineering | 2024-01-15 | Seattle | WA |  | Data Engineering,Data Science,Software Engineering |
| Beyond Finance | Business Intelligence Manager | 2024-01-15 | Chicago | IL | On-site |  |
| Ardmore Home Design, Inc. | Business Intelligence Specialist | 2024-01-14 | City of Industry | CA | On-site |  |
| Business Centric Technology | Business Intelligence Team Leader | 2024-01-15 | Plano | TX | On-site |  |
| Stripe | Business Recruiter (Contract) | 2024-01-16 | San Francisco | CA | On-site | HR & Recruiting |
| Oracle | C Developer | 2024-01-16 | Redwood City | CA | Hybrid | Software Engineering |
| Open Systems Technologies | C++ Developer | 2024-01-15 | New York | NY | Hybrid | Software Engineering |
| Goliath Partners | C++ Engineer | 2024-01-15 | New York | NY | On-site |  |
| Insight Global | C++ Software Engineer | 2024-01-15 | Huntsville-Decatur-Albertville Area | CA | Hybrid | Software Engineering |
| Mastercam | C++ Software Engineer | 2024-01-15 | United States | CA | Remote | Software Engineering |
| Cadence Design Systems | C++ Software Engineer II | 2024-01-16 | San Jose | CA | Hybrid | Software Engineering |
| California Chamber of Commerce | CA Employment Law Subject Matter Expert | 2024-01-16 | Sacramento | CA | Hybrid |  |
| Antora Energy | CAD Designer | 2024-01-16 | San Jose | CA | On-site | Designers |
| Plunge | CAD/Documentation Specialist | 2024-01-16 | Lincoln | CA | On-site |  |
| BioSpace | CDnA - Commercial Insights Senior Manager, Primary Market Research | 2024-01-14 | Thousand Oaks | CA | Hybrid |  |
| BioSpace | CDnA - Data Science Manager (Omnichannel Analytics) | 2024-01-15 | Thousand Oaks | CA | Hybrid | Data Science |
| BioSpace | CDnA - Data Science Manager (Omnichannel Analytics) | 2024-01-14 | Thousand Oaks | CA | Hybrid | Data Science |
| BioSpace | CDnA - Senior Data Science Manager (Omnichannel Orchestration) | 2024-01-15 | Thousand Oaks | CA | Hybrid | Data Science |
| BioSpace | CDnA - Senior Data Science Manager (Omnichannel Orchestration) | 2024-01-14 | Thousand Oaks | CA | Hybrid | Data Science |
| Boy Scouts of America | CEO/Scout Executive - Glendale, CA | 2024-01-15 | Glendale | CA | On-site |  |
| Cadence Design Systems | CFD Data Centers, Lead Product Engineer | 2024-01-14 | California | CA | Hybrid |  |
| Gilead Sciences | CFO Undergraduate Development Rotational Program | 2024-01-14 | Foster City | CA | On-site |  |
| California State University Channel Islands | CI-Lecturer AY-Psychology | 2024-01-16 |  California |  | On-site | Education & Teaching |
| Ledgent Technology | CNC Programmer IV | 2024-01-16 | Davis | CA | On-site | Software Engineering |
| CA Department of Corrections & Rehabilitation | COMMUNITY RESOURCES MANAGER, DEPARTMENT OF CORRECTIONS | 2024-01-15 | Sacramento | CA | On-site |  |
| JL Wennes CPAs | CPA and/or Tax Preparer | 2024-01-14 | Carlsbad | CA | On-site | Finance & Accounting |
| H Mart | CRM Intern | 2024-01-14 | Whittier | CA | On-site |  |
| Family Dollar | CUSTOMER SERVICE REPRESENTATIVE | 2024-01-14 | South Gate | CA | On-site | Marketing & Sales |
| Family Dollar | CUSTOMER SERVICE REPRESENTATIVE | 2024-01-14 | Vista | CA | On-site | Marketing & Sales |
| Capital One | Café Ambassador - Glendale | 2024-01-16 | Glendale | CA |  |  |
| Capital One | Café Ambassador - Hollywood | 2024-01-16 | Los Angeles | CA |  |  |
| Capital One | Café Ambassador - Santa Monica | 2024-01-16 | Santa Monica | CA |  |  |
| Capital One | Café Ambassador - Union Square | 2024-01-16 | New York | NY |  |  |
| Capital One | Café Ambassador - Westfield Valley Fair | 2024-01-16 | Santa Clara | CA |  |  |
| JE Dunn Construction | Campus Intern - Santa Clara | 2024-01-14 | Santa Clara | CA |  |  |
| Harper Auto Square | Car Wash Associate | 2024-01-16 | Alcoa | TN | Hybrid |  |
| Harper Auto Square | Car Wash Associate | 2024-01-16 | Knoxville | TN | Hybrid |  |
| Alibaba Group | Category Manager | 2024-01-14 | Sunnyvale | CA |  |  |
| Axiom Learning | Center Director | 2024-01-15 | New York | NY | On-site |  |
| UST | Change Manager | 2024-01-16 | San Jose | CA | On-site |  |
| Kixie | Channel Account Executive | 2024-01-14 | Santa Monica | CA | On-site | Marketing & Sales |
| Airbnb | Channel Comms Senior Social Manager | 2024-01-16 | San Francisco | CA |  |  |
| BPMLinks | Chief Data Officer | 2024-01-15 | Florida | FL | Hybrid |  |
| NYS Office of Information Technology Services | Chief Data Officer (NYS Deputy Chief Information Officer), #00027 | 2024-01-15 | Albany | NY | On-site |  |
| Stanislaus Equity Partners | Chief Executive Officer | 2024-01-15 | Modesto | CA | On-site |  |
| BrainWorks | Chief Marketing Officer | 2024-01-15 | Birmingham | AL | On-site | Marketing & Sales |
| Enertek Group | Chief People Officer | 2024-01-14 | California | CA | Hybrid |  |
| The Learning Experience | Child Care Director | 2024-01-15 | Fresno | CA | On-site |  |
| La Petite Academy | Childcare Teacher | 2024-01-14 |  California |  | On-site | Education & Teaching |
| La Petite Academy | Childcare Teacher | 2024-01-14 | Diamond Bar | CA | On-site | Education & Teaching |
| La Petite Academy | Childcare Teacher | 2024-01-14 | Los Angeles | CA | On-site | Education & Teaching |
| La Petite Academy | Childcare Teacher | 2024-01-14 | Simi Valley | CA | On-site | Education & Teaching |
| La Petite Academy | Childcare Teacher | 2024-01-14 | Ventura | CA | On-site | Education & Teaching |
| Learning Care Group | Childcare Teacher | 2024-01-14 | Alhambra | CA | On-site | Education & Teaching |
| Learning Care Group | Childcare Teacher | 2024-01-14 | Brea | CA | On-site | Education & Teaching |
| Learning Care Group | Childcare Teacher | 2024-01-14 | Chino | CA | On-site | Education & Teaching |
| Learning Care Group | Childcare Teacher | 2024-01-14 | Claremont | CA | On-site | Education & Teaching |
| Learning Care Group | Childcare Teacher | 2024-01-14 | Commerce | CA | On-site | Education & Teaching |
| Learning Care Group | Childcare Teacher | 2024-01-14 | Oxnard | CA | On-site | Education & Teaching |
| The Children's Courtyard | Childcare Teacher | 2024-01-14 |  California |  | On-site | Education & Teaching |
| The Children's Courtyard | Childcare Teacher | 2024-01-14 | Agoura Hills | CA | On-site | Education & Teaching |
| The Children's Courtyard | Childcare Teacher | 2024-01-14 | Fontana | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 |  California |  | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Agoura Hills | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Castaic | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Eastvale | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Rancho Cucamonga | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Santa Clarita | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Simi Valley | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Stevenson Ranch | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Torrance | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Upland | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Ventura | CA | On-site | Education & Teaching |
| Tutor Time Childcare | Childcare Teacher | 2024-01-14 | Walnut | CA | On-site | Education & Teaching |
| City of Millbrae | City Engineer / Capital Improvement Program Manager | 2024-01-14 | California | CA | On-site | Project Management |
| Uber | City Manager, Greater Washington | 2024-01-16 | Seattle | WA |  |  |
| HDR | Civil Construction Project Manager | 2024-01-16 | Irvine | CA | On-site | Project Management |
| Gordon Rees Scully Mansukhani, LLP | Civil Litigation Attorneys (3 years+ or more) | 2024-01-16 | Oakland | CA |  |  |
| Marrow Fine Jewelry | Client Experience Lead | 2024-01-14 | Newport Beach | CA | On-site |  |
| Paychex | Client HR Business Partner II - PST, MT | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| Occasions Staffing Solutions  | Client Partnership Manager - Staffing App | 2024-01-14 | Oceanside | CA | On-site | HR & Recruiting |
| KDS Strategic Search Group | Client Service Specialist (Wealth Mgmt) | 2024-01-14 | San Diego Metropolitan Area | CA | On-site |  |
| The Mather Group, LLC | Client Services Associate (Lafayette) | 2024-01-14 | San Francisco | CA | On-site |  |
| KDS Strategic Search Group | Client services/Operations | 2024-01-14 | San Diego Metropolitan Area | CA | On-site |  |
| Next Level Impacts | Clinical Application Specialist | 2024-01-14 | Los Angeles Metropolitan Area | CA | Hybrid |  |
| Huntington Health | Clinical Care Partner - Full Time, 12 Hour Nights | 2024-01-15 | Pasadena | CA | On-site |  |
| LVIS | Clinical Data Analyst/Coordinator | 2024-01-14 | Palo Alto | CA | On-site | Data Science |
| Scripps Health | Clinical Documentation Specialist - Inpatient RN | 2024-01-15 | San Diego | CA |  |  |
| Saint Agnes Medical Center | Clinical Education Specialist full time Development and Support Services | 2024-01-14 | Fresno | CA |  |  |
| Trinity Health | Clinical Education Specialist full time Development and Support Services | 2024-01-14 | Fresno | CA | On-site |  |
| Apreva Hospice | Clinical Educator | 2024-01-15 | San Diego | CA | On-site | Education & Teaching |
| Inizio Engage | Clinical Educator | 2024-01-16 | Los Angeles | CA | Hybrid | Education & Teaching |
| Desert Regional Medical Center | Clinical Manager Emergency Room Full Time Nights | 2024-01-15 | Palm Springs | CA |  |  |
| Stanford Health Care | Clinical Nurse (RN), ICU - Neuro / Medicine – 0.9 Nights | 2024-01-15 | Palo Alto | CA | On-site | Medical & Healthcare |
| Celluma Light Therapy by BioPhotas, Inc | Clinical Sales Specialist | 2024-01-14 | Tustin | CA | On-site | Marketing & Sales |
| Abbott | Clinical Sales Specialist - Structural Heart, SI Stroke Prevention (Sacramento) | 2024-01-15 | Sacramento | CA |  | Marketing & Sales |
| Abbott | Clinical Specialist I, CPT - San Jose, CA | 2024-01-15 | San Jose | CA |  | Medical & Healthcare |
| Abbott | Clinical Specialist, Structural Interventions - San Diego and Las Vegas | 2024-01-15 | San Diego | CA |  | Medical & Healthcare |
| Pacific Clinics | Clinical Team Supervisor | 2024-01-15 | Los Angeles | CA | On-site |  |
| Aera Technology | Cloud Cost Optimization Engineer | 2024-01-14 | San Francisco | CA | Hybrid | Software Engineering |
| Orbis | Cloud Data Engineer - Autonomous Vehicles - $150k+ | 2024-01-15 | Boston | MA | Hybrid | Data Engineering,Software Engineering |
| Charles River Associates | Cloud Engineer | 2024-01-15 | Chicago | IL | On-site | Software Engineering |
| Metronet | Cloud Engineer | 2024-01-16 | California | CA | On-site | Software Engineering |
| StreetID | Cloud Engineer | 2024-01-15 | Greater Chicago Area | CA | Hybrid | Software Engineering |
| WITS (Wistron ITS) | Cloud Engineer | 2024-01-16 | Orange County | CA | Hybrid | Software Engineering |
| Costco Wholesale | Cloud Engineer - Digital | 2024-01-15 | Seattle | WA | Hybrid | Software Engineering |
| CrowdStrike | Cloud Engineer II - Managed Services (Remote) | 2024-01-14 | Sunnyvale | CA | Remote | Software Engineering |
| Merck | Cloud Infrastructure Engineer (Hybrid) | 2024-01-15 | Rahway | NJ | On-site | Data Engineering,Software Engineering |
| Trusted Tech Team | Cloud Support Engineer | 2024-01-14 | Irvine | CA | Hybrid | Software Engineering,Marketing & Sales |
| University of California, Santa Cruz | Coastal Science and Policy Associate Professor of Practice | 2024-01-16 | Santa Cruz | CA | On-site | Education & Teaching |
| Re:Build Manufacturing | Color and Materials Designer | 2024-01-16 | Long Beach | CA | On-site | Designers |
| Sigma Computing | Commercial Account Executive (CAE) | 2024-01-14 | San Francisco Bay Area | CA | On-site | Marketing & Sales |
| Heritage Insurance Agency | Commercial Account Manager | 2024-01-15 | Chico | CA | Hybrid | Marketing & Sales |
| JDHuntr In-House Counsel Jobs | Commercial Counsel | 2024-01-14 | El Segundo | CA | On-site |  |
| Lateral Link | Commercial Finance Associate Attorney | 2024-01-16 | Orange County | CA | Hybrid | Legal,Finance & Accounting |
| Gulfstream Strategic Placements | Commercial HVAC Project Sales | 2024-01-14 | Orange | CA | On-site | Marketing & Sales |
| Insurance Relief | Commercial Lines Account Manager - Fresno, CA | 2024-01-15 | Fresno | CA | On-site | Marketing & Sales |
| Cohesity | Commercial Sales Engineer (Central/West) | 2024-01-14 | San Jose | CA | Remote | Marketing & Sales |
| Gauzy | Commercial/ Residential Sales Rep. | 2024-01-14 | California | CA | On-site | Marketing & Sales |
| Playhouse Square | Communications Coordinator | 2024-01-16 | Cleveland | OH | On-site |  |
| RMI | Communications and Marketing Lead | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Claire Myers Consulting | Compensation & Benefits Account Manager | 2024-01-14 | Irvine | CA | On-site | Finance & Accounting,HR & Recruiting,Marketing & Sales |
| Guild | Compensation Analyst (Remote) | 2024-01-15 | United States | CA | Remote | Finance & Accounting |
| Gallagher | Compensation Consultant : Remote - Work From Home | 2024-01-15 | Berkeley | CA |  | Finance & Accounting |
| Ducommun Incorporated | Compensation Specialist | 2024-01-16 | Santa Ana | CA | On-site | Finance & Accounting |
| Calix | Competitive Intelligence Intern | 2024-01-15 | United States | CA | Remote |  |
| NVIDIA | Compiler Engineer | 2024-01-16 | Santa Clara | CA |  |  |
| Seso Inc. | Compliance Attorney | 2024-01-15 | United States | CA | Remote | Legal |
| Preferred IPA of California | Computer Programmer / System Analyst | 2024-01-14 | Los Angeles | CA | On-site | Software Engineering |
| Hamilton Porter | Computer Vision Engineer | 2024-01-15 | Los Angeles | CA | On-site | Data Science |
| Cadence Design Systems | Configuration Management Engineer II (R44753/chs) | 2024-01-15 | San Jose | CA | Hybrid |  |
| The Walsh Group - Walsh Construction & Archer Western | Construction Assistant Project Manager | 2024-01-14 | Concord | CA |  | Project Management |
| Lean Human Resources Partners  | Construction Project Manager | 2024-01-14 | San Luis Obispo County | CA | On-site | Project Management |
| SC Builders | Construction Project Manager | 2024-01-16 | San Francisco Bay Area | CA | On-site | Project Management |
| W3Global | Construction Project Manager | 2024-01-16 | Los Angeles | CA | Hybrid | Project Management |
| C.SEC - An Executive Search Firm | Construction Project Manager - K-14 | 2024-01-16 | San Diego | CA | Hybrid | Project Management |
| C.SEC - An Executive Search Firm | Construction Project Manager - TI | 2024-01-16 | San Diego | CA | Hybrid | Project Management |
| Nordic Global | Consultant, Cyber Services - Digital Health | 2024-01-14 | United States | CA | Remote |  |
| Pave | Consulting Partnerships Lead | 2024-01-14 | San Francisco Bay Area | CA |  |  |
| Uber | Consumer Payments Partner Manager | 2024-01-16 | San Francisco | CA |  |  |
| ClickJobs.io | Consumer Products Sector Director | 2024-01-15 | Lynnfield | MA | Hybrid |  |
| ClickJobs.io | Consumer Products Sector Director | 2024-01-15 | Saugus | MA | Hybrid |  |
| ClickJobs.io | Consumer Products Sector Director | 2024-01-15 | South Holland | IL | Hybrid |  |
| Dexcom | Content & Editorial Associate Manager | 2024-01-14 | San Diego | CA | Hybrid |  |
| PostHog | Content Marketer | 2024-01-15 | United States | CA | Remote |  |
| BIGO | Content Programming Manager | 2024-01-14 | Los Angeles Metropolitan Area | CA | Hybrid |  |
| Davis Wright Tremaine LLP | Contract Part-time Real Estate Finance Attorney | 2024-01-16 | Los Angeles | CA | Hybrid | Legal,Finance & Accounting |
| Walden University | Contributing Faculty - PhD Psychology | 2024-01-16 | United States | CA | Remote |  |
| ZEALS | Conversational Designer(US) | 2024-01-16 | California | CA | On-site | Designers |
| Terranea Resort | Coordinator - Spa (Full Time) | 2024-01-14 | Rancho Palos Verdes | CA | On-site |  |
| Madison Square Garden Entertainment Corp. | Coordinator Government Affairs & Social Impact | 2024-01-16 | New York | NY | Hybrid |  |
| San Francisco Bay University | Coordinator for Disability and Accessibility Services | 2024-01-16 | Fremont | CA | On-site |  |
| Algo Capital Group | Core Software Engineer | 2024-01-15 | New York | NY | Hybrid | Software Engineering |
| Honeywell | Corporate Global Risk and Resilience Leader | 2024-01-15 | Charlotte | NC | Hybrid |  |
| McClure & Feuer | Corporate Lawyer | 2024-01-14 | San Francisco Bay Area | CA | Hybrid | Legal |
| New York Life Insurance Company | Corporate Vice President, Product Manager - Core Modernization | 2024-01-15 | New York | NY | Hybrid | Product Management |
| YipitData | Counsel, Compliance | 2024-01-16 | United States | CA | Remote |  |
| Uber | Counsel, Delivery (Grocery & Retail) | 2024-01-16 | San Francisco | CA |  |  |
| Cherokee Federal | Counterintelligence Analyst - Mid (Analysis Division) | 2024-01-14 | Pasadena | CA | On-site |  |
| Sanrio, Inc. | Creative Designer (Softlines) | 2024-01-16 | Torrance | CA | Hybrid | Designers |
| Celluma Light Therapy by BioPhotas, Inc | Creative Director | 2024-01-14 | Tustin | CA | On-site |  |
| Monster Energy | Creative Director Bang | 2024-01-14 | Corona | CA | On-site |  |
| Niantic, Inc. | Creative Producer (Short-term) | 2024-01-15 | San Francisco | CA | Hybrid |  |
| Jenius Bank | Credit Card Product Manager (Remote) | 2024-01-16 | California | CA | Remote | Product Management |
| RH | Curating Associate (Visual Merchandiser) | 2024-01-14 | San Francisco Bay Area | CA | On-site |  |
| Capital One | Current PhD, Applied Research Intern - Summer 2024 | 2024-01-16 | San Francisco | CA |  |  |
| Google | Customer Engineer, Security Platform, Google Cloud | 2024-01-15 | San Francisco | CA | On-site | Software Engineering |
| Google | Customer Engineer, Security Platform, Google Cloud | 2024-01-15 | Sunnyvale | CA | On-site | Software Engineering |
| Planful | Customer Marketing - References Coordinator | 2024-01-15 | San Francisco | CA | Remote | Marketing & Sales |
| AMISEQ | Customer Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| The Goodyear Tire & Rubber Company | Customer Sales Advisor - Culver City, CA | 2024-01-14 | Culver City | CA | On-site | Marketing & Sales |
| Savers - Value Village | Customer Service Associate | 2024-01-14 | Huntington Beach | CA | On-site | Marketing & Sales |
| Motion | Customer Service Rep | 2024-01-14 | Los Angeles | CA |  | Marketing & Sales |
| Johnson Outdoors | Customer Service Representative - Diving | 2024-01-14 | El Cajon | CA | Hybrid | Marketing & Sales |
| Baptist Health | Customer Service Self Pay Specialist II, Single Billing Office, Baptist Metro Square | 2024-01-16 | Jacksonville | FL | On-site | Marketing & Sales |
| REVOLVE | Customer Service Team Lead (Opening Shift) | 2024-01-14 | Cerritos | CA | Hybrid | Marketing & Sales |
| Daikin Comfort | Customer Service/Counter Sales Representative | 2024-01-14 | San Jose | CA | On-site | Marketing & Sales |
| Icertis | Customer Success Director | 2024-01-14 | Sacramento | CA | Remote |  |
| Acara Solutions, An Aleron Company | Customer Unit General Manager | 2024-01-15 | California | CA | Remote |  |
| Life Line Screening | D2C Digital Strategist | 2024-01-14 | United States | CA | Remote |  |
| Employment Development Department | DISABILITY INSURANCE PROGRAM MANAGER I | 2024-01-16 | Sacramento County | CA | On-site | Project Management |
| OpenAI | DL HW/SW Codesign Engineer | 2024-01-16 | San Francisco | CA |  |  |
| Akkodis | Data & Analytics Portfolio Manager | 2024-01-15 | Edison | NJ | Hybrid | Finance & Accounting,Data Science |
| Fortune 500 Companies | Data & Analytics Portfolio Manager | 2024-01-15 | Edison | NJ | Hybrid | Finance & Accounting,Data Science |
| Amazon | Data Analyst | 2024-01-14 | Palo Alto | CA | Hybrid | Data Science |
| Coders Data | Data Analyst | 2024-01-14 | California | CA | Remote | Data Science |
| Gallagher Re | Data Analyst | 2024-01-15 | New York | NY |  | Data Science |
| swipejobs | Data Analyst | 2024-01-14 | San Francisco Bay Area | CA | On-site | Data Science |
| NYU Langone Health | Data Analyst - Brooklyn | 2024-01-15 | Brooklyn | NY | On-site | Data Science |
| TikTok | Data Analyst Global Payments - USDS | 2024-01-14 | Mountain View | CA |  | Data Science |
| Uber | Data Analyst II | 2024-01-16 | Chicago | IL |  | Data Science |
| Uber | Data Analyst II | 2024-01-16 | New York | NY |  | Data Science |
| Uber | Data Analyst II | 2024-01-16 | San Francisco | CA | On-site | Data Science |
| Abiomed | Data Analytics Product Manager | 2024-01-16 | Irvine | CA | On-site | Data Science,Product Management |
| Johnson & Johnson | Data Analytics Product Manager | 2024-01-16 | Irvine | CA | On-site | Data Science,Product Management |
| Integris Group | Data Architect w/ Azure Databricks Exp. - Salary + Bonus - 100% Remote - Immediate Need!! | 2024-01-15 | United States |  | Remote | Data Engineering |
| Amazon Web Services (AWS) | Data Center Chief Engineer | 2024-01-15 | New Albany | OH |  |  |
| TransPerfect | Data Contributor | 2024-01-15 | Indiana | IN | Remote |  |
| Albert Einstein College of Medicine | Data Coordinator | 2024-01-15 | Bronx | NY | On-site |  |
| Airbnb | Data Engineer | 2024-01-16 | Portland | OR |  | Data Engineering |
| BlackLine | Data Engineer | 2024-01-15 | Los Angeles | CA | Hybrid | Data Engineering |
| Keasis | Data Engineer | 2024-01-16 | Menlo Park | CA | On-site | Data Engineering |
| Shamrock Trading Corporation | Data Engineer | 2024-01-14 | United States | CA | Remote | Data Engineering |
| TTS Technologies | Data Engineer | 2024-01-14 | United States | CA | Remote | Data Engineering |
| Orbis | Data Engineer (AWS) - Autonomous Vehicles - $150k+ | 2024-01-15 | Boston | MA | Hybrid | Data Engineering |
| Cypress HCM | Data Engineer (PowerBI/Azure Data Explorer & Data Factory) | 2024-01-14 | United States | CA | Remote | Data Engineering |
| Salesforce | Data Engineer (Senior, Lead, Principal) | 2024-01-15 | Bellevue | WA | Hybrid | Data Engineering |
| Salesforce | Data Engineer (Senior, Lead, Principal) | 2024-01-14 | San Francisco | CA | Hybrid | Data Engineering |
| TikTok | Data Engineer - Ads Data | 2024-01-14 | San Jose | CA |  | Data Engineering |
| Amazon | Data Engineer - FinTech, Fintech - Tax | 2024-01-15 | Dallas | TX |  | Finance & Accounting,Data Engineering |
| Arlo | Data Engineer - Underwriting API | 2024-01-15 | New York | NY | On-site | Data Engineering |
| ByteDance | Data Engineer Graduate (Real Time Communication) - 2024 Start (BS/ MS) | 2024-01-15 | Seattle | WA |  | Data Engineering |
| GSK | Data Engineer II | 2024-01-15 | San Francisco | CA | On-site | Data Engineering |
| GSK | Data Engineer II | 2024-01-15 | Seattle | WA | On-site | Data Engineering |
| ACV Auctions | Data Engineer IV - Max Digital (Data Operations) | 2024-01-15 | Manhattan | NY |  | Data Engineering |
| Blue Shield of California | Data Engineer Lead | 2024-01-16 | California | CA | Hybrid | Data Engineering |
| Trispoke Managed Services Pvt. Ltd. | Data Engineer or Analytics Engineer | 2024-01-14 | Sunnyvale | CA | Hybrid | Data Engineering,Data Science |
| Google | Data Engineer, Google Customer Solutions | 2024-01-15 | Los Angeles | CA | On-site | Data Engineering |
| Google | Data Engineer, Google Customer Solutions | 2024-01-15 | Redwood City | CA | On-site | Data Engineering |
| Google | Data Engineer, Google Customer Solutions | 2024-01-15 | San Francisco | CA | On-site | Data Engineering |
| Booz Allen Hamilton | Data Engineer, Mid | 2024-01-16 | San Diego | CA | Hybrid | Data Engineering |
| Meta | Data Engineer, Product Analytics | 2024-01-15 | Los Angeles | CA |  | Data Engineering,Data Science |
| Meta | Data Engineer, Product Analytics | 2024-01-15 | Menlo Park | CA |  | Data Engineering,Data Science |
| Prodware Solutions | Data Engineering - Vector Databases Experience | 2024-01-15 | United States |  | Remote | Data Engineering,Software Engineering |
| Meta | Data Engineering Intern, Analytics | 2024-01-15 | Burlingame | CA |  | Data Engineering,Data Science,Software Engineering |
| Meta | Data Engineering Intern, Analytics | 2024-01-15 | San Francisco | CA |  | Data Engineering,Data Science,Software Engineering |
| V-Soft Consulting Group, Inc. | Data Governance Analyst | 2024-01-15 | Richmond | VA | On-site | Data Engineering |
| American Century Investments | Data Governance Analyst Specialist | 2024-01-15 | Dallas | TX | Hybrid | Data Engineering |
| Sogeti | Data Governance Lead  | 2024-01-15 | Columbus, Ohio Metropolitan Area |  | On-site | Data Engineering |
| Citi | Data Governance Lead (Hybrid) | 2024-01-15 | Tampa | FL | Hybrid | Data Engineering |
| Crossover  | Data Research Analyst, gt.school (Remote) - $60,000/year USD | 2024-01-15 | Boston | MA | Remote |  |
| Crossover  | Data Research Analyst, gt.school (Remote) - $60,000/year USD | 2024-01-15 | Chicago | IL | Remote |  |
| Crossover  | Data Research Analyst, gt.school (Remote) - $60,000/year USD | 2024-01-15 | Dallas | TX | Remote |  |
| Crossover  | Data Research Analyst, gt.school (Remote) - $60,000/year USD | 2024-01-14 | Fulton | CA | Remote |  |
| KBR, Inc. | Data Science Developer | 2024-01-15 | Chicago | IL | Hybrid | Data Science,Software Engineering |
| Meta | Data Science Manager, Infra Privacy | 2024-01-15 | Seattle | WA |  | Data Science |
| Trimble Inc. | Data Scientist | 2024-01-14 | San Diego | CA | Hybrid | Data Science |
| Aditi Consulting | Data Scientist - Associate | 2024-01-14 | Thousand Oaks | CA |  | Data Science |
| ByteDance | Data Scientist - CapCut - UG | 2024-01-14 | Los Angeles | CA |  | Data Science |
| Similarweb | Data Scientist - Entry Level | 2024-01-15 | New York | NY | Hybrid | Data Science |
| TikTok | Data Scientist - Trust & Safety | 2024-01-14 | San Jose | CA |  | Data Science |
| Meta | Data Scientist Intern, Product Analytics | 2024-01-15 | New York | NY |  | Data Science |
| Meta | Data Scientist Intern, Product Analytics (PhD) | 2024-01-15 | Menlo Park | CA |  | Data Science |
| HAVI | Data Scientist – Global Planning & Analytics, Analytics & Insights | 2024-01-15 | Chicago | IL | Hybrid | Data Science |
| Crossover  | Data Scientist, gt.school (Remote) - $60,000/year USD | 2024-01-15 | Chicago | IL | Remote | Data Science |
| Crossover  | Data Scientist, gt.school (Remote) - $60,000/year USD | 2024-01-15 | Seattle | WA | Remote | Data Science |
| Crossover  | Data Scientist, gt.school (Remote) - $60,000/year USD | 2024-01-14 | Fulton | CA | Remote | Data Science |
| Bloomberg | Data Team Lead - Economics | 2024-01-15 | Princeton | NJ | Hybrid |  |
| Pivotal Life Sciences | Data Visualization Designer | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | Designers |
| SEI | Data and Analytics Consultant | 2024-01-15 | Boston | MA | Hybrid | Data Science |
| SEI | Data and Analytics Consultant | 2024-01-15 | Nashville | TN | Hybrid | Data Science |
| SEI | Data and Analytics Consultant | 2024-01-15 | Philadelphia | PA | Hybrid | Data Science |
| Swooped | Data and Analytics Engineer | 2024-01-15 | United States | CA | Remote | Data Science |
| Swooped | Data and Analytics Engineer | 2024-01-14 | United States | CA | Remote | Data Science |
| Concentrix Catalyst | Data/ETL Engineer | 2024-01-15 | Home | KS | On-site |  |
| The Sunshine House Early Learning Academy | Daycare Teacher | 2024-01-15 | North Augusta | SC | On-site | Education & Teaching |
| Futran Solutions | Decision Analytics Consultant | 2024-01-15 | United States |  | Remote | Data Science |
| Centerbase | Demand Generation Manager | 2024-01-15 | United States | CA | Remote |  |
| Planful | Demand Generation Manager | 2024-01-15 | San Francisco | CA | Remote |  |
| Roots Automation | Demand Generation Marketing Manager | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| CHOICE Healthcare Services | Dental Marketing Outreach Specialist - Bilingual | 2024-01-15 | Vacaville | CA | Hybrid | Marketing & Sales |
| Guardian Life | Dental Network Recruiter, Northern California | 2024-01-16 | San Francisco Bay Area | CA | Remote | HR & Recruiting |
| Pacific Northwest National Laboratory | Deputy CISO - Advanced Cyber Analytics | 2024-01-15 | Richland | WA | On-site | Data Science |
| Capital One | Design (User) Researcher (Manager), Card & Bank - Hybrid | 2024-01-16 | San Francisco | CA |  |  |
| UMP (United Master Planners) | Design Manager (Architect /Engineer) | 2024-01-14 | Los Angeles | CA | On-site |  |
| 84 Lumber | Designer | 2024-01-14 | Bakersfield | CA | On-site | Designers |
| Floor & Decor | Designer | 2024-01-16 | Rancho Cordova | CA | On-site | Designers |
| Hestia Atelier | Designer | 2024-01-16 | Irvine | CA | On-site | Designers |
| VW Credit, Inc. | Designer Associate | 2024-01-14 | Los Angeles | CA | On-site | Designers |
| The Container Store | Designer/Sales Consultant In-Home | 2024-01-16 | Palo Alto | CA | On-site | Marketing & Sales,Designers |
| The Container Store | Designer/Sales Consultant In-Home | 2024-01-16 | Walnut Creek | CA | On-site | Marketing & Sales,Designers |
| Booz Allen Hamilton | DevOps Engineer | 2024-01-15 | Alexandria | VA |  | Software Engineering |
| Booz Allen Hamilton | DevOps Engineer | 2024-01-15 | Chantilly | VA |  | Software Engineering |
| Coactive AI | DevOps Engineer | 2024-01-15 | San Jose | CA | Hybrid | Software Engineering |
| TabaPay | DevOps Engineer | 2024-01-15 | Mountain View | CA | On-site | Software Engineering |
| TikTok | DevOps Engineer | 2024-01-16 | San Jose | CA |  | Software Engineering |
| Cisco | DevOps Engineer - Containers Platform | 2024-01-15 | San Jose | CA |  | Software Engineering |
| HRL Laboratories, LLC | DevOps Engineer, Senior | 2024-01-14 | Malibu | CA | On-site | Software Engineering |
| Epic | DevOps Infrastructure/Site Reliability Engineer | 2024-01-16 | San Jose | CA | On-site | Software Engineering |
| Epic | DevOps Infrastructure/Site Reliability Engineer | 2024-01-15 | San Francisco | CA | On-site | Software Engineering |
| Epic | DevOps Infrastructure/Site Reliability Engineer | 2024-01-15 | Yonkers | NY | On-site | Software Engineering |
| Epic | DevOps Infrastructure/Site Reliability Engineer | 2024-01-14 | Los Angeles | CA | On-site | Software Engineering |
| Esri | DevSecOps Engineer II - Azure | 2024-01-16 | Redlands | CA | On-site |  |
| Esri | DevSecOps Engineer II - Azure | 2024-01-15 | Redlands | CA | On-site |  |
| Anduril Industries | Development Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Crossover  | Digital Content Creator, Prequel (Remote) - $100,000/year USD | 2024-01-15 | Fulton | CA | Remote | Designers |
| JBC | Digital Designer | 2024-01-16 | Los Angeles | CA | Remote | Designers |
| Zipline | Digital Designer | 2024-01-16 | South San Francisco | CA |  | Designers |
| Trigenx, LLC | Digital Marketing Manager | 2024-01-14 | San Diego | CA | Remote | Marketing & Sales |
| Swooped | Digital Marketing Specialist | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Hays | Digital Producer/Product Manager | 2024-01-16 | Anaheim | CA | On-site | Product Management |
| PsiQuantum | Digital System Designer | 2024-01-16 | Palo Alto | CA | On-site | Designers |
| Yamaha Motor Corporation, USA | Digital Transformation Technical Manager | 2024-01-15 | Marietta | GA | Hybrid |  |
| Lifes A Dream Travel | Digital Travel & Marketing Specialist | 2024-01-14 | NAMER | CA | Remote | Marketing & Sales |
| Rambus | Dir Validation Engineering | 2024-01-15 | San Jose | CA | Hybrid | Software Engineering |
| The Walt Disney Company | Director - Data Journalism, ABC Owned Television Stations | 2024-01-15 | Glendale | CA | On-site |  |
| The AZEK Company | Director - Product Management | 2024-01-15 | Scranton | PA | Hybrid | Product Management |
| The AZEK Company | Director - Product Management | 2024-01-15 | Wilmington | OH | On-site | Product Management |
| AlphaBOLD | Director Business Development | 2024-01-15 | United States |  | Remote |  |
| Graybar | Director Comm/Data Sales | 2024-01-15 | Norcross | GA | On-site | Marketing & Sales |
| Anduril Industries | Director Compensation Programs | 2024-01-15 | Costa Mesa | CA | On-site | Finance & Accounting |
| Anduril Industries | Director Compensation Programs | 2024-01-14 | Costa Mesa | CA | On-site | Finance & Accounting |
| We Are Tax Revolution | Director Data Science | 2024-01-15 | Chicago | IL | Remote | Data Science |
| GSPANN Technologies, Inc | Director Delivery-Ecommerce & Application Development | 2024-01-14 | Milpitas | CA | Hybrid |  |
| ClickJobs.io | Director Facilities Operations - Doral | 2024-01-15 | Coral Gables | FL | On-site |  |
| Visual Comfort & Co. | Director Marketing Analytics | 2024-01-15 | Houston | TX | On-site | Data Science,Marketing & Sales |
| Community Memorial Healthcare | Director Patient Safety & Clinical Risk Management | 2024-01-14 | Ventura | CA | On-site | Data Science |
| ClickJobs.io | Director TRIO | 2024-01-15 | Roswell | NM | On-site |  |
| Crossover  | Director of AI - Enhanced Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 |  Hawaii |  | Remote | Software Engineering |
| Crossover  | Director of AI - Enhanced Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Aurora | CO | Remote | Software Engineering |
| Crossover  | Director of AI - Enhanced Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Dallas | TX | Remote | Software Engineering |
| Crossover  | Director of AI - Enhanced Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Round Rock | TX | Remote | Software Engineering |
| Crossover  | Director of AI - Enhanced Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Washington | DC | Remote | Software Engineering |
| Microsoft | Director of AI Research Orchestration | 2024-01-15 | Redmond | WA | Hybrid |  |
| BuzzRx | Director of Acquisition Marketing | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| firstPRO, Inc | Director of Audio-Visual Engineering | 2024-01-15 | Greater Boston |  | On-site | Software Engineering |
| Sidekick Solutions | Director of Biomedical Engineering | 2024-01-15 | Pennsylvania | PA | On-site | Software Engineering |
| GOTION HIGH-TECH | Director of Brand Public Relations | 2024-01-14 | Fremont | CA | On-site |  |
| Constructor | Director of Brand and Content | 2024-01-15 | United States | CA | Remote |  |
| Oricell Therapeutics | Director of Business Development | 2024-01-15 | Princeton | NJ | On-site |  |
| gpac | Director of Business Development | 2024-01-15 | Salt Lake City | UT | On-site |  |
| RightWorks | Director of Business Development & Recruiting | 2024-01-15 | Houston | TX | Remote |  |
| Pivotal Solutions | Director of Business Development (B2B) - Portsmouth, NH | 2024-01-15 | Portsmouth | NH | On-site |  |
| Funded.club | Director of Client Relations | 2024-01-15 | Atlanta | GA | Remote |  |
| Rosewood Sand Hill | Director of Communications | 2024-01-14 | Menlo Park | CA | On-site |  |
| Community Medical Centers | Director of Compliance | 2024-01-16 | Stockton | CA | Hybrid |  |
| Outreach | Director of Content Marketing | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| LifeMoves | Director of Corporate Partnerships and Community Engagement | 2024-01-15 | Santa Clara | CA | On-site |  |
| Mavent Analytics | Director of Customer Analytics | 2024-01-15 | Greater Chicago Area |  | Hybrid | Data Science |
| Xometry | Director of Data Science & Machine Learning - Pricing | 2024-01-15 | New York City Metropolitan Area |  | Remote | Finance & Accounting,Data Science,Software Engineering |
| S&P Global | Director of Data Science – NLP, LLM and GenAI | 2024-01-15 | Princeton | NJ | On-site | Data Science,Software Engineering |
| ClickJobs.io | Director of Development, Athletics | 2024-01-15 | Denver | CO | On-site |  |
| Morrison Healthcare | Director of Dining Services | 2024-01-15 | Ventura | CA | On-site |  |
| Zscaler | Director of Engineering, Mobile Development | 2024-01-14 | San Jose | CA | Remote | Software Engineering |
| Culture Amp | Director of Enterprise Account Management | 2024-01-15 | San Francisco | CA | Hybrid |  |
| Flock Freight | Director of Enterprise Sales | 2024-01-15 | San Diego | CA | Hybrid | Marketing & Sales |
| Nutanix | Director of Field Marketing, East Enterprise&U.S. Healthcare | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Equinix | Director of GTM Analytics & Insights | 2024-01-15 | Denver | CO | On-site | Data Science |
| Equinix | Director of GTM Analytics & Insights | 2024-01-15 | Frisco | TX | On-site | Data Science |
| Equinix | Director of GTM Analytics & Insights | 2024-01-15 | Tampa | FL | On-site | Data Science |
| Cypress HCM | Director of GTM/Revenue Ops | 2024-01-15 | San Jose | CA | Hybrid | Finance & Accounting |
| Professional Search Network | Director of IT Spend and Healthcare Supply Chain | 2024-01-15 | Paramus | NJ | On-site |  |
| Wieland Group | Director of Labor Relations | 2024-01-15 | Louisville | KY | Remote |  |
| The Institute of Contemporary Art, San Diego | Director of Learning & Engagement | 2024-01-14 | San Diego | CA | Hybrid |  |
| Rockport Healthcare Services | Director of Marketing | 2024-01-15 | Long Beach | CA | On-site | Marketing & Sales |
| Archery Trade Association | Director of Marketing and Communications | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Pressed Juicery | Director of Merchandising | 2024-01-14 | Los Angeles | CA | Hybrid |  |
| ImageFIRST | Director of Operations | 2024-01-15 | San Diego County | CA | On-site |  |
| MRINetwork | Director of Operations | 2024-01-15 | Birmingham | AL | On-site |  |
| Yusen Logistics (Americas) Inc. | Director of Operations | 2024-01-15 | Orange County | CA | On-site |  |
| Scandal Italy | Director of Operations (Wholesale Fashion Brand) | 2024-01-14 | Los Angeles | CA | On-site |  |
| Live! Hospitality & Entertainment | Director of Operations - Cary, NC | 2024-01-15 | Cary | NC | On-site |  |
| Walmart Advanced Systems & Robotics | Director of Performance Intelligence | 2024-01-15 | Greater Boston |  | On-site |  |
| Storm3 | Director of Product Marketing | 2024-01-14 | San Francisco Bay Area | CA | Hybrid | Product Management,Marketing & Sales |
| Cync Software | Director of Product Marketing - Commercial Lending, SaaS | 2024-01-15 | Herndon | VA | On-site | Product Management,Marketing & Sales |
| Cisco | Director of Product Marketing - Security | 2024-01-15 | San Jose | CA |  | Product Management,Marketing & Sales |
| Crossover  | Director of Product Marketing, 2 Hour Learning (Remote) - $200,000/year USD | 2024-01-15 | Seattle | WA | Remote | Product Management,Marketing & Sales |
| Capital One | Director of Product, Eno & AI Assistance | 2024-01-16 | San Francisco | CA |  |  |
| TAG - The Aspen Group | Director of Reporting and Analytics | 2024-01-15 | Chicago | IL | Hybrid | Data Science |
| Orthobullets | Director of Revenue | 2024-01-15 | Santa Barbara | CA | Hybrid | Finance & Accounting |
| gpac | Director of Safety/Risk | 2024-01-15 | Phoenix | AZ | On-site |  |
| ID.me | Director of Sales, Affiliate & Ads | 2024-01-15 | McLean | VA | On-site | Marketing & Sales |
| ClickJobs.io | Director of Special Resource Center (DSPS) | 2024-01-15 | Compton | CA | On-site |  |
| ClickJobs.io | Director of Sustainability | 2024-01-15 | Williamsburg | VA | Remote |  |
| United Surgical Partners International, Inc | Director of USPI Business Office Operations | 2024-01-15 | Dallas | TX |  |  |
| ClickJobs.io | Director of Workforce Partnerships/Non-Credit Training | 2024-01-15 | Albuquerque | NM | On-site |  |
| The University of Texas at Austin | Director, Bureau of Economic Geology | 2024-01-15 | Austin | TX | On-site |  |
| Sutter Health | Director, Cardiovascular Service Line | 2024-01-15 | San Francisco | CA | On-site |  |
| Whatnot | Director, Category Marketing | 2024-01-15 | Los Angeles Metropolitan Area | CA | Remote | Marketing & Sales |
| Whatnot | Director, Category Marketing | 2024-01-15 | Los Angeles Metropolitan Area |  | Remote | Marketing & Sales |
| Palomar Health | Director, Clinical Resource Management (Case Management/UR) | 2024-01-14 | Escondido | CA | On-site |  |
| Capital One | Director, Community Finance - Underwriting, Portfolio & Loan Management | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| Capital One | Director, Construction Risk Management and Architectural Engineering | 2024-01-16 | Newport Beach | CA |  | Data Science,Software Engineering |
| Capital One | Director, Construction Risk Management and Architectural Engineering | 2024-01-16 | San Francisco | CA |  | Data Science,Software Engineering |
| Scripps Health | Director, Development - Capital Campaign | 2024-01-14 | San Diego | CA |  |  |
| FTI Consulting | Director, Digital Campaign and Paid Media | 2024-01-15 | Philadelphia | PA | Hybrid |  |
| DICK'S Sporting Goods | Director, Domain Architect – Data & Analytics | 2024-01-15 | Coraopolis | PA | On-site | Data Science |
| Inspiration Mobility | Director, EV Transactions | 2024-01-15 | Washington | DC | Hybrid |  |
| USAA | Director, Economist | 2024-01-15 | Charlotte | NC | On-site |  |
| USAA | Director, Economist | 2024-01-15 | San Antonio | TX | On-site |  |
| ClickJobs.io | Director, Global Regulatory Affairs CMC - Biologics (Hybrid) | 2024-01-15 | Jersey City | NJ | On-site |  |
| HealthEquity | Director, HRIS & People Operations | 2024-01-15 | United States | CA | Remote |  |
| Cogent Communications | Director, Information Technology - Washington DC | 2024-01-15 | Washington | DC | On-site |  |
| GoodRx | Director, Inventory & Yield Management | 2024-01-15 | Orange County | CA | On-site |  |
| GoodRx | Director, Inventory & Yield Management | 2024-01-15 | San Francisco | CA | On-site |  |
| Goodwin | Director, KM Technology Solutions | 2024-01-15 | Redwood City | CA | On-site |  |
| Adobe | Director, Marketing & Customer Data and Technology | 2024-01-15 | San Jose | CA |  | Marketing & Sales |
| C&E Merdinian Armenian Evangelical School | Director, Marketing and Communications | 2024-01-14 | Los Angeles | CA | On-site | Marketing & Sales |
| Sutter Health | Director, Medical and Surgical Specialties | 2024-01-15 | San Francisco | CA | On-site |  |
| C&S Wholesale Grocers | Director, Merchandising | 2024-01-14 | Sacramento | CA | On-site |  |
| Sutter Health | Director, Neuroscience Service Line - Greater San Francisco Market | 2024-01-15 | San Francisco | CA | On-site |  |
| Flex | Director, Operations Engineering | 2024-01-15 | West Columbia | SC | On-site | Software Engineering |
| Wpromote | Director, Paid Media Strategy | 2024-01-15 | Los Angeles | CA | Hybrid |  |
| BioSpace | Director, Pipeline Commercial Strategy - Rheumatology | 2024-01-15 | North Chicago | IL | Hybrid |  |
| Uber | Director, Product Design - Foundations | 2024-01-16 | San Francisco | CA | On-site |  |
| Uber | Director, Product Design - Horizontals | 2024-01-16 | San Francisco | CA | On-site |  |
| Synopsys Inc | Director, Product Engineering - Design Optimization - 47989BR | 2024-01-15 | Mountain View | CA |  | Software Engineering |
| Clarivate | Director, Product Management | 2024-01-15 | Philadelphia | PA | Hybrid | Product Management |
| Blue Cross and Blue Shield of Minnesota | Director, Product Management - Behavioral Health | 2024-01-15 | Eagan | MN | Hybrid | Product Management |
| FTI Consulting | Director, Quantitative Strategy | 2024-01-15 | New York | NY |  |  |
| USAA | Director, Reporting and Analytics - Enterprise Portfolio Mgmt Office | 2024-01-15 | Charlotte | NC | On-site | Data Science |
| USAA | Director, Reporting and Analytics - Enterprise Portfolio Mgmt Office | 2024-01-15 | San Antonio | TX | On-site | Data Science |
| Instacart | Director, Revenue Accounting | 2024-01-16 | United States | CA | Remote | Finance & Accounting |
| CDK Global | Director, Revenue Operations [US - REMOTE] | 2024-01-15 | Austin | TX | On-site | Finance & Accounting |
| C1 | Director, Sales | 2024-01-15 | St Petersburg | FL | On-site | Marketing & Sales |
| Fisker | Director, Sales Planning | 2024-01-15 | Manhattan Beach | CA | On-site | Marketing & Sales |
| Fisker | Director, Sales Planning | 2024-01-14 | Manhattan Beach | CA | On-site | Marketing & Sales |
| LiveRamp | Director, Social Platform Addressability | 2024-01-14 | San Francisco | CA | Remote |  |
| DaVita Kidney Care | Director, Special Projects | 2024-01-15 | Denver | CO | On-site |  |
| Rocket Lab | Director, State and Local Government Operations | 2024-01-14 | Long Beach | CA | On-site |  |
| Smith+Nephew | Director, Strategy AWM | 2024-01-15 | Memphis | TN | On-site |  |
| ClickJobs.io | Director- Management Consulting - State & Local Government | 2024-01-15 | Oklahoma City | OK | On-site |  |
| NVIDIA | Distinguished Software Engineer, Architect | 2024-01-14 | Santa Clara | CA |  | Software Engineering |
| OpenAI | Distributed Systems/ML Engineer | 2024-01-14 | San Francisco | CA |  | Data Science,Software Engineering |
| K&A Engineering Consulting, P.C. | Distribution Designer II | 2024-01-16 | Pleasanton | CA | On-site | Designers |
| Ferrellgas | District Manager | 2024-01-14 | California | CA | On-site |  |
| CubeSmart | District Manager - Southern California | 2024-01-14 | San Diego | CA | On-site |  |
| Mission Foods | District Sales Manager - San Diego, CA | 2024-01-14 | San Diego | CA | On-site | Marketing & Sales |
| Abbott | Division Counsel, Structural Heart - Abbott | 2024-01-15 | Santa Clara | CA | On-site |  |
| D.R. Horton | Division Paralegal | 2024-01-16 | Roseville | CA | On-site | Legal |
| insightsoftware | Divisional Vice President, Global Strategic Alliances | 2024-01-15 | Raleigh | NC | Remote |  |
| Dexcom | Document Control and Training Specialist 2 | 2024-01-14 | San Diego | CA | Hybrid |  |
| Matura Farrington | Document Review Attorney | 2024-01-16 | Los Angeles Metropolitan Area | CA | Remote | Legal |
| American Red Cross | Donor Recruitment Associate | 2024-01-15 | Oakland | CA | On-site | HR & Recruiting |
| Quantiphi | Dotnet Architect | 2024-01-16 | United States | CA | Remote |  |
| hackajob | Dotnet Developer | 2024-01-16 | United States | CA | Remote | Software Engineering |
| Collins Aerospace | Drafter/Designer - Hybrid | 2024-01-16 | Anaheim | CA | Hybrid | Designers |
| Collins Aerospace | Drafter/Designer - Hybrid | 2024-01-14 | Anaheim | CA | Hybrid | Designers |
| Google | Développeur logiciel principal, Infrastructure, Réseautage Google Cloud | 2024-01-14 | Sunnyvale | CA | Hybrid | Software Engineering |
| BD | E-Commerce Senior Product Manager – IT Business Partner (Hybrid) - Becton Dickinson | 2024-01-16 | San Jose | CA | Hybrid | Product Management |
| Morrison Foerster | ECVC Associate Attorney | 2024-01-16 | San Francisco | CA | On-site | Legal |
| Kaiser Permanente | ED, SCAL/HI Market Revenue Cycle Management | 2024-01-15 | Pasadena | CA | Remote | Finance & Accounting |
| Uber | ELC Scaled Account Manager, Uber Eats | 2024-01-16 | Los Angeles | CA |  | Marketing & Sales |
| Uber | ELC Scaled Account Manager, Uber Eats | 2024-01-16 | San Francisco | CA |  | Marketing & Sales |
| Uber | ELC Scaled Account Manager, Uber Eats | 2024-01-16 | Seattle | WA | On-site | Marketing & Sales |
| CA Department of Corrections & Rehabilitation | ELECTRICIAN II (CORRECTIONAL FACILITY) | 2024-01-15 | Tuolumne | CA | On-site |  |
| Hoag Health System | EMPLOYEE RELATIONS ADVISOR - HUMAN RESOURCES | 2024-01-14 | Newport Beach | CA |  |  |
| BJC HealthCare | EMS Educator | 2024-01-15 | St Louis | MO |  | Education & Teaching |
| Morph Enterprise | EPIC Analyst | 2024-01-14 | San Diego | CA | Hybrid |  |
| MRINetwork | ER Director | 2024-01-15 | New York | NY | On-site |  |
| Piazza Premier Preschool Staffing Agency | Early Childhood Teacher | 2024-01-16 | Irvine | CA | On-site | Education & Teaching |
| Abbott House Inc | Education Teacher | 2024-01-15 | Mitchell | SD | On-site | Education & Teaching |
| Cottage Health | Educator | 2024-01-15 | Santa Barbara | CA | On-site | Education & Teaching |
| Blue Dream HR | Electrical Designer | 2024-01-16 | Roseville | CA | On-site | Designers |
| Lewis Ross Associates | Electrical Designer | 2024-01-16 | Santa Clarita | CA | On-site | Designers |
| Supermicro | Electrical Engineer | 2024-01-14 | San Jose | CA |  |  |
| Sargent & Lundy | Electrical Engineer - Manager/Consultant - Nuclear Projects | 2024-01-14 | Avila Beach | CA | On-site |  |
| Xscape Photonics Inc | Electrical Engineer for Circuit Schematic and PCB Design | 2024-01-14 | San Francisco Bay Area | CA | On-site |  |
| Astranis Space Technologies | Electrical Engineering Manager - Digital Hardware Design | 2024-01-14 | San Francisco | CA | On-site | Software Engineering |
| The Siebold Company, Inc. (TSC) | Electrical Project Manager | 2024-01-16 | Covington | GA | On-site | Project Management |
| Anduril Industries | Electronic Warfare Software Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Crossover  | Elementary School Teacher, Alpha - $100,000/year USD | 2024-01-15 | Fulton | CA |  | Education & Teaching |
| Crossover  | Elementary School Teacher, Alpha - $100,000/year USD | 2024-01-14 | Fulton | CA |  | Education & Teaching |
| Russell Tobin | Email Marketing Designer | 2024-01-16 | San Diego | CA | On-site | Marketing & Sales,Designers |
| VeeAR Projects Inc. | Embedded Engineer | 2024-01-16 | Burlingame | CA | On-site |  |
| Extron | Embedded Linux Software Engineer (Hybrid) | 2024-01-16 | Burbank | CA | On-site | Software Engineering |
| Edison Smart | Embedded Software Engineer | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | Software Engineering |
| Meta | Embedded Software Engineer | 2024-01-16 | Burlingame | CA |  | Software Engineering |
| Motorola Solutions | Embedded Software Engineer | 2024-01-15 | Plantation | FL | Hybrid | Software Engineering |
| Zoox | Embedded Software Engineer - Vehicle Systems | 2024-01-16 | San Diego | CA | Hybrid | Software Engineering |
| General Atomics | Embedded Software Engineering Intern | 2024-01-16 | San Diego | CA | Hybrid | Software Engineering |
| TeamHealth | Emergency Medicine Advanced Practice Clinician in Oceanside, CA - 38923BR | 2024-01-14 | Oceanside | CA | On-site |  |
| MCM & Associates, LLC | Emergency Medicine Physician (Dayshift) | 2024-01-15 | Victorville | CA | On-site | Medical & Healthcare |
| MCM & Associates, LLC | Emergency Medicine Physician (Nights) | 2024-01-15 | Victorville | CA | On-site | Medical & Healthcare |
| Thrive Pet Healthcare | Emergency Veterinarian | 2024-01-14 | Norwalk | CA |  | Medical & Healthcare |
| The Jonus Group | Employee Benefits Account Manager | 2024-01-14 | Turlock | CA | On-site | Finance & Accounting,HR & Recruiting,Marketing & Sales |
| Brown & Brown Insurance | Employee Benefits Producer In Training | 2024-01-16 | Irvine | CA | On-site | Finance & Accounting,HR & Recruiting |
| Solidigm | Employee Benefits Program Manager | 2024-01-15 | Rancho Cordova | CA | On-site | Finance & Accounting,HR & Recruiting,Project Management |
| Collectors | Employee Relations Partner | 2024-01-16 | Santa Ana | CA |  |  |
| W3Global | Employment Defense Senior Litigation Attorney | 2024-01-14 | Los Angeles | CA | On-site | Legal |
| Orrick, Herrington & Sutcliffe LLP | Employment Law Managing Associate | 2024-01-16 | California | CA | Hybrid |  |
| Messner Reeves LLP | Employment and Labor Paralegal | 2024-01-14 | Orange County | CA | Hybrid | Legal |
| NVIDIA | Emulation Engineer | 2024-01-14 | Santa Clara | CA |  |  |
| Health eCareers | Endocrinologist BC/BE | 2024-01-14 | Burlingame | CA | On-site | Medical & Healthcare |
| Standish Management, LLC | Engagement Manager | 2024-01-14 | San Francisco | CA | Hybrid |  |
| Trinity Health | Engineer, FT 80 (Rotating) ~ Co-Generation/Plant Operations | 2024-01-14 | Fresno | CA |  |  |
| Tesla | Engineering Maintenance Technician, Plant Operations | 2024-01-14 | Fremont | CA | On-site | Software Engineering |
| Adecco | Engineering Manager | 2024-01-15 | Tontitown | AR | On-site | Software Engineering |
| Atlassian | Engineering Manager | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| BKF Engineers | Engineering Manager | 2024-01-14 | Pleasanton | CA | Hybrid | Software Engineering |
| The Patriot Group, Inc. (TPGI) | Engineering Manager - Embedded Software | 2024-01-14 | Los Angeles | CA | On-site | Software Engineering |
| Nextdoor | Engineering Manager - Nextdoor Ads Manager | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| Medtronic | Engineering Manager - Software Design Quality (Embedded Products) | 2024-01-16 | Los Angeles | CA | On-site | Software Engineering |
| VidMob | Engineering Manager, Analytics | 2024-01-15 | Chicago | IL | Hybrid | Data Science,Software Engineering |
| Reddit, Inc. | Engineering Manager, Subreddit Experience | 2024-01-15 | Chicago | IL |  | Software Engineering |
| Reddit, Inc. | Engineering Manager, Subreddit Experience | 2024-01-15 | New York | NY |  | Software Engineering |
| Reddit, Inc. | Engineering Manager, Subreddit Experience | 2024-01-15 | United States |  | Remote | Software Engineering |
| Black & Veatch | Engineering Technician 4 - Mechanical Piping Designer - Water/Wastewater Treatment | 2024-01-16 | Irvine | CA | On-site | Designers,Software Engineering |
| Black & Veatch | Engineering Technician 4 - Mechanical Piping Designer - Water/Wastewater Treatment | 2024-01-16 | Rancho Cordova | CA | On-site | Designers,Software Engineering |
| OCC247 | English Language Teacher in China (on-site) | 2024-01-14 | United States | CA | Remote | Education & Teaching |
| Aclipse | English Second Language Teacher | 2024-01-16 | San Francisco Bay Area | CA | On-site | Education & Teaching |
| BelovED Community & Empowerment Academy Charter Schools | English Teacher | 2024-01-15 | Jersey City | NJ | On-site | Education & Teaching |
| Envision Education | English Teacher | 2024-01-16 | Hayward | CA | On-site | Education & Teaching |
| Fusion Academy | English and History Teacher | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Education & Teaching |
| Fusion Academy | English and History Teacher | 2024-01-15 | San Mateo | CA | On-site | Education & Teaching |
| Anyscale | Enterprise Account Executive | 2024-01-15 | San Francisco | CA | On-site | Marketing & Sales |
| Ardmore Home Design, Inc. | Enterprise Applications Analyst | 2024-01-14 | City of Industry | CA | On-site |  |
| Adobe | Enterprise Architect | 2024-01-16 | California | CA | Remote |  |
| Withum | Enterprise Architect | 2024-01-15 | New York | NY | Hybrid |  |
| OpenTable | Enterprise Digital Marketing Consultant | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Uber | Enterprise Growth Account Executive, Uber for Business | 2024-01-16 | Chicago | IL |  | Marketing & Sales |
| Uber | Enterprise Growth Account Executive, Uber for Business | 2024-01-16 | New York | NY |  | Marketing & Sales |
| Asana | Enterprise Outbound Business Development Representative | 2024-01-15 | San Francisco | CA | Hybrid | Finance & Accounting,Marketing & Sales |
| Adobe | Enterprise Sales AEM Product Specialist | 2024-01-15 | California | CA | Remote | Marketing & Sales |
| ARCH Preneurs | Entry Level Account Representative | 2024-01-14 | Roseville | CA | On-site |  |
| Elysium Ventures | Entry Level Brand Management | 2024-01-14 | Tustin | CA | On-site |  |
| Bankers Life | Entry Level Insurance Agent | 2024-01-14 | Orange County | CA | Hybrid |  |
| ARCH Preneurs | Entry Level Marketing | 2024-01-15 | Sacramento | CA | On-site | Marketing & Sales |
| ARCH Preneurs | Entry Level Marketing | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| ARCH Preneurs | Entry Level Marketing | 2024-01-14 | San Francisco Bay Area | CA | On-site | Marketing & Sales |
| KPI Group Inc | Entry Level Marketing & Training Assistant | 2024-01-14 | Whittier | CA | On-site | Marketing & Sales |
| Origin Management | Entry Level Marketing Communications Associate | 2024-01-14 | West Hollywood | CA | On-site | Marketing & Sales |
| DAVID BAGGA COMPANY | Entry Level Med Device Sales Rep - diagnostics | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site | Marketing & Sales |
| DAVID BAGGA COMPANY | Entry Level Med Device Sales Rep - diagnostics | 2024-01-14 | Santa Monica | CA | On-site | Marketing & Sales |
| The Reynolds and Reynolds Company | Entry Level Outside Sales Trainee | 2024-01-14 | Sacramento | CA |  | Marketing & Sales |
| The Reynolds and Reynolds Company | Entry Level Outside Sales Trainee | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Phaidon International | Entry Level Recruiter | 2024-01-16 | Culver City | CA | On-site | HR & Recruiting |
| Phaidon International | Entry Level Recruiter | 2024-01-16 | Marina del Rey | CA | On-site | HR & Recruiting |
| ARCH Preneurs | Entry Level Sales | 2024-01-14 | Citrus Heights | CA | On-site | Marketing & Sales |
| ARCH Preneurs | Entry Level Sales | 2024-01-14 | Fremont | CA | On-site | Marketing & Sales |
| Outsource | Entry Level Sales Recruiter | 2024-01-16 | Orange County | CA | Hybrid | Marketing & Sales,HR & Recruiting |
| Optimum Healthcare IT | Entry Level Workday Analyst | 2024-01-14 | United States | CA | Remote |  |
| KEYENCE CORPORATION | Entry-level Technical Sales Representative | 2024-01-14 | San Jose | CA | Hybrid | Marketing & Sales |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Alameda | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | El Segundo | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Inyokern | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Long Beach | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Los Alamitos | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Oxnard | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Santa Barbara | CA | On-site |  |
| Indian Health Service | Environmental Engineer (Planning & Design) | 2024-01-15 | Santa Monica | CA | On-site |  |
| Above the Bar | Environmental Law Counsel | 2024-01-16 | Los Angeles Metropolitan Area | CA | Hybrid |  |
| Edison International | Ethics Investigations, Sr Advisor [HYBRID] | 2024-01-16 | Rosemead | CA | Hybrid |  |
| Donor Network West | Event Marketing Program Manager | 2024-01-15 | San Ramon | CA | On-site | Project Management,Marketing & Sales |
| Chan Zuckerberg Initiative | Event Specialist, Science | 2024-01-14 | Redwood City | CA | Hybrid |  |
| iNtegrity+  | Executive Administrative Assistant | 2024-01-14 | Jamestown | CA | On-site |  |
| Career Group | Executive Assistant - Education Investment Firm | 2024-01-14 | Palo Alto | CA | Hybrid | Finance & Accounting,HR & Recruiting |
| Uber | Executive Assistant Business Partner III | 2024-01-16 | New York | NY |  | HR & Recruiting |
| Uber | Executive Assistant Business Partner III | 2024-01-16 | Washington | WA |  | HR & Recruiting |
| Career Group | Executive Assistant to CEO - Top Mission-Driven Investment Firm $150k - 200k + Bonus | 2024-01-14 | San Francisco | CA | Hybrid | Finance & Accounting,HR & Recruiting |
| Career Group | Executive Assistant/Strategic Partner – Impact Investment Firm $150k - 200k DOE | 2024-01-14 | San Francisco | CA | Hybrid | Finance & Accounting,HR & Recruiting |
| Atria Senior Living | Executive Director | 2024-01-15 | Lafayette Hill | PA | On-site |  |
| ClickJobs.io | Executive Director | 2024-01-15 | Stillwater | OK | Remote |  |
| Frontier Senior Living | Executive Director | 2024-01-15 | Plano | TX | On-site |  |
| LHC Group | Executive Director | 2024-01-15 | Camden | AR | On-site |  |
| LHC Group | Executive Director | 2024-01-15 | El Dorado | AR | On-site |  |
| NVISION Eye Centers | Executive Director | 2024-01-15 | Tucson | AZ | On-site |  |
| Staffosaurus | Executive Director | 2024-01-15 | Tulsa | OK | On-site |  |
| Brookdale | Executive Director - Brookdale Chanate | 2024-01-15 | Santa Rosa | CA | On-site |  |
| ClickJobs.io | Executive Director and Head, CMC Regulatory Affairs - Biologics | 2024-01-15 | New York | NY | On-site |  |
| Lauren Jillian Executive Search | Executive Recruiter | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | HR & Recruiting |
| Lucayan Technology Solutions LLC | Exercise Development Support (MAGTF/Naval Fires) MCTOG with Security Clearance | 2024-01-14 | Twentynine Palms | CA | Remote |  |
| Hartounian, A Professional Law Corporation | Experienced Armenian Speaking Personal Injury Paralegal/Case Manager | 2024-01-14 | Glendale | CA | On-site | Legal |
| American Express Global Business Travel | Experienced Corporate Travel Consultant Dedicated Account | 2024-01-16 | United States | CA | Remote |  |
| The Learning Experience | Experienced Preschool Teacher | 2024-01-16 | Redlands | CA | On-site | Education & Teaching |
| American Express Global Business Travel | Experienced Sabre Travel Counselor | 2024-01-16 | United States | CA | Remote |  |
| AlphaSense | Expert Compensation Specialist | 2024-01-15 | United States | CA | Remote | Finance & Accounting |
| Circle K | External Manager in Training | 2024-01-14 | San Diego | CA |  |  |
| Pratt & Whitney | F135 Customer Data Management (Remote) | 2024-01-15 | California | CA | Remote |  |
| Phastar | FSP Senior Statistician I/II | 2024-01-15 | Boston | MA | Remote |  |
| General Motors | Fabrication Designer - California Advanced Studio | 2024-01-16 | Pasadena | CA | On-site | Designers |
| Sutter Health | Faculty | 2024-01-16 | Burlingame | CA | Hybrid |  |
| Stanford University School of Medicine | Faculty Affairs Administrator 3 | 2024-01-16 | Stanford | CA | Hybrid |  |
| Cedars-Sinai | Family Medicine - Adult Primary Care | 2024-01-14 | Beverly Hills | CA | On-site |  |
| Health eCareers | Family Medicine PA — Generous Compensation + 401(k) Match | 2024-01-14 | Grass Valley | CA | On-site | Finance & Accounting |
| St. John's Community Health | Family Medicine Physician- San Bernardino | 2024-01-15 | San Bernardino County | CA | On-site | Medical & Healthcare |
| Fourth Floor | Fashion Textile Designer | 2024-01-16 | City of Industry | CA | On-site | Designers |
| Delta Electronics Americas | Field Application Engineer | 2024-01-14 | Fremont | CA | On-site |  |
| Centers Plan for Healthy Living | Field Educator | 2024-01-15 | Queens | NY | On-site | Education & Teaching |
| Centers Plan for Healthy Living | Field Educator | 2024-01-15 | Staten Island | NY | On-site | Education & Teaching |
| Veeva Systems | Field Marketing - Associate Manager | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Veeva Systems | Field Marketing Director | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Glean | Field Marketing Manager, East | 2024-01-15 | Palo Alto | CA | On-site | Marketing & Sales |
| Trimble Inc. | Field Sales Representative, New and Existing Accounts | 2024-01-15 | California | CA | Remote | Marketing & Sales |
| Techtronic Industries - TTI | Field Sales and Marketing Representative | 2024-01-14 | Costa Mesa | CA | On-site | Marketing & Sales |
| Delinea | Field and Events Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Meta | Finance Manager, Business Marketing | 2024-01-15 | Menlo Park | CA |  | Finance & Accounting,Marketing & Sales |
| Yamaha Motor Corporation, USA | Financial Products Sales Manager | 2024-01-14 | Cypress | CA |  | Marketing & Sales |
| Adamas Building Services | Fire Safety Director for a Luxury Hotel in Time Square | 2024-01-16 | New York County | NY | Hybrid |  |
| Aditi Consulting | Firmware Engineer | 2024-01-16 | Burlingame | CA | On-site |  |
| Anduril Industries | Firmware Engineer | 2024-01-14 | Costa Mesa | CA | On-site |  |
| PsiQuantum | Firmware Engineer | 2024-01-15 | Palo Alto | CA | Hybrid |  |
| Western Digital | Firmware Engineer | 2024-01-14 | Irvine | CA | On-site |  |
| CHEP | Firmware Engineer - (U.S. Remote) | 2024-01-16 | United States | CA | Remote |  |
| Anduril Industries | Firmware Engineer Intern- Summer 2024 | 2024-01-14 | Costa Mesa | CA | On-site |  |
| Bio-Rad Laboratories | Firmware Test Engineer | 2024-01-15 | Pleasanton | CA | Hybrid |  |
| H&R Block | First Year Tax Professional | 2024-01-16 |  California |  | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | Clovis | CA | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | Fairfield | CA | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | Lathrop | CA | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | Los Angeles | CA | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | San Diego | CA | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | San Jose | CA | On-site | Finance & Accounting |
| H&R Block | First Year Tax Professional | 2024-01-16 | Santa Ana | CA | On-site | Finance & Accounting |
| Zoox | Fleet Operations Software, Backend Engineering Internship/Co-Op | 2024-01-14 | Foster City | CA | On-site | Software Engineering |
| Anduril Industries | Flight Software Engineer, Embedded C | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Stanford University | Food Service Worker IV - Storekeeper | 2024-01-15 | Stanford | CA | On-site |  |
| Northstar | Footwear Product Developer/ Designer | 2024-01-16 | El Segundo | CA | Hybrid | Designers,Software Engineering |
| CBIZ | Forensic Accounting & Litigation Associate II | 2024-01-14 |  California |  | On-site | Finance & Accounting |
| CBIZ | Forensic Accounting & Litigation Manager - Family Law | 2024-01-14 |  California |  | On-site | Finance & Accounting |
| CBIZ | Forensic Accounting & Litigation Senior Associate | 2024-01-14 |  California |  | On-site | Finance & Accounting |
| Kiewit | Foundations Project Manager | 2024-01-16 | Ontario | CA | On-site | Project Management |
| First Bite | Founding Engineer - Senior Full Stack Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Agentive (YC S23) | Founding Full Stack Software Engineer | 2024-01-14 | Palo Alto | CA | On-site | Software Engineering |
| Greylock | Founding MLE (Neural Interfaces / BCI) | 2024-01-15 | San Francisco | CA | On-site |  |
| Greylock | Founding Product Manager | 2024-01-15 | California | CA | Hybrid | Product Management |
| Natoma | Founding Software Engineer | 2024-01-15 | San Francisco Bay Area | CA | Hybrid | Software Engineering |
| Michaels Stores | Framer/Personal Designer-2 | 2024-01-16 | Yuba City | CA |  | Designers |
| Charco Design & Build Inc. | Freelance Interior Designer | 2024-01-16 | San Diego | CA | Hybrid | Designers |
| Aimbridge Hospitality | Front Desk Agent | 2024-01-14 | Dana Point | CA | On-site |  |
| Montage International | Front Desk Agent (FT) | 2024-01-14 | San Diego | CA | On-site |  |
| Action Property Management | Front Desk Associate (Full-Time) - Blu | 2024-01-15 | San Francisco | CA | On-site |  |
| TikTok | Front End Software Engineer, Effect House | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Intuit | Front-End Software Engineer Intern | 2024-01-16 | San Diego | CA | On-site | Software Engineering |
| TikTok | Frontend Software Engineer Intern (Global Monetization Product and Technology-Creative) - 2024 Summer (BS/MS) | 2024-01-15 | San Jose | CA |  | Software Engineering |
| Option 1 Staffing Services, Inc. | Full Cycle Recruiter | 2024-01-16 | Santa Clara County | CA | On-site | HR & Recruiting |
| Skiltrek | Full Desk Recruiter - Staffing Industry - Remote / Virtual | 2024-01-16 | San Diego | CA | Remote | HR & Recruiting |
| Skiltrek | Full Desk Recruiter - Staffing Industry - Remote / Virtual | 2024-01-16 | San Jose | CA | Remote | HR & Recruiting |
| Skiltrek | Full Desk Recruiter - Staffing Industry - Remote / Virtual | 2024-01-14 | Los Angeles | CA | Remote | HR & Recruiting |
| Voya Financial | Full Stack .NET Developer | 2024-01-15 | New York | NY | Hybrid | Software Engineering |
| HTC Global Services | Full Stack .NET Developer - Senior | 2024-01-14 | Napa | CA | On-site | Software Engineering |
| The DigiTrust Group | Full Stack Developer | 2024-01-14 | Los Angeles | CA | Remote | Software Engineering |
| EdgeGlobal LLC | Full Stack Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Keasis | Full Stack Engineer | 2024-01-16 | Burlingame | CA | Hybrid | Software Engineering |
| OLLMOO - Future Women Leaders | Full Stack Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| ICW Group | Full Stack Engineer (San Diego - Java Spring Boot) | 2024-01-16 | San Diego | CA | Hybrid | Software Engineering |
| Databricks | Full Stack Software Engineer - IT﻿ | 2024-01-15 | Mountain View | CA | On-site | Software Engineering |
| Lark | Full Stack Software Engineer, Lark | 2024-01-15 | San Jose | CA |  | Software Engineering |
| U.S. Bank | Full stack software engineer - 2 | 2024-01-15 | Dallas | TX |  | Software Engineering |
| Capital One | Full-Time Branch Ambassador - Union Square | 2024-01-16 | New York | NY |  |  |
| California Polytechnic State University-San Luis Obispo | Full-time Lecturer - City and Regional Planning | 2024-01-16 | San Luis Obispo | CA | On-site | Education & Teaching |
| Mondelēz International | Full-time Service Representative/Merchandiser Order Writer | 2024-01-14 | Beaumont | CA |  |  |
| Mondelēz International | Full-time Service Representative/Merchandiser Order Writer | 2024-01-14 | Colton | CA |  |  |
| Mondelēz International | Full-time Service Representative/Merchandiser Order Writer | 2024-01-14 | Redlands | CA |  |  |
| Pave | Fullstack Software Engineer | 2024-01-15 | San Francisco Bay Area | CA | On-site | Software Engineering |
| Meta | Fundamental AI Research Scientist, Core ML - FAIR | 2024-01-14 | San Francisco | CA |  | Data Science |
| Rentable | GBP Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| d'Lite Healthy On The Go | GENERAL MANAGER | 2024-01-15 | Phoenix | AZ | On-site |  |
| Anduril Industries | GNC Software Engineer | 2024-01-16 | Costa Mesa | CA | On-site | Software Engineering |
| Walmart | Game Client Engineer (Storeno8, Extended Reality) (Contract to Hire) | 2024-01-16 | San Bruno | CA |  |  |
| Adventist Health | Gastroenterologist | 2024-01-15 | Simi Valley | CA | On-site | Medical & Healthcare |
| Health eCareers | Gastroenterologist | 2024-01-14 | Santa Cruz | CA | On-site | Medical & Healthcare |
| Jobot Health | Gastroenterologist Locums | 2024-01-15 | Beverly Hills | CA | On-site | Medical & Healthcare |
| JDHuntr In-House Counsel Jobs | General Counsel Jobs JDHuntr 56719 Product Counsel, Los Angeles, CA | 2024-01-14 | Los Angeles | CA | On-site |  |
| California School Boards Association | General Counsel, Legal | 2024-01-16 | West Sacramento | CA | Hybrid |  |
| Caribou Coffee | General Manager | 2024-01-15 | Hudson | WI | On-site |  |
| RaceTrac | General Manager | 2024-01-15 | Greater Orlando |  |  |  |
| Sharp-Long 72 Degrees Air Conditioning and Heating | General Manager | 2024-01-15 | Lees Summit | MO | On-site |  |
| Sky Zone | General Manager | 2024-01-15 | Boynton Beach | FL | On-site |  |
| Sky Zone | General Manager | 2024-01-15 | Savannah | GA | On-site |  |
| VITAS Healthcare | General Manager | 2024-01-15 | Fresno | CA | On-site |  |
| Village Pet Care | General Manager | 2024-01-15 | Boca Raton | FL | On-site |  |
| Real Hospitality Group | General Manager - AC Hotel by Marriott | 2024-01-14 | San Jose | CA | On-site |  |
| Paradies Lagardère | General Manager DFW Airport | 2024-01-15 | Grapevine | TX | On-site |  |
| Mindspace | General Manager, US | 2024-01-15 | Miami | FL | On-site |  |
| Walmart | General Merchandise | 2024-01-15 | Bloomington | IL |  |  |
| Walmart | General Merchandise | 2024-01-15 | Brown Deer | WI |  |  |
| Walmart | General Merchandise | 2024-01-15 | Fairmont | WV |  |  |
| Walmart | General Merchandise | 2024-01-15 | Granite City | IL |  |  |
| Dollar Tree Stores | General Warehouse - Dollar Tree up to $21.00 an hr. | 2024-01-16 | San Bernardino | CA | On-site | HR & Recruiting |
| Dollar Tree Stores | General Warehouse - Dollar Tree up to $21.00 an hr. | 2024-01-14 | San Bernardino | CA | On-site | HR & Recruiting |
| TELUS International | Geo Data Evaluator - Germany (m/f/d) | 2024-01-15 | United States |  | Remote |  |
| TELUS International | Geo Data Evaluator - Japan | 2024-01-15 | United States |  | Remote |  |
| TELUS International | Geo Data Evaluator - United States | 2024-01-15 | United States |  | Remote |  |
| HDR | Geotechnical Engineering Director | 2024-01-15 | Ames | IA | On-site | Software Engineering |
| HDR | Geotechnical Engineering Director | 2024-01-15 | Fort Myers | FL | On-site | Software Engineering |
| HDR | Geotechnical Engineering Director | 2024-01-15 | Reno | NV | On-site | Software Engineering |
| HDR | Geotechnical Engineering Director | 2024-01-15 | Tulsa | OK | On-site | Software Engineering |
| Langan Engineering & Environmental Services | Geotechnical Engineering Intern - Summer 2024 | 2024-01-14 | San Francisco | CA | On-site | Software Engineering |
| Kleinfelder | Geotechnical Project Manager | 2024-01-14 | Sonoma County | CA | On-site | Project Management |
| Latham & Watkins | Global Attorney Training Manager – Transactional Training | 2024-01-14 | Costa Mesa | CA | Hybrid | Legal |
| JDHuntr In-House Counsel Jobs | Global Commercial Counsel | 2024-01-14 | Irvine | CA | On-site |  |
| Robert Walters | Global Data Analytics Audit Leader | 2024-01-14 | San Jose | CA | Hybrid | Finance & Accounting,Data Science |
| Thermo Fisher Scientific | Global Digital Marketing Specialist | 2024-01-14 | Carlsbad | CA | On-site | Marketing & Sales |
| SS&C Technologies | Global Director of Competitive Intelligence | 2024-01-15 | Waltham | MA | Hybrid |  |
| Confidential | Global HR Lead | 2024-01-16 | Los Angeles | CA | On-site | HR & Recruiting |
| Denodo | Global Head of Business Development | 2024-01-15 | Chicago | IL | Hybrid |  |
| McAfee | Global Head of Privacy Legal | 2024-01-15 | San Jose | CA | Remote |  |
| QBE North America | Global Head of Security Trust and Influence | 2024-01-15 | Sun Prairie Town | WI | Hybrid |  |
| Boston Consulting Group (BCG) | Global Legal Product Owner - Director | 2024-01-15 | Boston | MA |  | Product Management |
| Patagonia | Global Line Planner, Kids and Workwear | 2024-01-14 | Ventura | CA | On-site | Project Management |
| PwC | Global Network Operations Senior Associate | 2024-01-16 | Los Angeles | CA | Remote |  |
| PwC | Global Network Operations Senior Associate | 2024-01-16 | Sacramento | CA | Remote |  |
| PwC | Global Network Operations Senior Associate | 2024-01-16 | San Diego | CA | Remote |  |
| PwC | Global Network Operations Senior Associate | 2024-01-16 | San Francisco | CA | Remote |  |
| PwC | Global Network Operations Senior Associate | 2024-01-16 | Silicon Valley | CA | Remote |  |
| Medallia | Global Partner Marketing Specialist | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| ResMed | Global Product Manager | 2024-01-15 | San Diego Metropolitan Area | CA | Remote | Product Management |
| Landis+Gyr | Global Product Manager, Analytics | 2024-01-15 | Alpharetta | GA | Hybrid | Product Management,Data Science |
| TikTok | Global Product Marketing Lead, Search Ads | 2024-01-15 | San Jose | CA |  | Product Management,Marketing & Sales |
| TikTok | Global Product Marketing Lead, Search Ads | 2024-01-14 | San Jose | CA |  | Product Management,Marketing & Sales |
| Google | Global Product Solutions Lead, App Campaigns | 2024-01-15 | Kirkland | WA | On-site |  |
| Google | Global Product Solutions Lead, App Campaigns | 2024-01-15 | Los Angeles | CA | On-site |  |
| Google | Global Product Solutions Lead, App Campaigns | 2024-01-15 | Mountain View | CA | On-site |  |
| Google | Global Product Solutions Lead, App Campaigns | 2024-01-15 | New York | NY | On-site |  |
| Google | Global Product Solutions Lead, App Campaigns | 2024-01-15 | San Bruno | CA | On-site |  |
| Google | Global Product Solutions Lead, App Campaigns | 2024-01-15 | San Francisco | CA | On-site |  |
| Uber | Global Safety & Identity Lead | 2024-01-16 | San Francisco | CA |  |  |
| Uber | Global Safety Program Manager | 2024-01-16 | Chicago | IL |  | Project Management |
| Uber | Global Safety Program Manager | 2024-01-16 | New York | NY |  | Project Management |
| Uber | Global Safety Program Manager | 2024-01-16 | San Francisco | CA |  | Project Management |
| JPMorgan Chase & Co. | Global Shares, Cap Table Product Owner | 2024-01-15 | Jersey City | NJ |  | Product Management |
| KBR, Inc. | Government Asset Manager | 2024-01-16 | Torrance | CA | On-site |  |
| Mott MacDonald | Graduate aviation engineer/planner - 2024 | 2024-01-14 | Los Angeles | CA |  | Project Management |
| OpenAI | Graph Compiler Engineer | 2024-01-14 | San Francisco | CA |  |  |
| ACL Digital | Graphic Designer | 2024-01-16 | Thousand Oaks | CA | On-site | Marketing & Sales,Designers |
| Createch - Creative + Tech Staffing | Graphic Designer | 2024-01-16 | Santa Fe Springs | CA | On-site | Marketing & Sales,Designers |
| Creative Circle | Graphic Designer | 2024-01-16 | Carlsbad | CA |  | Marketing & Sales,Designers |
| Creative Circle | Graphic Designer | 2024-01-16 | Los Angeles | CA | On-site | Marketing & Sales,Designers |
| Xe.com | Graphic Designer | 2024-01-16 | Irvine | CA | On-site | Marketing & Sales,Designers |
| ManTech | Graphic Designer III | 2024-01-16 | Edwards | CA | Hybrid | Marketing & Sales,Designers |
| Metagenics | Graphic Designer, Digital | 2024-01-16 | Aliso Viejo | CA |  | Marketing & Sales,Designers |
| Specialized Bicycle Components | Graphic Designer, Global Brand Design | 2024-01-16 | Morgan Hill | CA | Hybrid | Marketing & Sales,Designers |
| Creative Circle | Graphic Designer- Onsite in Commerce, CA | 2024-01-16 | Commerce | CA | On-site | Marketing & Sales,Designers |
| CSL Staffing | Graphic Web Designer | 2024-01-16 | Escondido | CA | On-site | Designers |
| Meta | Graphics Software Engineer, Rendering - Reality Labs | 2024-01-15 | New York | NY |  | Software Engineering |
| Accenture | Grid Operations Solution Architect | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Whole Foods Market | Grocery Order Writer (Buyer / Inventory Replenishment)-Full Time | 2024-01-14 | Folsom | CA |  |  |
| American Express Global Business Travel | Group Air Travel Consultant | 2024-01-16 | United States | CA | Remote |  |
| Adobe | Group Manager, Global Higher Education Marketing | 2024-01-15 | San Francisco | CA |  | Marketing & Sales |
| Adobe | Group Manager, Global Higher Education Marketing | 2024-01-15 | San Jose | CA |  | Marketing & Sales |
| Uber | Group Product Manager, Growth | 2024-01-16 | New York | NY |  | Product Management |
| Uber | Group Product Manager, Growth | 2024-01-16 | San Francisco | CA |  | Product Management |
| Uber | Group Product Manager, Marketplace Org | 2024-01-16 | San Francisco | CA |  | Product Management |
| Privia Health | Growth Director | 2024-01-15 | Bakersfield | CA | Remote |  |
| BizzyCar | Growth Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Squarespace | Growth Marketing Manager, Acuity | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Salt | Growth Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Niantic, Inc. | Growth Product Manager, Peridot | 2024-01-16 | San Francisco | CA | Hybrid | Product Management |
| Remington Hospitality | Guest Journey Representative - Murrieta Hot Springs Resort | 2024-01-16 | Murrieta | CA | On-site |  |
| Sonesta Hotels | Guest Service Agent | 2024-01-14 | San Jose | CA | On-site |  |
| isolved | HCM Field Sales Representative | 2024-01-15 | Orange County | CA |  | Marketing & Sales |
| KORE1 | HIMS Coordinator / Medical Records | 2024-01-14 | Livermore | CA | On-site |  |
| SouthEast Alaska Regional Health Consortium (SEARHC) | HOSPITALITY CLERK - TOTEM SQUARE | 2024-01-16 | Sitka | AK | On-site |  |
| Westcoat Specialty Coating Systems | HR & Employee Success Manager | 2024-01-16 | San Diego | CA | On-site | HR & Recruiting |
| JT4 | HR / Talent Acquisition Specialist III - China Lake | 2024-01-16 | Ridgecrest | CA |  | HR & Recruiting |
| TikTok | HR Business Partner - R&D Global E-Commerce - San Jose | 2024-01-16 | San Jose | CA |  | HR & Recruiting |
| TikTok | HR Business Partner - USDS | 2024-01-16 | Mountain View | CA |  | HR & Recruiting |
| TBG - The Bachrach Group | HR Generalist | 2024-01-14 | Palo Alto | CA | Hybrid | HR & Recruiting |
| Vidrovr | HR Recruiter | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| ResCare Community Living | HR SPECIALIST | 2024-01-15 | Greater Sacramento | CA | Hybrid | HR & Recruiting |
| SiteOne Landscape Supply | HR Services Specialist - Must Reside in PST | 2024-01-16 | San Bernardino | CA |  | HR & Recruiting |
| Apolis | HRIS Systems Analyst (Oracle Cloud HCM) | 2024-01-14 | Irvine | CA | On-site | Software Engineering |
| HRL Laboratories, LLC | HVAC | 2024-01-14 | Malibu | CA | On-site |  |
| gpac | HVAC Designer | 2024-01-16 | San Diego | CA | On-site | Designers |
| Gulfstream Strategic Placements | HVAC Equipment Sales Executive | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| Meta | HW Test Automation Engineer | 2024-01-16 | Sunnyvale | CA |  | Software Engineering |
| Meta | Hardware Systems Requirements Engineer | 2024-01-15 | Sunnyvale | CA | On-site |  |
| Trustco Bank | Head Teller - Leesburg, FL (Lake Square) | 2024-01-16 | Leesburg | FL | On-site |  |
| Crossover  | Head of AI-driven Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Alexandria | VA | Remote | Software Engineering |
| Crossover  | Head of AI-driven Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Paterson | NJ | Remote | Software Engineering |
| Crossover  | Head of AI-driven Software Development, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Washington | DC | Remote | Software Engineering |
| Sourced Group an Amdocs Company | Head of Data & Intelligence Solutions | 2024-01-15 | New York | NY | Remote |  |
| Atlassian | Head of Engineering | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Cross River | Head of Fair Lending Analytics | 2024-01-15 | Fort Lee | NJ | Hybrid | Data Science |
| Scale AI | Head of Finance, Operations | 2024-01-15 | San Francisco | CA | Hybrid | Finance & Accounting |
| Zip | Head of Growth & Demand Generation | 2024-01-15 | San Francisco | CA |  |  |
| ExecThread | Head of HR | 2024-01-15 | San Francisco | CA | On-site | HR & Recruiting |
| Glean | Head of Human Resources | 2024-01-15 | Palo Alto | CA | On-site |  |
| Chipotle Mexican Grill | Head of Insights & Analytics | 2024-01-15 | Newport Beach | CA |  | Data Science |
| Chipotle Mexican Grill | Head of Insights & Analytics | 2024-01-14 | Newport Beach | CA |  | Data Science |
| HeyGen | Head of Marketing | 2024-01-14 | San Francisco | CA | On-site | Marketing & Sales |
| Linqia | Head of Marketing | 2024-01-15 | San Francisco | CA | On-site | Marketing & Sales |
| South Park Commons | Head of Marketing and Brand | 2024-01-14 | Palo Alto | CA | Hybrid | Marketing & Sales |
| SHOPLINE | Head of Partnerships | 2024-01-15 | United States |  | Remote |  |
| Whatnot | Head of Performance Marketing | 2024-01-15 | Los Angeles Metropolitan Area | CA | Remote | Marketing & Sales |
| Asana | Head of Revenue Accounting & Operations | 2024-01-15 | San Francisco | CA | Hybrid | Finance & Accounting |
| Taroko | Head of SEO | 2024-01-15 | United States | CA | Remote |  |
| Taroko | Head of SEO | 2024-01-15 | United States |  | Remote |  |
| Crossover  | Head of Software Development (AI-Enhanced Processes), Trilogy (Remote) - $400,000/year USD | 2024-01-15 | Baltimore | MD | Remote | Software Engineering |
| Paystand | Head of Solutions | 2024-01-15 | Scotts Valley | CA | On-site |  |
| DSR Health Law | Health Care Regulatory & Transactional Attorney | 2024-01-16 | Sacramento | CA | Hybrid | Legal |
| Epiq | Health and Benefits Insurance Attorney (In-House) | 2024-01-16 | United States | CA | Remote | Legal,Finance & Accounting,HR & Recruiting |
| Nixon Peabody LLP | Healthcare Associate or Counsel | 2024-01-14 | Los Angeles | CA | On-site |  |
| Children's Hospital Los Angeles (CHLA) | Healthcare Customer Service Representative III / Support Services / Full Time | 2024-01-14 | Glendale | CA | On-site | Marketing & Sales |
| Power Personnel | Healthcare Project Manager | 2024-01-14 | Palo Alto | CA | On-site | Project Management |
| Best Home Health and Hospice Providers, Inc. | Healthcare Recruiter | 2024-01-15 | Hayward | CA | On-site | HR & Recruiting |
| Maxim Healthcare Services (Home Care) | Healthcare Recruiter | 2024-01-15 | Los Angeles | CA | On-site | HR & Recruiting |
| Host Healthcare, Inc. | Healthcare Sales Recruiter | 2024-01-16 | San Diego | CA | Remote | Marketing & Sales,HR & Recruiting |
| Host Healthcare, Inc. | Healthcare Sales Recruiter | 2024-01-16 | United States | CA | Remote | Marketing & Sales,HR & Recruiting |
| Medical Professionals | Healthcare Staffing Recruiter | 2024-01-16 | San Diego | CA | On-site | HR & Recruiting |
| Medical Professionals | Healthcare Staffing Recruiter | 2024-01-15 | San Diego | CA | On-site | HR & Recruiting |
| Irvine Technology Corporation | Healthcare Technical Product Manager | 2024-01-16 | Los Angeles Metropolitan Area | CA | Remote | Product Management |
| Futran Solutions | HelpLine Tier 1 Support Engineer | 2024-01-14 | Elk Grove | CA | Hybrid | Marketing & Sales |
| EF English First  | Hiring Immediately for 2024! Teach English in China! Training, Full Support & Free Flight Provided | 2024-01-14 | Dixon | CA |  |  |
| EF English First  | Hiring Immediately for 2024! Teach English in China! Training, Full Support & Free Flight Provided | 2024-01-14 | Lake Forest | CA |  |  |
| Pacifica Christian Orange County | History & Theology Teacher - Full-time | 2024-01-14 | Newport Beach | CA | On-site | Education & Teaching |
| Pacifica Christian Orange County | History &amp; Theology Teacher - Full-time | 2024-01-14 | Newport Beach | CA | On-site | Education & Teaching |
| Coaster Company of America | Home Furnishings Furniture Product Manager | 2024-01-16 | Santa Fe Springs | CA | On-site | Product Management |
| Bayhealth, Inc | Home Health Marketer | 2024-01-14 | Fremont | CA | On-site |  |
| Children's Hospital of Philadelphia | Hospital School Program Educator- CHOP Cedar Ave (Advanced) | 2024-01-15 | Philadelphia | PA | On-site | Education & Teaching |
| ModelManagement.com | Hot Rods and Hot Bods calendar creation | 2024-01-16 | Sacramento | CA | On-site |  |
| Interstate Batteries | Hot Shot Driver | 2024-01-16 | Sun Valley | CA | On-site |  |
| Aimbridge Hospitality | Housekeeper - Hourly Wage of $20.00 | 2024-01-15 | Palo Alto | CA | On-site |  |
| Ceridian | Human Resource Business Partner Sr | 2024-01-15 | United States | CA | Remote |  |
| Spread Your Wings LLC | Human Resources - Recruiting Manager | 2024-01-14 | Sacramento | CA | On-site |  |
| Claire Myers Consulting | Human Resources Analyst | 2024-01-15 | Santa Barbara | CA | On-site |  |
| Superior Court of California, County of Alameda | Human Resources Analyst | 2024-01-16 | Oakland | CA | On-site |  |
| University of California, Santa Cruz | Human Resources Analyst | 2024-01-16 | Santa Cruz County | CA | On-site |  |
| Optimum Behavioral Health | Human Resources Associate / Registered Behavioral Therapist | 2024-01-14 | Carlsbad | CA | On-site |  |
| Cencora | Human Resources Business Partner | 2024-01-15 | United States | CA | Remote |  |
| HUB International | Human Resources Business Partner | 2024-01-15 | San Diego | CA | On-site |  |
| The Wellington Group Inc. | Human Resources Business Partner-Sacramento | 2024-01-14 | Sacramento | CA | Hybrid |  |
| Grand Hyatt | Human Resources Coordinator | 2024-01-16 | San Francisco | CA | On-site | HR & Recruiting |
| Latham & Watkins | Human Resources Coordinator | 2024-01-14 | Los Angeles | CA | Hybrid | HR & Recruiting |
| Lorian Health | Human Resources Coordinator | 2024-01-15 | Elk Grove | CA | On-site | HR & Recruiting |
| Los Angeles Regional Food Bank | Human Resources Coordinator | 2024-01-15 | City of Industry | CA | On-site | HR & Recruiting |
| Nortia Staffing - Human Resources, Accounting  and Administrative Staffing | Human Resources Coordinator | 2024-01-16 | San Francisco | CA | On-site | HR & Recruiting |
| Rocket Farms, Inc. | Human Resources Coordinator | 2024-01-16 | Half Moon Bay | CA | On-site | HR & Recruiting |
| Rocket Farms, Inc. | Human Resources Coordinator | 2024-01-14 | Half Moon Bay | CA | On-site | HR & Recruiting |
| Symple Lending | Human Resources Coordinator | 2024-01-16 | Orange | CA | On-site | HR & Recruiting |
| Claire Myers Consulting | Human Resources Director | 2024-01-14 | Santa Barbara | CA | On-site |  |
| Oscar | Human Resources Director | 2024-01-14 | San Diego Metropolitan Area | CA | On-site |  |
| Bedford Staffing  | Human Resources Generalist | 2024-01-14 | Los Angeles | CA | On-site |  |
| NABIS | Human Resources Generalist | 2024-01-16 | Woodlake | CA | On-site |  |
| US Fertility | Human Resources Generalist | 2024-01-15 | San Ramon | CA | On-site |  |
| EAdvisory | Human Resources Information System Analyst | 2024-01-14 | Irvine | CA | On-site |  |
| California Department of General Services | Human Resources Manager | 2024-01-16 | West Sacramento | CA | Hybrid |  |
| Food Share of Ventura County | Human Resources Manager | 2024-01-16 | Oxnard | CA | On-site |  |
| NAIOP San Francisco Bay Area | Human Resources Manager Director for NAIOP San Francisco Bay Area | 2024-01-14 | San Francisco | CA | On-site |  |
| SHOPLINE | Human Resources Manager （U.S. remote） | 2024-01-15 | United States | CA | Remote |  |
| Zone 5 Technologies | Human Resources Specialist | 2024-01-16 | San Luis Obispo | CA | Hybrid |  |
| Samsung Semiconductor | IP Operations Specialist (Contractor) | 2024-01-16 | San Jose | CA | On-site |  |
| Connections for Business | IT Director | 2024-01-15 | Hollywood | FL | On-site |  |
| Diligente Technologies | IT Project Manager (MarTech/Marketing Technology and Retail) | 2024-01-16 | San Francisco Bay Area | CA | Remote | Marketing & Sales,Project Management |
| Ledgent Technology | IT Systems Engineer | 2024-01-16 | Stockton | CA | On-site | Software Engineering |
| The Trade Desk | IT Systems Engineer I | 2024-01-16 | Ventura | CA |  | Software Engineering |
| GE HealthCare | Imaging General Manager - Southern California | 2024-01-15 | California | CA | Remote |  |
| TEKsystems | Immersive Sound Designer | 2024-01-16 | Fremont | CA | On-site | Designers |
| Lytx, Inc. | Implementation Project Manager I (Contract) | 2024-01-16 | San Diego | CA | On-site | Project Management |
| JDHuntr In-House Counsel Jobs | In House Counsel Jobs California - JDHuntr 56859 IP Counsel $209K - $304K, Los Angeles, CA | 2024-01-14 | Los Angeles | CA | On-site |  |
| JDHuntr In-House Counsel Jobs | In House Counsel Jobs California - JDHuntr 58811 Counsel, Security $145K - $280K, Los Angeles, CA | 2024-01-14 | Los Angeles | CA | On-site |  |
| Albertsons Companies | In-Store Shopper | 2024-01-14 | Fullerton | CA | On-site |  |
| Safeway | In-Store Shopper | 2024-01-14 | Lincoln | CA | On-site |  |
| Safeway | In-Store Shopper | 2024-01-14 | Pacific Grove | CA | On-site |  |
| Vertech | Industrial Programmer III | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Temu | Influencer Marketing Manager | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Genesis Global | Information Technology Support Analyst | 2024-01-14 | Cypress | CA | On-site |  |
| Intact Insurance Specialty Solutions | Inland Marine Underwriting Specialist (Hybrid or Remote) | 2024-01-15 | California | CA | Remote |  |
| NewGen Energy | Inside Sales Agent- Alternative Energy | 2024-01-14 | Rocklin | CA | On-site | Marketing & Sales |
| PGT Innovations | Inside Sales Rep I Anlin | 2024-01-14 | Clovis | CA | On-site | Marketing & Sales |
| WebMD | Inside Sales Representative | 2024-01-15 | Los Angeles | CA | Hybrid | Marketing & Sales |
| RippleMatch | Insight Global - Recruiter / Account Manager, application via RippleMatch | 2024-01-16 | Los Angeles | CA | On-site | Marketing & Sales,HR & Recruiting |
| Promise | Insights Analyst | 2024-01-14 | Oakland | CA | Hybrid | Data Science |
| Aspire Public Schools | Instructional Aide (Special Education) | 2024-01-15 | Huntington Park | CA | On-site |  |
| KellyMitchell Group | Instructional Designer | 2024-01-16 | Carlsbad | CA | On-site | Designers |
| Western Governors University | Instructor, Learning Lab | 2024-01-16 | Los Angeles | CA |  | Education & Teaching |
| Western Governors University | Instructor, Learning Lab | 2024-01-16 | San Francisco | CA |  | Education & Teaching |
| The Fine Group | Insurance Agent (Remote) | 2024-01-14 | United States | CA | Remote |  |
| At-Bay | Insurance Marketing Manager | 2024-01-14 | San Francisco | CA | Hybrid | Marketing & Sales |
| Bichlmeier Insurance Services, Inc. | Insurance Personal Lines Account Manager | 2024-01-15 | Redondo Beach | CA | Hybrid | Marketing & Sales |
| Galecki Search Associates | Insurance Product Filing Manager | 2024-01-15 | United States | CA | Remote |  |
| The Mom Project | Insurance and Bad Faith Litigation Attorney - California | 2024-01-15 | United States | CA | Remote | Legal |
| Coinbase | Integrated Marketing Senior Associate | 2024-01-15 | Los Angeles Metropolitan Area | CA |  | Marketing & Sales |
| Coinbase | Integrated Marketing Senior Associate | 2024-01-15 | San Francisco | CA |  | Marketing & Sales |
| Coinbase | Integrated Marketing Senior Manager | 2024-01-15 | Los Angeles Metropolitan Area | CA |  | Marketing & Sales |
| Coinbase | Integrated Marketing Senior Manager | 2024-01-15 | San Francisco | CA |  | Marketing & Sales |
| Nexstar Media Group, Inc. | Integrated Producer - LA Unscripted, KTLA | 2024-01-14 | Los Angeles | CA | On-site |  |
| University of Southern California | Integration Developer (Cloud) | 2024-01-14 | Los Angeles | CA | Hybrid | Software Engineering |
| WSP in the U.S. | Interior Designer | 2024-01-16 | San Diego | CA | Hybrid | Designers |
| RH | Interior Designer - Intermediate | 2024-01-16 | Walnut Creek | CA | On-site | Designers |
| JOAN BEHNKE & ASSOCIATES, INC. | Intermediate Designer | 2024-01-16 | Beverly Hills | CA | On-site | Designers |
| The Office of Charles de Lisle | Intermediate Interior Designer | 2024-01-16 | Sausalito | CA | On-site | Designers |
| DAHLIN Architecture - Planning - Interiors | Intermediate Project Manager - Civic | 2024-01-16 | Pleasanton | CA | Hybrid | Project Management |
| Blue Cross Blue Shield of Arizona | Intern - Business Intelligence Developer (Summer 2024) | 2024-01-15 | Phoenix | AZ | On-site | Data Engineering,Software Engineering |
| NetApp | Intern - Solutions Engineer | 2024-01-15 | San Jose | CA |  |  |
| NetApp | Intern - Solutions Engineer | 2024-01-15 | Vienna | VA |  |  |
| Samsung Semiconductor | Intern, AI Systems Research Scientist | 2024-01-14 | San Diego | CA | On-site | Data Science |
| Samsung Semiconductor | Intern, GNSS Software Quality Engineering | 2024-01-14 | San Jose | CA | On-site | Software Engineering |
| Samsung Semiconductor | Intern, Memory Systems Engineer | 2024-01-16 | San Jose | CA | On-site | Software Engineering |
| Velocity Global | Internal Payroll Specialist | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| American Express Global Business Travel | International Corporate Travel Consultant Bilingual English/Japanese | 2024-01-16 | United States | CA | Remote |  |
| Ceneu | International Education Recruiter | 2024-01-16 | San Diego | CA | Hybrid | HR & Recruiting |
| San Manuel Band of Mission Indians | Investigation Supervisor | 2024-01-16 | Highland | CA | On-site |  |
| TikTok | Investigations Data Scientist, Influence Operations - USDS | 2024-01-14 | Mountain View | CA |  | Data Science |
| Walker Lovell | Investment Banking - Associate Director or Vice President M&A ( Healthcare / Life Sciences) | 2024-01-15 | United States |  | Remote | Finance & Accounting |
| Uber | Investment Strategy Manager II, Performance Marketing | 2024-01-16 | New York | NY |  | Marketing & Sales,Finance & Accounting |
| Uber | Investment Strategy Manager II, Performance Marketing | 2024-01-16 | San Francisco | CA |  | Marketing & Sales,Finance & Accounting |
| JPMorgan Chase & Co. | J.P. Morgan Wealth Management - Private Client Advisor - Franklin Square, NY | 2024-01-16 | Franklin Square | NY |  |  |
| JPMorgan Chase & Co. | J.P. Morgan Wealth Management - Private Client Advisor - Lower Midtown West Manhattan, NY (Times Square)n Wealth Management - Private Client Advisor - Lower Mid | 2024-01-16 | New York | NY |  |  |
| LATICRETE International | JDE Business Analyst (Supply Chain) | 2024-01-14 | San Francisco | CA | On-site | Finance & Accounting,Data Science |
| Imperial Dade | Jan-San Outside Sales Consultant | 2024-01-14 | San Mateo County | CA | Hybrid | Marketing & Sales |
| Allied Universal Janitorial Services | Janitor - Glenbrook Square Night Crew | 2024-01-16 | Fort Wayne | IN |  |  |
| Canopus IT Solutions LLC | Java full stack Developer | 2024-01-16 | Irvine | CA | On-site | Software Engineering |
| Pivotal Life Sciences | Jr. Product Manager – AI | 2024-01-15 | San Francisco Bay Area | CA | Hybrid | Product Management |
| Superior Court of California, County of Santa Barbara | Judicial Assistant III - Courtroom Assignment | 2024-01-16 | Santa Barbara | CA | On-site |  |
| Patterned Learning Career | Junior .NET Full Stack Developer | 2024-01-14 | Los Angeles | CA | Remote | Software Engineering |
| Trusted Tech Team | Junior Business Development Representative | 2024-01-14 | Irvine | CA | On-site | Finance & Accounting,Marketing & Sales |
| Mela Group Inc | Junior Event Marketing Assistant | 2024-01-14 | Carson | CA | On-site | Marketing & Sales |
| The Ekeo Group | Junior Healthcare Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Epic | Junior Infrastructure Engineer | 2024-01-15 | South Bend | IN | On-site | Software Engineering |
| WSP in the U.S. | Junior Interior Designer | 2024-01-16 | San Diego | CA | Hybrid | Designers |
| Bespoke Careers | Junior Interior Designer - Commercial TI Projects | 2024-01-16 | Irvine | CA | On-site | Designers |
| Front Page Agency Inc | Junior Marketing | 2024-01-15 | Austin | TX | On-site | Marketing & Sales |
| Patterned Learning Career | Junior PHP Developer | 2024-01-14 | Los Angeles | CA | Remote | Software Engineering |
| Iris Software Inc. | Junior Project Manager | 2024-01-16 | United States | CA | Remote | Project Management |
| Kennedys | Junior to Mid Level Associate, Litigation | 2024-01-16 | San Francisco | CA | Hybrid |  |
| Raydiant | Key Account Manager | 2024-01-15 | San Francisco | CA | On-site | Marketing & Sales |
| Hammitt | Keyholder | 2024-01-14 | Manhattan Beach | CA | On-site |  |
| INQBRANDS INC. | Kitchen and Bath Sales Manager | 2024-01-14 | Ontario | CA | On-site | Marketing & Sales |
| Udacity | Korean Speaking Mentors (Independent Contractor): Digital Marketing Mentor & Project Reviewer | 2024-01-15 | United States |  | Remote | Marketing & Sales |
| Udacity | Korean Speaking Mentors (Independent Contractor): Digital Marketing Mentor & Project Reviewer | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Above the Bar | L&E Litigation Associate - No billables, boutique firm | 2024-01-16 | Los Angeles | CA | Hybrid |  |
| Above the Bar | L&E Litigation Associate - No billables, boutique firm | 2024-01-14 | Los Angeles | CA | Hybrid |  |
| California Department of State Hospitals | LABOR RELATIONS ANALYST | 2024-01-15 | Napa | CA | On-site |  |
| CA Department of Corrections & Rehabilitation | LABOR RELATIONS SPECIALIST | 2024-01-15 | Sacramento | CA | Hybrid |  |
| California Department of Social Services | LEGAL ANALYST | 2024-01-16 | Sacramento | CA | On-site | Legal |
| El Camino Health | Lab Tech Supp Spec I - FT - Days - Clinical Laboratory MV (works every weekend) | 2024-01-15 | Mountain View | CA |  |  |
| El Camino Health | Lab Tech Supp Spec II - FT - Days - Clinical Laboratory LG | 2024-01-15 | Mountain View | CA | On-site |  |
| McGuireWoods LLP | Labor & Employment Associate | 2024-01-16 | Los Angeles Metropolitan Area | CA | Hybrid |  |
| Stealth | Labor And Employment Attorney | 2024-01-16 | San Francisco Bay Area | CA | On-site | Legal |
| RightWorks | Labor And Employment Attorney - 1716961 | 2024-01-14 | Palo Alto | CA | Hybrid | Legal |
| ZIM Integrated Shipping Services | Labor Relations Manager | 2024-01-14 | Westminster | CA | On-site |  |
| California Correctional Health Care Services | Labor Relations Specialist | 2024-01-16 | Sacramento | CA | On-site |  |
| Gamoran Legal Consulting | Labor and Employment Associate | 2024-01-14 | Los Angeles | CA | On-site |  |
| Aisera | Large Enterprise Account Executive - CA Remote | 2024-01-14 | Orange County | CA | Remote | Marketing & Sales |
| Rubrik | Large Enterprise Account Executive - Northwest | 2024-01-15 | San Francisco | CA | Hybrid | Marketing & Sales |
| Aya Healthcare | Lawyer job in Oakland, CA - Make $3,155 - $3,337/week | 2024-01-14 | Oakland | CA | On-site | Legal |
| Nextdoor | Lead - Compensation | 2024-01-15 | San Francisco | CA | Hybrid | Finance & Accounting |
| Airbnb | Lead Analyst, Advanced Analytics | 2024-01-16 | United States | CA | Remote | Data Science |
| Autonomi Labs | Lead Computer Vision Engineer | 2024-01-14 | Fremont | CA | On-site | Data Science |
| OPSWAT | Lead Copywriter | 2024-01-14 | San Francisco | CA | On-site | Marketing & Sales |
| Allstate | Lead Counsel, Litigation Services, Los Angeles, CA (Remote) | 2024-01-14 | Glendale | CA | Remote |  |
| Meta | Lead Counsel, eDiscovery & Information Governance | 2024-01-16 | San Francisco | CA |  |  |
| People Tech Group Inc | Lead Data Engineer | 2024-01-15 | Fremont | CA | Remote | Data Engineering |
| Diligente Technologies | Lead Data Engineer Onsite in New York | 2024-01-15 | New York | NY | Hybrid | Data Engineering |
| Optomi | Lead Data Platform Engineer | 2024-01-14 | United States | CA | Remote | Data Engineering |
| Moorecroft Systems | Lead Data Scientist | 2024-01-15 | New York | NY | On-site | Data Science |
| New York Life Insurance Company | Lead Data Scientist (Generative AI), Corporate Vice President | 2024-01-15 | New York | NY | Hybrid | Data Science |
| PayPal | Lead Designer, Design Systems | 2024-01-14 | San Jose | CA |  | Designers |
| First Solar | Lead Engineer- Sourcing Research | 2024-01-14 | Santa Clara | CA | On-site |  |
| Kiddie Academy | Lead Preschool Teacher | 2024-01-15 | La Verne | CA | On-site | Education & Teaching |
| Atlassian | Lead Principal Machine Learning Engineer | 2024-01-14 | San Francisco | CA |  | Data Engineering,Data Science,Software Engineering |
| Strategic Employment Partners (SEP) | Lead Product Designer | 2024-01-15 | Santa Monica | CA | Remote | Designers |
| Canva | Lead Product Designer - Magic Design (AI) - (RELOCATE TO AUSTRALIA) | 2024-01-16 | San Francisco | CA | Hybrid | Designers |
| Canva | Lead Product Designer - Magic Design (AI) - (RELOCATE TO AUSTRALIA) | 2024-01-14 | San Francisco | CA | Hybrid | Designers |
| Pantera Capital | Lead Product Designer, Growth | 2024-01-14 | Palo Alto | CA |  | Designers |
| Launch Potato | Lead Product Manager | 2024-01-14 | Greater Sacramento | CA | Remote | Product Management |
| Launch Potato | Lead Product Manager | 2024-01-14 | San Diego | CA | Remote | Product Management |
| eBay Deutschland | Lead Product Manager - Buyer Experience | 2024-01-16 | Commerce | CA |  | Product Management |
| Uber | Lead Product Manager - Grocery Delivery Experience | 2024-01-16 | New York | NY |  | Product Management |
| Uber | Lead Product Manager - Grocery Delivery Experience | 2024-01-16 | San Francisco | CA |  | Product Management |
| Uber | Lead Product Manager - Uber Connect - Consumer Growth | 2024-01-16 | San Francisco | CA |  | Product Management |
| Jerry | Lead Product Manager, Growth | 2024-01-15 | Seattle | WA | Remote | Product Management |
| Crossover  | Lead Product Manager, Prequel (Remote) - $100,000/year USD | 2024-01-15 | Seattle | WA | Remote | Product Management |
| Uber | Lead Product Manager, Safety | 2024-01-16 | New York | NY |  | Product Management |
| Uber | Lead Product Manager, Safety | 2024-01-16 | San Francisco | CA |  | Product Management |
| Gusto | Lead Product Manager, Tax Credits | 2024-01-16 | Los Angeles Metropolitan Area | CA | Remote | Finance & Accounting,Product Management |
| Anduril Industries | Lead Product Quality Engineer, Aircraft | 2024-01-14 | Costa Mesa | CA | On-site |  |
| Algo Capital Group | Lead Quantitative Researcher | 2024-01-15 | New York | NY | Hybrid |  |
| Centraprise | Lead React Developer (H1-Transfer also workable ) | 2024-01-14 | Sunnyvale | CA | On-site | Software Engineering |
| Perricone Farms | Lead Recruiter | 2024-01-16 | Newport Beach | CA | On-site | HR & Recruiting |
| Aha! | Lead Ruby on Rails Engineer | 2024-01-15 | Buffalo | NY | Remote |  |
| Salesforce | Lead Security Engineer - Third Party Security | 2024-01-14 | San Francisco | CA | Remote | Software Engineering |
| Storm4 | Lead Software Engineer | 2024-01-15 | Sunnyvale | CA | Hybrid | Software Engineering |
| Orbis | Lead Software Engineer - Perception - Autonomous Vehicles | 2024-01-15 | San Francisco Bay Area | CA | Hybrid | Software Engineering |
| NVIDIA | Lead Software Engineer, TensorRT Inference Workflows | 2024-01-15 | Santa Clara | CA |  | Software Engineering |
| Ontario Health - Santé Ontario | Lead, User Experience Design | 2024-01-15 | Ontario | CA | Remote | Designers |
| SharkNinja | Lead/Principle Data Analytics Engineer, Advanced Analytics | 2024-01-15 | Needham | MA | Hybrid | Data Engineering,Data Science |
| Crossover  | Leadership Coach, Alpha - $150,000/year USD | 2024-01-15 | Fulton | CA |  |  |
| Crossover  | Leadership Coach, Alpha - $150,000/year USD | 2024-01-14 | Fulton | CA |  |  |
| Abbott | Leadless Clinical Specialist, CRM - West Coast | 2024-01-14 | Los Angeles | CA |  | Medical & Healthcare |
| Universal Technical Institute, Inc. | Learning Resource Center Specialist | 2024-01-16 | Long Beach | CA | On-site |  |
| Adams & Martin Group | Legal Assistant | 2024-01-16 | San Diego | CA | Hybrid | Legal |
| Career Group Companies | Legal Assistant | 2024-01-16 | Los Angeles | CA | On-site | Legal |
| CGI | Legal Assistant (Management Analyst I) | 2024-01-16 | Los Angeles | CA |  | Legal |
| BD&J, PC | Legal Assistant (Personal Injury Law Firm) | 2024-01-14 | Beverly Hills | CA | On-site | Legal |
| Adams & Martin Group | Legal Assistant/ Secretary | 2024-01-14 | Santa Ana | CA | On-site | Legal |
| Solomon Page | Legal Billing Coordinator | 2024-01-16 | Burbank | CA | Hybrid |  |
| eTeam | Legal Consultant | 2024-01-16 | United States | CA | Remote |  |
| Applied Intuition | Legal Counsel | 2024-01-15 | Mountain View | CA | On-site | Legal |
| Delta Electronics Americas | Legal Counsel | 2024-01-14 | San Francisco Bay Area | CA | On-site | Legal |
| Gotion Inc. | Legal Director | 2024-01-14 | Fremont | CA | On-site |  |
| JDHuntr In-House Counsel Jobs | Legal Document Negotiation Specialist | 2024-01-14 | San Francisco | CA | On-site |  |
| TBG - The Bachrach Group | Legal Recruiting Assistant | 2024-01-16 | Palo Alto | CA | Hybrid |  |
| TBG - The Bachrach Group | Legal Recruiting Assistant | 2024-01-14 | Palo Alto | CA | Hybrid |  |
| Sonder Consultants | Legal Recruitment Consultant - LA | 2024-01-14 | Los Angeles | CA | Hybrid | HR & Recruiting |
| AGG Legal Staffing | Legal Secretary | 2024-01-16 | San Francisco | CA | Hybrid | Legal |
| Susman Godfrey LLP | Legal Secretary | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Legal |
| People Maketh | Legal Secretary - Litigation Support | 2024-01-14 | Los Angeles | CA | On-site | Legal |
| Calculated Hire | Legal Specialist | 2024-01-16 | Culver City | CA | Hybrid |  |
| California School Boards Association | Legislative Advocate, Governmental Relations | 2024-01-16 | West Sacramento | CA | Hybrid |  |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $65/hr | 2024-01-16 | Avenal | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $65/hr | 2024-01-16 | Delano | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $65/hr | 2024-01-16 | Ione | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $65/hr | 2024-01-16 | San Quentin | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $65/hr | 2024-01-16 | Tehachapi | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $65/hr | 2024-01-16 | Wasco | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $73/hr | 2024-01-16 | Corcoran | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $83/hr | 2024-01-16 | Soledad | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $83/hr | 2024-01-16 | Stockton | CA | On-site | HR & Recruiting |
| Healthcare Staffing Professionals Inc. | Licensed Clinical Social Worker (LCSW) -HOT JOB $83/hr | 2024-01-16 | Vacaville | CA | On-site | HR & Recruiting |
| Kaiser Permanente | Licensed Masters Mental Health Prof. Adults | 2024-01-16 | Oakland | CA | On-site |  |
| Health eCareers | Licensed Vocational Nurse (LVN) - Home Health- PRN- West Palm Springs, High Desert, Desert Hot Springs at Bridge Home Health and Hospice | 2024-01-16 | Palm Springs | CA | On-site | Medical & Healthcare |
| Alternative Resources Company | Life Sciences Recruiter | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| Kyte | Lifecycle Marketing Lead | 2024-01-15 | San Francisco | CA | Remote | Marketing & Sales |
| Capstone IT | Linux Systems Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| CivicMinds, Inc | Litigation Associate | 2024-01-14 | Redwood City | CA | On-site |  |
| Garcia Legal Search, LLC | Litigation Associate | 2024-01-14 | Los Angeles | CA | On-site |  |
| Greenberg Traurig, LLP | Litigation Associate (Mid to Senior Level) - SAC | 2024-01-14 | Sacramento | CA | Hybrid |  |
| Prominent Career Solutions, LLC | Litigation Associate Attorney-Salary to $200k/yr! | 2024-01-16 | Los Angeles | CA | On-site | Legal |
| Lighthouse Legal Search | Litigation Attorney | 2024-01-14 | San Francisco | CA | Hybrid | Legal |
| Messner Reeves LLP | Litigation Attorney | 2024-01-14 | Orange County | CA | Hybrid | Legal |
| Pettit Kohn Ingrassia Lutz & Dolin PC | Litigation Attorney | 2024-01-14 | San Diego | CA | Hybrid | Legal |
| Messner Reeves LLP | Litigation Paralegal | 2024-01-14 | Orange County | CA | Hybrid | Legal |
| Messner Reeves LLP | Litigation Paralegal | 2024-01-14 | San Jose | CA | Hybrid | Legal |
| Wood, Smith, Henning & Berman LLP | Litigation Paralegal | 2024-01-16 | San Diego | CA | Hybrid | Legal |
| Adams & Martin Group | Litigation Paralegal (Bad Faith Insurance) | 2024-01-16 | Los Angeles County | CA | On-site | Legal |
| Farmers Insurance | Litigation Paralegal - California | 2024-01-16 | California | CA | Remote | Legal |
| Kirkland & Ellis | Litigation Practice Assistant | 2024-01-16 | San Francisco | CA | On-site |  |
| Joby Aviation | Loads and Dynamics Engineer | 2024-01-14 | Santa Cruz | CA | On-site |  |
| East West Bank | Loan Operations Quality Control Manager | 2024-01-14 | El Monte | CA | On-site |  |
| Equity Wave Lending, Inc. | Loan Servicing + Administrative Assistant | 2024-01-14 | Orange | CA | On-site |  |
| Jobot Health | Locum Medical Oncologist | 2024-01-15 | Bakersfield | CA | On-site | Medical & Healthcare |
| Jobot Health | Locum Pediatric Neurologist | 2024-01-14 | Los Angeles | CA | Remote | Medical & Healthcare |
| Jobot Health | Locum Pediatric Physiatrist | 2024-01-14 | Los Angeles | CA | Remote |  |
| UNICEF | Long Term Agreement (LTA) for Engagement of Individual Consultants as Data Management and Analysis Experts, Education Cannot Wait (ECW), Remote-based, REQ#568950 | 2024-01-15 | New York | NY |  |  |
| Reed Smith LLP | Los Angeles - Labor & Employment Associate (Senior-Level, 6th Year) | 2024-01-14 | Los Angeles | CA | Hybrid |  |
| MATCH Charter Public School | Lower Elementary Lead Teacher: 2024-2025 | 2024-01-15 | Boston | MA | On-site | Education & Teaching |
| The Shade Store | Luxury Design Sales Consultant - San Francisco, CA | 2024-01-14 | San Francisco | CA | On-site | Marketing & Sales |
| The Shade Store | Luxury Design Sales Consultant - San Ramon, CA | 2024-01-14 |  California |  | On-site | Marketing & Sales |
| Signet Jewelers | Luxury Fashion & Timepiece Manager - Jared - Meridian Square | 2024-01-16 | North Aurora | IL | On-site |  |
| Diva Group | Luxury Furniture Sales | 2024-01-14 | West Hollywood | CA | On-site | Marketing & Sales |
| Myria | Luxury Lifestyle Manager | 2024-01-14 | United States | CA | Remote |  |
| Barnes & Thornburg LLP | MARKETING SERVICES SPECIALIST (Available to sit in South Bend or Ft. Wayne) | 2024-01-15 | South Bend | IN | On-site | Marketing & Sales |
| NVIDIA | MBA 2024 Internships: Product Management, Marketing, Finance and Operations | 2024-01-14 | Santa Clara | CA |  | Product Management,Finance & Accounting,Marketing & Sales |
| Kind Humanoid | Machine Learning Architect & Engineer | 2024-01-14 | Palo Alto | CA | On-site | Data Science,Software Engineering |
| Booz Allen Hamilton | Machine Learning Engineer | 2024-01-15 | Arlington | VA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Microsoft | Machine Learning Engineer | 2024-01-16 | San Mateo | CA | Hybrid | Data Science,Software Engineering,Data Engineering |
| Photon | Machine Learning Engineer | 2024-01-15 | Dallas | TX | On-site | Data Engineering,Data Science,Software Engineering |
| TikTok | Machine Learning Engineer - Content Growth | 2024-01-14 | San Jose | CA |  | Data Engineering,Data Science,Software Engineering |
| TikTok | Machine Learning Engineer - Data Cycling Center | 2024-01-14 | San Jose | CA | On-site | Data Engineering,Data Science,Software Engineering |
| Nextdoor | Machine Learning Engineer - Product | 2024-01-15 | San Francisco | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Salesforce | Machine Learning Engineer - Senior/Lead/Principal | 2024-01-15 | Boston | MA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Adobe | Machine Learning Engineer /Firefly | 2024-01-15 | San Jose | CA |  | Data Engineering,Data Science,Software Engineering |
| TikTok | Machine Learning Engineer Graduate (E-Commerce Supply Chain & Logistics - CV/Multimodal)- 2024 Start (MS/Phd) | 2024-01-14 | San Jose | CA |  | Data Engineering,Data Science,Software Engineering |
| Scale AI | Machine Learning Engineer, LLM Infrastructure | 2024-01-14 | San Francisco | CA |  | Data Engineering,Data Science,Software Engineering |
| TikTok | Machine Learning Engineer, Risk Data Mining - USDS | 2024-01-14 | Mountain View | CA |  | Data Engineering,Data Science,Software Engineering |
| ByteDance | Machine Learning Engineer-Model Training Infrastructure | 2024-01-14 | San Jose | CA |  | Data Engineering,Data Science,Software Engineering |
| Synopsys Inc | Machine Learning Engr, Sr I - 48039BR | 2024-01-16 | Mountain View | CA |  | Data Science,Software Engineering |
| Synopsys Inc | Machine Learning Engr, Sr I - 48039BR | 2024-01-15 | Mountain View | CA |  | Data Science,Software Engineering |
| Zoom | Machine Learning Platform Engineer | 2024-01-15 | Seattle | WA | Remote | Data Science,Software Engineering |
| E-Solutions | Mainframes Application Developer (Visa Independent) | 2024-01-15 | Philadelphia | PA | On-site | Software Engineering |
| Accenture | Management Consulting -- Industrial Sector Manager/Senior Manager | 2024-01-14 | Sacramento | CA |  |  |
| Accenture | Management Consulting -- Industrial Sector Manager/Senior Manager | 2024-01-14 | San Diego | CA |  |  |
| Accenture | Management Consulting -- Industrial Sector Manager/Senior Manager | 2024-01-14 | San Francisco | CA |  |  |
| Northrop Grumman | Manager Business Management 3 | 2024-01-15 | Palmdale | CA |  |  |
| Crossover  | Manager Product Management, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | United States | CA | Remote | Product Management |
| Sprouts Farmers Market | Manager Regional Human Resources | 2024-01-14 | California | CA | On-site |  |
| TAG - The Aspen Group | Manager of Data Engineering | 2024-01-15 | Chicago | IL | Hybrid | Data Engineering,Software Engineering |
| MedSpeed | Manager of Data Science | 2024-01-15 | Elmhurst | IL | Hybrid | Data Science |
| Uber | Manager, Account Management | 2024-01-16 | Dallas | TX |  |  |
| StackCommerce | Manager, Brand Partnerships | 2024-01-15 | United States | CA | Remote |  |
| Adobe | Manager, Business Development | 2024-01-15 | San Francisco | CA |  |  |
| Walmart | Manager, Business Operations eCommerce | 2024-01-14 | San Bruno | CA |  |  |
| Capital One | Manager, Community Finance - Underwriting, Portfolio & Loan Management | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| DoorDash | Manager, Compensation Systems | 2024-01-14 | San Francisco | CA |  | Finance & Accounting |
| Capital One | Manager, Construction Risk Management and Architectural Engineering | 2024-01-16 | Newport Beach | CA |  | Data Science,Software Engineering |
| Capital One | Manager, Construction Risk Management and Architectural Engineering | 2024-01-16 | San Francisco | CA |  | Data Science,Software Engineering |
| Mondelēz International | Manager, Customer Growth Insights: Data Scientist (Kroger / Albertsons Channel ) | 2024-01-15 | United States |  | Remote | Data Science |
| Rise Interactive | Manager, Data Engineering | 2024-01-15 | Chicago | IL | On-site | Data Engineering,Software Engineering |
| Salesforce | Manager, Data Quality and Analytics | 2024-01-15 | Indianapolis | IN | Hybrid | Data Science |
| Calix | Manager, Education Services | 2024-01-15 | San Jose | CA | Hybrid |  |
| Hourglass Cosmetics | Manager, Payroll and Benefits | 2024-01-16 | West Hollywood | CA | On-site | Finance & Accounting,HR & Recruiting |
| Capital One | Manager, Product Management: Merchant Offers Tooling - Capital One Shopping (Remote - Eligible) | 2024-01-16 | San Francisco | CA |  | Product Management |
| Square | Manager, Strategic Sales Account Executives | 2024-01-16 | Denver Metropolitan Area | CA | Remote | Marketing & Sales |
| Evolent | Manager, Talent Operations | 2024-01-15 | United States | CA | Remote |  |
| Invenergy | Manager/Senior Manager Interconnections and Grid Analysis | 2024-01-15 | Mountain Home | WY | Remote |  |
| Urenco USA | Managing Director/CEO | 2024-01-15 | Eunice | NM | On-site |  |
| Western Dental & Orthodontics | Managing Doctor | 2024-01-15 | Redwood City | CA | On-site | Medical & Healthcare |
| Zoox | Manufacturing Diagnostics Engineer | 2024-01-14 | Fremont | CA | On-site |  |
| Johnson Controls | Manufacturing Engineering | 2024-01-14 | Jurupa Valley | CA | On-site | Software Engineering |
| Johnson & Johnson | Manufacturing NPI Engineer (Position 1 out of 2) | 2024-01-15 | Redwood Valley | CA | On-site |  |
| Joby Aviation | Manufacturing Training Partner | 2024-01-14 | San Diego County | CA | On-site |  |
| Robinhood | MarTech Manager | 2024-01-14 | Menlo Park | CA | On-site |  |
| Yamaha Motor Corporation, USA | Marine District Marketing Sales Manager | 2024-01-14 | Cypress | CA | On-site | Marketing & Sales |
| Worley | Marine Scientist and Regulatory Specialist, USA | 2024-01-14 | Monrovia | CA | On-site |  |
| Shipman & Goodwin LLP | Marketing & Business Development Specialist | 2024-01-15 | Hartford | CT | Hybrid | Marketing & Sales |
| Noble Direct | Marketing & Communications Specialist | 2024-01-14 | Oakland | CA | On-site | Marketing & Sales |
| Noble Direct | Marketing - Entry Level Associate | 2024-01-14 | Walnut Creek | CA | On-site | Marketing & Sales |
| TaskUs | Marketing Account Specialist | 2024-01-15 | New Braunfels | TX |  | Marketing & Sales |
| Compass | Marketing Advisor - West Hollywood - Sunset Strip | 2024-01-14 | Los Angeles | CA | On-site | Marketing & Sales |
| PRIAM Inc. | Marketing Assistant | 2024-01-14 | Long Beach | CA | On-site | Marketing & Sales |
| Elysium Ventures | Marketing Assistant - Entry Level | 2024-01-14 | Tustin | CA | On-site | Marketing & Sales |
| Warren Incorporated | Marketing Associate - Entry Level | 2024-01-14 |  California |  | On-site | Marketing & Sales |
| Coastal Cloud | Marketing Cloud Solution Architect | 2024-01-14 | United States | CA | Remote | Software Engineering,Marketing & Sales |
| Sinclair Inc. | Marketing Consultant | 2024-01-14 | Eureka | CA | Hybrid | Marketing & Sales |
| WuXi AppTec | Marketing Content Director | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Del Amo Construction | Marketing Coordinator | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site | Marketing & Sales |
| MarinHealth | Marketing Development Liaison, Community Relations Full-Time, Days | 2024-01-15 | Greenbrae | CA |  | Marketing & Sales |
| ATR International | Marketing Director | 2024-01-14 | Santa Clara | CA | On-site | Marketing & Sales |
| Avie.ai | Marketing Director | 2024-01-15 | San Francisco Bay Area | CA | Remote | Marketing & Sales |
| Khrista Jarvis Team, Coldwell Banker | Marketing Director | 2024-01-14 | Danville | CA | On-site | Marketing & Sales |
| Origin | Marketing Director | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Ecolab | Marketing Director, Healthcare Surgical | 2024-01-15 | St Paul | MN | On-site | Marketing & Sales |
| Engagys LLC | Marketing Leader | 2024-01-15 | Greater Boston |  | Hybrid | Marketing & Sales |
| First Quality | Marketing Leader | 2024-01-15 | Macon | GA | Hybrid | Marketing & Sales |
| Claire Myers Consulting | Marketing Manager | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| H2scan Corporation | Marketing Manager | 2024-01-14 | Los Angeles | CA |  | Marketing & Sales |
| H2scan Corporation | Marketing Manager | 2024-01-14 | Santa Clarita | CA | On-site | Marketing & Sales |
| The Mom Project | Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| UL Solutions | Marketing Manager | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Argano | Marketing Manager       | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Workiva | Marketing Manager - Partnerships | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Ardent Health Services | Marketing Manager of Data & Analytics | 2024-01-14 | United States | CA | Remote | Data Science,Marketing & Sales |
| Pressed Juicery | Marketing Manager, Wholesale Accounts | 2024-01-14 | Los Angeles | CA | Hybrid | Marketing & Sales |
| BeyondTrust | Marketing Operations Analyst- Remote | 2024-01-15 | United States | CA | Remote | Data Science,Marketing & Sales |
| The Fountain Group | Marketing Project Coordinator | 2024-01-16 | Alameda | CA | On-site | Marketing & Sales |
| Remark Acquisitions | Marketing Promotions Specialist | 2024-01-15 | Greater Morgantown Area |  | On-site | Marketing & Sales |
| Snap Inc. | Marketing Science Lead, North America | 2024-01-15 | Los Angeles | CA |  | Marketing & Sales |
| Snap Inc. | Marketing Science Lead, North America | 2024-01-15 | San Francisco | CA |  | Marketing & Sales |
| Petaluma River Park | Marketing and Development Manager | 2024-01-15 | Petaluma | CA | Hybrid | Marketing & Sales |
| Children's Hospital Los Angeles (CHLA) | Master Teacher / Child Development Center - Infant /Toddler / Full-time | 2024-01-14 | Los Angeles | CA | On-site | Education & Teaching |
| ICEF Public Schools | Math Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| KIPP SoCal Public Schools | Math Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| Fusion Academy | Math and Science Teacher | 2024-01-15 | Folsom | CA | Hybrid | Education & Teaching |
| Fusion Academy | Math and Science Teacher | 2024-01-15 | San Mateo | CA | On-site | Education & Teaching |
| Tetra Tech | Mechanical Designer | 2024-01-16 | San Francisco | CA | On-site | Designers |
| STV | Mechanical Designer/Specialist | 2024-01-14 | Rancho Cucamonga | CA | On-site | Designers |
| Anduril Industries | Mechanical Engineer | 2024-01-14 | Costa Mesa | CA | On-site |  |
| Kind Humanoid | Mechanical Engineer | 2024-01-14 | Palo Alto | CA | On-site |  |
| Kind Humanoid | Mechanical Engineer (Humanoid) | 2024-01-14 | Palo Alto | CA | On-site |  |
| Joby Aviation | Mechanical Engineer - System Electronics | 2024-01-14 | San Carlos | CA | On-site |  |
| Lewis Ross Associates | Mechanical/Plumbing Designer | 2024-01-16 | Santa Clarita | CA | On-site | Designers |
| DAVID BAGGA COMPANY | Med Device Sales Rep - diabetes | 2024-01-14 | Oakland | CA | On-site | Marketing & Sales |
| DAVID BAGGA COMPANY | Med Device Sales Rep - diabetes | 2024-01-14 | Walnut Creek | CA | On-site | Marketing & Sales |
| Health eCareers | Med Peds Physician, Brentwood | 2024-01-14 | Los Angeles | CA | On-site | Medical & Healthcare |
| Ad Results Media | Media Planner | 2024-01-14 | United States | CA | Remote | Project Management,Marketing & Sales |
| Randstad USA | Medical Accounts Payable Specialist | 2024-01-15 | Oakland | CA | On-site |  |
| UW Health | Medical Assistant Program Instructor | 2024-01-15 | Greater Madison Area | CA | On-site | Education & Teaching |
| Mercy | Medical Assistant-Primary Care: Richardson Square | 2024-01-16 | Arnold | MO | On-site |  |
| Southcoast Health | Medical Coding Educator - Hospital Billing - Remote | 2024-01-15 | Fairhaven | MA | Remote | Education & Teaching |
| SkillBridge, Inc | Medical Device - Sales Associate $110K | 2024-01-15 | San Jose | CA | On-site | Marketing & Sales |
| ATR International | Medical Device Product Quality Analyst -Biomedical Engineering | 2024-01-14 | Los Angeles | CA | On-site | Software Engineering |
| PENTAX Medical Americas | Medical Device Sales Territory Manager | 2024-01-14 | Los Angeles County | CA | Hybrid | Marketing & Sales |
| Thrive Pet Healthcare | Medical Director - Veterinarian - Crossroads Animal Emergency | 2024-01-14 | Norwalk | CA |  | Medical & Healthcare |
| Vituity | Medical Recruiter - Remote - Nationwide | 2024-01-16 | Sacramento | CA | Remote | HR & Recruiting |
| DAVID BAGGA COMPANY | Medical Sales Rep - OR/neurosurgery | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| San Francisco Department of Public Health | Medical Staff Services Department Specialist | 2024-01-15 | San Francisco | CA | On-site |  |
| Insight Clinical | Medicare Lead Generation Specialist - Facebook Ads, Part-Time or Full-Time | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Humana | Medicare Sales Field Agent - Riverside County, CA | 2024-01-15 | Riverside | CA | Remote | Marketing & Sales |
| Cedars-Sinai | Medicine - Medical Oncology - Cancer and Aging Clinical Faculty | 2024-01-15 | Los Angeles | CA | On-site |  |
| University of California, San Francisco | Melanoma and Phase I Medical Oncology Faculty | 2024-01-16 | San Francisco | CA | On-site |  |
| Clearwater Living | Memory Support Director | 2024-01-15 | Rohnert Park | CA | On-site |  |
| Vuori | Men's Assistant Designer | 2024-01-16 | Carlsbad | CA | On-site | Designers |
| Pottery Barn | Merchandise Coordinator, Outdoor/Upholstery, Pottery Barn | 2024-01-14 | San Francisco | CA | On-site |  |
| Reyes Coca-Cola Bottling | Merchandiser | 2024-01-14 |  California |  |  |  |
| Tractor Supply Company | Merchandising Sales Associate, High Volume | 2024-01-14 | Paso Robles | CA | On-site | Marketing & Sales |
| The Walt Disney Company | Mgr-Trademark Clearance | 2024-01-16 | Glendale | CA | On-site |  |
| WSP in the U.S. | Mid Level Remediation Scientist | 2024-01-14 | Rancho Cordova | CA | Hybrid |  |
| Envoy | Mid Market Account Executive | 2024-01-14 | San Francisco | CA | Hybrid | Marketing & Sales |
| Above the Bar | Mid-Level Film/TV Associate Attorney | 2024-01-16 | Los Angeles | CA | Hybrid | Legal |
| Udemy | Mid-Level Machine Learning Engineer | 2024-01-16 | San Francisco | CA | Hybrid | Data Science,Software Engineering,Data Engineering |
| Boeing | Mid-Level Software Engineers | 2024-01-16 | El Segundo | CA |  | Software Engineering |
| Zurich North America | Middle Markets Underwriter, Technology (Mid-Senior or Senior) | 2024-01-15 | Los Angeles | CA |  |  |
| CalWest Educators Placement | Middle School Chemistry and Physics Teacher | 2024-01-15 | Los Angeles | CA | On-site | Education & Teaching |
| ICEF Public Schools | Middle School Science Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| The Treehouse Academy | Middle School Teacher | 2024-01-14 | San Diego | CA | On-site | Education & Teaching |
| CalWest Educators Placement | Middle and Upper School Science Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| CalWest Educators Placement | Middle and Upper School Science Teacher | 2024-01-15 | Los Angeles | CA | On-site | Education & Teaching |
| Anduril Industries | Mission Software Engineer, General | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Anduril Industries | Mission Software Engineer, Hardware Integration | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Otter | Mobile & Backend Engineer, Otter - US/CAN | 2024-01-15 | Los Angeles | CA | On-site | Software Engineering |
| Clevertech | Mobile Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Piper Companies | Model Based System Engineer **TS/SCI** | 2024-01-14 | El Segundo | CA | Hybrid | Software Engineering |
| WongDoody | Motion Designer | 2024-01-16 | Los Angeles | CA | Hybrid | Designers |
| GEODNET | Motion Graphic Designer | 2024-01-16 | Santa Clara | CA | On-site | Marketing & Sales,Designers |
| Victra - Verizon Authorized Retailer | Multi Unit General Manager | 2024-01-15 | Driggs | ID | Hybrid |  |
| Victra - Verizon Authorized Retailer | Multi Unit General Manager | 2024-01-15 | Fort Collins | CO | Hybrid |  |
| Victra - Verizon Authorized Retailer | Multi Unit General Manager | 2024-01-15 | Hailey | ID | Hybrid |  |
| CliniComp | Multimodal AI Engineer | 2024-01-14 | San Diego | CA | Hybrid | Data Science,Software Engineering |
| GHA Technologies, Inc | National Account Manager | 2024-01-14 | Palo Alto | CA | Remote | Marketing & Sales |
| GHA Technologies, Inc | National Account Manager | 2024-01-14 | Paso Robles | CA | Remote | Marketing & Sales |
| GHA Technologies, Inc | National Account Manager | 2024-01-14 | Rancho Cordova | CA | Remote | Marketing & Sales |
| HMP Global | National Accounts Manager, Digital Advertising Sales | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Veterans Alliance | National Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| TikTok | Network Software Development Engineer, High-Speed Network | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Health eCareers | Neurologist | 2024-01-15 | Redwood City | CA | On-site | Medical & Healthcare |
| Cedars-Sinai | Neurology - Headache Clinical Faculty | 2024-01-14 | Los Angeles | CA | On-site |  |
| Oracle | Non Billable Contractor - DevOps Engineer (Contract to Hire) | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| Toast | North Louisville, KY, Territory Account Executive | 2024-01-15 | Louisville | KY | Remote | Marketing & Sales |
| Energy Jobline | Northern California Business Development Leader - Transportation | 2024-01-15 | United States |  | Remote |  |
| Houston Methodist | Nurse Educator | 2024-01-15 | Sugar Land | TX | On-site | Medical & Healthcare,Education & Teaching |
| Shasta Regional Medical Center | Nurse Practitioner (NP) - Hospitalist | 2024-01-15 | Redding | CA |  | Medical & Healthcare |
| ZC Rubber Global | OE Account Manager North America | 2024-01-14 | Walnut | CA | Hybrid | Marketing & Sales |
| Sutter Health | On Call Food Service Worker | 2024-01-15 | Oakland | CA | On-site |  |
| TheKey | On-Call/Weekend Staffing Manager | 2024-01-14 |  California |  | On-site | HR & Recruiting |
| TheKey | On-Call/Weekend Staffing Manager | 2024-01-14 | Irvine | CA | On-site | HR & Recruiting |
| Santa Clara University | On-call Substitute Teacher, Kids on Campus | 2024-01-16 | Santa Clara | CA | On-site | Education & Teaching |
| Project Indigo | Onboarding and Training Manager | 2024-01-14 | United States | CA | Remote |  |
| Jobot Health | Oncologist | 2024-01-15 | Long Beach | CA | Remote | Medical & Healthcare |
| Jobot Health | Oncologist | 2024-01-15 | Sacramento | CA | Remote | Medical & Healthcare |
| BioSpace | Oncology Nurse Educator - Florida South | 2024-01-14 | Foster City | CA | On-site | Medical & Healthcare,Education & Teaching |
| ECPI University | Online CIS - Software Development Adjunct Faculty | 2024-01-16 | United States | CA | Remote | Software Engineering |
| Kari Whitman Interiors | Onsite Design Foreman/Installation Manager | 2024-01-14 | San Fernando | CA | On-site |  |
| The Spouse Solution | Open Application – Military Spouse Talent Database | 2024-01-14 | San Diego | CA | Remote | Software Engineering |
| Sunbit | Operations Coordinator | 2024-01-14 | Los Angeles | CA | On-site |  |
| Ascend Square | Operations Data Curation Engineer | 2024-01-15 | Michigan | MI | Hybrid |  |
| Petco | Operations Manager | 2024-01-14 | Citrus Heights | CA | On-site |  |
| Tesla | Operations Manager | 2024-01-14 | Aliso Viejo | CA | On-site |  |
| Prospect Health | Ophthalmologist Veterinarian J177330 | 2024-01-14 | Santa Barbara | CA | On-site | Medical & Healthcare |
| Health eCareers | Ophthalmology Glaucoma Physician BC/BE | 2024-01-14 | Santa Cruz | CA | On-site | Medical & Healthcare |
| Sierra-Cedar | Oracle Cloud Payroll Lead Consultant | 2024-01-14 | United States | CA | Remote | HR & Recruiting,Software Engineering |
| Oracle | Oracle Fusion Cloud Financials Functional Consultant | 2024-01-15 | United States | CA | Remote | Software Engineering |
| NeerInfo Solutions | Oracle HCM payroll Principal consultant | 2024-01-15 | United States | CA | Remote | HR & Recruiting |
| Jade Global | Oracle Project Manager | 2024-01-14 | San Jose | CA | Hybrid | Project Management |
| Wipro | Oracle XStore Developer | 2024-01-16 | San Francisco | CA | On-site | Software Engineering |
| Uber | Order Management & Billing Manager | 2024-01-16 | Dallas | TX |  |  |
| Uber | Order Management & Billing Specialist | 2024-01-16 | Dallas | TX |  |  |
| Empire Today | Outside Sales Rep | 2024-01-14 | Los Angeles | CA | On-site | Marketing & Sales |
| Ernest Packaging Solutions | Outside Sales Representative | 2024-01-14 | Fresno | CA | Hybrid | Marketing & Sales |
| Ernest Packaging Solutions | Outside Sales Representative | 2024-01-14 | Los Angeles | CA | Hybrid | Marketing & Sales |
| Ernest Packaging Solutions | Outside Sales Representative | 2024-01-14 | Ontario | CA | Hybrid | Marketing & Sales |
| Ernest Packaging Solutions | Outside Sales Representative | 2024-01-14 | Sacramento | CA | Hybrid | Marketing & Sales |
| Empire Today | Outside Sales Representatives | 2024-01-14 | Lake Arrowhead | CA | On-site | Marketing & Sales |
| Empire Today | Outside Sales Representatives | 2024-01-14 | San Fernando | CA | On-site | Marketing & Sales |
| Lawrence Livermore National Laboratory | PCB Designer - Mid/Senior | 2024-01-16 | Livermore | CA | On-site | Designers |
| Alvarez & Marsal | PEPI: Associate, CFO Services (OPEN TO ALL US LOCATIONS) | 2024-01-15 | Philadelphia | PA |  |  |
| Alvarez & Marsal | PEPI: Associate, CFO Services -- Financial Reporting Advisory (OPEN TO ALL US LOCATIONS) | 2024-01-15 | Charlotte | NC | On-site |  |
| Alvarez & Marsal | PEPI: Associate, CFO Services -- Financial Reporting Advisory (OPEN TO ALL US LOCATIONS) | 2024-01-15 | Troy | MI |  |  |
| Alvarez & Marsal | PEPI: Director, CFO Services - Digital Finance (OPEN TO ALL US LOCATIONS) | 2024-01-15 | Charlotte | NC |  | Finance & Accounting |
| Alvarez & Marsal | PEPI: Senior Associate, CFO Services (OPEN TO ALL US LOCATIONS) | 2024-01-15 | Nashville | TN |  |  |
| Alvarez & Marsal | PEPI: Senior Director, CFO Services (OPEN TO ALL US LOCATIONS) | 2024-01-15 | Troy | MI |  |  |
| Alvarez & Marsal | PEPI: Senior Director, Operations Group—Aerospace , Defense, Aviation & Space (OPEN TO ALL U.S. LOCATIONS) | 2024-01-15 | Atlanta | GA |  |  |
| NV5 | PMO Sr. Project Manager - Electrical Underground | 2024-01-14 | San Diego | CA | Hybrid | Project Management |
| Omega Law Group Injury & Accident Attorneys | PPC Manager | 2024-01-14 | Beverly Hills | CA | On-site |  |
| Talascend - Where Opportunities Await. | PROJECT MANAGER AI-ENERGY-MOBILITY- VGI (Vehicle Grid Integration) | 2024-01-14 | United States | CA | Remote | Project Management |
| National University | PT Assistant Professor - School Psychology | 2024-01-16 | Rancho San Diego | CA | On-site | Education & Teaching |
| Neighborhood Healthcare | Pace Medical Director, Physician | 2024-01-15 | Riverside | CA | On-site | Medical & Healthcare |
| Creative Circle | Packaging Designer | 2024-01-16 | Solano County | CA | Hybrid | Designers |
| MediaNews Group | Page Designer | 2024-01-16 | Chico | CA | On-site | Designers |
| Collegis Education | Paid Media Strategist | 2024-01-15 | United States | CA | Remote |  |
| UserGems 💎 | Paid Media and ABM Manager | 2024-01-15 | United States | CA | Remote |  |
| Cetera Financial Group | Paralegal | 2024-01-16 | El Segundo | CA | Hybrid | Legal |
| NPAworldwide | Paralegal - Trusts and Estates | 2024-01-16 | Newport Beach | CA | On-site | Legal |
| Arcadis | Paralegal / Construction Contract Specialist - High Speed Rail | 2024-01-16 | Bakersfield | CA | On-site | Legal |
| Arcadis | Paralegal / Construction Contract Specialist - High Speed Rail | 2024-01-16 | Concord | CA | On-site | Legal |
| Arcadis | Paralegal / Construction Contract Specialist - High Speed Rail | 2024-01-16 | Roseville | CA | On-site | Legal |
| Arcadis | Paralegal / Construction Contract Specialist - High Speed Rail | 2024-01-16 | San Francisco | CA | On-site | Legal |
| Arcadis | Paralegal / Construction Contract Specialist - High Speed Rail | 2024-01-16 | San Luis Obispo | CA | On-site | Legal |
| Arcadis | Paralegal / Construction Contract Specialist - High Speed Rail | 2024-01-16 | Selma | CA | On-site | Legal |
| National University | Part time Assistant Professor, Mathematics and Natural Sciences | 2024-01-16 | Twentynine Palms | CA | Hybrid | Education & Teaching |
| Hot Topic | Part-Time Assistant Manager - Level 2 | 2024-01-16 | Escondido | CA |  |  |
| Capital One | Part-Time Branch Ambassador - Union Square | 2024-01-16 | New York | NY |  |  |
| Strategic Education, Inc | Part-Time Faculty, Master of Science in Finance, FlexPath | 2024-01-16 | United States | CA | Remote | Finance & Accounting |
| Capella University | Part-Time Faculty, Master of Social Work, GuidedPath | 2024-01-16 | United States | CA | Remote |  |
| TransPerfect | Part-Time Remote Project Data Contributor (No experience needed) – WFH - Anywhere in US | 2024-01-14 | Bakersfield | CA | Remote |  |
| TransPerfect | Part-Time Remote Project Data Contributor (No experience needed) – WFH - Anywhere in US | 2024-01-14 | Stockton | CA | Remote |  |
| National University | Part-time Assistant Professor, Construction Management | 2024-01-16 | San Diego | CA | Hybrid | Education & Teaching |
| National University | Part-time Assistant Professor, Data Science | 2024-01-16 | San Diego | CA | Hybrid | Education & Teaching,Data Science |
| National University | Part-time Assistant Professor, Social and Psychological Sciences | 2024-01-16 | Twentynine Palms | CA | On-site | Education & Teaching |
| National University | Part-time Faculty, American Sign Language | 2024-01-16 | San Diego | CA | On-site |  |
| Uber | Partner Manager, Grocery & Retail | 2024-01-16 | New York | NY |  |  |
| TikTok | Partner Manager- Monetization Product Partnerships | 2024-01-14 | San Francisco | CA |  |  |
| Party City | Party City Team Member (Sales Associate) | 2024-01-14 | Baldwin Park | CA | On-site | Marketing & Sales |
| Party City | Party City Team Member (Sales Associate) | 2024-01-14 | Pleasanton | CA | On-site | Marketing & Sales |
| Party City | Party City Team Member (Sales Associate) | 2024-01-14 | Simi Valley | CA | On-site | Marketing & Sales |
| Haraka Headhunters | Patent Attorney | 2024-01-14 | United States | CA | Remote | Legal |
| Perkins Coie LLP | Patent Prosecution Associate Attorney - Junior | 2024-01-14 | Palo Alto | CA | Hybrid | Legal |
| Perkins Coie LLP | Patent Prosecution Technical Advisor - Junior | 2024-01-16 | San Diego | CA | Hybrid |  |
| Saint Agnes Medical Center | Patient Relations Coordinator ~ Service Excellence | 2024-01-14 | Fresno | CA |  |  |
| Wayne Perry, Inc. | Payroll Administrator/Staff Accountant | 2024-01-16 | Buena Park | CA | On-site | Finance & Accounting,HR & Recruiting |
| Ledgent | Payroll Clerk -start work immediately! | 2024-01-14 | Dublin | CA | On-site | HR & Recruiting |
| Faith Electric, LLC | Payroll Manager | 2024-01-16 | Redlands | CA | On-site | Finance & Accounting,HR & Recruiting |
| Outreach | Payroll Manager | 2024-01-15 | United States | CA | Remote | Finance & Accounting,HR & Recruiting |
| BBSI | Payroll Specialist | 2024-01-14 | Santa Barbara | CA | On-site | HR & Recruiting |
| Falck | Payroll Specialist | 2024-01-15 | Orange | CA | On-site | HR & Recruiting |
| Rosendin | Payroll Specialist | 2024-01-14 | San Jose | CA | Hybrid | HR & Recruiting |
| OneSource Virtual | Payroll Specialist I | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| Hillberg & Co., CPAs | Payroll Specialist/Bookkeeper | 2024-01-16 | Turlock | CA | On-site | HR & Recruiting |
| Anduril Industries | Payroll Supervisor | 2024-01-14 | Costa Mesa | CA | On-site | HR & Recruiting |
| Uber | Performance Marketing Associate, Earner CRM | 2024-01-16 | New York | NY |  | Marketing & Sales |
| CHARLES & KEITH GROUP | Performance Marketing Manager | 2024-01-14 | California | CA | On-site | Marketing & Sales |
| Uber | Performance Marketing Manager II, Strategy & Operations (Delivery) | 2024-01-16 | San Francisco | CA |  | Marketing & Sales |
| Uber | Performance Marketing Manager II, Strategy & Operations (Mobility) | 2024-01-16 | San Francisco | CA |  | Marketing & Sales |
| Uber | Performance Marketing Manager, B2B, Paid Social | 2024-01-16 | New York | NY |  | Marketing & Sales |
| Uber | Performance Marketing Manager, Mobility Paid Channels | 2024-01-16 | San Francisco | CA |  | Marketing & Sales |
| CompHealth | Permanent - Physician Internal Medicine | 2024-01-14 | Portola | CA | On-site | Medical & Healthcare |
| Incendia Partners | Personal Injury Legal Assistant (Litigation) | 2024-01-14 | Torrance | CA | On-site | Legal |
| W3Global | Personal Injury Litigation Attorney | 2024-01-14 |  California |  |  | Legal |
| Incendia Partners | Personal Injury Litigation Attorney - ($300k - $350k OTE) | 2024-01-14 | Torrance | CA | On-site | Legal |
| ENPRAMEX COMPANY USA  | Petroleum Company Hiring a Diesel, Aviation and Gasoline Fuel Sales Representative in Northern California | 2024-01-14 | Beverly Hills | CA | On-site | Marketing & Sales |
| ENPRAMEX COMPANY USA  | Petroleum Company Hiring a Human Resources | 2024-01-16 | Beverly Hills | CA | On-site |  |
| Pfizer | Pfizer Oncology Sales Talent Community | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Uber | PhD Graduate 2024 Applied Scientist (AEA/ASSA Economists), United States | 2024-01-16 | New York | NY |  |  |
| Uber | PhD Graduate 2024 Applied Scientist (AEA/ASSA Economists), United States | 2024-01-16 | San Francisco | CA |  |  |
| Uber | PhD Graduate 2024 Applied Scientist (AEA/ASSA Economists), United States | 2024-01-16 | Seattle | WA |  |  |
| Ascendo Resources | Pharmaceutical Sales Liaison | 2024-01-14 | Oakland | CA | Remote | Marketing & Sales |
| Ascendo Resources | Pharmaceutical Sales Liaison | 2024-01-14 | Sacramento | CA | Remote | Marketing & Sales |
| Ascendo Resources | Pharmaceutical Sales Liaison | 2024-01-14 | Walnut Creek | CA | Remote | Marketing & Sales |
| Shasta Regional Medical Center | Physician | 2024-01-15 | Redding | CA |  | Medical & Healthcare |
| The Wise Seeker | Physician (Alternate) | 2024-01-14 | California | CA | On-site | Medical & Healthcare |
| U.S. Department of Veterans Affairs | Physician (Clinical/Anatomical Pathologist) | 2024-01-15 | San Diego | CA | On-site | Medical & Healthcare |
| Neighborhood Healthcare | Physician (Temecula) | 2024-01-15 | Temecula | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Anesthesiology - Henry Mayo Newhall Hospital | 2024-01-15 |  California |  | On-site | Medical & Healthcare |
| Vituity | Physician - Cardiac Anesthesiologist - Dameron Hospital | 2024-01-15 | Stockton | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Cardiac Anesthesiologist - Henry Mayo Newhall Hospital | 2024-01-15 |  California |  | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Adventist Health Tulare | 2024-01-15 | Tulare | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Adventist Health and Rideout | 2024-01-15 | Marysville | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Doctors Hospital of Manteca | 2024-01-15 | Manteca | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - John Muir Medical Center - Walnut Creek | 2024-01-15 | Walnut Creek | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Mercy San Juan Medical Center | 2024-01-14 | Carmichael | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Natividad Medical Center | 2024-01-15 | Salinas | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Saint Agnes Medical Center | 2024-01-15 | Fresno | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - St. Francis Medical Center | 2024-01-15 | Lynwood | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Emergency Medicine - Up to $100K Sign-on Bonus! - Memorial Medical Center - Modesto | 2024-01-15 | Modesto | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Hospital Medicine - Adventist Health Howard Memorial | 2024-01-15 | Willits | CA | On-site | Medical & Healthcare |
| Vituity | Physician - Hospitalist - Up to $100k Sign On Bonus! - French Hospital Medical Center | 2024-01-15 | San Luis Obispo | CA | On-site | Medical & Healthcare |
| Vituity | Physician Fellow - Simulation and Clinical Teaching - Kaweah Health Medical Center | 2024-01-15 | Visalia | CA | On-site | Medical & Healthcare,Education & Teaching |
| Century Group | Physician Recruiter | 2024-01-16 |  California |  |  | Medical & Healthcare,HR & Recruiting |
| Doximity | Physician Strategy Manager | 2024-01-15 | San Francisco Bay Area | CA | Remote | Medical & Healthcare |
| BioSpace | Pipeline [Sr Manager, Publications - Oncology] | 2024-01-14 | Irvine | CA | On-site |  |
| PTS Advance | Piping Designer | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Designers |
| Job Juncture | Plant HR Generalist | 2024-01-14 | Thousand Oaks | CA | On-site | HR & Recruiting |
| Anduril Industries | Platform - Senior Software Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Anduril Industries | Platform - Staff Software Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Nutanix | Platform Software QA Engineer | 2024-01-15 | San Jose | CA |  | Software Engineering |
| Nutanix | Platform Software QA Engineer - 3 | 2024-01-15 | San Jose | CA |  | Software Engineering |
| Sandia National Laboratories | Postdoctoral Appointee - Synthetic Biology to Target Bacterial Pathogens | 2024-01-16 | Livermore | CA |  |  |
| Avata Partners | Practice Assistant | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site |  |
| W3Global | Pre-Litigation Attorney - Personal Injury | 2024-01-14 |  California |  | Remote | Legal |
| Whole Foods Market | Prepared Foods Department Team Trainer (Culinary / Deli) | 2024-01-14 | Los Angeles | CA |  |  |
| The Learning Experience | Preschool Teacher | 2024-01-14 | Simi Valley | CA | On-site | Education & Teaching |
| The Learning Experience | Preschool/Daycare Teacher | 2024-01-15 | Oceanside | CA | On-site | Education & Teaching |
| Russell Tobin | Presentation Designer | 2024-01-16 | Bell | CA | On-site | Designers |
| Health eCareers | Primary Care (FM or IM) Physician | 2024-01-14 | Grass Valley | CA | On-site | Medical & Healthcare |
| Cottage Health | Primary Care Physician | 2024-01-15 | Goleta | CA | On-site | Medical & Healthcare |
| LevelUP | Primary Care Physician | 2024-01-15 | Palmdale | CA | On-site | Medical & Healthcare |
| Tencent Americas | Principal / Senior Media Services Architect | 2024-01-15 | Palo Alto | CA | On-site |  |
| ATR International | Principal AI ML Engineer | 2024-01-14 | Santa Clara | CA | On-site | Data Science,Software Engineering |
| Cisco | Principal AI/ML Engineer | 2024-01-14 | San Jose | CA | Remote | Data Science,Software Engineering |
| Cadence Design Systems | Principal Analog IC Designer | 2024-01-16 | San Jose | CA | Hybrid | Designers |
| Cadence Design Systems | Principal Analog IC Designer | 2024-01-15 | San Jose | CA | Hybrid | Designers |
| Amazon Web Services (AWS) | Principal Applied Scientist, AWS Identity | 2024-01-15 | New York | NY |  |  |
| HARMAN International | Principal Audio Signal Processing Engineer | 2024-01-14 | Los Angeles | CA |  |  |
| NYC Health + Hospitals | Principal Business Intelligence Developer (Senior Consultant MIS - Level C), Data Sciences and Support | 2024-01-15 | Manhattan | NY | On-site | Data Engineering,Software Engineering |
| Arcus Biosciences | Principal Clinical Programmer (Office or Remote) | 2024-01-16 | Hayward | CA | Remote | Software Engineering |
| ERM | Principal Consultant, Data Governance (Principal Level) | 2024-01-15 | Rolling Meadows | IL |  | Data Engineering |
| Nordic Global | Principal Consultant, Strategy Services - Digital Health | 2024-01-14 | United States | CA | Remote |  |
| Revature | Principal Data Developer | 2024-01-15 | Dallas | TX | Hybrid | Software Engineering |
| DauTech  | Principal Data Engineer | 2024-01-14 | United States | CA | Remote | Data Engineering |
| Capital One | Principal Data Scientist - AI Foundations | 2024-01-16 | San Francisco | CA |  | Data Science |
| Microsoft | Principal Data Scientist, Office of the Chief Economist | 2024-01-14 | Berkeley | CA | Hybrid | Data Science |
| Microsoft | Principal Data Solutions Product Manager | 2024-01-15 | Redmond | WA | Remote | Product Management |
| Raytheon | Principal Electrical Engineer – (Firmware (FW) Design – Radar Products) | 2024-01-14 | Goleta | CA | On-site |  |
| NextSense, Inc | Principal Embedded Systems Engineer | 2024-01-14 | Mountain View | CA | On-site | Software Engineering |
| RentSpree | Principal Engineer | 2024-01-14 | Los Angeles Metropolitan Area | CA | Remote |  |
| Cadence Design Systems | Principal IC Implementation Application Engineer | 2024-01-15 | San Jose | CA | Hybrid |  |
| Epicor | Principal IT Developer - Epicor Kinetic | 2024-01-15 | Dublin | CA | Hybrid | Software Engineering |
| Truveta | Principal ML Engineer - LLMs & Generative AI | 2024-01-15 | Seattle | WA | Remote | Data Science,Software Engineering |
| Atlassian | Principal Machine Learning Engineer | 2024-01-14 | San Francisco | CA |  | Data Engineering,Data Science,Software Engineering |
| Reddit, Inc. | Principal Machine Learning Engineer, Ads Measurement | 2024-01-16 | San Francisco | CA |  | Data Science,Software Engineering,Data Engineering |
| Olympus Corporation of the Americas | Principal Medical Safety Specialist | 2024-01-14 | San Diego | CA | Hybrid |  |
| Rambus | Principal Mixed-Signal Analog Design Engineer | 2024-01-14 | San Jose | CA | Hybrid |  |
| Rippling | Principal Product Designer, Performance Management | 2024-01-16 | San Francisco | CA | On-site | Designers |
| Adobe | Principal Product Manager | 2024-01-15 | New York | NY | Remote | Product Management |
| Adobe | Principal Product Manager | 2024-01-15 | San Francisco | CA |  | Product Management |
| Adobe | Principal Product Manager | 2024-01-15 | San Jose | CA |  | Product Management |
| Adobe | Principal Product Manager | 2024-01-15 | Seattle | WA |  | Product Management |
| Adobe | Principal Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Microsoft | Principal Product Manager | 2024-01-15 | Redmond | WA | Hybrid | Product Management |
| Microsoft | Principal Product Manager | 2024-01-15 | Redmond | WA | Remote | Product Management |
| Microsoft | Principal Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Wealthfront | Principal Product Manager | 2024-01-16 | Palo Alto | CA | Remote | Product Management |
| Fivetran | Principal Product Manager - Databases | 2024-01-16 | Oakland | CA |  | Product Management |
| Seagate Technology | Principal Product Manager - Enterprise Systems Solutions | 2024-01-16 | United States | CA | Remote | Product Management |
| Adobe | Principal Product Manager - Firefly Enterprise - Customization | 2024-01-15 | San Jose | CA |  | Product Management |
| Adobe | Principal Product Manager - Firefly Enterprise - Customization | 2024-01-15 | Seattle | WA |  | Product Management |
| Amazon | Principal Product Manager - Tech, FinTech Accounting | 2024-01-15 | Seattle | WA |  | Product Management,Finance & Accounting |
| Amazon | Principal Product Manager, Delivery Choices | 2024-01-15 | Bellevue | WA |  | Product Management |
| ezCater | Principal Product Manager, Fulfillment Operations (Remote) | 2024-01-15 | United States | CA | Remote | Product Management |
| LegalZoom | Principal Product Manager, MyLZ | 2024-01-16 | Glendale | CA | On-site | Product Management |
| LegalZoom | Principal Product Manager, MyLZ | 2024-01-16 | Los Angeles | CA | On-site | Product Management |
| Amazon | Principal Product Manager, Technical - Ads New Product Launches, ACTS, Advertising | 2024-01-15 | Seattle | WA |  | Product Management |
| Prime Video & Amazon Studios | Principal Product Manager, Technical, Amazon Prime Video Customer Relationships & Marketing Tech | 2024-01-15 | Seattle | WA |  | Product Management,Marketing & Sales |
| Lattice | Principal Product Marketing Manager, Pricing & Strategy | 2024-01-15 | United States | CA | Remote | Product Management,Finance & Accounting,Marketing & Sales |
| Shockwave Medical | Principal Regulatory Affairs Specialist | 2024-01-16 | Santa Clara | CA | Hybrid |  |
| Anduril Industries | Principal Robotics Software Engineer, Ghost | 2024-01-14 | Costa Mesa | CA | Hybrid | Data Science,Software Engineering |
| Yahoo | Principal Software Dev Engineer, Yahoo Mail | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Oracle | Principal Software Developer, Virtual Networking Data Plane - C/C++ | 2024-01-15 | Nashua | NH |  | Software Engineering |
| Citrix | Principal Software Engineer | 2024-01-15 | Santa Clara | CA | On-site | Software Engineering |
| ESPN | Principal Software Engineer | 2024-01-16 | Glendale | CA | On-site | Software Engineering |
| Kahoa.ai | Principal Software Engineer | 2024-01-15 | California | CA | Remote | Software Engineering |
| Microsoft | Principal Software Engineer | 2024-01-15 | Redmond | WA | Remote | Software Engineering |
| Northrop Grumman | Principal Software Engineer (PGS SDA) | 2024-01-16 | Redondo Beach | CA |  | Software Engineering |
| Veeva Systems | Principal Software Engineer - Data Migration | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| Veeva Systems | Principal Software Engineer - Front End | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| Alcon | Principal Software Engineer - Visualization | 2024-01-14 | Goleta | CA | On-site | Software Engineering |
| Snap Inc. | Principal Software Engineer, iOS, 14+ Years of Experience | 2024-01-15 | Palo Alto | CA |  | Software Engineering |
| Postman | Principal Technical Recruiter | 2024-01-16 | San Francisco | CA |  | HR & Recruiting |
| Northrop Grumman | Principal Technical Services Project Management/Sr Principal Technical Services Project Management | 2024-01-15 | Sunnyvale | CA |  |  |
| LogicMonitor | Principal UX Designer | 2024-01-15 | Santa Barbara | CA | Hybrid | Designers |
| Respawn Entertainment | Principal UX Designer (Star Wars FPS) | 2024-01-16 | Los Angeles | CA | Hybrid | Designers |
| Posit PBC | Principal UX/UI Designer | 2024-01-15 | United States | CA | Remote | Designers |
| Adobe | Principal of Corporate Strategic Partnerships | 2024-01-15 | San Jose | CA |  |  |
| Chamberlain Group | Principal, Business Analytics | 2024-01-15 | Oak Brook | IL | Hybrid | Data Science |
| Amazon Web Services (AWS) | Principal, Energy Strategy , AWS Energy | 2024-01-15 | Seattle | WA |  |  |
| Amazon Web Services (AWS) | Principal, Sales Operations, Partner Planning & Maturity Model, Americas Partner Management Operations Team | 2024-01-15 | San Diego | CA |  | Marketing & Sales |
| Walmart | Principal, Software Engineer - Backend | 2024-01-16 | Sunnyvale | CA |  | Software Engineering |
| TikTok | Principle Product Designer, Consumer | 2024-01-16 | San Jose | CA |  | Designers |
| Maxonic | Privacy Architect | 2024-01-14 | San Francisco Bay Area | CA | Remote |  |
| Meta | Privacy Program Manager, Product | 2024-01-16 | Menlo Park | CA |  | Project Management |
| JPMorgan Chase & Co. | Private Client Banker - Gaithersburg Square , Gaithersburg, MD | 2024-01-16 | Gaithersburg | MD |  |  |
| Merck | Process Control Data and Analysis Engineer | 2024-01-15 | West Point | PA |  |  |
| Gallagher | Producer Associate | 2024-01-14 | Walnut Creek | CA |  |  |
| JDHuntr In-House Counsel Jobs | Product Counsel | 2024-01-14 | San Jose | CA | On-site |  |
| ByteDance | Product Counsel, Emerging Products | 2024-01-14 | Los Angeles | CA | On-site |  |
| ALKU | Product Designer | 2024-01-16 | Lake Forest | CA | On-site | Designers |
| Green Street | Product Designer | 2024-01-16 | Newport Beach | CA | Hybrid | Designers |
| Instill | Product Designer | 2024-01-15 | Los Angeles | CA | Hybrid | Designers |
| Instill | Product Designer | 2024-01-14 | Los Angeles | CA | Hybrid | Designers |
| Intelliswift Software | Product Designer | 2024-01-16 | Pleasanton | CA | Hybrid | Designers |
| Meta | Product Designer | 2024-01-16 | Menlo Park | CA |  | Designers |
| Meta | Product Designer | 2024-01-16 | San Francisco | CA |  | Designers |
| Meta | Product Designer | 2024-01-15 | Menlo Park | CA |  | Designers |
| Pave | Product Designer | 2024-01-15 | San Francisco Bay Area | CA | On-site | Designers |
| Veza | Product Designer | 2024-01-14 | San Francisco | CA | Remote | Designers |
| Affirm | Product Designer II | 2024-01-16 | Palo Alto | CA | Remote | Designers |
| Affirm | Product Designer II | 2024-01-16 | San Jose | CA | Remote | Designers |
| Russell Tobin | Product Designer II | 2024-01-16 | San Francisco | CA | On-site | Designers |
| Lyft | Product Designer Manager - Driver | 2024-01-16 | San Francisco | CA |  | Designers |
| TikTok | Product Designer, Consumer | 2024-01-16 | San Jose | CA |  | Designers |
| Acryl Data | Product Designer, Lead | 2024-01-16 | San Francisco Bay Area | CA | Remote | Designers |
| KLA | Product Development Engineer (Wafer, Robotic, Servo Control, Automation) (E) | 2024-01-14 | Milpitas | CA |  | Software Engineering |
| Lam Research | Product Engineer 6: ESC | 2024-01-14 | Fremont | CA | On-site |  |
| Autodesk | Product Excellence, Chief of Staff, Digital Customer Experience | 2024-01-15 | San Francisco | CA |  |  |
| Deloitte | Product Lead | 2024-01-16 | San Diego | CA | Hybrid |  |
| RingCentral | Product Leader, Generative AI Platform | 2024-01-16 | Belmont | CA | On-site |  |
| Adobe | Product Manager | 2024-01-15 | San Jose | CA |  | Product Management |
| American Industrial Systems, Inc. (Ennoconn - Foxconn IPC Group) | Product Manager | 2024-01-16 | Irvine | CA | On-site | Product Management |
| BayOne Solutions | Product Manager | 2024-01-15 | California | CA | Hybrid | Product Management |
| Brooksource | Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| ClickJobs.io | Product Manager | 2024-01-16 | Hemet | CA | Hybrid | Product Management |
| CommScope | Product Manager | 2024-01-16 | Santa Ana | CA | On-site | Product Management |
| Cypress HCM | Product Manager | 2024-01-16 | San Jose | CA | Hybrid | Product Management |
| Expa | Product Manager | 2024-01-15 | San Francisco | CA | Hybrid | Product Management |
| Hays | Product Manager | 2024-01-16 | Glendale | CA | On-site | Product Management |
| Henry Schein One | Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| IXL Learning | Product Manager | 2024-01-16 | San Mateo | CA | Hybrid | Product Management |
| Inflection AI | Product Manager | 2024-01-15 | Palo Alto | CA | Hybrid | Product Management |
| Intex Recreation Corp. | Product Manager | 2024-01-16 | Long Beach | CA | On-site | Product Management |
| Kalibrate | Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| Lithic | Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Meta | Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Meta | Product Manager | 2024-01-14 | Menlo Park | CA |  | Product Management |
| Moralis | Product Manager | 2024-01-15 | United States |  | Remote | Product Management |
| Moralis | Product Manager | 2024-01-14 | United States | CA | Remote | Product Management |
| PowerSchool | Product Manager | 2024-01-16 | Folsom | CA | Remote | Product Management |
| SHOPLINE | Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| SPECTRAFORCE | Product Manager | 2024-01-14 | California | CA | Remote | Product Management |
| Swooped | Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| Swooped | Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| SymPro Treasury Management Solutions | Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| UST | Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| VeeAR Projects Inc. | Product Manager | 2024-01-16 | Santa Clara | CA | Remote | Product Management |
| Visa | Product Manager | 2024-01-16 | Foster City | CA |  | Product Management |
| Construction Innovations, LLC | Product Manager (Manufacturing) | 2024-01-16 | Mather | CA | On-site | Product Management |
| DoorDash | Product Manager (Multiple Levels) | 2024-01-15 | San Francisco | CA | On-site | Product Management |
| DoorDash | Product Manager (Multiple Levels) | 2024-01-15 | Seattle | WA |  | Product Management |
| Palo Alto Networks | Product Manager (Prisma Cloud- AI) | 2024-01-16 | Santa Clara | CA | On-site | Software Engineering,Product Management |
| TikTok | Product Manager - AI Safety, Monetization GenAI Product | 2024-01-16 | San Jose | CA | On-site | Product Management |
| Aera Technology | Product Manager - Decision Intelligence Platform | 2024-01-15 | Mountain View | CA | Hybrid | Product Management |
| Brigit | Product Manager - Instant Cash | 2024-01-16 | San Francisco | CA | On-site | Product Management |
| Orthofix | Product Manager - Interbody | 2024-01-16 | Carlsbad | CA | Hybrid | Product Management |
| Steneral Consulting | Product Manager - P&I | 2024-01-16 | United States | CA | Remote | Product Management |
| INSPYR Solutions | Product Manager - SasS Products | 2024-01-16 | Los Angeles | CA | Hybrid | Product Management |
| Volkswagen of America, Inc | Product Manager - Technical Systems & Architecture | 2024-01-16 | Belmont | CA | Hybrid | Product Management |
| ASK Consulting | Product Manager 3 | 2024-01-16 | San Francisco | CA | On-site | Product Management |
| ASK Consulting | Product Manager 3 | 2024-01-16 | San Jose | CA | On-site | Product Management |
| Ushur | Product Manager AI ML Solutions (Hybrid) | 2024-01-15 | Santa Clara | CA | Hybrid | Product Management |
| Ushur | Product Manager AI ML Solutions (Hybrid) | 2024-01-14 | Santa Clara | CA | Hybrid | Product Management |
| Develocity | Product Manager Developer Tools | 2024-01-15 | United States | CA | Remote | Product Management,Software Engineering |
| Google | Product Manager I, Privacy Sandbox | 2024-01-15 | New York | NY | On-site | Product Management |
| Google | Product Manager I, Privacy Sandbox, Android IP Protection | 2024-01-15 | Mountain View | CA | On-site | Product Management |
| Google | Product Manager I, Privacy Sandbox, Anti Fingerprinting | 2024-01-15 | Mountain View | CA | On-site | Product Management |
| Google | Product Manager I, Privacy Sandbox, Shielded ID | 2024-01-15 | Mountain View | CA | On-site | Product Management |
| TikTok | Product Manager Lead, TikTok Shop Ads | 2024-01-14 | San Jose | CA |  | Product Management |
| TikTok | Product Manager MBA Intern (Generative AI) - 2024 Summer (MBA) | 2024-01-16 | San Francisco | CA |  | Product Management |
| TikTok | Product Manager MBA Intern (Global Monetization Product- Creative) - 2024 Summer (MBA) | 2024-01-14 | San Jose | CA |  | Product Management |
| Barksdale Control Products | Product Manager in Manufacturing | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Product Management |
| Amazon | Product Manager – Technical, Ring | 2024-01-16 | Sunnyvale | CA |  | Product Management |
| Adobe | Product Manager, Business Model Strategy | 2024-01-15 | San Francisco | CA |  | Product Management |
| Adobe | Product Manager, Business Model Strategy | 2024-01-15 | San Jose | CA |  | Product Management |
| GF Piping Systems | Product Manager, CPVC/PVC | 2024-01-14 | Irvine | CA | On-site | Product Management |
| JPMorgan Chase & Co. | Product Manager, Checkout-Payments-Vice President | 2024-01-16 | Palo Alto | CA |  | Product Management |
| TikTok | Product Manager, Creative Platform (Ads) | 2024-01-14 | Los Angeles | CA |  | Product Management |
| Rohde & Schwarz | Product Manager, EMC | 2024-01-16 | United States | CA | Remote | Product Management |
| JPMorgan Chase & Co. | Product Manager, Embedded Finance | 2024-01-16 | Palo Alto | CA |  | Finance & Accounting,Product Management |
| Okta | Product Manager, Fine Grained Authorization (FGA) | 2024-01-15 | United States | CA | Remote | Product Management |
| Gilbarco Veeder-Root | Product Manager, Hardware (e-Mobility) | 2024-01-16 | United States | CA | Remote | Product Management |
| Discord | Product Manager, Infra | 2024-01-14 | San Francisco | CA | Remote | Product Management |
| Inclusively | Product Manager, Infra | 2024-01-16 | United States | CA | Remote | Product Management |
| TikTok | Product Manager, Lead Ads | 2024-01-16 | Mountain View | CA |  | Product Management |
| Meta | Product Manager, Leader | 2024-01-15 | Burlingame | CA |  | Product Management |
| Meta | Product Manager, Leader | 2024-01-15 | Menlo Park | CA |  | Product Management |
| Uber | Product Manager, Marketplace Org | 2024-01-16 | San Francisco | CA |  | Product Management |
| Crossover  | Product Manager, Prequel (Remote) - $100,000/year USD | 2024-01-15 | New York | NY | Remote | Product Management |
| Crossover  | Product Manager, Prequel (Remote) - $100,000/year USD | 2024-01-15 | Seattle | WA | Remote | Product Management |
| Alibaba Group | Product Manager, Search and AI | 2024-01-14 | Sunnyvale | CA |  | Product Management |
| TikTok | Product Manager, TikTok Ads | 2024-01-16 | San Jose | CA |  | Product Management |
| Morgan Advanced Materials | Product Manager- Castables | 2024-01-16 | United States | CA | Remote | Product Management |
| Oracle | Product Manager/Strategy 2-ProdDev | 2024-01-16 | Redwood City | CA | Hybrid | Product Management |
| Hewlett Packard Enterprise | Product Manager; STaaS | 2024-01-14 | Roseville | CA | On-site | Product Management |
| Veeva Systems | Product Marketing Director | 2024-01-14 | San Francisco | CA | Remote | Product Management,Marketing & Sales |
| Glean | Product Marketing Manager | 2024-01-15 | Palo Alto | CA | On-site | Product Management,Marketing & Sales |
| Sketchy | Product Marketing Manager | 2024-01-15 | Los Angeles | CA | Remote | Product Management,Marketing & Sales |
| Meta | Product Marketing Manager, Commerce Seller Experience - Shops Ads | 2024-01-14 | San Francisco | CA |  | Product Management,Marketing & Sales |
| Amazon | Product Marketing Manager, Ring Customer Experience Engagement | 2024-01-15 | Hawthorne | CA |  | Product Management,Marketing & Sales |
| Synopsys Inc | Product Solutions Sales Manager - 47532BR | 2024-01-15 | Los Angeles Metropolitan Area | CA |  | Marketing & Sales |
| Synopsys Inc | Product Solutions Sales Manager - 47532BR | 2024-01-15 | Mountain View | CA |  | Marketing & Sales |
| Synopsys Inc | Product Solutions Sales Manager - 47532BR | 2024-01-15 | Pasadena | CA |  | Marketing & Sales |
| Synopsys Inc | Product Solutions Sales Manager - 47532BR | 2024-01-15 | San Diego | CA |  | Marketing & Sales |
| Synopsys Inc | Product Solutions Sales Manager - 47532BR | 2024-01-15 | San Jose | CA |  | Marketing & Sales |
| Abbott | Product Stewardship Manager | 2024-01-14 | Pleasanton | CA |  |  |
| Cohere Health | Product Strategy & Operations Manager | 2024-01-16 | United States | CA | Remote |  |
| Aha! | Product Success Manager (Product management experience required) | 2024-01-15 | Buffalo | NY | Remote | Product Management |
| JPMorgan Chase & Co. | Product User Acceptance Testing Lead - Vice President | 2024-01-16 | Palo Alto | CA |  |  |
| Writer | Product designer | 2024-01-16 | San Francisco Bay Area | CA | Remote | Designers |
| Writer | Product marketing manager | 2024-01-15 | San Francisco Bay Area | CA | Remote | Product Management,Marketing & Sales |
| LEO Pharma | Product/Brand Marketing | 2024-01-15 | Madison | NJ | On-site | Marketing & Sales |
| Onward Search | Production Designer (Kay Art experience) [73572] | 2024-01-16 | Burbank | CA | Hybrid | Designers |
| Fladger Associates | Production Planner | 2024-01-14 | Foster City | CA | On-site | Project Management |
| Atheria Law | Professional Liability Coverage Attorney | 2024-01-15 | San Francisco Bay Area | CA | Hybrid | Legal |
| Certified Mobile Notary Service | Professional Virtual Recruiter | 2024-01-14 | Fresno | CA |  | HR & Recruiting |
| J. Craig Venter Institute | Professor (Synthetic Biology) | 2024-01-16 |  California |  | On-site | Education & Teaching |
| Epsilon | Program Manager 2 | 2024-01-15 | Irvine | CA | On-site | Project Management |
| Epsilon | Program Manager 2 | 2024-01-15 | San Diego | CA | On-site | Project Management |
| Radio Systems Corporation | Programmatic Digital Specialist | 2024-01-14 | United States | CA | Remote |  |
| DJ Construction Company, Inc. | Project Administration | 2024-01-16 | Goshen | IN | On-site |  |
| Ensis Corp | Project Coordinator | 2024-01-14 | Orange County | CA | On-site |  |
| Spin Master | Project Designer (Temp) | 2024-01-16 | Los Angeles | CA | Hybrid | Designers |
| Dewberry | Project Engineer/Project Manager | 2024-01-14 | Long Beach | CA | On-site | Project Management |
| Northrop Grumman | Project Management/Principal Project Management | 2024-01-14 | Redondo Beach | CA |  |  |
| ARI JOGIEL | Project Manager | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Project Management |
| Aditi Consulting | Project Manager | 2024-01-16 | Thousand Oaks | CA |  | Project Management |
| BKF Engineers | Project Manager | 2024-01-16 | Newport Beach | CA | Hybrid | Project Management |
| BKF Engineers | Project Manager | 2024-01-16 | Santa Rosa | CA | Hybrid | Project Management |
| CM Solutions | Project Manager | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | Project Management |
| City of Hope | Project Manager | 2024-01-16 | Irvine | CA |  | Project Management |
| Cupertino Electric, Inc. | Project Manager | 2024-01-14 | San Francisco | CA | On-site | Project Management |
| Epic | Project Manager | 2024-01-16 | Bakersfield | CA | On-site | Project Management |
| Epic | Project Manager | 2024-01-16 | Chula Vista | CA | On-site | Project Management |
| Epic | Project Manager | 2024-01-16 | Fontana | CA | On-site | Project Management |
| Goddard | Project Manager | 2024-01-14 | San Diego | CA | Hybrid | Project Management |
| Granite Construction | Project Manager | 2024-01-16 | San Luis Obispo | CA | On-site | Project Management |
| Granite Construction | Project Manager | 2024-01-16 | Santa Barbara | CA | On-site | Project Management |
| Hitachi Energy | Project Manager | 2024-01-16 | San Jose | CA | Hybrid | Project Management |
| Jamboree Housing Corporation | Project Manager | 2024-01-16 | Irvine | CA | On-site | Project Management |
| MIGSO-PCUBED | Project Manager | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | Project Management |
| MIGSO-PCUBED | Project Manager | 2024-01-14 | Santa Clara County | CA | Hybrid | Project Management |
| Pinnacle Group, Inc. | Project Manager | 2024-01-16 | San Diego | CA | Remote | Project Management |
| SKIDATA USA | Project Manager | 2024-01-16 | Greater Los Angeles | CA | Hybrid | Project Management |
| Tata Consultancy Services | Project Manager | 2024-01-16 | Pleasanton | CA | Hybrid | Project Management |
| The Johnson Group Inc. | Project Manager | 2024-01-16 | Ontario | CA | Hybrid | Project Management |
| TriMark USA | Project Manager | 2024-01-16 | California | CA | On-site | Project Management |
| Wonderful Agency | Project Manager | 2024-01-16 | Los Angeles | CA |  | Project Management |
| System One | Project Manager ( Railway Signaling ) | 2024-01-16 | Los Angeles | CA | On-site | Project Management |
| San Mateo County Community College District | Project Manager (Funded by Measure H) | 2024-01-16 | San Mateo | CA | On-site | Project Management |
| Granite Construction | Project Manager (San Diego) | 2024-01-16 | Carlsbad | CA | On-site | Project Management |
| Qvest.US | Project Manager - Broadcast Transformation | 2024-01-14 | Los Angeles | CA | On-site | Project Management |
| ENTRUST Solutions Group | Project Manager - Electrical Utilities | 2024-01-16 | Auburn | CA | Hybrid | Project Management |
| Allied Universal | Project Manager - Electronic Security Solutions | 2024-01-16 | Santa Ana | CA |  | Project Management |
| ENTRUST Solutions Group | Project Manager - Gas Utilities | 2024-01-16 | Sacramento | CA | Hybrid | Project Management |
| THG | Project Manager - Perricone MD | 2024-01-14 | San Francisco Bay Area | CA | Hybrid | Project Management |
| Granite Construction | Project Manager / Estimator | 2024-01-16 | Palmdale | CA | On-site | Project Management |
| Granite Construction | Project Manager / Estimator | 2024-01-14 | Ventura | CA | On-site | Project Management |
| Oracle | Project Manager 4 - Ops | 2024-01-16 | California | CA | On-site | Project Management |
| Oracle | Project Manager 4 - Ops | 2024-01-16 | Redwood City | CA | On-site | Project Management |
| Facebook | Project Manager IV (Supplier Engagement) | 2024-01-16 | San Francisco Bay Area | CA | Remote | Project Management |
| WSP in the U.S. | Project Manager, Federal Programs | 2024-01-16 | San Diego | CA | On-site | Project Management |
| Tesla | Project Manager, Recruiting Systems | 2024-01-16 | Palo Alto | CA | On-site | Project Management |
| Rivian | Project Manager, Technical Security | 2024-01-16 | Irvine | CA | On-site | Project Management |
| Granite Construction | Project Manager/Estimator | 2024-01-16 | La Mirada | CA | On-site | Project Management |
| Holder Construction | Project Scheduler | 2024-01-14 | San Jose | CA |  |  |
| Atomic Marketing | Promotions Specialist | 2024-01-15 | Alexandria | VA | On-site |  |
| HCA Healthcare | Provider Solutions Specialist | 2024-01-15 | San Jose | CA | On-site |  |
| ClickJobs.io | Provost and Executive Vice President | 2024-01-15 | Conway | AR | Hybrid |  |
| Family Health Centers of San Diego | Psychiatrist | 2024-01-15 | San Diego Metropolitan Area | CA | On-site | Medical & Healthcare |
| iConsultera | Psychiatrist | 2024-01-15 | San Diego County | CA | On-site | Medical & Healthcare |
| Four Seasons Hotels and Resorts | Public Area Attendant | 2024-01-14 | Calistoga | CA | On-site |  |
| O'Melveny & Myers LLP | Public Company Counsel | 2024-01-14 | Newport Beach | CA | Hybrid |  |
| Uber | Public Policy Program Manager, Insurance | 2024-01-16 | New York | NY |  | Project Management |
| Uber | Public Policy Program Manager, Insurance | 2024-01-16 | San Francisco | CA |  | Project Management |
| Uber | Public Policy Program Manager, Insurance | 2024-01-16 | Washington | WA |  | Project Management |
| Addie Staffing (Addy Global Solutions) | Python Developer | 2024-01-16 | Los Angeles | CA | On-site | Software Engineering |
| Storm4 | Python Developer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Steneral Consulting | Python Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Tata Consultancy Services | Python Full Stack Develope | 2024-01-16 | San Jose | CA | Hybrid | Software Engineering |
| Tata Consultancy Services | QA Automation Engineer | 2024-01-16 | Cupertino | CA | On-site | Software Engineering |
| Brightpath Associates LLC | Quality Assurance Director - Food Products / Food Manufacturing / Food Packaging | 2024-01-15 | Montgomery City | MO | On-site | Software Engineering |
| Ring | Quality Assurance Engineer I, Ring | 2024-01-14 | Hawthorne | CA |  | Software Engineering |
| Quest Global | Quality Engineer - From Aerospace / Aviation Industry | 2024-01-14 | Sun Valley | CA | On-site |  |
| Tesla | Quality Engineer, Powertrain Battery (Night Shift) | 2024-01-14 | Fremont | CA | On-site |  |
| AeroVironment | Quality Engineer, Sr. | 2024-01-14 | Simi Valley | CA | Hybrid |  |
| Algo Capital Group | Quantitative Developer | 2024-01-15 | Chicago | IL | Hybrid | Software Engineering |
| Santa Clara University | Quarterly Adjunct Lecturer - Mathematics and Computer Science Department (Pool) 2023-2024 | 2024-01-16 | Santa Clara | CA | On-site | Education & Teaching |
| Santa Clara University | Quarterly Adjunct Lecturer - Political Science (Pool ad for 2023-24 Academic Year) | 2024-01-16 | Santa Clara | CA | On-site | Education & Teaching |
| Santa Clara University | Quarterly Adjunct Lecturer in Arabic (POOL) 2023 - 2024 | 2024-01-16 | Santa Clara | CA | On-site | Education & Teaching |
| Santa Clara University | Quarterly Adjunct Lecturer in History (Pool) | 2024-01-16 | Santa Clara | CA | On-site | Education & Teaching |
| Santa Clara University | Quarterly Adjunct Lecturer of Classics (Pool) | 2024-01-16 | Santa Clara | CA | On-site | Education & Teaching |
| Women's Care  | REI Physician in Southern California | 2024-01-14 | Los Angeles Metropolitan Area | CA | On-site | Medical & Healthcare |
| Western Exterminator Company | RESI OUTSIDE SALES PROF I | 2024-01-16 | Palmdale | CA | On-site | Marketing & Sales |
| Advanced Technology Search | RF Front End Module Design Engineer; Boston MA Area/San Jose, CA/Southern CA | 2024-01-14 | San Jose | CA | On-site |  |
| Keck Medicine of USC | RN Clinical (OR) - Surgery - Full Time 12 Hour Evenings (Non-Exempt) (Union) | 2024-01-15 | Los Angeles | CA | On-site |  |
| Keck Medicine of USC | RN Clinical - 8W Medical ICU - Per Diem 12 Hour Days (Non-Exempt) (Union) | 2024-01-15 | Los Angeles | CA | On-site |  |
| Keck Medicine of USC | RN Clinical - Pre- Post Op HC3 - Full Time 12 Hour Rotating Shift (Non-Exempt) (Union) | 2024-01-15 | Los Angeles | CA | On-site |  |
| Keck Medicine of USC | RN Clinical - Pre/Post OP - Full Time 10 Hour Rotating Days (Non-Exempt) (Union) | 2024-01-15 | Los Angeles | CA | On-site |  |
| Northern Arizona Healthcare | RN Educator - WIC | 2024-01-15 | Flagstaff | AZ | On-site | Education & Teaching |
| Cadence Design Systems | RTL to GDSII Product Engineer | 2024-01-14 | San Jose | CA | Hybrid |  |
| The Edge Group | Rail Designer | 2024-01-14 | United States | CA | Remote | Designers |
| Kind Humanoid | Rapid Prototyping Mechanical Engineer and Jack of All Trades | 2024-01-14 | Palo Alto | CA | On-site |  |
| MARSHALL TECHNOLOGIES INC | React/Python developer | 2024-01-14 | Santa Clara | CA | On-site | Software Engineering |
| SAIC | Real Time Software Developer | 2024-01-16 | California | CA | Remote | Software Engineering |
| H&R Block | Receptionist | 2024-01-16 | Novato | CA | On-site |  |
| H&R Block | Receptionist | 2024-01-16 | San Diego | CA | On-site |  |
| ADR Services, Inc. | Receptionist / Assistant Case Manager | 2024-01-14 | Los Angeles | CA | On-site |  |
| Telecare Corporation | Recovery Specialist I (On Call) - Mental Health 154 | 2024-01-14 | Castro Valley | CA | On-site |  |
| Brilliant Corners | Recruiter | 2024-01-16 | Los Angeles | CA | Hybrid | HR & Recruiting |
| CommonSpirit Health | Recruiter | 2024-01-16 | Rancho Cordova | CA |  | HR & Recruiting |
| Community Veterinary Partners | Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Community Veterinary Partners | Recruiter | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| Frazer Jones | Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Gotion Inc. | Recruiter | 2024-01-16 | Fremont | CA | Hybrid | HR & Recruiting |
| National Health Foundation | Recruiter | 2024-01-16 | Los Angeles | CA | On-site | HR & Recruiting |
| The Hiatt Group | Recruiter | 2024-01-16 | Orange County | CA | On-site | HR & Recruiting |
| Trina Solar | Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| White Cap | Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Anyscale | Recruiter (GTM) | 2024-01-16 | San Francisco | CA | On-site | HR & Recruiting |
| AutoNation | Recruiter (Retail Operations) | 2024-01-16 | Greater Los Angeles | CA | On-site | HR & Recruiting |
| Aditi Consulting | Recruiter - I | 2024-01-16 | San Francisco | CA |  | HR & Recruiting |
| SPECTRAFORCE | Recruiter I (US - Contract) | 2024-01-16 | Verdi | CA | On-site | HR & Recruiting |
| Nikkiso Clean Energy & Industrial Gases | Recruiter II | 2024-01-16 | Irvine | CA | On-site | HR & Recruiting |
| Maxim Healthcare Services (Home Care) | Recruiter Trainee | 2024-01-16 | Monterey | CA | On-site | HR & Recruiting |
| Maxim Healthcare Staffing | Recruiter Trainee - Staffing | 2024-01-16 | Emeryville | CA | On-site | HR & Recruiting |
| Onward Search | Recruiter [73565] | 2024-01-14 | San Francisco Bay Area | CA | Remote | HR & Recruiting |
| Scale AI | Recruiter, High Volume | 2024-01-16 | San Francisco | CA |  | HR & Recruiting |
| Microsoft | Recruiter, Latin America | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Anthropic | Recruiting Analytics Lead | 2024-01-16 | San Francisco | CA | Hybrid | Data Science |
| Anduril Industries | Recruiting Coordinator (Contractor) | 2024-01-14 | Costa Mesa | CA | On-site |  |
| Career Group Companies | Recruitment Specialist | 2024-01-16 | City of Industry | CA | On-site | HR & Recruiting |
| Advantage Solutions | Recruteur bilingue a distance, teletravail-Bilingual recruiter remote | 2024-01-14 | California | CA | Remote | HR & Recruiting |
| Golden 1 Credit Union | Redding Branch - Member Service Specialist II | 2024-01-14 | Redding | CA | On-site |  |
| Airgas | Region Recruiter | 2024-01-16 | Long Beach | CA | On-site | HR & Recruiting |
| KARL STORZ Endoscopy-America, Inc. | Region Sales Manager, Surgical - Rocky Mountains | 2024-01-14 | El Segundo | CA | Remote | Marketing & Sales |
| Allied Universal | Regional HR Representative - Bay Area | 2024-01-14 | Oakland | CA |  | HR & Recruiting |
| Local Infusion | Regional Manager | 2024-01-15 | Concord | NH | On-site |  |
| Local Infusion | Regional Manager | 2024-01-15 | Franklin | NH | On-site |  |
| Local Infusion | Regional Manager | 2024-01-15 | Portland | ME | On-site |  |
| Champions Group Holdings | Regional Marketing Manager | 2024-01-14 | Brea | CA | On-site | Marketing & Sales |
| Allied Universal | Regional Recruiter - Healthcare | 2024-01-16 | San Francisco | CA |  | HR & Recruiting |
| Atria Wealth Solutions | Regional Recruiter / Business Development | 2024-01-16 | San Diego | CA | Hybrid | HR & Recruiting |
| Zenlayer | Regional Sales Director - Bay Area | 2024-01-14 | San Francisco Bay Area | CA | Remote | Marketing & Sales |
| McKesson | Regional Sales Director - Healthcare Tech/SaaS (Kansas City based) | 2024-01-15 | Overland Park | KS | On-site | Marketing & Sales |
| Workiva | Regional Sales Director - SLEd - States (West Region) | 2024-01-15 | San Diego | CA | Hybrid | Marketing & Sales |
| Workiva | Regional Sales Director - SLEd - States (West Region) | 2024-01-15 | San Francisco | CA | Hybrid | Marketing & Sales |
| Camblin Steel Service, Inc. | Regional Sales Manager | 2024-01-14 | Rancho Cucamonga | CA | On-site | Marketing & Sales |
| Sunvou Medical Electronics Co., Ltd. | Regional Sales Manager | 2024-01-14 | San Francisco | CA | Hybrid | Marketing & Sales |
| Splunk | Regional Sales Manager (MFG - West) | 2024-01-15 | California | CA | Remote | Marketing & Sales |
| The Wellington Group Inc. | Regional Sr. HR Manager - San Leandro (must have experience in unionized environments)-Relocation Option | 2024-01-14 | San Leandro | CA | Hybrid | HR & Recruiting |
| Veolia North America | Regional Vice Presidents - Carolinas/TN, & VA/WV/OH | 2024-01-15 | Clintwood | VA | On-site |  |
| McLaren Health Care | Registered Nurse Educator Patient Care Services | 2024-01-15 | Macomb | MI | On-site | Medical & Healthcare,Education & Teaching |
| ecoATM Gazelle | Regulatory Operations Coordinator | 2024-01-16 | San Diego | CA | On-site |  |
| JPMorgan Chase & Co. | Relationship Banker (South Division) - Carolina Square - Chapel Hill, NC | 2024-01-16 | Chapel Hill | NC |  |  |
| Regions Bank | Relationship Banker II (North Decatur Square Branch) | 2024-01-16 | Decatur | GA |  |  |
| Regions Bank | Relationship Banker II (Rosemary Square Branch) | 2024-01-16 | West Palm Beach | FL |  |  |
| JPMorgan Chase & Co. | Relationship Banker- Journal Square -Jersey City NJ | 2024-01-16 | Jersey City | NJ |  |  |
| Capital One | Relationship Manager, Business Cards & Payments (San Francisco Bay Area) | 2024-01-16 | Oakland | CA |  | Finance & Accounting |
| Capital One | Relationship Manager, Business Cards & Payments (San Francisco Bay Area) | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| Capital One | Relationship Manager, Business Cards & Payments - Acquisitions (Los Angeles - Burbank) | 2024-01-16 | Los Angeles | CA |  | Finance & Accounting |
| Capital One | Relationship Manager, Customer Growth - Business Cards & Payments (Orange County & LA) | 2024-01-16 | Newport Beach | CA |  | Finance & Accounting |
| Power Personnel | Remote - Healthcare Recruiter | 2024-01-16 | California | CA | Remote | HR & Recruiting |
| Power Personnel | Remote - Healthcare Recruiter | 2024-01-14 | California | CA | Remote | HR & Recruiting |
| American Express Global Business Travel | Remote Corporate Travel Consultant Servicing Technology, Banking and Consulting Companies (Sabre) | 2024-01-16 | United States | CA | Remote |  |
| Blazer Jobs | Remote English Language Art Teacher | 2024-01-15 | United States | CA | Remote | Education & Teaching |
| Blazer Jobs | Remote Math Teacher | 2024-01-15 | United States | CA | Remote | Education & Teaching |
| Miller Family Agency | Remote Sales Agent | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Talascend - Where Opportunities Await. | Remote Transition Compensation Analyst | 2024-01-14 | United States | CA | Remote | Finance & Accounting |
| Avis Budget Group | Rental Sales Agent - FT | 2024-01-14 | San Jose | CA | On-site | Marketing & Sales |
| CEA Consulting | Research Associate | 2024-01-14 | San Francisco Bay Area | CA | Hybrid |  |
| Cedars-Sinai | Research Associate III in Epidemiology/Population Health, Datta Lab | 2024-01-14 | Los Angeles | CA | On-site |  |
| OpenAI | Research Engineer, Privacy | 2024-01-16 | San Francisco | CA |  |  |
| Bright Machines | Research Perception Scientist, Computer Vision and Machine Learning | 2024-01-14 | San Francisco | CA | On-site | Data Science,Software Engineering |
| TikTok | Research Scientist, Code Generation | 2024-01-14 | San Jose | CA |  | Data Science |
| Adobe | Research Scientist/Engineer | 2024-01-14 | San Jose | CA |  | Data Science |
| ByteDance | Research scientist in Large Language Model | 2024-01-14 | San Jose | CA |  | Data Science |
| Anser Advisory | Resident Engineer/Project Manager | 2024-01-14 | Riverside | CA | On-site | Project Management |
| Bullis Charter School | Resource Specialist (Special Education Teacher) | 2024-01-15 | Los Altos | CA | On-site | Education & Teaching |
| CalWest Educators Placement | Resource Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| Bath & Body Works | Retail Assistant Manager-THE SHOPS AT VALLEY SQUARE | 2024-01-16 | Warrington | PA | On-site |  |
| Skechers | Retail Assistant Store Manager - San Jose | 2024-01-14 | San Jose | CA | Hybrid |  |
| Aesop | Retail Consultant - Bellevue Square - Full Time | 2024-01-16 | Seattle | WA | On-site |  |
| Macy's | Retail Cosmetics Counter Manager - Estee Lauder, Lenox Square - Full Time | 2024-01-16 | Atlanta | GA | On-site |  |
| Macy's | Retail Cosmetics Sales Beauty Advisor - MAC, Washington Square - Part Time | 2024-01-16 | Tigard | OR | On-site | Marketing & Sales |
| Macy's | Retail Fragrances Sales Support Associate - Dior Fragrances, Northridge Fashion Center - Full Time | 2024-01-14 |  California |  | On-site | Marketing & Sales |
| Bath & Body Works | Retail Key Holder-THE SHOPS AT VALLEY SQUARE | 2024-01-16 | Warrington | PA | On-site |  |
| adidas | Retail Lead - Melrose, 6578, West Hollywood, CA | 2024-01-14 | West Hollywood | CA | On-site |  |
| Skechers | Retail Product Specialist - Glenn Square (Anchorage) | 2024-01-16 | Anchorage | AK | Hybrid |  |
| Nordstrom | Retail Sales - Accessories - Scottsdale Fashion Square | 2024-01-16 | Scottsdale | AZ | On-site | Marketing & Sales |
| Nordstrom | Retail Sales - Women's Apparel - Scottsdale Fashion Square | 2024-01-16 | Scottsdale | AZ | On-site | Marketing & Sales |
| Old Navy | Retail Sales Associate (Early Morning) - Regency Square | 2024-01-16 | Brandon | FL | On-site | Marketing & Sales |
| Bonobos | Retail Sales Associate - Part Time | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Old Navy | Retail Sales Associate, Full Time (Customer Operations) - Regency Square | 2024-01-16 | Brandon | FL | On-site | Marketing & Sales |
| Macy's | Retail Sales Associate, Santee Trolley - Full Time | 2024-01-14 | Santee | CA | On-site | Marketing & Sales |
| Kellanova | Retail Sales Lead | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Fabletics | Retail Sales Lead, Fabletics (Bellevue Square - Bellevue, WA) | 2024-01-16 | Bellevue | WA | On-site | Marketing & Sales |
| Bridgestone Retail Operations, LLC | Retail Salesperson | 2024-01-14 | Laguna Hills | CA | On-site | Marketing & Sales |
| Skechers | Retail Store Manager - DUNNING SQUARE | 2024-01-16 | Chicago | IL | On-site |  |
| adidas | Retail Supervisor - Melrose, 6578, West Hollywood, CA | 2024-01-14 | West Hollywood | CA | On-site |  |
| Crocs | Retail, Sales Associate | 2024-01-14 | Santa Ana | CA | On-site | Marketing & Sales |
| Ellit Groups | Revenue Cycle Project Manager | 2024-01-16 | California | CA | Hybrid | Project Management,Finance & Accounting |
| Burns Engineering, Inc. | Revit Designer | 2024-01-16 | Los Angeles | CA | Hybrid | Designers |
| Clearstory—Wayfinding and Placemaking | Revit/AutoCAD Designer | 2024-01-16 | San Francisco | CA | Hybrid | Designers |
| Wellvana | Risk Adjustment Coding Educator | 2024-01-15 | Orlando | FL | On-site | Education & Teaching |
| Anduril Industries | Robotics Software Engineer, Land Systems | 2024-01-14 | Costa Mesa | CA | On-site | Data Science,Software Engineering |
| Anduril Industries | Robotics Software Engineer, Tower | 2024-01-14 | Costa Mesa | CA | Hybrid | Data Science,Software Engineering |
| Anduril Industries | Robotics Software Engineering Intern | 2024-01-14 | Costa Mesa | CA | On-site | Data Science,Software Engineering |
| Aha! | Ruby on Rails Engineer | 2024-01-15 | Buffalo | NY | Remote |  |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Alhambra | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Cerritos | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Chula Vista | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Fairfield | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Inglewood | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Lake Elsinore | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Redding | CA | On-site | Marketing & Sales |
| Dollar Tree Stores | SALES FLOOR ASSOCIATE | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| Accenture | SAP ABAP Cloud for S/4HANA Developer | 2024-01-14 | Los Angeles Metropolitan Area | CA |  | Software Engineering |
| Accenture | SAP ABAP Cloud for S/4HANA Developer | 2024-01-14 | Mountain View | CA |  | Software Engineering |
| Accenture | SAP ABAP Cloud for S/4HANA Developer | 2024-01-14 | Sacramento | CA |  | Software Engineering |
| Accenture | SAP ABAP Cloud for S/4HANA Developer | 2024-01-14 | San Diego | CA |  | Software Engineering |
| Accenture | SAP ABAP Cloud for S/4HANA Developer | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Applexus Technologies | SAP Data Migration Architect | 2024-01-14 | United States | CA | Remote |  |
| FinTech LLC | SAP IBP Engineer | 2024-01-14 | Santa Clara | CA | On-site |  |
| Cognitus | SAP Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| SAP | SAP iXP Intern - UX Research Intern | 2024-01-15 | Palo Alto | CA | On-site | Designers |
| McDonald's | SAS Data Programmer, Global Pricing | 2024-01-15 | Chicago | IL | On-site | Finance & Accounting,Software Engineering |
| California Department of State Hospitals | SEAMER | 2024-01-15 | Napa | CA | On-site |  |
| Acadaca | SEO & Content Specialist (REMOTE) | 2024-01-14 | United States | CA | Remote |  |
| Teach For America | SMD, Product Management Lead - Program Technologies | 2024-01-15 | United States | CA | Remote | Product Management |
| Ria Money Transfer | SQL Developer (Buena Park, CA) | 2024-01-14 | Buena Park | CA | On-site | Data Engineering,Software Engineering |
| Leaf Home | SRA: Event Marketer | 2024-01-14 | Windsor | CA | On-site |  |
| HPE Aruba Networking | SSE Consulting Systems Engineer | 2024-01-14 | San Jose | CA | On-site | Software Engineering |
| American Express Global Business Travel | Sabre Trained Travel Consultant | 2024-01-16 | United States | CA | Remote |  |
| Centennial | Sales & Marketing Coordinator | 2024-01-14 |  California |  | On-site | Marketing & Sales |
| Synopsys Inc | Sales Account Manager - 43922BR | 2024-01-14 | Folsom | CA |  | Marketing & Sales |
| Synopsys Inc | Sales Account Manager - 43922BR | 2024-01-14 | Mountain View | CA |  | Marketing & Sales |
| Techtronic Industries - TTI | Sales And Marketing Representative | 2024-01-14 | Auburn | CA | On-site | Marketing & Sales |
| Techtronic Industries - TTI | Sales And Marketing Representative | 2024-01-14 | Greater Sacramento | CA | On-site | Marketing & Sales |
| Techtronic Industries - TTI | Sales And Marketing Representative | 2024-01-14 | Roseville | CA | On-site | Marketing & Sales |
| Techtronic Industries - TTI | Sales And Marketing Representative | 2024-01-14 | San Ramon | CA | On-site | Marketing & Sales |
| Techtronic Industries - TTI | Sales And Marketing Representative | 2024-01-14 | Santa Clara | CA | On-site | Marketing & Sales |
| Techtronic Industries - TTI | Sales And Marketing Representative | 2024-01-14 | Woodland | CA | On-site | Marketing & Sales |
| The Hiersche Agency | Sales And Marketing Specialist | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| EXPRESS | Sales Associate | 2024-01-14 | Milpitas | CA | On-site | Marketing & Sales |
| EXPRESS | Sales Associate | 2024-01-14 | Montclair | CA |  | Marketing & Sales |
| Petco | Sales Associate | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| Petco | Sales Associate | 2024-01-14 | San Francisco | CA | On-site | Marketing & Sales |
| EXPRESS | Sales Associate - California | 2024-01-14 | Gilroy | CA |  | Marketing & Sales |
| EXPRESS | Sales Associate - California | 2024-01-14 | Ontario | CA |  | Marketing & Sales |
| EXPRESS | Sales Associate - California | 2024-01-14 | Temecula | CA |  | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Kay Jewelers - Hanford Mall - Hanford, CA | 2024-01-14 | Hanford | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Kay Jewelers - Sunvalley Shopping Center - Concord, CA | 2024-01-14 | Concord | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Kay Jewelers - Westfield Culver City - Culver City, CA | 2024-01-14 | Culver City | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Kay Jewelers Outlet - Gilroy Premium Outlets - Gilroy, CA | 2024-01-14 | Gilroy | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Kay Jewelers Outlet - Great Mall of the Bay Area - Milpitas, CA | 2024-01-14 | Greater Sacramento | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Kay Jewelers Outlet - San Francisco Premium Outlets - Livermore, CA | 2024-01-14 | Livermore | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Zales - Sunvalley Mall - Concord, CA | 2024-01-14 | Concord | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Zales - Westfield Galleria at Roseville - Roseville, CA | 2024-01-14 | Roseville | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Zales Outlet - Citadel Outlets - Commerce, CA | 2024-01-14 | Commerce | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Zales Outlet - San Francisco Premium Outlets - Livermore, CA | 2024-01-14 | San Francisco | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Consultant - Zales Outlet - Vacaville Premium Outlets - Vacaville, CA | 2024-01-14 | Vacaville | CA | On-site | Marketing & Sales |
| Signet Jewelers | Sales Associate / Jewelry Specialist - Jared - Arden Way/Point West Center - Sacramento, CA | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| EXPRESS | Sales Associate Keyholder | 2024-01-14 | Long Beach | CA |  | Marketing & Sales |
| EXPRESS | Sales Associate Keyholder – | 2024-01-14 | Long Beach | CA |  | Marketing & Sales |
| Instacart | Sales Associate, Emerging | 2024-01-16 | Los Angeles | CA | Remote | Marketing & Sales |
| American Express Global Business Travel | Sales Associate, SME | 2024-01-16 | United States | CA | Remote | Marketing & Sales |
| Mapbox | Sales Compensation Manager | 2024-01-15 | United States | CA | Remote | Finance & Accounting,Marketing & Sales |
| CarMax | Sales Consultant | 2024-01-14 | Palmdale | CA | On-site | Marketing & Sales |
| Genlabs Corp | Sales Consultant | 2024-01-14 | California | CA | Remote | Marketing & Sales |
| Bridge Home Health & Hospice | Sales Consultant- Hospice- Full Time- San Bernardino | 2024-01-14 | Ontario | CA | On-site | Marketing & Sales |
| ARCH Preneurs | Sales Development Representative | 2024-01-14 | Greater Sacramento | CA | On-site | Finance & Accounting,Marketing & Sales |
| ARCH Preneurs | Sales Development Representative | 2024-01-14 | Milpitas | CA | On-site | Finance & Accounting,Marketing & Sales |
| AFC Industries | Sales Director | 2024-01-15 | California | CA | Remote | Marketing & Sales |
| Atria Senior Living | Sales Director | 2024-01-14 | Thousand Oaks | CA | On-site | Marketing & Sales |
| Avie.ai | Sales Director | 2024-01-15 | San Francisco Bay Area |  | Remote | Marketing & Sales |
| DealerSync | Sales Director | 2024-01-14 | Long Beach | CA | On-site | Marketing & Sales |
| WorkatHome-JobBoard | Sales Director - Cloud Modernization/Migration - Midwest | 2024-01-15 | Chicago | IL |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | Irvine | CA |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | Los Angeles Metropolitan Area | CA |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | Mountain View | CA |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | Sacramento | CA |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | San Diego | CA |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | San Francisco | CA |  | Software Engineering,Marketing & Sales |
| Accenture | Sales Director - Software Engineering | 2024-01-14 | Walnut Creek | CA |  | Software Engineering,Marketing & Sales |
| City Lifestyle | Sales Director [Owner/Operator] | 2024-01-14 | Burlingame | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director [Owner/Operator] | 2024-01-14 | Cupertino | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director [Owner/Operator] | 2024-01-14 | Monterey | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director [Owner/Operator] | 2024-01-14 | Murrieta | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director [Owner/Operator] | 2024-01-14 | Oakley | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director [Owner/Operator] | 2024-01-14 | West Covina | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director {Owner/Operator} | 2024-01-14 | Rancho Santa Margarita | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director/CEO | 2024-01-14 | Folsom | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director/CEO | 2024-01-14 | Roseville | CA | On-site | Marketing & Sales |
| City Lifestyle | Sales Director/CEO | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| Brevo | Sales Enablement Manager, North America | 2024-01-15 | Austin | TX | Hybrid | Marketing & Sales |
| JPMorgan Chase & Co. | Sales Enablement Product Delivery Manager - Payments - Vice President | 2024-01-15 | Tampa | FL |  | Marketing & Sales |
| Air Energy Group LLC | Sales Engineer | 2024-01-14 | California | CA | On-site | Marketing & Sales |
| Kixie | Sales Engineer | 2024-01-14 | Santa Monica | CA | On-site | Marketing & Sales |
| HiBob | Sales Engineer - California | 2024-01-14 | California | CA | Remote | Marketing & Sales |
| Datasite | Sales Executive | 2024-01-14 | San Francisco Bay Area | CA | On-site | Marketing & Sales |
| LIXIL | Sales Leader, Wholesale Plumber Engineer | 2024-01-14 | Los Angeles | CA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-15 | Austin | TX | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-15 | Blacksburg | VA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-15 | Boise Metropolitan Area |  | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-15 | New York City Metropolitan Area |  | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-15 | Visalia | CA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-14 | Oxnard | CA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-14 | Truckee | CA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-14 | Vallejo | CA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-14 | Visalia | CA | Remote | Marketing & Sales |
| J. Galt | Sales Manager | 2024-01-14 | Yuba City | CA | Remote | Marketing & Sales |
| Walker Lovell | Sales Manager - West Coast | 2024-01-14 | California | CA | Remote | Marketing & Sales |
| Brighton Management | Sales Manager Homewood Suites, Carlsbad | 2024-01-14 | Carlsbad | CA | On-site | Marketing & Sales |
| SC Johnson Lifestyle Brands | Sales Planning/Customer Development Manager | 2024-01-14 | San Francisco | CA |  | Marketing & Sales |
| Host Healthcare, Inc. | Sales Recruiter | 2024-01-16 | San Diego | CA | Remote | Marketing & Sales,HR & Recruiting |
| Crown Equipment Corporation | Sales Representative | 2024-01-14 | West Sacramento | CA | On-site | Marketing & Sales |
| Heartland | Sales Representative - Payroll/ HCM | 2024-01-15 | Fresno County | CA | Hybrid | HR & Recruiting,Marketing & Sales |
| Heartland | Sales Representative - Payroll/ HCM | 2024-01-15 | Rancho Cucamonga | CA | Hybrid | HR & Recruiting,Marketing & Sales |
| Heartland | Sales Representative - Payroll/ HCM | 2024-01-15 | Riverside County | CA | Hybrid | HR & Recruiting,Marketing & Sales |
| Heartland | Sales Representative - Payroll/ HCM | 2024-01-15 | Sacramento | CA | Hybrid | HR & Recruiting,Marketing & Sales |
| CoStar Group | Sales Representative, CoStar Data & Analytics - San Francisco, CA | 2024-01-14 | San Francisco | CA | On-site | Data Science,Marketing & Sales |
| Southwestern Consulting | Sales and Leadership Coach | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| A10 Networks, Inc | Sales and Partner Enablement Director | 2024-01-15 | San Jose | CA | Hybrid | Marketing & Sales |
| Embraer | Salesforce Architect | 2024-01-15 | Melbourne | FL | Remote |  |
| Quantum World Technologies Inc. | Salesforce Data Cloud Engineer CDP Space(C2C & W2) | 2024-01-14 | San Mateo | CA | Hybrid | Software Engineering |
| hackajob | Salesforce Developer | 2024-01-15 | New York | NY | Hybrid | Software Engineering |
| Outcome Logix ( A Tech 50 Finalist company 2022, by Pittsburgh Technology Council ) | Salesforce Developer with experience in Migration to Mulesoft _JOBID299 | 2024-01-14 | United States | CA | Remote | Software Engineering |
| R Systems | Salesforce PSS Business Analyst (Public Sector Solution) | 2024-01-14 | Sacramento | CA | Remote | Finance & Accounting,Data Science |
| America Needs You | Salesforce and Data Evaluation Director | 2024-01-15 | Chicago | IL | Hybrid |  |
| America Needs You | Salesforce and Data Evaluation Director | 2024-01-15 | New York City Metropolitan Area |  | Hybrid |  |
| Toast | San Francisco, CA Territory Account Executive | 2024-01-15 | San Francisco | CA | Hybrid | Marketing & Sales |
| Fusion Academy | Science Instructor | 2024-01-15 | Santa Barbara | CA | On-site | Education & Teaching |
| Envision Education | Science Teacher | 2024-01-16 | Hayward | CA | On-site | Education & Teaching |
| Fusion Academy | Science Teacher | 2024-01-15 | San Rafael | CA | On-site | Education & Teaching |
| Fusion Academy | Science Teacher | 2024-01-14 | San Rafael | CA | On-site | Education & Teaching |
| KIPP Public Schools Northern California | Science Teacher | 2024-01-16 | San Francisco Bay Area | CA | On-site | Education & Teaching |
| KIPP SoCal Public Schools | Science Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| Carney, Sandoe & Associates | Science and Technology Teacher | 2024-01-15 | Los Angeles Metropolitan Area | CA | On-site | Education & Teaching |
| AbbVie | Scientist I, QTAS - Bioinformatics | 2024-01-14 | South San Francisco | CA |  | Data Science |
| 23andMe | Scientist II, Computational Biology - Target Discovery | 2024-01-16 | South San Francisco | CA | Hybrid | Data Science |
| USRA | Scientist, Data, Environmental Data Science | 2024-01-14 | Mountain View | CA | Hybrid | Data Science |
| Clevertech | Search Engine Optimization Specialist | 2024-01-14 | United States | CA | Remote |  |
| Luminize Marketing | Search Engine Optimization Specialist | 2024-01-14 | San Diego | CA | On-site |  |
| TikTok | Search Product & Operations Team Leader - USDS | 2024-01-16 | Mountain View | CA |  |  |
| Victoria’s Secret & Co. | Seasonal Associate-Broadway Square Mall | 2024-01-16 | Tyler | TX | On-site |  |
| Victoria’s Secret & Co. | Seasonal Associate-Penn Square Mall VS | 2024-01-16 | Oklahoma City | OK | On-site |  |
| NBCUniversal | Security Director - Local Owned Stations (Bay Area) | 2024-01-15 | San Jose | CA |  |  |
| Equitable | Security Engineer | 2024-01-15 | Syracuse | NY | On-site | Software Engineering |
| SPECTRAFORCE | Security Engineer - Insider Threat Detection and Response | 2024-01-16 | San Francisco | CA | Remote | Software Engineering |
| Prosum | Security Engineer II - Hospital | 2024-01-15 | Los Angeles | CA | On-site | Software Engineering |
| LTK (formerly rewardStyle & LIKEtoKNOW.it) | Security Engineer, Threat and Vulnerability Management | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| FieldLink | Security Field Engineer | 2024-01-14 | Anaheim | CA | On-site |  |
| Microsoft | Security Sales Specialist | 2024-01-15 | Los Angeles | CA | Hybrid | Marketing & Sales |
| Victoria’s Secret & Co. | Selling Associate-Castleton Square | 2024-01-16 | Indianapolis | IN | On-site |  |
| Gainwell Technologies | Senior .NET C# Developer | 2024-01-14 | Roseville | CA | Hybrid | Software Engineering |
| Gainwell Technologies | Senior .NET Developer | 2024-01-14 | Roseville | CA | Hybrid | Software Engineering |
| insitro | Senior / Staff Research Engineer - LLM Tools | 2024-01-14 | South San Francisco | CA | Hybrid | Data Science,Software Engineering |
| NVIDIA | Senior 2D Graphics System Software Engineer | 2024-01-14 | Santa Clara | CA |  | Software Engineering |
| Gather | Senior AI/Machine Learning Engineer | 2024-01-16 | San Francisco Bay Area | CA | On-site | Data Science,Software Engineering,Data Engineering |
| G-P | Senior AR and Product PR Manager | 2024-01-16 | United States | CA | Remote |  |
| WebMD | Senior Account Executive | 2024-01-15 | Los Angeles | CA | Hybrid | Marketing & Sales |
| Manhattan Associates | Senior Account Manager, Enterprise Software Sales | 2024-01-15 | Atlanta | GA | Hybrid | Software Engineering,Marketing & Sales |
| Edelman | Senior Account Supervisor, Employee Experience | 2024-01-14 | San Francisco | CA | Hybrid |  |
| Instacart | Senior Analyst, Measurement Science | 2024-01-16 | San Francisco | CA | Remote |  |
| Instacart | Senior Analyst, Measurement Science | 2024-01-16 | United States | CA | Remote |  |
| SEPHORA | Senior Analyst, Site Testing & Optimization | 2024-01-14 | California | CA |  |  |
| Atlassian | Senior Analytics Engineer | 2024-01-14 | San Francisco | CA | Remote | Data Science |
| Privacy.com | Senior Analytics Engineer | 2024-01-14 | United States | CA | Remote | Data Science |
| Wellth | Senior Analytics Engineer | 2024-01-15 | Marina del Rey | CA | Remote | Data Science |
| Harnham | Senior Analytics Manager | 2024-01-15 | San Francisco Bay Area |  | Hybrid | Data Science |
| Hornblower Cruises and Events | Senior Android Engineer | 2024-01-15 | Westlake Village | CA | On-site |  |
| Uber | Senior Applied Scientist - Marketplace Pricing/Incentives | 2024-01-16 | New York | NY |  | Finance & Accounting |
| Kleinfelder | Senior Archaeologist and Project Manager | 2024-01-16 | Solano County | CA | Hybrid | Project Management |
| Capital One | Senior Associate - UX/UI (In Person Experiences) | 2024-01-16 | San Francisco | CA |  | Designers |
| AGG Legal Staffing | Senior Attorney | 2024-01-16 | Culver City | CA | On-site | Legal |
| TikTok | Senior Backend Software Engineer, TikTok MultiMedia Data Platform | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Hewlett Packard Enterprise | Senior Build & Release Engineer | 2024-01-14 | San Francisco | CA | Hybrid |  |
| Uber | Senior Business Development Representative (Growth Verticals), Uber for Business | 2024-01-16 | New York | NY |  | Marketing & Sales,Finance & Accounting |
| Kin Insurance | Senior Business Intelligence Analyst | 2024-01-15 | Chicago | IL |  | Finance & Accounting,Data Science |
| Luxoft | Senior C++ Developer | 2024-01-15 | New York | NY | On-site | Software Engineering |
| Johnson & Johnson | Senior Capital Sales Manager, MONARCH (West) | 2024-01-15 | Los Angeles | CA | On-site | Marketing & Sales |
| Johnson & Johnson | Senior Capital Sales Manager, MONARCH (West) | 2024-01-15 | San Francisco | CA | On-site | Marketing & Sales |
| Impact Partners Group Inc. Executive Search | Senior Category Management Analyst | 2024-01-14 | San Francisco | CA | On-site |  |
| Alibaba Group | Senior Category Manager | 2024-01-14 | Sunnyvale | CA |  |  |
| Blizzard Entertainment | Senior Class Designer - Diablo IV | 2024-01-16 | Irvine | CA | On-site | Designers |
| The Jonus Group | Senior Commercial Insurance Account Manager | 2024-01-15 | Temecula | CA | On-site | Marketing & Sales |
| Solidigm | Senior Compensation Analyst/Compensation Consultant | 2024-01-15 | Rancho Cordova | CA | On-site | Finance & Accounting |
| Riot Games | Senior Compensation Partner | 2024-01-16 | Los Angeles | CA |  | Finance & Accounting |
| NVIDIA | Senior Compiler Performance Test Engineer | 2024-01-15 | Santa Clara | CA |  |  |
| C.SEC - An Executive Search Firm | Senior Construction Project Manager - K-14 | 2024-01-16 | San Diego | CA | Hybrid | Project Management |
| C.SEC - An Executive Search Firm | Senior Construction Project Manager - TI | 2024-01-16 | San Diego | CA | Hybrid | Project Management |
| Guidehouse | Senior Consultant – State and Local Government, Strategy– Campus 2024 | 2024-01-14 | Los Angeles | CA | On-site |  |
| FTI Consulting | Senior Consultant, Financial Services l Forensic and Litigation Consulting | 2024-01-14 | San Francisco | CA |  |  |
| Roku Inc. | Senior Corporate Accounting Revenue Analyst | 2024-01-14 | San Jose | CA | On-site | Finance & Accounting |
| Snowflake | Senior Corporate Counsel - Procurement | 2024-01-15 | Dublin | CA |  |  |
| McClure & Feuer | Senior Corporate Lawyer | 2024-01-14 | San Francisco Bay Area | CA | Hybrid | Legal |
| Sidecar Health | Senior Counsel | 2024-01-15 | Los Angeles Metropolitan Area | CA | Remote |  |
| TikTok | Senior Counsel, Global Legal Investigations | 2024-01-16 | Los Angeles | CA |  |  |
| TikTok | Senior Counsel, Global Legal Investigations | 2024-01-16 | San Jose | CA |  |  |
| Earthjustice | Senior Counsel, Strategic Legal Advocacy | 2024-01-16 | San Francisco Bay Area | CA | On-site |  |
| Insight Global | Senior Data Analyst | 2024-01-15 | Denver Metropolitan Area |  | Hybrid | Data Science |
| B-Stock Solutions | Senior Data Engineer | 2024-01-15 | United States | CA | Remote | Data Engineering |
| Formula.Monks | Senior Data Engineer | 2024-01-15 | Cupertino | CA | Hybrid | Data Engineering |
| Salesforce | Senior Data Engineer | 2024-01-14 | San Francisco | CA | Hybrid | Data Engineering |
| Xometry | Senior Data Engineer | 2024-01-15 | Los Angeles Metropolitan Area | CA | Remote | Data Engineering |
| BayOne Solutions | Senior Data Engineer - Azure, ADF | 2024-01-14 | San Francisco | CA | Hybrid | Data Engineering |
| Walmart Global Tech | Senior Data Engineer - Classification | 2024-01-14 | Sunnyvale | CA | Hybrid | Data Engineering |
| Salesforce | Senior Data Governance Analyst | 2024-01-15 | Dallas | TX | Hybrid | Data Engineering |
| Salesforce | Senior Data Governance Analyst | 2024-01-15 | Seattle | WA | Hybrid | Data Engineering |
| SAIC | Senior Data Integration Engineer | 2024-01-15 | Springfield | VA | Remote |  |
| Salesforce | Senior Data Platform Engineer | 2024-01-15 | San Francisco | CA | Hybrid | Data Engineering |
| Maxonic | Senior Data Privacy Counsel - APAC | 2024-01-14 | Sunnyvale | CA | Hybrid |  |
| Early Warning® | Senior Data Product Manager - BI | 2024-01-16 | San Francisco | CA | Hybrid | Product Management |
| University of Michigan | Senior Data Project Manager | 2024-01-15 | Ann Arbor | MI | On-site | Project Management |
| BlueRose Technologies | Senior Data Scientist | 2024-01-14 | Fremont | CA | Remote | Data Science |
| Grindr | Senior Data Scientist | 2024-01-14 | Los Angeles | CA | Hybrid | Data Science |
| Nextdoor | Senior Data Scientist | 2024-01-15 | San Francisco | CA | Hybrid | Data Science |
| Walmart | Senior Data Scientist | 2024-01-14 | Sunnyvale | CA |  | Data Science |
| Yoh, A Day & Zimmermann Company | Senior Data Scientist | 2024-01-15 | New York | NY | Hybrid | Data Science |
| Uber | Senior Data Scientist - Autonomous Mobility & Delivery | 2024-01-16 | San Francisco | CA |  | Data Science |
| Health Care Service Corporation | Senior Data Scientist - Contracting and Anomaly Detection | 2024-01-15 | Chicago | IL | Hybrid | Data Science |
| thrively | Senior Data Steward | 2024-01-15 | Dallas-Fort Worth Metroplex |  | Hybrid |  |
| Formula.Monks | Senior Data Warehouse Engineer | 2024-01-15 | Cupertino | CA | Hybrid | Data Engineering |
| NVIDIA | Senior Deep Learning Software Engineer, Developer Tools | 2024-01-15 | Santa Clara | CA |  | Software Engineering |
| STV | Senior Designer | 2024-01-14 | Los Angeles | CA | On-site | Designers |
| Tata Technologies | Senior Designer | 2024-01-16 | Irvine | CA | On-site | Designers |
| Pair Eyewear | Senior Designer of Top Frame Product Development | 2024-01-16 | Irvine | CA | On-site | Designers |
| Cradlepoint, part of Ericsson | Senior DevOps Engineer | 2024-01-14 | Los Gatos | CA | On-site | Software Engineering |
| Joby Aviation | Senior DevOps Engineer | 2024-01-14 | Santa Cruz | CA | On-site | Software Engineering |
| Oak Technologies INC | Senior DevOps Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Salesforce | Senior DevOps Engineer - SRE | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| NVIDIA | Senior Developer Relations Manager - Creative Generative AI | 2024-01-15 | Santa Clara | CA |  | Software Engineering |
| GE Power | Senior Digital Operations and Maintenance Product Manager (Remote Eligible, U.S.) | 2024-01-15 | United States |  | Remote | Product Management |
| Cardinal Digital Marketing | Senior Director of Analytics | 2024-01-15 | Chamblee | GA | Hybrid | Data Science |
| Olive Ave Jewelry | Senior Director of Brand Marketing | 2024-01-15 | Mesa | AZ | On-site | Marketing & Sales |
| EVERSANA | Senior Director, Customer Engagement & Growth - Pharmacovigilance Services | 2024-01-15 | Emeryville | CA | Remote |  |
| Snowflake | Senior Director, Data Engineering | 2024-01-15 | Dublin | CA |  | Data Engineering,Software Engineering |
| Capital One | Senior Director, Design, Enterprise Design System | 2024-01-16 | San Francisco | CA |  |  |
| ClickJobs.io | Senior Director, GRA Pharmaceuticals-TAK-279 | 2024-01-15 | Boston | MA | On-site |  |
| ClickJobs.io | Senior Director, GRA Pharmaceuticals-TAK-279 | 2024-01-15 | Cherry Hill | NJ | On-site |  |
| ClickJobs.io | Senior Director, GRA Pharmaceuticals-TAK-279 | 2024-01-15 | Easton | PA | On-site |  |
| Workday | Senior Director, Global Digital Strategy | 2024-01-15 | Pleasanton | CA | Hybrid |  |
| Ripple | Senior Director, Global Total Rewards and HR Systems | 2024-01-15 | San Francisco | CA | On-site | HR & Recruiting |
| Priceline | Senior Director, Hotel Industry Marketing & Communications | 2024-01-15 | Los Angeles | CA | Hybrid | Marketing & Sales |
| Freshworks | Senior Director, Integrated Campaigns | 2024-01-15 | San Mateo | CA |  |  |
| Alvarez & Marsal | Senior Director, Life Sciences | 2024-01-15 | Washington | DC |  |  |
| McAfee | Senior Director, Marketing Analytics & Strategy | 2024-01-15 | San Jose | CA | Remote | Data Science,Marketing & Sales |
| Publica by IAS | Senior Director, Publisher Operations | 2024-01-15 | San Francisco | CA | Hybrid |  |
| Nice North America | Senior Embedded Software Engineer | 2024-01-15 | Carlsbad | CA | Remote | Software Engineering |
| City Storage Systems | Senior Employee Relations Investigator, City Storage Systems - US | 2024-01-16 | California | CA | On-site |  |
| City Storage Systems | Senior Employee Relations Investigator, City Storage Systems - US | 2024-01-14 | California | CA | On-site |  |
| Anduril Industries | Senior Engineering Director - Air Defense | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Atlassian | Senior Engineering Manager | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Airbnb | Senior Engineering Manager - Users, Listings and Marketplace Intelligence | 2024-01-16 | United States | CA | Remote | Software Engineering |
| Peloton Interactive | Senior Enterprise Applications Engineer, Atlassian Systems | 2024-01-15 | New York | NY | Hybrid |  |
| Connections Consulting Partners, LLC | Senior Enterprise Architect - (Data and AI) | 2024-01-15 | Raleigh-Durham-Chapel Hill Area |  | On-site |  |
| Sage Search Partners | Senior Executive Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Zynga | Senior Experience Designer – Harry Potter | 2024-01-16 | Carlsbad | CA | Hybrid | Designers |
| Zynga | Senior Experience Designer – Harry Potter | 2024-01-16 | San Mateo | CA | Hybrid | Designers |
| Woven by Toyota | Senior Front-End Engineer, Advanced AD/ADAS | 2024-01-16 | Palo Alto | CA | Hybrid |  |
| Notable | Senior Frontend Engineer | 2024-01-16 | San Mateo | CA |  | Software Engineering |
| Anduril Industries | Senior Frontend Engineer (UX) | 2024-01-14 | Costa Mesa | CA | On-site | Designers,Software Engineering |
| Anduril Industries | Senior Frontend Software Engineer | 2024-01-14 | Mountain View | CA | On-site | Software Engineering |
| Roblox | Senior Frontend Software Engineer - Roblox OS | 2024-01-14 | San Mateo | CA | Hybrid | Software Engineering |
| Rippling | Senior Full Stack Engineer (Backend) - HRIS Core Product | 2024-01-14 | San Francisco | CA | On-site | Software Engineering |
| Hearst | Senior Full Stack Engineer, CiC | 2024-01-15 | New York | NY | On-site | Software Engineering |
| Adobe | Senior Full Stack Engineer- Firefly | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| NVIDIA | Senior Full-Stack Web Applications Software Engineer | 2024-01-16 | California | CA | Remote | Software Engineering |
| NVIDIA | Senior Full-Stack Web Applications Software Engineer | 2024-01-16 | Santa Clara | CA |  | Software Engineering |
| First American | Senior Functional Analyst - ServiceNow | 2024-01-14 | Santa Ana | CA |  |  |
| Anduril Industries | Senior GNC Engineer, Ghost | 2024-01-14 | Mountain View | CA | On-site |  |
| Blizzard Entertainment | Senior Game Designer, WoW Classic - Irvine, CA | 2024-01-16 | Irvine | CA | On-site | Designers |
| Amazon Games | Senior Games Product Manager, Amazon Games | 2024-01-15 | Seattle | WA |  | Product Management |
| Tekion Corp | Senior Global Compensation Partner | 2024-01-15 | United States | CA | Remote | Finance & Accounting |
| House Of Sillage | Senior Graphic Designer | 2024-01-16 | Newport Beach | CA | On-site | Marketing & Sales,Designers |
| Pivotal Partners | Senior Growth Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Pivotal Partners | Senior Growth Marketing Manager | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| TeamRecruit  | Senior Healthcare Recruiter | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| JPMorgan Chase & Co. | Senior Home Lending Advisor - Huntington Square, NY - Huntington Square Branch | 2024-01-16 | Huntington | NY |  |  |
| JPMorgan Chase & Co. | Senior Home Lending Advisor - Melbourne, FL - Melbourne Square Branch | 2024-01-16 | Melbourne | FL |  |  |
| JPMorgan Chase & Co. | Senior Home Lending Advisor - Port Orange, FL - Dunlawton Square Branch | 2024-01-16 | Port Orange | FL |  |  |
| JPMorgan Chase & Co. | Senior Home Lending Advisor - Tulsa, OK - Utica Square Branch | 2024-01-16 | Tulsa | OK |  |  |
| Nefab | Senior Human Resources Generalist | 2024-01-14 | Newark | CA | On-site |  |
| JD and Associates | Senior Human Resources Manager | 2024-01-16 | Los Angeles | CA | On-site |  |
| NEW-INDY PACKAGING | Senior Human Resources Manager | 2024-01-14 | Cerritos | CA | On-site |  |
| NYC Health + Hospitals | Senior IBM Netcool Developer (Senior Consultant MIS- Lvl B) Mid-Range Computing | 2024-01-15 | Manhattan | NY | On-site | Software Engineering |
| Invisible AI | Senior Infrastructure Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| WebMD | Senior Inside Sales Representative | 2024-01-15 | Los Angeles | CA | Hybrid | Marketing & Sales |
| UC San Diego Health | Senior Instructional Designer - Hybrid | 2024-01-16 | San Diego | CA | Hybrid | Designers |
| Apploi | Senior Integrations Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| HS Solutions Inc | Senior Java Full stack developer | 2024-01-14 | Oakland | CA | On-site | Software Engineering |
| Alameda Health System | Senior Learning & Development Specialist | 2024-01-15 | Oakland | CA | On-site |  |
| Albion Rye Associates | Senior Legal Counsel | 2024-01-14 | California | CA | Hybrid | Legal |
| FNS, Inc. | Senior Legal Counsel | 2024-01-14 | Torrance | CA | On-site | Legal |
| Hamlyn Williams | Senior Life Sciences Recruiter | 2024-01-16 | San Diego | CA | Hybrid | HR & Recruiting |
| Handshake | Senior Lifecycle Marketing Manager (Hybrid, San Francisco) | 2024-01-15 | San Francisco | CA | Hybrid | Marketing & Sales |
| TikTok | Senior Linux Kernel Software Engineer | 2024-01-15 | San Jose | CA | On-site | Software Engineering |
| JDHuntr In-House Counsel Jobs | Senior Litigation Strategy Director | 2024-01-14 | Santa Clara | CA | On-site |  |
| Cooley LLP | Senior Litigation and E-Discovery Services Analyst | 2024-01-16 | San Francisco | CA | Hybrid |  |
| Truveta | Senior ML Engineer - LLMs & Generative AI | 2024-01-15 | Seattle | WA | Remote | Data Science,Software Engineering |
| BayOne Solutions | Senior Machine Learning Engineer | 2024-01-14 | San Francisco | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| BioSpace | Senior Machine Learning Engineer | 2024-01-14 | Thousand Oaks | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| EVONA | Senior Machine Learning Engineer | 2024-01-14 | San Diego | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Truveta | Senior Machine Learning Engineer | 2024-01-15 | Seattle | WA | Remote | Data Engineering,Data Science,Software Engineering |
| Rokt | Senior Machine Learning Engineer - NYC | 2024-01-15 | New York | NY | Hybrid | Data Engineering,Data Science,Software Engineering |
| Cash App | Senior Machine Learning Engineer - Personalization | 2024-01-15 | New York | NY | Remote | Data Engineering,Data Science,Software Engineering |
| Cash App | Senior Machine Learning Engineer - Personalization | 2024-01-15 | San Francisco | CA | Remote | Data Engineering,Data Science,Software Engineering |
| Reddit, Inc. | Senior Machine Learning Engineer, Ads Prediction | 2024-01-15 | San Francisco | CA |  | Data Engineering,Data Science,Software Engineering |
| Sony Interactive Entertainment | Senior Machine Learning Engineer, Recommendation Systems | 2024-01-15 | San Francisco | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Net2Source Inc. | Senior Manager Analytics | 2024-01-15 | Edison | NJ | Hybrid | Data Science |
| Company Confidential | Senior Manager Strategic Marketing | 2024-01-15 | United States |  | Remote | Marketing & Sales |
| Company Confidential | Senior Manager Strategic Marketing | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| BioSpace | Senior Manager of Formulation and Drug Product Development | 2024-01-14 | San Diego | CA | On-site |  |
| Vertex Inc. | Senior Manager – Customer Marketing – Growth | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| DoorDash | Senior Manager, Compensation Systems | 2024-01-14 | San Francisco | CA |  | Finance & Accounting |
| Johnson & Johnson | Senior Manager, Customer & Market Insights | 2024-01-15 | Irvine | CA | On-site |  |
| Domino Data Lab | Senior Manager, Customer Marketing | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| BDO USA | Senior Manager, Disputes & Investigations - Government Contracts | 2024-01-16 | San Francisco | CA | Hybrid |  |
| BDO USA | Senior Manager, Disputes & Investigations - Government Contracts | 2024-01-16 | San Jose | CA | Hybrid |  |
| Amazon | Senior Manager, Employee Relations, Worldwide Operations Employee Relations | 2024-01-15 | United States | CA | Remote |  |
| Expedia Group | Senior Manager, Influencer Marketing | 2024-01-15 | New York Flat | CA | Hybrid | Marketing & Sales |
| Expedia Group | Senior Manager, Influencer Marketing | 2024-01-15 | West Hollywood | CA | Hybrid | Marketing & Sales |
| Capital One | Senior Manager, Information Security Office Consultant | 2024-01-16 | San Francisco | CA |  |  |
| Rippling | Senior Manager, Media & Sponsorships | 2024-01-15 | San Francisco | CA | On-site |  |
| NinjaOne | Senior Manager, Paid Search | 2024-01-15 | San Francisco | CA | Remote |  |
| SoFi | Senior Manager, Regulatory Relations | 2024-01-16 | San Francisco | CA |  |  |
| GitLab | Senior Manager, Technical Recruiting | 2024-01-16 | United States | CA | Remote |  |
| BioSpace | Senior Manager-Automation Engineering (Manufacturing Systems and Utilities) | 2024-01-14 | Thousand Oaks | CA | Hybrid | Software Engineering |
| Morrison Foerster | Senior Managing Attorney: Docket & Court Services | 2024-01-16 | San Francisco | CA | Hybrid | Legal |
| Dynamic Yield by Mastercard | Senior Managing Consultant, Advisors Business Development-Dynamic Yield (Open to Remote US) | 2024-01-15 | San Carlos | CA | Hybrid |  |
| VSP Vision Care | Senior Market Manager, B2B Marketing | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| FUGA | Senior Marketing Services Director - Americas | 2024-01-15 | Los Angeles | CA | On-site | Marketing & Sales |
| Zipline | Senior Mechanical Engineer - Composite Analysis | 2024-01-14 | South San Francisco | CA |  |  |
| Anduril Industries | Senior Modeling and Simulation Engineer | 2024-01-14 | Costa Mesa | CA | On-site |  |
| Hook | Senior Motion Designer | 2024-01-16 | Los Angeles Metropolitan Area | CA | Hybrid | Designers |
| Google | Senior Motion Designer, Search | 2024-01-16 | Mountain View | CA | On-site | Designers |
| Google | Senior Motion Designer, Search | 2024-01-16 | San Francisco | CA | On-site | Designers |
| ZOLL Medical Corporation | Senior Oracle Fusion Developer | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Stanford University | Senior Oracle HCM BI Analyst | 2024-01-14 | Redwood City | CA | On-site |  |
| Gilead Sciences | Senior Paralegal | 2024-01-16 | Foster City | CA |  | Legal |
| DocuSign | Senior Paralegal - IP and Marketing | 2024-01-16 | San Francisco | CA | Remote | Marketing & Sales,Legal |
| StepStone Group | Senior Paralegal - Private Equity | 2024-01-16 |  California |  | Hybrid | Legal |
| TikTok | Senior Patent Counsel | 2024-01-14 | Los Angeles | CA |  |  |
| Nextdoor | Senior People Business Partner | 2024-01-15 | San Francisco | CA | Hybrid |  |
| Resourcesoft Inc. | Senior Peoplesoft Developer with Payroll Module | 2024-01-14 | United States | CA | Remote | HR & Recruiting,Software Engineering |
| Zipline | Senior Perception Software Engineer - ML / AI | 2024-01-14 | South San Francisco | CA |  | Software Engineering |
| NVIDIA | Senior Performance Software Engineer | 2024-01-15 | Santa Clara | CA |  | Software Engineering |
| Arnold Law Firm | Senior Personal Injury Attorney | 2024-01-16 | Sacramento | CA | On-site | Legal |
| Hirewell | Senior Portfolio Marketing Manager | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Crossover  | Senior Principal Software Engineer, Trilogy (Remote) - $200,000/year USD | 2024-01-15 | New York | NY | Remote | Software Engineering |
| Maxonic | Senior Privacy Counsel APAC | 2024-01-14 | Sunnyvale | CA | Hybrid |  |
| Creative Circle | Senior Product Designer | 2024-01-16 | Alameda | CA | Hybrid | Designers |
| Intuit | Senior Product Designer | 2024-01-16 | Mountain View | CA | On-site | Designers |
| Intuit | Senior Product Designer | 2024-01-16 | San Diego | CA | On-site | Designers |
| Nextdoor | Senior Product Designer | 2024-01-16 | San Francisco | CA | Hybrid | Designers |
| Lyft | Senior Product Designer - Driver | 2024-01-16 | San Francisco | CA |  | Designers |
| C3 AI | Senior Product Designer - Generative AI | 2024-01-14 | Redwood City | CA | On-site | Designers |
| Jazwares, LLC | Senior Product Designer - Girls | 2024-01-16 | Culver City | CA | On-site | Designers |
| Chegg Inc. | Senior Product Designer Contract | 2024-01-16 | Santa Clara | CA | On-site | Designers |
| Esri | Senior Product Designer – Indoors | 2024-01-15 | Redlands | CA | On-site | Designers |
| Square | Senior Product Designer, Square for Restaurants | 2024-01-16 | San Francisco | CA | Remote | Designers |
| Square | Senior Product Designer, Square for Restaurants | 2024-01-16 | Seattle | WA | Remote | Designers |
| Anduril Industries | Senior Product Infrastructure Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Attentive | Senior Product Manager | 2024-01-14 | San Francisco | CA | Hybrid | Product Management |
| Cars Commerce | Senior Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Corporate Finance Institute® (CFI) | Senior Product Manager | 2024-01-14 | United States | CA | Remote | Product Management |
| Domino Data Lab | Senior Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Humana | Senior Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| JPMorgan Chase & Co. | Senior Product Manager | 2024-01-16 | Palo Alto | CA |  | Product Management |
| LHH | Senior Product Manager | 2024-01-16 | Anaheim | CA | Remote | Product Management |
| Launch Potato | Senior Product Manager | 2024-01-14 | Greater Sacramento | CA | Remote | Product Management |
| Launch Potato | Senior Product Manager | 2024-01-14 | Riverside | CA | Remote | Product Management |
| Lithic | Senior Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Live Nation Entertainment | Senior Product Manager | 2024-01-16 | California | CA | Remote | Product Management |
| Microsoft | Senior Product Manager | 2024-01-15 | Redmond | WA | Remote | Product Management |
| Parallel Domain | Senior Product Manager | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | Product Management |
| Stealth | Senior Product Manager | 2024-01-16 | Los Angeles Metropolitan Area | CA | Remote | Product Management |
| TikTok | Senior Product Manager - AI Quality, Monetization GenAI Product | 2024-01-16 | San Jose | CA |  | Product Management |
| TikTok | Senior Product Manager - AI Safety, Monetization GenAI Product | 2024-01-16 | San Jose | CA |  | Product Management |
| Fivetran | Senior Product Manager - Databases | 2024-01-16 | Oakland | CA |  | Product Management |
| Uber | Senior Product Manager - Earner On-Trip Experience | 2024-01-16 | San Francisco | CA |  | Product Management |
| Uber | Senior Product Manager - Earner On-Trip Experience | 2024-01-16 | Sunnyvale | CA |  | Product Management |
| Datadog | Senior Product Manager - IDE and Development Workflows | 2024-01-15 | New York | NY |  | Product Management |
| Shipt | Senior Product Manager - Marketplace Systems | 2024-01-14 | San Francisco | CA |  | Product Management |
| OKX | Senior Product Manager - Payments | 2024-01-16 | San Jose | CA | Hybrid | Product Management |
| Uber | Senior Product Manager - Rider Foundations & Personalization | 2024-01-16 | San Francisco | CA |  | Product Management |
| Swiss Re | Senior Product Manager - Vehicle Safety & AV Hybrid | 2024-01-15 | Armonk | NY | Hybrid | Product Management |
| Adobe | Senior Product Manager, Adobe.com | 2024-01-15 | San Francisco | CA |  | Product Management |
| Adobe | Senior Product Manager, Adobe.com | 2024-01-15 | San Jose | CA |  | Product Management |
| Amazon | Senior Product Manager, Amazon Go | 2024-01-15 | Seattle | WA |  | Product Management |
| Ring | Senior Product Manager, Amazon Key | 2024-01-14 | Hawthorne | CA |  | Product Management |
| GitLab | Senior Product Manager, Compliance | 2024-01-16 | United States | CA | Remote | Product Management |
| BetterSleep by Ipnos | Senior Product Manager, Content | 2024-01-16 | Mountain View | CA | Hybrid | Product Management |
| Discord | Senior Product Manager, Core Product | 2024-01-14 | San Francisco | CA | Remote | Product Management |
| Intuit | Senior Product Manager, Developer Experience | 2024-01-15 | Mountain View | CA | On-site | Product Management,Software Engineering |
| Uber | Senior Product Manager, Earner Progression | 2024-01-16 | New York | NY |  | Product Management |
| Uber | Senior Product Manager, Earner Progression | 2024-01-16 | San Francisco | CA |  | Product Management |
| Uber | Senior Product Manager, Earner Progression | 2024-01-16 | Seattle | WA |  | Product Management |
| Box | Senior Product Manager, Mobile | 2024-01-15 | Redwood City | CA |  | Product Management |
| Discord | Senior Product Manager, New Businesses | 2024-01-14 | San Francisco | CA | Remote | Product Management |
| Instacart | Senior Product Manager, Partner Platform | 2024-01-16 | San Francisco | CA | Remote | Product Management |
| Edwards Lifesciences | Senior Product Manager, Patient Marketing | 2024-01-16 | Irvine | CA |  | Marketing & Sales,Product Management |
| Upgrade, Inc. | Senior Product Manager, Personal Loans | 2024-01-16 | San Francisco | CA | Hybrid | Product Management |
| Zocdoc | Senior Product Manager, SEO + Growth | 2024-01-15 | New York | NY |  | Product Management |
| Lyft | Senior Product Manager, Safety & Customer Care | 2024-01-16 | San Francisco | CA |  | Product Management |
| Crossover  | Senior Product Manager, Trilogy (Remote) - $200,000/year USD | 2024-01-15 | New York | NY | Remote | Product Management |
| Dragos, Inc. | Senior Product Marketing Manager | 2024-01-14 | United States | CA | Remote | Product Management,Marketing & Sales |
| Flashpoint | Senior Product Marketing Manager | 2024-01-15 | United States | CA | Remote | Product Management,Marketing & Sales |
| Amplitude | Senior Product Marketing Manager - Solutions | 2024-01-14 | San Francisco Bay Area | CA | Hybrid | Product Management,Marketing & Sales |
| Adobe | Senior Product Marketing Manager – DC Mobile | 2024-01-15 | San Francisco | CA |  | Product Management,Marketing & Sales |
| Adobe | Senior Product Marketing Manager – DC Mobile | 2024-01-15 | San Jose | CA |  | Product Management,Marketing & Sales |
| Domino Data Lab | Senior Product Marketing Manager, Life Sciences | 2024-01-15 | United States | CA | Remote | Product Management,Marketing & Sales |
| Atlassian | Senior Product Security Engineer | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| Capital Group | Senior Product Specialist - Strategy and Development | 2024-01-14 | Los Angeles | CA |  |  |
| Becho, Inc. | Senior Project Manager | 2024-01-16 | Fresno | CA | On-site | Project Management |
| OSTechnical | Senior Project Manager | 2024-01-16 | Irvine | CA | On-site | Project Management |
| UMP (United Master Planners) | Senior Project Scheduler | 2024-01-14 | Los Angeles | CA | On-site |  |
| Skillz | Senior Recruiter | 2024-01-16 | United States | CA | Remote | HR & Recruiting |
| Stanford University | Senior Recruiter (Fixed Term) | 2024-01-16 | Redwood City | CA | Hybrid | HR & Recruiting |
| Anyscale | Senior Recruiter (GTM) | 2024-01-16 | San Francisco | CA | On-site | HR & Recruiting |
| Intuit | Senior Recruiter, Sales & Customer Success | 2024-01-16 | Mountain View | CA | On-site | Marketing & Sales,HR & Recruiting |
| Intuit | Senior Recruiter, Sales & Customer Success | 2024-01-16 | San Diego | CA | On-site | Marketing & Sales,HR & Recruiting |
| Amy's Kitchen | Senior Recruiting Coordinator | 2024-01-14 | Santa Rosa | CA | On-site |  |
| EmblemHealth | Senior Risk Adjustment Data Analyst - Remote | 2024-01-15 | New York | NY | Remote | Data Science |
| Anduril Industries | Senior Robotics Software Engineer | 2024-01-14 | Mountain View | CA | Hybrid | Data Science,Software Engineering |
| Tandym Group | Senior SDET - Video Player Engineering | 2024-01-14 | Beverly Hills | CA | Hybrid | Software Engineering |
| HP | Senior SW Product Manager - Consumer Services | 2024-01-15 | California | CA | Remote | Product Management |
| Petco | Senior Sales Associate - Keyholder | 2024-01-14 | San Mateo | CA | On-site | Marketing & Sales |
| Egnyte | Senior Sales Compensation Manager | 2024-01-15 | United States | CA | Remote | Finance & Accounting,Marketing & Sales |
| Alcor Solutions, Inc. | Senior Sales Executive | 2024-01-14 | San Francisco Bay Area | CA | Hybrid | Marketing & Sales |
| Pursuit | Senior Sales Manager | 2024-01-15 | Dallas | TX | On-site | Marketing & Sales |
| Google | Senior Sales Manager, Mid-Market Sales, Google Customer Solutions | 2024-01-14 | Los Angeles | CA | On-site | Marketing & Sales |
| ADP | Senior Sales Representative | 2024-01-14 | Greater Sacramento | CA | Hybrid | Marketing & Sales |
| New York Life Insurance Company | Senior Sales Representative | 2024-01-15 | Walnut Creek | CA | Hybrid | Marketing & Sales |
| V&V Supremo Foods Inc | Senior Sales Representative | 2024-01-14 | Los Angeles | CA | Hybrid | Marketing & Sales |
| AbbVie | Senior Scientist I, Microbiology | 2024-01-14 | Irvine | CA |  |  |
| BioSpace | Senior Scientist Inflammation Target Evaluation and Targeted Protein Degradation | 2024-01-16 | Thousand Oaks | CA | Hybrid |  |
| Ethos | Senior Security Engineer | 2024-01-15 | San Francisco | CA | Remote | Software Engineering |
| SPECTRAFORCE | Senior Security Engineer | 2024-01-14 | San Francisco | CA | Remote | Software Engineering |
| Rockset | Senior Site Reliability Engineer | 2024-01-14 | San Mateo | CA | Hybrid | Software Engineering |
| ServiceNow | Senior Site Reliability Engineer - Federal - 3rd Shift | 2024-01-16 | San Diego | CA | Remote | Software Engineering |
| Autonomi Labs | Senior Software Architect | 2024-01-14 | Redwood City | CA | On-site | Software Engineering |
| NVIDIA | Senior Software Architect - Data Center Systems | 2024-01-15 | California | CA | Remote | Software Engineering |
| NVIDIA | Senior Software Development Engineer, TensorRT | 2024-01-14 | Santa Clara | CA |  | Software Engineering |
| Amtex Enterprises,Inc (https://amtexenterprises.com/careers-jobs/) | Senior Software Engineer | 2024-01-14 | El Segundo | CA | On-site | Software Engineering |
| Anduril Industries | Senior Software Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| AngelList | Senior Software Engineer | 2024-01-15 | San Francisco Bay Area | CA | Hybrid | Software Engineering |
| Autodesk | Senior Software Engineer | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| Blizzard Entertainment | Senior Software Engineer | 2024-01-14 | Irvine | CA | On-site | Software Engineering |
| ESPN | Senior Software Engineer | 2024-01-16 | Glendale | CA | On-site | Software Engineering |
| Microsoft | Senior Software Engineer | 2024-01-15 | Mountain View | CA | Hybrid | Software Engineering |
| Microsoft | Senior Software Engineer | 2024-01-15 | Redmond | WA | Remote | Software Engineering |
| SS&C Technologies | Senior Software Engineer | 2024-01-14 | San Francisco | CA | Hybrid | Software Engineering |
| Storm4 | Senior Software Engineer | 2024-01-15 | Sunnyvale | CA | Hybrid | Software Engineering |
| Works | Senior Software Engineer | 2024-01-14 | NAMER | CA | Remote | Software Engineering |
| ZoomInfo | Senior Software Engineer | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| Zeta Global | Senior Software Engineer - Backend | 2024-01-14 | San Francisco | CA | Hybrid | Software Engineering |
| Siemens Digital Industries Software | Senior Software Engineer - Cloud & Industrial AI | 2024-01-15 | Seattle | WA | Hybrid | Software Engineering |
| Front | Senior Software Engineer - Developer Platform | 2024-01-16 | San Francisco | CA | Hybrid | Software Engineering |
| Databricks | Senior Software Engineer - Distributed Data Systems | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Veeva Systems | Senior Software Engineer - Front End | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| Nextdoor | Senior Software Engineer - Full Stack | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| Outdoorsy | Senior Software Engineer - Full Stack | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Databricks | Senior Software Engineer - Fullstack | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| Roblox | Senior Software Engineer - Hybrid Cloud | 2024-01-15 | San Mateo | CA | Hybrid | Software Engineering |
| Veeva Systems | Senior Software Engineer - Infrastructure | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| Veeva Systems | Senior Software Engineer - Java | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| SnapMagic | Senior Software Engineer - SnapMagic Copilot | 2024-01-15 | Redwood City | CA | On-site | Software Engineering |
| Barrington James | Senior Software Engineer - Ultrasound specialism | 2024-01-14 | California | CA | Hybrid | Software Engineering |
| Nextdoor | Senior Software Engineer - iOS | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| Veeva Systems | Senior Software Engineer - iOS | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| NVIDIA | Senior Software Engineer, AI | 2024-01-14 | Santa Clara | CA |  | Software Engineering |
| Instabase | Senior Software Engineer, AI Products | 2024-01-14 | San Francisco | CA | Remote | Software Engineering |
| ByteDance | Senior Software Engineer, Backend and Infrastructure | 2024-01-15 | San Jose | CA |  | Software Engineering |
| TikTok | Senior Software Engineer, Camera Effects | 2024-01-14 | San Jose | CA |  | Software Engineering |
| TikTok | Senior Software Engineer, Data Platform - Experimentation & Evaluation | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Google | Senior Software Engineer, Embedded Systems/Firmware, Pixel | 2024-01-15 | Mountain View | CA | On-site | Software Engineering |
| Google | Senior Software Engineer, Embedded Systems/Firmware, Pixel | 2024-01-15 | San Diego | CA | On-site | Software Engineering |
| Walmart Global Tech | Senior Software Engineer, Full-Stack | 2024-01-15 | Sunnyvale | CA | On-site | Software Engineering |
| Upstart | Senior Software Engineer, Identity & Access Management | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Google | Senior Software Engineer, Infrastructure, Google Cloud Networking | 2024-01-14 | Sunnyvale | CA | Hybrid | Software Engineering |
| Nuro | Senior Software Engineer, ML Infrastructure | 2024-01-15 | Mountain View | CA | Hybrid | Software Engineering |
| Taskrabbit | Senior Software Engineer, Operations Technology | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Plus | Senior Software Engineer, Planning | 2024-01-15 | Santa Clara | CA | Hybrid | Software Engineering |
| NVIDIA | Senior Software Engineer, TensorRT Inference | 2024-01-15 | New York | NY | Remote | Software Engineering |
| Crossover  | Senior Software Engineer, gt.school (Remote) - $60,000/year USD | 2024-01-15 | Yonkers | NY | Remote | Software Engineering |
| Snowflake | Senior Software Engineer- Cloud Engineering | 2024-01-15 | San Mateo | CA |  | Software Engineering |
| CommScope | Senior Software Engineer- UI | 2024-01-14 | Sunnyvale | CA | On-site | Designers,Software Engineering |
| BioSpace | Senior Software Product Manager, Data Platform #3310 | 2024-01-15 | Raleigh | NC | Hybrid | Product Management,Software Engineering |
| DeepRec.ai | Senior Solidity Engineer | 2024-01-14 | United States | CA | Remote |  |
| PacBio | Senior Staff Engineer, Software - C++/CUDA | 2024-01-16 | Menlo Park | CA | Hybrid | Software Engineering |
| PacBio | Senior Staff Engineer, Software - C++/CUDA | 2024-01-16 | San Diego | CA | Hybrid | Software Engineering |
| Liftoff Mobile | Senior Staff Machine Learning Engineer | 2024-01-14 | United States | CA | Remote | Data Engineering,Data Science,Software Engineering |
| Udemy | Senior Staff Machine Learning Engineer | 2024-01-15 | New York | NY |  | Data Engineering,Data Science,Software Engineering |
| Mozilla | Senior Staff Mobile Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Seagate Technology | Senior Staff Product Manager - Enterprise Data Storage Systems | 2024-01-16 | United States | CA | Remote | Product Management |
| Databricks | Senior Staff Product Manager, New Product | 2024-01-14 | San Francisco | CA |  | Product Management |
| Google | Senior Staff Software Engineer, Google Cloud Unified Fulfillment Optimization | 2024-01-15 | Sunnyvale | CA | On-site | Software Engineering |
| Google | Senior Staff Software Engineer, Google Cloud, Looker | 2024-01-15 | Mountain View | CA | On-site | Software Engineering |
| MediaTek | Senior Staff/Principal Engineer on Mobile Software Innovation | 2024-01-14 | San Jose | CA | On-site | Software Engineering |
| MileIQ  | Senior Subscription Payments Product Manager (Remote) | 2024-01-16 | United States | CA | Remote | Product Management |
| Anduril Industries | Senior Supply Planner | 2024-01-14 | Costa Mesa | CA | On-site | Project Management |
| Tata Technologies | Senior Surface Designer | 2024-01-16 | Irvine | CA | On-site | Designers |
| Technicon Design | Senior Surface Designer | 2024-01-16 | Orange County | CA | On-site | Designers |
| HRL Laboratories, LLC | Senior Systems Engineer | 2024-01-14 | Camarillo | CA | On-site | Software Engineering |
| AbbVie | Senior Systems Engineer I/II | 2024-01-16 | Irvine | CA | On-site | Software Engineering |
| NVIDIA | Senior Systems Software Engineer, Chromium for GeForce Now | 2024-01-14 | Santa Clara | CA |  | Software Engineering |
| Saint Agnes Medical Center | Senior Talent Acquisition Partner (On-Site) | 2024-01-14 | Fresno | CA |  | HR & Recruiting |
| Trinity Health | Senior Talent Acquisition Partner (On-Site) | 2024-01-14 | Fresno | CA |  | HR & Recruiting |
| Applied Materials | Senior Technical Materials Project Manager Supply Chain IV - (E4) | 2024-01-16 | Santa Clara | CA | On-site | Project Management |
| Microsoft | Senior Technical Product Manager | 2024-01-15 | Redmond | WA | Remote | Product Management |
| Crossover  | Senior Technical Product Manager, Trilogy (Remote) - $200,000/year USD | 2024-01-15 | New York | NY | Remote | Product Management |
| IXL Learning | Senior Technical Recruiter | 2024-01-16 | San Mateo | CA | Hybrid | HR & Recruiting |
| Pave | Senior Technical Recruiter | 2024-01-16 | San Francisco Bay Area | CA | On-site | HR & Recruiting |
| Anduril Industries | Senior Technical Recruiter - Software | 2024-01-16 | Costa Mesa | CA | On-site | Software Engineering,HR & Recruiting |
| Anduril Industries | Senior Technical Recruiter - Software | 2024-01-14 | Costa Mesa | CA | On-site | HR & Recruiting,Software Engineering |
| 31st Union | Senior Technical UI Designer | 2024-01-14 | San Mateo | CA | Hybrid | Designers |
| WaferWire Cloud Technologies | Senior Test Automation Engineer (Python) | 2024-01-15 | Redwood City | CA | On-site | Software Engineering |
| First American | Senior UX Designer | 2024-01-16 | Santa Ana | CA |  | Designers |
| ByteDance | Senior UX Researcher- Capcut | 2024-01-15 | Los Angeles | CA |  | Designers |
| Neo4j | Senior UX/Visual Designer, Web | 2024-01-16 | San Francisco | CA | Hybrid | Designers |
| Continental Finance Company | Senior Vice President, Credit Risk | 2024-01-15 | Wilmington | DE | Hybrid |  |
| Riot Games | Senior Visual Designer, Valorant - Store | 2024-01-16 | Los Angeles | CA |  | Designers |
| NVIDIA | Senior Yield Analyst | 2024-01-14 | Santa Clara | CA |  | Finance & Accounting |
| Writer | Senior software engineer, backend (Scala) | 2024-01-15 | San Francisco Bay Area | CA | Remote | Software Engineering |
| Blizzard Entertainment | Senior, Machine Learning Engineer | 2024-01-15 | Irvine | CA | On-site | Data Engineering,Data Science,Software Engineering |
| Walmart | Senior, Software Engineer | 2024-01-16 | Sunnyvale | CA |  | Software Engineering |
| Walmart | Senior, Software Engineer | 2024-01-14 | Sunnyvale | CA |  | Software Engineering |
| Snowflake | Senior/Principal Product Manager - ML Platform | 2024-01-15 | Bellevue | WA |  | Product Management |
| Roblox | Senior/Principal software Engineer - Engine Vulnerability Research | 2024-01-14 | San Mateo | CA | Hybrid | Software Engineering |
| Anduril Industries | Senior/Staff - C/C++ Software Engineer - Fury | 2024-01-14 | United States | CA | Remote | Software Engineering |
| ShopBack | Senior/Staff Product Manager (Taipei Based, Relocation Provided) | 2024-01-15 | San Francisco | CA | Hybrid | Product Management |
| Salesforce | Senior/Staff Software Engineer (Search Machine Learning) | 2024-01-14 | United States | CA | Remote | Data Science,Software Engineering |
| Zoox | Senior/Staff Software Engineer, Mission Planning | 2024-01-16 | Foster City | CA | Hybrid | Software Engineering |
| Crash Champions | Service Advisor | 2024-01-15 | West Sacramento | CA | On-site |  |
| Tesla | Service Advisor | 2024-01-14 | Aliso Viejo | CA | On-site |  |
| Tesla | Service Advisor | 2024-01-14 | Colma | CA | On-site |  |
| Rite of Passage | Service Coordinator Evening Learning Center | 2024-01-16 | El Centro | CA | On-site |  |
| AAA Auto Club Enterprises | Service Delivery Manager - Telecom | 2024-01-16 | Costa Mesa | CA |  |  |
| Siemens Healthineers | Service Project Manager (CSM) - Los Angeles or Orange County, CA | 2024-01-16 | Los Angeles | CA | On-site | Project Management |
| Sira Consulting, an Inc 5000 company | ServiceNow Gen AI Platform Senior Developer | 2024-01-14 | Santa Clara | CA | On-site | Software Engineering |
| Riboli Family Wines | Shopper Marketing Manager | 2024-01-14 | Los Angeles | CA | On-site | Marketing & Sales |
| Glean | Site Reliability Engineer | 2024-01-16 | Palo Alto | CA | On-site | Software Engineering |
| ByteDance | Site Reliability Engineer Graduate (AML- Engine) - 2024 Start (BS/MS) | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Scubyt | Site Reliability Engineer – Distributed Systems (San Jose, CA ONSITE) | 2024-01-14 | San Jose | CA | On-site | Software Engineering |
| TikTok | Site Reliability Engineer, Edge - USDS | 2024-01-14 | Mountain View | CA |  | Software Engineering |
| Axis Communications | Skillbridge Internship - US Armed Forces | 2024-01-14 | San Jose | CA | On-site |  |
| Sutter Health | Sleep Medicine/Pulmonology Respiratory Technician | 2024-01-15 | Berkeley | CA | Hybrid |  |
| ClickJobs.io | Small Business Development Center Director | 2024-01-15 | Albuquerque | NM | On-site |  |
| ClickJobs.io | Small Business Development Center Director | 2024-01-15 | Gallup | NM | On-site |  |
| ClickJobs.io | Small Business Development Center Director | 2024-01-15 | South Valley | NM | On-site |  |
| David Evans and Associates, Inc. | Smart Mobility Practice Leader - Los Angeles, CA | 2024-01-14 | Los Angeles | CA | Hybrid |  |
| Arm | SoC Architect | 2024-01-14 | San Diego | CA | Hybrid |  |
| Goodreads | Social Media & Editorial Program Manager, Goodreads | 2024-01-14 | San Francisco | CA | On-site | Project Management |
| Erika4Travel | Social Media Coordinator | 2024-01-14 | United States | CA | Remote |  |
| Dexcom | Social Media Manager | 2024-01-14 | San Diego | CA | Hybrid | Marketing & Sales |
| SharpHeads | Social Media Manager | 2024-01-14 | Irvine | CA | Hybrid | Marketing & Sales |
| House Of Sillage | Social Media, Sales & Marketing Manager | 2024-01-14 | Newport Beach | CA | On-site | Marketing & Sales |
| Lam Research | Software Application Engineer 5- Product Manager | 2024-01-16 | Fremont | CA | On-site | Software Engineering,Product Management |
| Veeva Systems | Software Architect - Java | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| CGI | Software Architect – AI/ML | 2024-01-14 | United States | CA | Remote | Data Science,Software Engineering |
| Lark | Software Architect, Lark No-code / Low-code Platform | 2024-01-14 | Mountain View | CA |  | Software Engineering |
| NVIDIA | Software Configuration Management Engineer – Hardware | 2024-01-14 | Santa Clara | CA |  | Software Engineering |
| Harris Computer | Software Developer | 2024-01-15 | Alabama | AL |  | Software Engineering |
| Harris Computer | Software Developer | 2024-01-15 | Florida | FL |  | Software Engineering |
| Harris Computer | Software Developer | 2024-01-15 | Idaho | ID |  | Software Engineering |
| Harris Computer | Software Developer | 2024-01-15 | Kansas | KS |  | Software Engineering |
| IBM | Software Developer | 2024-01-16 | San Jose | CA |  | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer | 2024-01-16 | East Palo Alto | CA | On-site | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer | 2024-01-15 | East Palo Alto | CA | On-site | Software Engineering |
| TikTok | Software Development Engineer in Test - Intelligent Creation | 2024-01-16 | San Jose | CA |  | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer, AWS Cryptography | 2024-01-15 | Dallas | TX |  | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer, AWS Cryptography | 2024-01-15 | Seattle | WA |  | Software Engineering |
| Amazon | Software Development Engineer, Amazon Stores | 2024-01-15 | Seattle | WA |  | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer, Computer Vision AI | 2024-01-15 | Seattle | WA |  | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer, Network - Core | 2024-01-15 | Cupertino | CA |  | Software Engineering |
| Amazon Web Services (AWS) | Software Development Engineer, Nitro High Memory and HPC team | 2024-01-16 | Sunnyvale | CA |  | Software Engineering |
| Amazon | Software Development Engineer, Worldwide Amazon Stores | 2024-01-16 | Santa Monica | CA |  | Software Engineering |
| Boostlingo | Software Engineer | 2024-01-15 | Austin, Texas Metropolitan Area | CA | Hybrid | Software Engineering |
| Check Point Software Technologies Ltd | Software Engineer | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| Check Point Software Technologies Ltd | Software Engineer | 2024-01-15 | San Jose | CA |  | Software Engineering |
| Cisco | Software Engineer | 2024-01-15 | San Jose | CA |  | Software Engineering |
| Crystal Equation Corporation | Software Engineer | 2024-01-16 | Burlingame | CA | Hybrid | Software Engineering |
| Goliath Partners | Software Engineer | 2024-01-15 | Greater Chicago Area | CA | Hybrid | Software Engineering |
| GradBay | Software Engineer | 2024-01-15 | Texas | TX | On-site | Software Engineering |
| JPMorgan Chase & Co. | Software Engineer | 2024-01-16 | Palo Alto | CA | On-site | Software Engineering |
| Microsoft | Software Engineer | 2024-01-15 | Redmond | WA | Hybrid | Software Engineering |
| O'Reilly Auto Parts | Software Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Optomi | Software Engineer | 2024-01-15 | Monterey | CA | Hybrid | Software Engineering |
| Zenergy Technologies | Software Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| maven | Software Engineer | 2024-01-15 | Greater Chicago Area | CA | Hybrid | Software Engineering |
| maven | Software Engineer | 2024-01-15 | New York City Metropolitan Area | CA | Hybrid | Software Engineering |
| Crossover  | Software Engineer (AI-Powered Development), Trilogy (Remote) - $200,000/year USD | 2024-01-15 | Dallas | TX | Remote | Software Engineering |
| Crossover  | Software Engineer (AI-Powered Development), Trilogy (Remote) - $200,000/year USD | 2024-01-15 | New York | NY | Remote | Software Engineering |
| Crossover  | Software Engineer (AI-Powered Development), Trilogy (Remote) - $200,000/year USD | 2024-01-15 | Seattle | WA | Remote | Software Engineering |
| Zoox | Software Engineer - Autonomy Metrics | 2024-01-16 | Foster City | CA | Hybrid | Software Engineering |
| Xyon Global | Software Engineer - Backend and API Architect | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Microsoft | Software Engineer - CTJ - TS/SCI | 2024-01-15 | Redmond | WA | Hybrid | Software Engineering |
| Microsoft | Software Engineer - CTJ - TS/SCI | 2024-01-15 | Reston | VA | Hybrid | Software Engineering |
| Meta | Software Engineer - Camera Algorithms | 2024-01-14 | Burlingame | CA |  | Software Engineering |
| Cisco | Software Engineer - Containers Platform | 2024-01-15 | San Jose | CA | On-site | Software Engineering |
| Veeva Systems | Software Engineer - Full Stack | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| Veeva Systems | Software Engineer - Java Infrastructure | 2024-01-15 | San Luis Obispo | CA | Remote | Software Engineering |
| La Jolla Logic, LLC, a Boecore Company | Software Engineer - Pt. Mugu, CA | 2024-01-14 | Port Hueneme | CA |  | Software Engineering |
| Anduril Industries | Software Engineer - Sensor Fusion | 2024-01-16 | Costa Mesa | CA | On-site | Software Engineering |
| TikTok | Software Engineer - TikTok Search | 2024-01-16 | San Jose | CA |  | Software Engineering |
| Anduril Industries | Software Engineer - Tracking and Fusion | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Pacific Northwest National Laboratory | Software Engineer 4 | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Microsoft | Software Engineer I | 2024-01-15 | Redmond | WA | Hybrid | Software Engineering |
| Microsoft | Software Engineer II | 2024-01-15 | Redmond | WA | Hybrid | Software Engineering |
| DoorDash | Software Engineer II, Realtime Streaming Platform | 2024-01-15 | San Francisco | CA |  | Software Engineering |
| DoorDash | Software Engineer II, Realtime Streaming Platform | 2024-01-15 | Sunnyvale | CA |  | Software Engineering |
| Walmart | Software Engineer III | 2024-01-16 | Sunnyvale | CA |  | Software Engineering |
| Walmart | Software Engineer III | 2024-01-14 | Sunnyvale | CA |  | Software Engineering |
| Google | Software Engineer III, Core | 2024-01-15 | San Francisco | CA | On-site | Software Engineering |
| Google | Software Engineer III, Core | 2024-01-15 | Sunnyvale | CA | On-site | Software Engineering |
| Google | Software Engineer III, Front End, Google Cloud Data Management | 2024-01-15 | Kirkland | WA | On-site | Software Engineering |
| Google | Software Engineer III, Infrastructure, Google Cloud Storage | 2024-01-15 | Sunnyvale | CA | On-site | Software Engineering |
| CSC | Software Engineer Intern | 2024-01-15 | Buffalo Grove | IL |  | Software Engineering |
| Capgemini | Software Engineer Lead - Integration Engineer | 2024-01-14 | San Francisco | CA | Hybrid | Software Engineering |
| Russell Tobin | Software Engineer in Test | 2024-01-16 | San Diego | CA | On-site | Software Engineering |
| Veeva Systems | Software Engineer in Test | 2024-01-14 | Pleasanton | CA | Remote | Software Engineering |
| Genesis10 | Software Engineer in Test - 24-00300 | 2024-01-15 | Greater Minneapolis-St. Paul Area | CA | Hybrid | Software Engineering |
| EDC Consulting LLC | Software Engineer with Security Clearance | 2024-01-14 | San Diego | CA | Remote | Software Engineering |
| Meta | Software Engineer, Android | 2024-01-14 | Burlingame | CA | On-site | Software Engineering |
| Meta | Software Engineer, Android | 2024-01-14 | Menlo Park | CA |  | Software Engineering |
| Glean | Software Engineer, Backend | 2024-01-16 | Palo Alto | CA | On-site | Software Engineering |
| Acryl Data | Software Engineer, Customer Success | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Forward | Software Engineer, Data Infrastructure | 2024-01-14 | San Francisco | CA | On-site | Software Engineering |
| NVIDIA | Software Engineer, Generative AI Research | 2024-01-16 | Santa Clara | CA |  | Software Engineering |
| Meta | Software Engineer, Health Technologies - Reality Labs | 2024-01-16 | Burlingame | CA |  | Software Engineering |
| Meta | Software Engineer, Infrastructure | 2024-01-16 | Burlingame | CA |  | Software Engineering |
| Meta | Software Engineer, Infrastructure | 2024-01-14 | Burlingame | CA |  | Software Engineering |
| Glean | Software Engineer, Machine Learning | 2024-01-16 | Palo Alto | CA | On-site | Data Science,Software Engineering |
| Meta | Software Engineer, Machine Learning | 2024-01-15 | Bellevue | WA |  | Data Science,Software Engineering |
| Meta | Software Engineer, Metaverse Engine Technology - Reality Labs | 2024-01-15 | Burlingame | CA |  | Software Engineering |
| Palantir Technologies | Software Engineer, New Grad | 2024-01-15 | New York | NY | Hybrid | Software Engineering |
| Meta | Software Engineer, Product | 2024-01-15 | Fremont | CA |  | Software Engineering |
| Meta | Software Engineer, Product | 2024-01-14 | Fremont | CA |  | Software Engineering |
| Meta | Software Engineer, Product | 2024-01-14 | San Francisco | CA |  | Software Engineering |
| Wayfair | Software Engineer, Search and Recommendations | 2024-01-14 | Mountain View | CA | On-site | Software Engineering |
| Fastly | Software Engineer, Summer Undergraduate Intern | 2024-01-16 | San Francisco | CA | Hybrid | Software Engineering |
| Fastly | Software Engineer, Summer Undergraduate Intern | 2024-01-15 | San Francisco | CA | Hybrid | Software Engineering |
| Adept | Software Engineer, Supercomputing | 2024-01-15 | San Francisco | CA | Remote | Software Engineering |
| Meta | Software Engineer, Systems ML | 2024-01-15 | Burlingame | CA |  | Software Engineering |
| Meta | Software Engineer, Systems ML | 2024-01-15 | New York | NY |  | Software Engineering |
| Anduril Industries | Software Engineer, Web Infrastructure | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Meta | Software Engineer, iOS | 2024-01-15 | Sunnyvale | CA |  | Software Engineering |
| Corteva Agriscience | Software Engineering Lead | 2024-01-15 | Indianapolis | IN | On-site | Software Engineering |
| Fluxus, Inc. | Software Engineering Leader | 2024-01-14 | Sunnyvale | CA | On-site | Software Engineering |
| Cisco | Software Engineering Technical Leader | 2024-01-15 | San Jose | CA | Remote | Software Engineering |
| Merck | Software Product Manager | 2024-01-16 | San Diego | CA | On-site | Software Engineering,Product Management |
| Systems Planning and Analysis, Inc. | Software Product Manager | 2024-01-16 | Los Angeles County | CA | On-site | Software Engineering,Product Management |
| Ursus, Inc.  | Software Product Manager | 2024-01-16 | San Jose | CA | Hybrid | Software Engineering,Product Management |
| Knowledge Relay | Software Product Manager (Contract) | 2024-01-14 | Cypress | CA | Remote | Product Management,Software Engineering |
| Talascend - Where Opportunities Await. | Software Quality Assurance Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Anduril Industries | Software Reliability Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Shield AI | Software Systems Engineer (R2433) | 2024-01-16 | San Diego Metropolitan Area | CA | On-site | Software Engineering |
| Google | Software Test Engineer | 2024-01-15 | Kirkland | WA | On-site | Software Engineering |
| Tesla | Software Validation Engineer, Hardware in the Loop, Crash Safety | 2024-01-16 | Palo Alto | CA | On-site | Software Engineering |
| Meta | Software engineer (Leadership) - Infrastructure | 2024-01-15 | United States | CA | Remote | Software Engineering |
| Meta | Software engineer (Leadership) - Infrastructure | 2024-01-14 | Burlingame | CA |  | Software Engineering |
| Better Earth | Solar Consultant | 2024-01-14 | Santa Ana | CA | On-site |  |
| Better Earth | Solar Consultant | 2024-01-14 | Temecula | CA | On-site |  |
| BayWa r.e. Americas | Solar Pre-Construction Project Coordinator | 2024-01-14 | Sacramento | CA | On-site |  |
| Golden West Packaging Group | Solidworks Design & Estimating Manager | 2024-01-14 | Lathrop | CA | Hybrid |  |
| Esri | Solution Engineer - Commercial Health | 2024-01-16 | Redlands | CA |  |  |
| Esri | Solution Engineer - Commercial Health | 2024-01-15 | Olympia | WA |  |  |
| Esri | Solution Engineer - Commercial Health | 2024-01-15 | Philadelphia | PA |  |  |
| Esri | Solution Engineer - Commercial Health | 2024-01-15 | Redlands | CA |  |  |
| Esri | Solution Engineer - Commercial Health | 2024-01-15 | St Louis | MO |  |  |
| Glean | Solutions Engineer | 2024-01-16 | Palo Alto | CA | On-site |  |
| Coactive AI | Solutions Engineer (Machine Learning) | 2024-01-14 | San Jose | CA | Hybrid | Data Science,Software Engineering |
| American Express Global Business Travel | Solutions Manager | 2024-01-16 | United States | CA | Remote |  |
| Writer | Solutions architect (pre-sales) | 2024-01-15 | San Francisco Bay Area | CA | Remote | Marketing & Sales |
| Educated Solutions Corp | Sourcer | 2024-01-14 | United States | CA | Remote |  |
| TikTok | Sourcer - Technical - DataAILab (Third-party Contractor) | 2024-01-16 | Los Angeles | CA |  |  |
| Sara's Market & Bakery | Sous Chef | 2024-01-16 | Richardson | TX | On-site |  |
| Fusion Academy | Spanish Teacher | 2024-01-15 | San Rafael | CA | On-site | Education & Teaching |
| The Stepping Stones Group, LLC | Special Education Teacher | 2024-01-15 | South Pasadena | CA | On-site | Education & Teaching |
| Aya Education | Special Education Teacher job in Atascadero, CA - Make $2,635 - $2,792/week | 2024-01-14 | Atascadero | CA | On-site | Education & Teaching |
| Aya Education | Special Education Teacher job in Rohnert Park, CA - Make $1,889 - $2,088/week | 2024-01-14 | Rohnert Park | CA | On-site | Education & Teaching |
| DaVita Kidney Care | Specialist, People Services | 2024-01-15 | Sacramento | CA | On-site |  |
| Hartmann Young | Spine Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| Skechers | Sports Marketing Coordinator | 2024-01-14 | Manhattan Beach | CA | On-site | Marketing & Sales |
| Instacart | Spread Operations Program Lead (Contract) | 2024-01-16 | San Francisco | CA | Remote |  |
| Uber | Sr Actuarial Analyst, Corporate Pricing & Reserving | 2024-01-16 | New York | NY |  | Finance & Accounting |
| Uber | Sr Actuarial Analyst, Corporate Pricing & Reserving | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| Arrowmac | Sr Amazon Ecommerce Account Manager | 2024-01-14 | West Covina | CA | Hybrid | Marketing & Sales |
| Rambus | Sr Analog Mixed-Signal Engineer | 2024-01-14 | Agoura Hills | CA | Hybrid |  |
| Uber | Sr Business Development Associate, Vehicle & New Growth Partnerships | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| Thermo Fisher Scientific | Sr Business Manager | 2024-01-15 | Greenville | NC |  |  |
| BioSpace | Sr Data Engineer - R&D Connected Data | 2024-01-14 | Thousand Oaks | CA | Hybrid | Data Engineering |
| Uber | Sr Data Scientist, Ads & Offers | 2024-01-16 | New York | NY | On-site | Data Science |
| Mattel, Inc. | Sr Demand Planner | 2024-01-14 | El Segundo | CA | On-site | Project Management |
| Rambus | Sr Director Marketing | 2024-01-15 | San Jose | CA | Hybrid | Marketing & Sales |
| Cisco | Sr Director of Product Marketing - Security | 2024-01-15 | San Jose | CA |  | Product Management,Marketing & Sales |
| Xperi Inc. | Sr Director, Revenue Recognition and Billing | 2024-01-15 | San Jose | CA | On-site | Finance & Accounting |
| Adobe | Sr Full Stack Engineer | 2024-01-16 | San Jose | CA |  | Software Engineering |
| M2 Ingredients | Sr Human Resources Generalist | 2024-01-16 | Vista | CA | On-site |  |
| M2 Ingredients | Sr Human Resources Generalist | 2024-01-14 | Vista | CA | On-site |  |
| Workday | Sr Machine Learning Product Manager | 2024-01-15 | Boulder | CO | Hybrid | Product Management,Data Science,Software Engineering |
| Apartment Association of Orange County | Sr Marketing Specialist | 2024-01-14 | Costa Mesa | CA | Hybrid | Marketing & Sales |
| Cadence Design Systems | Sr Principal Application Engineer Data Center | 2024-01-14 | San Jose | CA | Hybrid |  |
| BioSpace | Sr Principal Scientist Computational Biology AI/ML | 2024-01-14 | Thousand Oaks | CA |  | Data Science,Software Engineering |
| Palo Alto Networks | Sr Principal Software Engineer (SaaS Platform) | 2024-01-14 | Santa Clara | CA | On-site | Software Engineering |
| Monster Energy | Sr Product Manager Java - USA | 2024-01-14 | Corona | CA | Hybrid | Product Management |
| Lightspeed Systems | Sr Product Manager/Technical Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| Odyssey Information Services | Sr SAP Developer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Glocomms | Sr SRE, Data Infrastructure - Social Media Giant in San Jose | 2024-01-14 | San Jose | CA | Hybrid | Software Engineering |
| F5 | Sr Security Engineer - DevSecOps | 2024-01-14 | San Jose | CA | Hybrid | Software Engineering |
| Zeektek | Sr UX Designer | 2024-01-14 | United States | CA | Remote | Designers |
| Box | Sr. Analyst, Sales Compensation | 2024-01-15 | San Francisco | CA |  | Finance & Accounting,Marketing & Sales |
| Uber | Sr. Applied Scientist - Delivery Pricing | 2024-01-16 | New York | NY |  | Finance & Accounting |
| Uber | Sr. Applied Scientist - Delivery Pricing | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| ConglomerateIT LLC | Sr. Backup and Storage Engineer | 2024-01-14 | United States | CA | Remote |  |
| Sumitomo Mitsui Banking Corporation | Sr. Business Analyst - Associate | 2024-01-15 | New York | NY | Hybrid | Finance & Accounting,Data Science |
| Esri | Sr. C++ Software Engineer - Graph Algorithms | 2024-01-16 | Redlands | CA | Hybrid | Software Engineering |
| Mechanics Bank | Sr. Call Center Representative (FT with varied schedules) | 2024-01-14 | Irvine | CA | On-site | Marketing & Sales |
| Gallagher | Sr. Compensation Consultant: Remote / Work-From-Home | 2024-01-15 | Berkeley | CA | On-site | Finance & Accounting |
| Anduril Industries | Sr. Data Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Data Engineering |
| BravoTECH | Sr. Data Manager- HYBRID to Irving, TX | 2024-01-15 | Dallas-Fort Worth Metroplex |  | On-site |  |
| Uber | Sr. Data Scientist, Reservations | 2024-01-16 | Seattle | WA |  | Data Science |
| Rivian | Sr. Design for Sustainability - Product Lead | 2024-01-14 | Palo Alto | CA | On-site |  |
| Karma Automotive | Sr. Designer - Exterior | 2024-01-16 | Irvine | CA |  | Designers |
| Deckers Brands | Sr. Designer - Teva | 2024-01-16 | Santa Barbara | CA |  | Designers |
| UGG | Sr. Designer – UGG Outlet & Koolaburra | 2024-01-16 | Santa Barbara | CA | On-site | Designers |
| El Pollo Loco, Inc. | Sr. Director of Human Resources | 2024-01-14 | Costa Mesa | CA | On-site |  |
| BioSpace | Sr. Director – AI Authoring Capability Platform Delivery | 2024-01-15 | Indianapolis | IN | Remote |  |
| Adobe | Sr. Director, Adobe Federal Sales | 2024-01-15 | District of Columbia |  |  | Marketing & Sales |
| Adobe | Sr. Director, Adobe Federal Sales | 2024-01-15 | Maryland | MD | Remote | Marketing & Sales |
| Adobe | Sr. Director, Adobe Federal Sales | 2024-01-15 | Virginia | VA | Remote | Marketing & Sales |
| MyEyeDr. | Sr. Director, Field Human Resources | 2024-01-14 | United States | CA | Remote |  |
| Capital One | Sr. Director, Product Manager, The Exchange | 2024-01-16 | San Francisco | CA |  | Product Management |
| Capital One | Sr. Distinguished Applied Researcher | 2024-01-16 | San Francisco | CA |  |  |
| Capital One | Sr. Distinguished Engineer - Personalized Mobile Experience | 2024-01-16 | San Francisco | CA |  |  |
| Supernal | Sr. Flight Controls Systems Software Engineer | 2024-01-14 | Irvine | CA | On-site | Software Engineering |
| Doppler | Sr. Full Stack Engineer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Amazon | Sr. HR Business Partner | 2024-01-15 | Stockton | CA |  | HR & Recruiting |
| CIM Group | Sr. HR Business Partner (Director Level) | 2024-01-14 | Los Angeles | CA | On-site | HR & Recruiting |
| IDR, Inc. | Sr. HRIS Coordinator | 2024-01-14 | Los Angeles | CA |  |  |
| Supermicro | Sr. IT Systems Engineer | 2024-01-14 | San Jose | CA |  | Software Engineering |
| The Walt Disney Company | Sr. Machine Learning Engineer | 2024-01-14 | Burbank | CA | On-site | Data Engineering,Data Science,Software Engineering |
| GoodRx | Sr. Machine Learning Engineer II | 2024-01-15 | New York | NY | On-site | Data Engineering,Data Science,Software Engineering |
| Amazon | Sr. Machine Learning Engineer, Amazon | 2024-01-15 | Seattle | WA |  | Data Engineering,Data Science,Software Engineering |
| Henny Penny | Sr. Manager - Analytics | 2024-01-15 | Eaton | OH | Hybrid | Data Science |
| Warner Bros. Discovery | Sr. Manager, Content Strategy & Analysis - US Licensing | 2024-01-14 | Culver City | CA | On-site |  |
| PatientPoint® | Sr. Manager, Product, Advertising Technology & Monetization | 2024-01-15 | New York | NY | Remote |  |
| NetApp | Sr. Marketing Technologist, Solutions Marketing, AI Solutions | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Tellagence | Sr. Marketing and Social Media Analyst | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Supernal | Sr. Materials & Process Engineer (NDI Development) | 2024-01-14 | Irvine | CA | On-site |  |
| Supernal | Sr. Mechanical Design Engineer | 2024-01-14 | Irvine | CA | On-site |  |
| Alphawave IP Group | Sr. NPI Planning and Procurement Manager | 2024-01-16 | Milpitas | CA | On-site |  |
| Nationwide | Sr. Paralegal | 2024-01-14 | California | CA |  | Legal |
| Tesla | Sr. Paralegal, Employment | 2024-01-16 | Fremont | CA | On-site | Legal |
| TTM Technologies | Sr. Process Engineer - Mechanical | 2024-01-14 | San Diego | CA | On-site |  |
| Alpine Home Air | Sr. Product Designer, UX/UI (Remote) | 2024-01-14 | United States | CA | Remote | Designers |
| MedBridge | Sr. Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| Tillster | Sr. Product Manager | 2024-01-16 | Los Angeles County | CA | Remote | Product Management |
| myPlace Health | Sr. Product Manager - Interoperability | 2024-01-16 | Los Angeles | CA | On-site | Product Management |
| CrowdStrike | Sr. Product Manager - Marketplace and Licensing (Remote) | 2024-01-16 | Sunnyvale | CA | Remote | Product Management |
| Amazon | Sr. Product Manager - Video Search, Visual Search and Augmented Reality | 2024-01-16 | Palo Alto | CA |  | Product Management |
| Amazon | Sr. Product Manager - Video Search, Visual Search and Augmented Reality | 2024-01-15 | Palo Alto | CA |  | Product Management |
| Amazon Web Services (AWS) | Sr. Product Manager -Tech | 2024-01-16 | Santa Clara | CA |  | Product Management |
| Amazon Web Services (AWS) | Sr. Product Manager -Tech | 2024-01-15 | Santa Clara | CA |  | Product Management |
| Adobe | Sr. Product Manager, CC Japan, International Strategy & Product Management | 2024-01-16 | San Jose | CA |  | Product Management |
| Blockchains, Inc. | Sr. Product Manager, Data Marketplace | 2024-01-15 | United States | CA | Remote | Product Management |
| Amazon | Sr. Product Manager, Fraud Prevention, Vendor Investigations & Transaction Accuracy | 2024-01-15 | Seattle | WA |  | Product Management |
| Apollo.io | Sr. Product Manager, Notes and Meetings (Events) | 2024-01-16 | United States | CA | Remote | Product Management |
| Cardinal Health | Sr. Product Manager, Pharmaceutical Product Development and Portfolio Management - Nationwide | 2024-01-15 | California | CA | Remote | Product Management |
| Cardinal Health | Sr. Product Manager, Pharmaceutical Product Development and Portfolio Management - Nationwide | 2024-01-15 | United States | CA | Remote | Product Management |
| Tinder | Sr. Product Manager, Promos | 2024-01-15 | San Francisco | CA | Hybrid | Product Management |
| Tinder | Sr. Product Manager, Promos | 2024-01-14 | San Francisco | CA | Hybrid | Product Management |
| Amazon | Sr. Product Manager-Technical , Worldwide Real Estate Engineering | 2024-01-16 | San Francisco | CA |  | Software Engineering,Product Management |
| Box | Sr. Product Marketing Manager - Enterprise Content Management & Workflows | 2024-01-15 | Redwood City | CA |  | Product Management,Marketing & Sales |
| Box | Sr. Product Marketing Manager - Enterprise Content Management & Workflows | 2024-01-15 | San Francisco | CA |  | Product Management,Marketing & Sales |
| DataRobot | Sr. Product Marketing Manager, AI Observability | 2024-01-14 | San Francisco | CA |  | Product Management,Marketing & Sales |
| Pinterest | Sr. Product Marketing Manager, Ads | 2024-01-15 | San Francisco | CA | Remote | Product Management,Marketing & Sales |
| Pinterest | Sr. Product Marketing Manager, Ads | 2024-01-15 | United States | CA | Remote | Product Management,Marketing & Sales |
| Aha! | Sr. Product Success Manager (Product management experience required) | 2024-01-15 | Buffalo | NY | Remote | Product Management |
| Trailer Park Group | Sr. Production Manager (Print) | 2024-01-14 | West Hollywood | CA | Hybrid |  |
| PSC Biotech Corporation | Sr. Project Manager | 2024-01-16 | Oceanside | CA | On-site | Project Management |
| WestRock Company | Sr. Recruiter/ Skilled Trades | 2024-01-16 | California | CA | Remote | HR & Recruiting |
| Aha! | Sr. Ruby on Rails Engineer (Frameworks) | 2024-01-15 | Buffalo | NY | Remote |  |
| MediaNews Group | Sr. Sales Development Manager | 2024-01-14 | Irvine | CA | Hybrid | Marketing & Sales |
| Supermicro | Sr. Sales Manager | 2024-01-14 | San Jose | CA |  | Marketing & Sales |
| Net2Source Inc. | Sr. Salesforce Integration Developer Analyst | 2024-01-16 | Los Angeles County | CA | Hybrid | Software Engineering |
| BioSpace | Sr. Scientist - Soluble Biomarker Laboratory, Clinical Assay Development | 2024-01-14 | South San Francisco | CA | Hybrid |  |
| Aha! | Sr. Security Engineer (Ruby on Rails experience required) | 2024-01-15 | Buffalo | NY | Remote | Software Engineering |
| Workday | Sr. Software Engineer | 2024-01-15 | Pleasanton | CA | Hybrid | Software Engineering |
| INSPYR Solutions | Sr. Software Engineer - Long Term Project - Remote (EST/PST) | 2024-01-16 | Santa Monica | CA | Remote | Software Engineering |
| Couchbase | Sr. Software Engineer - ML/AI | 2024-01-15 | Santa Clara | CA | Hybrid | Software Engineering |
| Alcon | Sr. Software Engineer OCT | 2024-01-14 | Lake Forest | CA |  | Software Engineering |
| Wella Company | Sr. Specialist, Regulatory Affairs | 2024-01-16 | Calabasas | CA | Hybrid |  |
| LinkedIn | Sr. Staff Software Engineer - Anti-Abuse AI | 2024-01-15 | Mountain View | CA | Hybrid | Software Engineering |
| Uber | Sr. Staff Technical Program Manager, Uber Eats | 2024-01-16 | San Francisco | CA |  | Project Management |
| Uber | Sr. Staff Technical Program Manager, Uber Eats | 2024-01-16 | Seattle | WA |  | Project Management |
| Tivity Health | Sr. Strategist, Marketing Technology - remote opportunity | 2024-01-15 | United States | CA | Remote | Marketing & Sales |
| Supermicro | Sr. System Product Manager | 2024-01-16 | San Jose | CA |  | Product Management |
| Backblaze | Sr. Talent Development Partner | 2024-01-16 | San Francisco Bay Area | CA | Hybrid |  |
| OpExpert- Consulting | Sr. Technical Designer- Fashion | 2024-01-14 | Irvine | CA | Hybrid | Designers |
| Neo4j | Sr. Technical Product Marketing Manager (Remote) | 2024-01-16 | Los Angeles | CA | Remote | Marketing & Sales,Product Management |
| Neo4j | Sr. Technical Product Marketing Manager (Remote) | 2024-01-16 | San Francisco | CA | Remote | Marketing & Sales,Product Management |
| Neo4j | Sr. Technical Product Marketing Manager (Remote) | 2024-01-14 | San Francisco | CA | Remote | Product Management,Marketing & Sales |
| Inversion | Sr. Technical Recruiter | 2024-01-16 | Torrance | CA | On-site | HR & Recruiting |
| YMCA of San Francisco | Sr. Vice President, Chief People Officer | 2024-01-15 | San Francisco | CA | On-site |  |
| YMCA of San Francisco | Sr. Vice President, Chief People Officer | 2024-01-14 | San Francisco | CA | On-site |  |
| Panda Restaurant Group | Sr. Workplace Counsel | 2024-01-16 | Rosemead | CA | Hybrid |  |
| PriceSenz | Sr./Staff WiFi MAC Software Engineer | 2024-01-14 | Santa Clara County | CA | On-site | Software Engineering |
| Harnham | Staff AI Engineer | 2024-01-16 | Palo Alto | CA |  | Data Science,Software Engineering |
| Nextdoor | Staff Android Engineer | 2024-01-15 | San Francisco | CA | Hybrid |  |
| Uber | Staff Applied Scientist - Trip Pricing | 2024-01-16 | San Francisco | CA |  | Finance & Accounting |
| La Maestra Community Health Centers | Staff Attorney | 2024-01-14 | San Diego | CA | Hybrid | Legal |
| California Rural Legal Assistance, Inc. | Staff Attorney - Rural Justice Unit (Hybrid) | 2024-01-16 | Modesto-Merced Area | CA | On-site | Legal |
| AppLovin | Staff Backend Engineer | 2024-01-16 | Palo Alto | CA |  | Software Engineering |
| Zscaler | Staff Cloud Security Engineer | 2024-01-14 | San Jose | CA |  | Data Engineering,Software Engineering |
| AmTrust Financial Services, Inc. | Staff Counsel -Workers Compensation | 2024-01-16 | Irvine | CA | Remote | Finance & Accounting |
| AmTrust Financial Services, Inc. | Staff Counsel -Workers Compensation | 2024-01-16 | Los Angeles | CA | Remote | Finance & Accounting |
| Integral Ad Science | Staff Data Scientist | 2024-01-15 | New York | NY | Hybrid | Data Science |
| Integral Ad Science | Staff Data Scientist | 2024-01-15 | San Francisco | CA | Hybrid | Data Science |
| BlackLine | Staff Database Engineer | 2024-01-15 | Pleasanton | CA | Hybrid | Software Engineering |
| DoorDash | Staff Design Systems Designer, Motion | 2024-01-15 | San Francisco | CA |  | Designers |
| DoorDash | Staff Design Systems Designer, Motion | 2024-01-15 | Sunnyvale | CA |  | Designers |
| Visa | Staff Designer | 2024-01-16 | Foster City | CA |  | Designers |
| Mercedes-Benz Research & Development North America, Inc. | Staff Machine Learning Engineer | 2024-01-14 | Sunnyvale | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Anduril Industries | Staff Mission Software Engineer, General | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Rivian | Staff PCB Designer | 2024-01-14 | Palo Alto | CA | On-site | Designers |
| Databricks | Staff Product Manager, AI Models | 2024-01-15 | San Francisco | CA |  | Product Management |
| Grammarly | Staff Product Manager, Core | 2024-01-15 | California | CA | Hybrid | Product Management |
| Grammarly | Staff Product Manager, Core | 2024-01-15 | New York | NY | Hybrid | Product Management |
| Warner Bros. Discovery | Staff Product Manager, Design Systems | 2024-01-14 | Burbank | CA | Hybrid | Product Management |
| Vanta | Staff Program Manager, Marketing | 2024-01-15 | San Francisco | CA | Remote | Project Management,Marketing & Sales |
| Uber | Staff Security Engineer - Product Security | 2024-01-16 | San Francisco | CA |  | Software Engineering |
| Egnyte | Staff Software Engineer | 2024-01-15 | Mountain View | CA | Hybrid | Software Engineering |
| Gather | Staff Software Engineer | 2024-01-16 | San Francisco Bay Area | CA | On-site | Software Engineering |
| Nutanix | Staff Software Engineer | 2024-01-15 | San Jose | CA | On-site | Software Engineering |
| Palo Alto Networks | Staff Software Engineer (Fullstack/Frontend - SaaS Security) | 2024-01-14 | Santa Clara | CA | On-site | Software Engineering |
| Harness | Staff Software Engineer - Golang | 2024-01-15 | Mountain View | CA |  | Software Engineering |
| Databricks | Staff Software Engineer - Web Security | 2024-01-14 | San Francisco | CA | On-site | Software Engineering |
| TikTok | Staff Software Engineer Android, TikTok Camera | 2024-01-14 | San Jose | CA |  | Software Engineering |
| Google | Staff Software Engineer, AI Infrastructure, Google Public Sector | 2024-01-16 | Mountain View | CA | On-site | Software Engineering |
| Block | Staff Software Engineer, Bitkey | 2024-01-16 | San Francisco | CA | Remote | Software Engineering |
| SoFi | Staff Software Engineer, Front End (Contract) | 2024-01-16 | San Francisco | CA |  | Software Engineering |
| NVIDIA | Staff Software Engineer, Full Stack | 2024-01-16 | Santa Clara | CA |  | Software Engineering |
| Google | Staff Software Engineer, Full Stack, Labs | 2024-01-15 | Mountain View | CA | On-site | Software Engineering |
| Google | Staff Software Engineer, Machine Learning, Google Cloud Platform AI and Industry Solutions | 2024-01-15 | New York | NY | On-site | Data Science,Software Engineering |
| Google | Staff Software Engineer, Machine Learning, Google Cloud Platform AI and Industry Solutions | 2024-01-15 | San Francisco | CA | On-site | Data Science,Software Engineering |
| Google | Staff Software Engineer, Machine Learning, Google Cloud Platform AI and Industry Solutions | 2024-01-15 | Seattle | WA | On-site | Data Science,Software Engineering |
| Google | Staff Software Engineer, Machine Learning, Google Cloud Platform AI and Industry Solutions | 2024-01-15 | Sunnyvale | CA | On-site | Data Science,Software Engineering |
| Reddit, Inc. | Staff Software Engineer, Revenue Lifecycle | 2024-01-15 | San Francisco | CA |  | Finance & Accounting,Software Engineering |
| Zoox | Staff Software Engineer, Secure Embedded Operating Systems | 2024-01-14 | Foster City | CA | Hybrid | Software Engineering |
| General Atomics | Staff Systems Engineer | 2024-01-14 | Poway | CA | Hybrid | Software Engineering |
| Grifols | Staff Systems Engineer | 2024-01-14 | San Diego Metropolitan Area | CA | On-site | Software Engineering |
| ServiceNow | Staff Systems Engineer | 2024-01-16 | San Diego | CA | On-site | Software Engineering |
| Handshake | Staff+ Machine Learning Engineer - Generative AI | 2024-01-15 | San Francisco | CA | Hybrid | Data Engineering,Data Science,Software Engineering |
| Walmart | Staff, Product Manager - Global Exports - Marketplace | 2024-01-16 | Sunnyvale | CA |  | Product Management |
| Walmart | Staff, Software Engineer | 2024-01-14 | Sunnyvale | CA |  | Software Engineering |
| Freed Associates | Staffing & Operations Coordinator | 2024-01-15 | San Francisco Bay Area | CA | Hybrid | HR & Recruiting |
| Net2Source Inc. | Staffing Account Manager | 2024-01-14 | San Francisco Bay Area | CA | Remote | HR & Recruiting,Marketing & Sales |
| PeopleReady | Staffing Specialist - Onsite | 2024-01-16 | Calimesa | CA | On-site | HR & Recruiting |
| PeopleReady | Staffing Specialist - Onsite | 2024-01-16 | El Centro | CA | On-site | HR & Recruiting |
| PeopleReady | Staffing Specialist - Onsite | 2024-01-16 | Upland | CA | On-site | HR & Recruiting |
| Ann & Robert H. Lurie Children's Hospital of Chicago | Statistician (PhD) | 2024-01-15 | Chicago | IL | Hybrid |  |
| Egnyte | Stock Plan Administrator | 2024-01-15 | Mountain View | CA | Hybrid |  |
| Sherwin-Williams | Store Associate | 2024-01-14 | Chico | CA | On-site |  |
| Sherwin-Williams | Store Customer Service Specialist | 2024-01-14 | Fremont | CA | On-site | Marketing & Sales |
| Sherwin-Williams | Store Customer Service Specialist | 2024-01-14 | Merced | CA | On-site | Marketing & Sales |
| Sherwin-Williams | Store Customer Service Specialist | 2024-01-14 | Modesto | CA | On-site | Marketing & Sales |
| Sherwin-Williams | Store Customer Service Specialist | 2024-01-14 | Mountain View | CA | On-site | Marketing & Sales |
| Sherwin-Williams | Store Customer Service Specialist | 2024-01-14 | San Diego | CA | On-site | Marketing & Sales |
| Sherwin-Williams | Store Customer Service Specialist | 2024-01-14 | San Jose | CA | On-site | Marketing & Sales |
| Sherwin-Williams | Store Customer Service Specialist - Monterey | 2024-01-14 | Monterey | CA | On-site | Marketing & Sales |
| Sun Auto Tire & Service | Store Manager - Automotive Repair | 2024-01-14 | San Jose | CA | On-site |  |
| Insomnia Cookies | Store Manager in Training (MIT) | 2024-01-14 | Berkeley | CA | On-site |  |
| Extra Space Storage | Store Manager($18-$20/hr + monthly incentive opportunities) | 2024-01-14 | Glendale | CA | On-site | HR & Recruiting |
| HDR | Stormwater/Water Resources Project Manager | 2024-01-14 | Irvine | CA | On-site | Project Management |
| Uber | Strategic Operations Associate, Investment Allocation | 2024-01-16 | Chicago | IL |  | Finance & Accounting |
| Uber | Strategic Operations Associate, Investment Allocation | 2024-01-16 | New York | NY |  | Finance & Accounting |
| Uber | Strategic Operations Associate, Investment Allocation | 2024-01-16 | Washington | WA |  | Finance & Accounting |
| Uber | Strategic Operations Manager, US&C Delivery - Merchant Operations | 2024-01-16 | San Francisco | CA |  |  |
| Aditi Consulting | Strategic Partner Manager - IV | 2024-01-15 | New York | NY | Remote |  |
| Uber | Strategy & Operations Manager, Uber Direct - Growth Analytics | 2024-01-16 | New York | NY |  | Data Science |
| Uber | Strategy & Operations Manager, Uber Direct - Growth Analytics | 2024-01-16 | San Francisco | CA |  | Data Science |
| Anduril Industries | Strategy Director, EUCOM | 2024-01-15 | Costa Mesa | CA | On-site |  |
| International Paper | Structural Designer | 2024-01-16 | Gilroy | CA |  | Designers |
| Georgia-Pacific LLC | Structural Designer Packaging | 2024-01-16 | Fresno | CA | On-site | Designers |
| Georgia-Pacific LLC | Structural Designer Packaging | 2024-01-16 | Madera | CA | On-site | Designers |
| Verily | Study Operations Patient Recruitment Manager | 2024-01-16 | South San Francisco | CA | Hybrid | HR & Recruiting |
| Marrow Fine Jewelry | Stylist | 2024-01-14 | Newport Beach | CA | On-site |  |
| HDR | Substation Project Engineer | 2024-01-14 | Irvine | CA | On-site |  |
| Grow Public Schools | Substitute Teacher | 2024-01-16 | Kern County | CA | On-site | Education & Teaching |
| Scoot Education | Substitute Teacher K-12 | 2024-01-14 | Watsonville | CA | On-site | Education & Teaching |
| CalOptima | Supervisor, Claims (Operational Support) | 2024-01-15 | Orange County | CA | On-site |  |
| US Army Corps of Engineers | Supervisory Deputy Chief (Interdisciplinary) | 2024-01-15 | Chicago | IL | On-site |  |
| Anduril Industries | Supplier Quality Engineer (Avionics Composites) | 2024-01-14 | Costa Mesa | CA | On-site |  |
| Northrop Grumman | Supply Chain Planning Specialist (Level 3 or 4) | 2024-01-14 | Palmdale | CA |  |  |
| Children's Hospital Los Angeles (CHLA) | Supv Clinical Services / BMT | 2024-01-14 | Los Angeles | CA | On-site |  |
| Cedars-Sinai | Surgery - General - Trauma and Acute Care Surgery Clinical Faculty | 2024-01-16 | Los Angeles | CA | On-site |  |
| H2scan Corporation | Sustaining Engineer and Document Control Manager | 2024-01-14 | Santa Clarita | CA | On-site |  |
| Supermicro | System Engineer | 2024-01-14 | San Jose | CA |  | Software Engineering |
| NVIDIA | System Software Engineer - GPU Server | 2024-01-16 | Santa Clara | CA |  | Software Engineering |
| Talascend - Where Opportunities Await. | System Transients Methodology Engineer | 2024-01-14 | United States | CA | Remote |  |
| Supermicro | System Validation Engineer | 2024-01-14 | San Jose | CA |  |  |
| Venture Search | Systematic Macro - Portfolio Manager | 2024-01-15 | New York | NY | On-site | Finance & Accounting |
| Curtis Instruments, A Kohler Co. | Systems Engineer | 2024-01-15 | Livermore | CA | Hybrid | Software Engineering |
| Green Expert Technology Inc. (GreenXT) | Systems Engineer | 2024-01-14 | Huntington Beach | CA | On-site | Software Engineering |
| Skyryse | Systems Engineer | 2024-01-16 | El Segundo | CA | On-site | Software Engineering |
| SAIC | Systems Engineer Chief | 2024-01-14 | California | CA | Remote | Software Engineering |
| Recology | Systems Implementation Project Manager - Corporate ONLY | 2024-01-16 | California | CA | On-site | Project Management |
| Anduril Industries | Systems Security Engineer | 2024-01-14 | Costa Mesa | CA | On-site | Software Engineering |
| Accenture | T&D AMI Consultant | 2024-01-14 | Los Angeles Metropolitan Area | CA |  |  |
| Accenture | T&D TL&E Manager | 2024-01-14 | San Francisco | CA | On-site |  |
| Employment Development Department | TAX AUDITOR, EMPLOYMENT DEVELOPMENT DEPARTMENT | 2024-01-14 | Long Beach | CA |  | Finance & Accounting |
| Employment Development Department | TAX AUDITOR, EMPLOYMENT DEVELOPMENT DEPARTMENT | 2024-01-14 | Los Angeles | CA |  | Finance & Accounting |
| CA Department of Corrections & Rehabilitation | TEACHER (ELEMENTARY-MULTIPLE SUBJECTS) (CORRECTIONAL FACILITY) | 2024-01-15 | Kern County | CA | On-site | Education & Teaching |
| CA Department of Corrections & Rehabilitation | TEACHER (HIGH SCHOOL-GENERAL EDUCATION) (CORRECTIONAL FACILITY) | 2024-01-15 | Lassen County | CA | On-site | Education & Teaching |
| Resource Informatics Group, Inc | Tableau / Reporting Engineer | 2024-01-14 | United States | CA | Remote |  |
| Infinite Computer Solutions | Tableau Administrator | 2024-01-15 | United States |  | Remote |  |
| Panda Restaurant Group | Talent Acquisition Coordinator (Field) - Arkansas | 2024-01-14 | United States | CA | Remote | HR & Recruiting |
| Tencent | Talent Acquisition Intern | 2024-01-16 | California | CA |  | HR & Recruiting |
| Prime Healthcare | Talent Acquisition Lead, Executive Search | 2024-01-16 | Ontario | CA |  | HR & Recruiting |
| Prime Healthcare | Talent Acquisition Lead, Executive Search | 2024-01-15 | Ontario | CA |  | HR & Recruiting |
| Senior Aerospace SSP | Talent Acquisition Recruiter | 2024-01-16 | Burbank | CA | On-site | HR & Recruiting |
| Northwestern Mutual | Talent Acquisition Specialist | 2024-01-16 | Anaheim | CA | On-site | HR & Recruiting |
| MLK Community Healthcare | Talent Acquisition Specialist Temporary | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | HR & Recruiting |
| Adobe | Talent Development Partner | 2024-01-16 | San Francisco | CA |  |  |
| Adobe | Talent Development Partner | 2024-01-16 | San Jose | CA |  |  |
| Adobe | Talent Development Partner | 2024-01-15 | San Francisco | CA |  |  |
| Adobe | Talent Development Partner | 2024-01-15 | San Jose | CA |  |  |
| San Francisco International Airport | Talent Mobility Engagement Partner | 2024-01-16 | San Francisco Bay Area | CA | Hybrid |  |
| City and County of San Francisco | Talent Mobility Engagement Partner - SFO (1844) - (142859) | 2024-01-16 | San Francisco | CA | On-site |  |
| Trinity Health | Talent Sourcing Partner (On-Site) ~ Talent Acquisition | 2024-01-14 | Fresno | CA |  | HR & Recruiting |
| Optum | Tapestry Benefit Analyst 1 - Remote | 2024-01-15 | Redlands | CA | Remote |  |
| Ulta Beauty | Task Associate | 2024-01-14 |  California |  | On-site |  |
| Ulta Beauty | Task Associate | 2024-01-14 | Escondido | CA | On-site |  |
| Wood LLP | Tax Attorney | 2024-01-16 | San Francisco | CA | Remote | Legal,Finance & Accounting |
| PwC | Tax Director - Personal Financial Services | 2024-01-15 | West Palm Beach | FL | On-site | Finance & Accounting |
| H&R Block | Tax Preparer - Franchise Location | 2024-01-16 | Los Osos | CA | On-site | Finance & Accounting |
| H&R Block | Tax Preparer Assistant - Franchise Location | 2024-01-16 | Lakeport | CA | On-site | Finance & Accounting |
| H&R Block | Tax Professional - New Experienced | 2024-01-16 | Clovis | CA | On-site | Finance & Accounting |
| JDHuntr In-House Counsel Jobs | Tax Strategy Counsel | 2024-01-14 | San Francisco | CA | Hybrid | Finance & Accounting |
| EF English First  | Teach English in Beautiful Indonesia | 2024-01-14 | California | CA | On-site |  |
| EF English First  | Teach English in Beautiful Indonesia | 2024-01-14 | Santa Barbara | CA | On-site |  |
| California Job Shop | Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| California Job Shop | Teacher | 2024-01-15 | Los Angeles | CA | On-site | Education & Teaching |
| The Learning Experience | Teacher | 2024-01-16 | Simi Valley | CA | On-site | Education & Teaching |
| The Learning Experience | Teacher | 2024-01-15 | Simi Valley | CA | On-site | Education & Teaching |
| Indian Health Service | Teacher (Special Education) | 2024-01-15 | Wakpala | SD | On-site | Education & Teaching |
| Envision Education | Teacher - All Subjects | 2024-01-16 | Oakland | CA | On-site | Education & Teaching |
| BJC HealthCare | Teacher Daycare - Associate's | 2024-01-15 | St Louis | MO |  | Education & Teaching |
| Alameda County Office of Education | Teacher on Special Assignment English Learner | 2024-01-15 | Hayward | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | Modesto | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | Oakland | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | Palo Alto | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | Sacramento | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | San Jose | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | Santa Barbara | CA | On-site | Education & Teaching |
| Selected | Teaching Fellow or Associate Teacher | 2024-01-16 | Stockton | CA | On-site | Education & Teaching |
| American Express Global Business Travel | Team Leader - Meetings and Events | 2024-01-16 | United States | CA | Remote |  |
| Tata Technologies | Teamcenter Programer | 2024-01-16 | United States | CA | Remote |  |
| TikTok | Tech Lead - Recommendation Developer Infrastructure - San Jose | 2024-01-14 | San Jose | CA |  | Software Engineering |
| TikTok | Tech Lead Machine Learning Engineer, App Ads and Gaming | 2024-01-14 | San Jose | CA |  | Data Engineering,Data Science,Software Engineering |
| TikTok | Tech Lead Manager, Ads Platform and Interface | 2024-01-15 | San Jose | CA |  |  |
| TikTok | Tech Lead Manager, Ads Platform and Interface | 2024-01-14 | San Jose | CA |  |  |
| Airbnb | Tech Lead Manager, Data Science - Algorithms | 2024-01-16 | United States | CA | Remote | Data Science |
| TikTok | Tech Lead, iOS Software Engineer, Video-On-Demand (VOD) | 2024-01-14 | San Jose | CA |  | Software Engineering |
| ERM | Technical Consulting Director, Archaeology | 2024-01-15 | Sacramento | CA | Hybrid |  |
| ERM | Technical Consulting Director, Archaeology | 2024-01-14 | Sacramento | CA | Hybrid |  |
| PADI | Technical Customer Support Representative II or III | 2024-01-14 | Rancho Santa Margarita | CA | Hybrid |  |
| PISTOLA Denim | Technical Designer for Denim Clothing Brand | 2024-01-16 | Los Angeles | CA | On-site | Designers |
| IBM | Technical Director - Software Architect | 2024-01-15 | Herndon | VA |  | Software Engineering |
| IBM | Technical Director - Software Architect | 2024-01-15 | Washington | DC |  | Software Engineering |
| Bloomberg Industry Group | Technical Director, Bloomberg Government | 2024-01-15 | Washington | DC | On-site |  |
| Meta | Technical Game Designer | 2024-01-16 | Los Angeles | CA |  | Designers |
| Meta | Technical Game Designer | 2024-01-15 | New York | NY |  | Designers |
| Aura | Technical Product Line Manager, General Protection | 2024-01-15 | United States | CA | Remote |  |
| Harnham | Technical Product Manager | 2024-01-15 | United States | CA | Remote | Product Management |
| OnPoint Insights  | Technical Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| Storm6 | Technical Product Manager | 2024-01-16 | United States | CA | Remote | Product Management |
| Tesla | Technical Product Manager, Cell Software | 2024-01-14 | Fremont | CA | On-site | Product Management,Software Engineering |
| Postman | Technical Program Manager, Product | 2024-01-16 | San Francisco | CA |  | Project Management |
| ASK Consulting | Technical Project Manager | 2024-01-16 | Culver City | CA | On-site | Project Management |
| H2scan Corporation | Technical Project Manager | 2024-01-14 | Santa Clarita | CA | On-site | Project Management |
| New York Technology Partners | Technical Project Manager | 2024-01-14 | San Francisco | CA | On-site | Project Management |
| NextPath Career Partners | Technical Project Manager – Azure Big Data AI/ML (3605) | 2024-01-15 | Florida | FL | Remote | Data Science,Project Management,Software Engineering |
| Gotion Inc. | Technical Recruiter | 2024-01-16 | Fremont | CA | Hybrid | HR & Recruiting |
| Anduril Industries | Technical Recruiter - Hardware | 2024-01-16 | Costa Mesa | CA | On-site | HR & Recruiting |
| Anduril Industries | Technical Recruiter - Hardware | 2024-01-14 | Costa Mesa | CA | On-site | HR & Recruiting |
| Zoox | Technical Recruiter - Leadership | 2024-01-16 | Foster City | CA | Hybrid | HR & Recruiting |
| Applied Intuition | Technical Recruiter - New Grad | 2024-01-16 | Mountain View | CA | On-site | HR & Recruiting |
| Anduril Industries | Technical Recruiter, Hardware | 2024-01-16 | Costa Mesa | CA | On-site | HR & Recruiting |
| Anduril Industries | Technical Recruiter, Hardware | 2024-01-14 | Costa Mesa | CA | On-site | HR & Recruiting |
| HED | Technology Designer | 2024-01-16 | Los Angeles | CA | Hybrid | Designers |
| HED | Technology Designer | 2024-01-16 | Sacramento | CA | Hybrid | Designers |
| HED | Technology Designer | 2024-01-16 | San Diego | CA | Hybrid | Designers |
| HED | Technology Designer | 2024-01-16 | San Francisco Bay Area | CA | Hybrid | Designers |
| Goldman Sachs | Technology Risk Advisory Engineer-L2-Dallas-Vice President | 2024-01-15 | Dallas | TX |  |  |
| Merryhill School | Technology Teacher | 2024-01-16 | Roseville | CA | On-site | Education & Teaching |
| Wells Fargo | Teller (28 HR) - Wedgewood Square - Rock Hill, SC | 2024-01-16 | Rock Hill | SC |  | HR & Recruiting |
| U.S.VETS | Temporary Human Resources Recruiter | 2024-01-16 | Los Angeles Metropolitan Area | CA | On-site | HR & Recruiting |
| Pursuit | Territory Account Executive | 2024-01-15 | Los Angeles | CA | Hybrid | Marketing & Sales |
| Pursuit | Territory Account Executive | 2024-01-15 | San Luis Obispo County | CA | Hybrid | Marketing & Sales |
| Papé Group | Territory Manager - Compact Construction Equipment | 2024-01-14 | Rohnert Park | CA | On-site |  |
| The Mullings Group | Territory Manager - Inland Empire | 2024-01-14 | Palm Springs | CA | Hybrid |  |
| Insulet Corporation | Territory Manager- East Bay (Field Based) | 2024-01-14 | Berkeley | CA | Remote |  |
| Insulet Corporation | Territory Manager- East Bay (Field Based) | 2024-01-14 | Oakland | CA | Remote |  |
| Insulet Corporation | Territory Manager- East Bay (Field Based) | 2024-01-14 | San Ramon | CA | Remote |  |
| Cardinal Health | Territory Sales Consultant, OptiFreight | 2024-01-15 | Sacramento | CA | On-site | Marketing & Sales |
| Mauser Packaging Solutions | Territory Sales Manager | 2024-01-14 | Los Angeles Metropolitan Area | CA | Hybrid | Marketing & Sales |
| Westlake | Territory Sales Manager | 2024-01-14 | Lathrop | CA | On-site | Marketing & Sales |
| Pursuit | Territory Sales Representative | 2024-01-14 | San Bernardino County | CA | Hybrid | Marketing & Sales |
| Tesla | Tesla Advisor | 2024-01-14 | Santa Monica | CA | On-site |  |
| Fox Factory | Test Engineer 2 | 2024-01-14 | Scotts Valley | CA | On-site |  |
| Anduril Industries | Test and Release Engineer, Ghost | 2024-01-16 | Costa Mesa | CA | On-site |  |
| Anduril Industries | Thermal Engineer | 2024-01-14 | Costa Mesa | CA | On-site |  |
| TikTok | TikTok Product Manager- Creator Experience | 2024-01-16 | San Jose | CA |  | Product Management |
| TikTok | TikTok Shop - Senior Platform Product Manager, Governance Efficiency Platform | 2024-01-16 | San Jose | CA |  | Product Management |
| TikTok | TikTok Shop - Senior Technical Product Manager (Seller Risk) | 2024-01-16 | San Jose | CA |  | Product Management |
| TikTok | TikTok Shop Senior UX Designer - Consumer | 2024-01-16 | San Jose | CA |  | Designers |
| TikTok | TikTok Shop Senior UX Designer - Consumer | 2024-01-14 | San Jose | CA |  | Designers |
| TikTok | TikTok Shop Senior UX Designer - Logistics | 2024-01-14 | San Jose | CA |  | Designers |
| L3Harris Technologies | Tool Designer | 2024-01-16 |  California |  |  | Designers |
| Avanos Medical | Total Rewards Director | 2024-01-15 | Alpharetta | GA | On-site |  |
| Edgio | Total Rewards Manager | 2024-01-15 | United States | CA | Remote |  |
| JDHuntr In-House Counsel Jobs | Trademark Enforcement Counsel II | 2024-01-14 | Irvine | CA | Hybrid |  |
| PRIDE Industries | Traffic Clerk | 2024-01-15 | Roseville | CA | On-site |  |
| Drift | Training & Talent Development Manager | 2024-01-15 | United States | CA | Remote |  |
| STV | Transit Leader | 2024-01-14 | Los Angeles | CA | On-site |  |
| Aspire Public Schools | Transitional Kindergarten Teacher | 2024-01-16 | Los Angeles | CA | On-site | Education & Teaching |
| Aspire Public Schools | Transitional Kindergarten Teacher | 2024-01-15 | Los Angeles | CA | On-site | Education & Teaching |
| Callaway Golf | Transportation Analyst (Air Import Operations) | 2024-01-14 | Carlsbad | CA | On-site |  |
| David Evans and Associates, Inc. | Transportation Civil Engineering Designer - Ontario, CA | 2024-01-16 | Ontario | CA | Hybrid | Designers,Software Engineering |
| David Evans and Associates, Inc. | Transportation Civil Engineering Designer - Temecula, CA. | 2024-01-16 | Temecula | CA | Hybrid | Designers,Software Engineering |
| HDR | Transportation EIT/Designer | 2024-01-16 | Walnut Creek | CA | On-site | Designers |
| Tenet Healthcare | Trauma Manager Full Time Days | 2024-01-15 | Indio | CA |  |  |
| Vituity | Traveling Physician - Intensivist Reservist - Traveling - Nationwide | 2024-01-14 | Emeryville | CA | On-site | Medical & Healthcare |
| Uber | Treasury Manager, Global Liquidity Management | 2024-01-16 | New York | NY |  | Finance & Accounting |
| JPMorgan Chase & Co. | Treasury Service Implementation Project Manager VP | 2024-01-16 | Irvine | CA |  | Project Management,Finance & Accounting |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | Camarillo | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | Irvine | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | Murrieta | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | Oceanside | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | Pomona | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | Rancho Cucamonga | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern CA | 2024-01-15 | San Bernardino | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Burbank | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Calabasas | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Glendale | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Lancaster | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Long Beach | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Los Angeles | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Monrovia | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Pasadena | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Riverside | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Temecula | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Torrance | CA | Remote | Legal |
| Farmers Insurance | Trial Attorney - Southern California | 2024-01-16 | Victorville | CA | Remote | Legal |
| Zenith Insurance Company (United States) | Trial Attorney II | 2024-01-15 | Roseville | CA | Hybrid | Legal |
| Whatnot | Trust & Safety Regulatory Counsel | 2024-01-15 | Los Angeles Metropolitan Area | CA |  |  |
| Uber | Trust and Safety Specialist | 2024-01-16 | Phoenix | AZ |  |  |
| CAE | U.S. Army Senior Business Development Manager | 2024-01-15 | Tampa | FL |  | Finance & Accounting,Marketing & Sales |
| University of California, San Francisco | UCSF Fresno & CCFMG - Rheumatology Faculty Opportunity | 2024-01-16 | Fresno | CA | On-site |  |
| ESHYFT | UI/UX Designer | 2024-01-16 | United States | CA | Remote | Designers |
| Steneral Consulting | UI/UX Designer | 2024-01-14 | United States | CA | Remote | Designers |
| OSI Engineering | UI/UX Designer, HMI in the Automotive Space | 2024-01-16 | Torrance | CA | On-site | Designers |
| SKILL BIRD | UI/UX Prototype Designer | 2024-01-14 | United States | CA | Remote | Designers |
| Panasonic Avionics Corporation | UX Design Intern | 2024-01-14 | Irvine | CA | On-site | Designers |
| Ledgent Technology | UX Designer | 2024-01-16 | Irvine | CA | On-site | Designers |
| Experis | UX Designer (Spanish) | 2024-01-16 | Sunnyvale | CA | On-site | Designers |
| Lyft | UX Research Intern (2024) | 2024-01-14 | San Francisco | CA |  | Designers |
| The Mom Project | UX Researcher | 2024-01-14 | Burlingame | CA | On-site | Designers |
| US Tech Solutions | UX Researcher IV | 2024-01-14 | Burlingame | CA | On-site | Designers |
| Uber | Uber Sr. Expert, In-Person Support - Downtown LA | 2024-01-16 | Los Angeles | CA |  |  |
| Uber | Uber Sr. Expert, In-Person Support - Las Vegas | 2024-01-16 | Las Vegas | NV |  |  |
| Uber | Uber Sr. Expert, In-Person Support - Oakland | 2024-01-16 | Oakland | CA |  |  |
| Stripe | University Recruiter | 2024-01-16 | San Francisco | CA | On-site | HR & Recruiting |
| Stripe | University Recruiter | 2024-01-15 | San Francisco | CA | On-site | HR & Recruiting |
| MATCH Charter Public School | Upper Elementary Lead Teacher: 2024-2025 | 2024-01-15 | Boston | MA | On-site | Education & Teaching |
| Urban Outfitters | Urban Outfitters Visual Merchandising Manager | 2024-01-14 | Glendale | CA |  |  |
| Tesla | Used Cars Manager, Refurbishment & Quality | 2024-01-14 | Fremont | CA | On-site |  |
| Luxoft | User Experience Designer | 2024-01-14 | United States | CA | Remote | Designers |
| Advantis Global | User Experience Researcher | 2024-01-14 | Burlingame | CA | On-site | Designers |
| ByteDance | User Experience Researcher | 2024-01-14 | Los Angeles | CA | On-site | Designers |
| ByteDance | User Experience Researcher | 2024-01-14 | San Jose | CA | On-site | Designers |
| SBM Management Services, LP | User Interface Designer | 2024-01-16 | Sacramento | CA | On-site | Designers |
| ProEdge Services | VP Account Management (AI/ML), Data Annotation | 2024-01-15 | San Francisco Bay Area |  | Remote | Data Science,Software Engineering |
| Heisler Kopp LLC | VP Corporate Controller | 2024-01-15 | Greater Minneapolis-St. Paul Area |  | Hybrid | Finance & Accounting |
| Atlantic Partners Corporation | VP Data Governance - Perm - 23-00124 | 2024-01-15 | Chicago | IL | Hybrid | Data Engineering |
| BrainWorks | VP Digital Transformation & Ecommerce | 2024-01-15 | Atlanta | GA | On-site |  |
| CHA Hollywood Presbyterian Medical Center | VP Human Resources Full Time Exempt | 2024-01-15 | Los Angeles | CA | On-site |  |
| Tinder | VP Product, Core Experience | 2024-01-15 | San Francisco | CA | Hybrid |  |
| GLOBAL BPM AND IT SOLUTIONS PRIVATE LIMITED | VP Sales & Business Development (Fintech), BPM | 2024-01-15 | United States |  | Remote | Marketing & Sales |
| Ansira | VP of Business Development | 2024-01-15 | Greenville County | SC | Hybrid |  |
| Ansira | VP of Business Development | 2024-01-15 | King County | WA | Hybrid |  |
| Aisera | VP of Sales Engineering | 2024-01-15 | Palo Alto | CA | On-site | Software Engineering,Marketing & Sales |
| Ingersoll Rand | VP, Architecture & Engineering | 2024-01-15 | Davidson | NC | Remote | Software Engineering |
| Circle | VP, Content Marketing | 2024-01-14 | Los Angeles | CA | Remote | Marketing & Sales |
| Revantage, A Blackstone Portfolio Company | VP, Data & Technology, Insurance and Alternative Solutions | 2024-01-15 | Chicago | IL | On-site |  |
| Sony Pictures Entertainment | VP, Data Solutions Product Strategy & Management | 2024-01-15 | Culver City | CA | Hybrid |  |
| Blue Cross and Blue Shield of Kansas City | VP, Financial Planning & Analysis | 2024-01-15 | Kansas City | MO |  |  |
| Favor Delivery | VP, Marketing | 2024-01-15 | Austin | TX | Hybrid | Marketing & Sales |
| Ushur | VP, People | 2024-01-15 | Santa Clara | CA | Hybrid |  |
| Ushur | VP, People | 2024-01-14 | Santa Clara | CA | Hybrid |  |
| Aditi Consulting | Validation Engineering - 2 | 2024-01-14 | Long Beach | CA |  | Software Engineering |
| Raytheon | Value Stream Leader, Program Management, Aberdeen Proving Ground, MD (HYBRID) | 2024-01-15 | Aberdeen Proving Ground | MD | Hybrid |  |
| Vans, a VF Company | Vans Store Manager (Solano, Fairfield, CA) | 2024-01-14 | Fairfield | CA | On-site |  |
| Meta | Vendor Strategy & Ops Manager - Software | 2024-01-15 | Menlo Park | CA |  | Software Engineering |
| Uber | Vertical Audience & Insights Partner | 2024-01-16 | Chicago | IL |  |  |
| Uber | Vertical Audience & Insights Partner | 2024-01-16 | New York | NY |  |  |
| Uber | Vertical Audience & Insights Partner | 2024-01-16 | San Francisco | CA |  |  |
| Prospect Health | Veterinarian Doctor J168305 | 2024-01-14 | San Diego | CA | On-site | Medical & Healthcare |
| Thrive Pet Healthcare | Veterinary Doctor's Assistant - Internal Medicine | 2024-01-15 | Torrance | CA | On-site | Medical & Healthcare |
| National Veterinary Associates | Veterinary Hospital Manager | 2024-01-15 | Woodstock | VA |  |  |
| Relyance AI | Vice President Marketing | 2024-01-14 | San Ramon | CA | Hybrid | Marketing & Sales |
| Crossover  | Vice President Of Product Management, Trilogy (Remote) - $400,000/year USD | 2024-01-15 | United States | CA | Remote | Product Management |
| Pressed Juicery | Vice President of Employee Relations | 2024-01-14 | Los Angeles | CA | Hybrid |  |
| Action Property Management | Vice President of Human Resources | 2024-01-14 | Irvine | CA | On-site |  |
| keycentrix™  | Vice President of Product | 2024-01-15 | Wichita | KS | On-site |  |
| Sales Xceleration® | Vice President of Sales | 2024-01-15 | New York City Metropolitan Area |  | Remote | Marketing & Sales |
| Sales Xceleration® | Vice President of Sales - Revenue Opportunity $300K | 2024-01-15 | Cape Coral Metropolitan Area |  | Remote | Finance & Accounting,Marketing & Sales |
| Sales Xceleration® | Vice President of Sales - Revenue Opportunity $300K | 2024-01-15 | Thousand Oaks | CA | Remote | Finance & Accounting,Marketing & Sales |
| Sales Xceleration® | Vice President of Sales - Revenue Opportunity $300K | 2024-01-14 | San Francisco Bay Area | CA | Remote | Finance & Accounting,Marketing & Sales |
| Sales Xceleration® | Vice President of Sales - Revenue Opportunity $300K | 2024-01-14 | Thousand Oaks | CA | Remote | Finance & Accounting,Marketing & Sales |
| JPMorgan Chase & Co. | Vice President – Product Manager - Digital Payments | 2024-01-16 | Palo Alto | CA |  | Product Management |
| Randstad RiseSmart | Vice President, Global Coaching Sales & Solutions | 2024-01-14 | United States | CA | Remote | Marketing & Sales |
| Lytx, Inc. | Vice President, Operations and Supply Chain | 2024-01-15 | San Diego | CA | On-site |  |
| University of San Francisco | Video Producer | 2024-01-15 | San Francisco | CA | Hybrid |  |
| Sugar Bowl Resort | Village General Manager of Food & Beverage | 2024-01-14 | Norden | CA | On-site |  |
| Adventure Awaits Travel | Virtual Client Marketing Manager | 2024-01-14 | NAMER | CA | Remote | Marketing & Sales |
| Certified Mobile Notary Service | Virtual Recruiter | 2024-01-16 | Oakland | CA | Remote | HR & Recruiting |
| Certified Mobile Notary Service | Virtual Recruiter | 2024-01-16 | Sacramento | CA | Remote | HR & Recruiting |
| Certified Mobile Notary Service | Virtual Recruiter | 2024-01-14 | Oakland | CA | Remote | HR & Recruiting |
| GP Strategies Corporation | Virtual Training Producer | 2024-01-14 | Ontario | CA | Remote |  |
| International Rescue Committee | Vocational English as a Second Language Instructor | 2024-01-15 | San Jose | CA | Hybrid | Education & Teaching |
| Unitek Learning | Vocational Nursing Faculty Apprentice | 2024-01-16 | South San Francisco | CA | On-site |  |
| VolunteerMatch | Volunteer: Game Night + Hot Cocoa (Volunteer Training Req.) | 2024-01-16 |  California |  | On-site |  |
| Nonprofits First | Volunteer: Newcomer Immigrant Youth Program, Kennett Square 19348 PA Area | 2024-01-16 | Kennett Square | PA |  |  |
| Amazon Web Services (AWS) | WWPS Cloud Consultant, WWPS Cloud Consultant | 2024-01-15 | Herndon | VA |  | Data Engineering,Software Engineering |
| Gainwell Technologies | Web Developer | 2024-01-14 | Roseville | CA | Remote | Software Engineering |
| Jada Systems Inc | Web Developer | 2024-01-14 | Los Angeles | CA | Hybrid | Software Engineering |
| TMZ | Web Graphic Designer | 2024-01-16 | Los Angeles | CA | On-site | Marketing & Sales,Designers |
| YMCA of San Francisco | Wellness Attendant | 2024-01-15 | San Francisco | CA | On-site |  |
| Kleinfelder | Wetland Scientist / Regulatory Specialist | 2024-01-14 | San Francisco County | CA | On-site |  |
| Behind The Scenes Apparel Inc. | Wholesale Sales Specialist | 2024-01-14 | Compton | CA | On-site | Marketing & Sales |
| Skydio | Wireless Software & Systems Engineer Intern | 2024-01-16 | San Mateo | CA |  | Software Engineering |
| Solomon Page | Women's RTW Collection Designer | 2024-01-16 | Los Angeles Metropolitan Area | CA | Hybrid | Designers |
| Hinshaw & Culbertson LLP | Workers' Compensation Defense Attorney | 2024-01-14 | Los Angeles | CA | Hybrid | Finance & Accounting,Legal |
| See's Candies | Workers' Compensation Specialist | 2024-01-16 | South San Francisco | CA | On-site | Finance & Accounting |
| Whole Foods Market | Zone Specialist - Full Time | 2024-01-14 | Long Beach | CA |  |  |
| Sherwin-Williams | Zone Store Customer Service Specialist | 2024-01-14 | Sacramento | CA | On-site | Marketing & Sales |
| Clevertech | iOS Developer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| hackajob | iOS Developer | 2024-01-14 | United States | CA | Remote | Software Engineering |
| Lyft | iOS Engineer, Lyft Media | 2024-01-15 | New York | NY |  |  |
| ACL Digital | iOS Software Engineer III (Fully Remote & W2 only) | 2024-01-14 | Cupertino | CA | Remote | Software Engineering |
| Starbucks | store manager - New Scotland | 2024-01-15 | Albany | NY | On-site |  |
| Starbucks | store manager-Downtown Cleveland, OH | 2024-01-15 | Cleveland | OH | On-site |  |
| Starbucks | store manager-Miami Beach, FL | 2024-01-15 | Miami Beach | FL | On-site |  |
| Starbucks | store manager-South Portland, ME | 2024-01-15 | South Portland | ME | On-site |  |
| Replo (YC S21) | ✨ Founding Product Designer | 2024-01-14 | San Francisco | CA | Hybrid | Designers |


<div class="datatable-end"></div>

 <script>
  // 1/15/2023. Jeremy Gu. First, modify your JavaScript initialization for DataTables to add the compact class dynamically:

  $(document).ready(function(){
    // This will add an `id` to the first `table` element within your content.
    var table = $('article table').first();
    table.attr('id', 'myTable');

    // to add the compact class dynamically:
    table.addClass('display compact'); // Add the compact class dynamically
    // table.css('width', '0.50%');
    // Now you can initialize DataTables
    $('#myTable').DataTable({
      "paging": true,
      "ordering": true,
      "info": false
    });
  });
</script>


<style>
/* ...existing styles... */

.mission-section, .strategy-section, .times-section, .advice-section,  .time-matters-section {
  background-color: #f9f9f9;
  border-left: 4px solid #3498db;
  padding: 10px;
  margin-bottom: 30px;
}

.section-header {
  color: #2c3e50;
  margin-bottom: 10px;
}

.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  vertical-align: middle;
}

.times-section {
  background-color: #e8f9f8;
  border-color: #2ecc71;
}

/* You can add more specific styles for icons, text, and layout as needed */
</style>

## Our Mission

<div class="mission-section">
  OpenJobs.tech is committed to providing the latest job listings with valuable advice. We aim to support job seekers, particularly those facing challenging employment situations.
</div>



## Strategy
<div class="mission-section">
Job-seeking has two key stratigic focuses: 1) to show relevant skills and 2) build connections. Strive for a blend: develop robust skills to excel in roles and nurture connections for career growth.
<div class="pricing-options" style="text-align: center;">
    <div class="option" id="monthly" onclick="selectOption('monthly')" style="margin: 10px auto; display: inline-block;">
        <p><b>Connections</b></p>  
        <p>Networking</p>
        <p>Engagement</p>
        <p>Relationships</p>
    </div>
  
    <div class="option" id="yearly" onclick="selectOption('yearly')" style="margin: 10px auto; display: inline-block;">
        <p><b>Relevancy</b></p>
        <p>Expertise</p>
        <p>Competence</p>
        <p>Adaptability</p>
    </div>
</div>


<div class="service-description" id="serviceDescription" style="text-align: center;">
  <!-- The service description will be updated here -->
</div>
  
<p id="serviceTerms" style="text-align: center;">
  <!-- The terms of service will be updated here -->
</p>
<!-- Load the JavaScript file for pricing -->
<script src="{{ '/assets/js/pricing.js' | relative_url }}"></script>
</div> 




## Time Matters
<div class="time-matters-section">

Like the critical 'Golden Hours' after an earthquake, the first few days of a job posting are vital. Being one of the first applicants can give you a significant advantage in today's competitive job market.
</div>

## Global Job Market Times
<div class="current-date_general date-display">
(Making sure you have enough sleep.)

<div id="time-SanFrancisco"><b>San Francisco Time:</b></div>
<div id="time-NewYork"><b>New York Time:</b></div>
<div id="time-London"><b>London Time:</b></div>
<div id="time-Nairobi"><b>Nairobi Time:</b></div>
<div id="time-Pretoria"><b>Pretoria Time:</b></div>
<div id="time-NewDelhi"><b>New Delhi Time:</b></div>  
<div id="time-Singapore"><b>Singapore</b> Time: </div>
<div id="time-Sydney"><b>Sydney Time:</b></div>
</div>

## Disclaimer

<button id="disclaimerBtn">View Disclaimer</button>

<!-- Disclaimer Modal -->
<div id="disclaimerModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>About the Website</h2>
    <p><span class="highlight_popup">Website Philosophy:</span> Our website is dedicated to offering direct and detailed career development support, helping users find the right job. We strive to provide a straightforward and efficient service, making the job search process simpler and more manageable.</p>
    <p><span class="highlight_popup">Operational Costs:</span> The monthly expenditure for our website is approximately $20. We maintain a light operational footprint, avoiding complex functionalities and excessive designs, committed to delivering a simple, direct, and low-cost job-seeking experience.</p>
    <p><span class="highlight_popup">Free Services:</span> Most features on our website are free for users. Our goal is to assist a larger number of job seekers through this platform.</p>

    <h2>Disclaimer</h2>
    <p><span class="highlight_popup">Privacy and Security:</span> While we make efforts to protect user privacy, we cannot fully guarantee that the various 3rd party services used will not disclose user information. Users should exercise their own judgment when using the website.</p>
    <p><span class="highlight_popup">Accuracy of Data:</span> Much of our analysis is derived from Python with open-source libraries and GPT. The raw data is manually copied and pasted from public data on career websites. Job descriptions may change frequently, jobs may be reposted by employers, and some positions may be re-edited by those recruiters. We try to ensure that information is up-to-date, but some content may not be entirely accurate or timely. Some GPT-generated results may be misleading. Use with caution.</p>
    <p><span class="highlight_popup">AI Information Accuracy:</span> Information provided by AI may contain errors. We welcome users to point out any inaccuracies or mistakes, allowing us to make necessary improvements.</p>
    <p><span class="highlight_popup">Feedback and Improvement:</span> We encourage user feedback to help us continually optimize the website and provide better services.</p>
    <p><span class="highlight_popup">No Collection of Personal Information:</span> Apart from optional feedback through contact forms, we do not collect any personal information from our customers. This is an important aspect of our commitment to privacy.</p>
  </div>
</div>




<script>
// Get the modal
var disclaimerModal = document.getElementById("disclaimerModal");

// Get the button that opens the modal
var disclaimerBtn = document.getElementById("disclaimerBtn");

// Get the <span> element that closes the modal
var disclaimerSpan = disclaimerModal.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
disclaimerBtn.onclick = function() {
  disclaimerModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
disclaimerSpan.onclick = function() {
  disclaimerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == disclaimerModal) {
    disclaimerModal.style.display = "none";
  }
}
</script>



