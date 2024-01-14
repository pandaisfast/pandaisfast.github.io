---
layout: page
permalink: /comments/index.html
title: Comments
---

## Comments

Please leave a message below. Your feedback and discussions are greatly appreciated.


<!-- <button onclick="toggleCommentPolicy()">Comment Policy2</button>

<div id="comment-policy-popup" style="display:none;">
  
  <span style="font-size:20px;font-weight:bold;">Comment Policy</span>
  
  <p>We welcome thoughtful discussion and debate. To ensure a positive environment, we ask all users to:</p>

  <ul>
    <li>Be constructive. Offer meaningful contributions that foster understanding.</li>
    <li>Be respectful. Value others’ perspectives. Critique ideas, not people.</li>
    <li>Be mindful. Consider how culture shapes perspectives. Avoid assumptions.</li>
    <li>Provide context. Explain reasoning and provide sources.</li>
    <li>Stay on-topic. Keep comments relevant to the conversation.</li>
    <li>Use clear language. Avoid jargon that may not be universally understood.</li>
    <li>Maintain privacy. Do not share private details about others.</li>
    <li>No hate speech or bullying. Make everyone feel safe and included.</li>
  </ul>
  
  <p>Our goal is constructive dialogue. We reserve the right to edit or remove comments and ban users as needed to uphold these principles.</p>
  

</div>

<script>

let policyOpen = false;

function toggleCommentPolicy() {

  if(policyOpen) {
    policyOpen = false;  
    document.getElementById("comment-policy-popup").style.display = "none";

  } else {
    policyOpen = true;
    document.getElementById("comment-policy-popup").style.display = "block";
  }

}

</script> -->

{% include disqus.html %}

<button id="commentPolicyBtn">View Comment Policy</button>

<!-- Comment Policy Modal -->
<div id="commentPolicyModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Comment Policy</h2>
    <p>We welcome thoughtful discussion and debate. To ensure a positive environment, we ask all users to:</p>
    <ul>
      <li>Be constructive. Offer meaningful contributions that foster understanding.</li>
      <li>Be respectful. Value others’ perspectives. Critique ideas, not people.</li>
      <li>Be mindful. Consider how culture shapes perspectives. Avoid assumptions.</li>
      <li>Provide context. Explain reasoning and provide sources.</li>
      <li>Stay on-topic. Keep comments relevant to the conversation.</li>
      <li>Use clear language. Avoid jargon that may not be universally understood.</li>
      <li>Maintain privacy. Do not share private details about others.</li>
<li>No hate speech or bullying. Make everyone feel safe and included.</li>
</ul>

  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById("commentPolicyModal");

// Get the button that opens the modal
var btn = document.getElementById("commentPolicyBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>

