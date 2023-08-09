document.addEventListener('DOMContentLoaded', function() {
  const errorMessage = document.querySelector('.error-container');
  
  errorMessage.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#ecf0f1';
  });

  errorMessage.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
  });
});