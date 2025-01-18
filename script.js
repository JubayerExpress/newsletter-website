document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  
  if (email) {
    console.log(`New subscription: ${email}`);
    alert('Thanks for subscribing!');
    document.getElementById('email').value = '';
  } else {
    alert('Please enter a valid email.');
  }
});

