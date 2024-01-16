---
layout: page
permalink: /index.html
title: Mission
datatable: true
---


<!-- jQuery library -->
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

<!-- DataTables CSS -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">

<!-- DataTables JS -->
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>


<div class="datatable-begin"></div>

Food    | Description                           | Category | Sample type
------- | ------------------------------------- | -------- | -----------
Apples  | A small, somewhat round ...           | Fruit    | Fuji
Bananas | A long and curved, often-yellow ...   | Fruit    | Snow
Kiwis   | A small, hairy-skinned sweet ...      | Fruit    | Golden
Oranges | A spherical, orange-colored sweet ... | Fruit    | Navel

<div class="datatable-end"></div>

 <script>
  $(document).ready(function(){
    // This will add an `id` to the first `table` element within your content.
    var table = $('article table').first();
    table.attr('id', 'myTable');

    // Now you can initialize DataTables
    $('#myTable').DataTable({
      "paging": true,
      "ordering": true,
      "info": false
    });
  });
</script>


## Our Mission

OpenJobs.tech is providing the latest job listings with advice. 

We aims to help job seekers especially those facing challenging employment situations.

<!-- The site compiles and updates new job postings regularly across various industries and locations in Tech. Users can easily search and filter jobs that match their skills and interests.

Each job listing on OpenJobs.tech contains a brief analysis. The site also provides blogs, tips and suggestions to help job seekers tailor their resumes and interview strategies for specific roles. -->

## Strategy

Job-seeking has two key stratigic focuses: 1) to show relevant skills and 2) build connections. Strive for a blend: develop robust skills to excel in roles and nurture connections for career growth.

{% include pricing.html %}


## Global Job Market Times

(Making sure you have enough sleep.)

<div id="time-SanFrancisco"><b>San Francisco Time:</b></div>
<div id="time-NewYork"><b>New York Time:</b></div>
<div id="time-London"><b>London Time:</b></div>
<div id="time-Nairobi"><b>Nairobi Time:</b></div>
<div id="time-Pretoria"><b>Pretoria Time:</b></div>
<div id="time-NewDelhi"><b>New Delhi Time:</b></div>  
<div id="time-Singapore"><b>Singapore</b> Time: </div>
<div id="time-Sydney"><b>Sydney Time:</b></div>


<div id="spacer"></div>
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



