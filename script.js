// Function to handle form submission
const handleFormSubmission = (event) => {
  event.preventDefault(); // Prevent form from submitting the default way
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim(); // Get the email and remove extra spaces
  
  // Validate the email
  if (validateEmail(email)) {
    // Show success feedback
    displayFeedback('Subscription successful! Thank you for subscribing.', 'success');
    emailInput.value = ''; // Clear input field
  } else {
    // Show error feedback
    displayFeedback('Please enter a valid email address.', 'error');
  }
};

// Function to validate email using a regular expression
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Function to display feedback message to the user
const displayFeedback = (message, type) => {
  const feedbackElement = document.createElement('div');
  feedbackElement.classList.add('feedback', type);
  feedbackElement.textContent = message;
  
  // Append the feedback message to the form
  const formContainer = document.querySelector('.subscription-form');
  formContainer.appendChild(feedbackElement);
  
  // Remove the feedback after 4 seconds
  setTimeout(() => {
    feedbackElement.remove();
  }, 4000);
};

// Add event listener to the subscription form
document.getElementById('subscribe-form').addEventListener('submit', handleFormSubmission);
