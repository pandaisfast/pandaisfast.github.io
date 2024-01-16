// assets/js/pricing.js

function selectOption(plan) {
    // Remove active class from all options
    document.querySelectorAll('.option').forEach(function(option) {
      option.classList.remove('active');
    });
  
    // Add active class to the selected option
    document.getElementById(plan).classList.add('active');
  
    
    // Update the active class for options
    var options = document.getElementsByClassName('option');
    for (var i = 0; i < options.length; i++) {
        options[i].classList.remove('active');
    }
    document.getElementById(plan).classList.add('active');

    // Update service description based on selected plan
    var descriptionText = plan === 'monthly' ? 'The most important factor is to meet people and genuinely ask for help.' : 'The most important factor is to match your skills to job requirements.';
    document.getElementById('serviceDescription').textContent = descriptionText;
  
    // Update the terms of service based on selected plan
    var termsText = plan === 'monthly' ? 'Having strong contacts and recommendations through networking greatly improves your chances of finding job opportunities.' : 'Use actual projects and demonstrated success to showcase your professional competency in your field, which hiring managers care about the most.';
    document.getElementById('serviceTerms').textContent = termsText;
  }
  
  // Initial setup, default to monthly plan
  document.addEventListener('DOMContentLoaded', function() {
    selectOption('monthly');
  });
  