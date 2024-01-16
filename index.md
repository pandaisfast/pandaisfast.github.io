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
      <span id="count">1,141+</span> jobs in California are recently posted in the past  <span id="count">24 hours</span>.
    </span>
  </p>
  <p>
    Last Updated on:
    <span class="date"> Jan 15, 2024 </span>,
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
    <span class="job-category">Data Engineering 🔢</span>, 
    <span class="job-category">Project Management 📝</span>, 
    <span class="job-category">Education & Teaching 🎓</span>, 
    <span class="job-category">Medical & Healthcare 🏥</span>, 
    <span class="job-category">Finance & Accounting 💲</span>, 
    <span class="job-category">Legal ⚖️</span>, 
    <span class="expanding-list">and more on the way... stay tuned! 😺</span>

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



