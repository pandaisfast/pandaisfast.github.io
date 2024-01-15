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
<div id="time-MexicoCity"><b>Mexico City</b> Time: </div>
<div id="time-Brasilia"><b>Brasília</b> Time: </div>
<div id="time-London"><b>London Time:</b></div>
<div id="time-Rome"><b>Rome Time:</b></div>
<div id="time-Paris"><b>Paris</b> Time: </div>
<div id="time-Cairo"><b>Cairo</b> Time: </div>
<div id="time-Nairobi"><b>Nairobi Time:</b></div>
<div id="time-Pretoria"><b>Pretoria Time:</b></div>
<div id="time-NewDelhi"><b>New Delhi Time:</b></div>  
<div id="time-Beijing"><b>Beijing Time:</b></div>
<div id="time-Taipei"><b>Taipei Time:</b></div>
<div id="time-Singapore"><b>Singapore</b> Time: </div>
<div id="time-Seoul"><b>Seoul Time:</b></div>
<div id="time-Tokyo"><b>Tokyo</b> Time: </div>
<div id="time-Sydney"><b>Sydney Time:</b></div>









<div id="spacer"></div>

## Comments


{% include disqus.html %}