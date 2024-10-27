
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js';
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js';

const firebaseConfig = {
  //removed for security concern 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

    $(document).ready(function() {
    const form = $('#formContainer');
    form.on('submit', function(event) {
        event.preventDefault(); // Prevents default reload
        console.log("Form submission prevented."); // Debugging log

        // Get input values
        const name = $('#floatingInput').val();
        const email = $('#floatingEmail').val();
        const message = $('#textarea').val();

        const floatingEmail = $('#floatingEmail');
        const floatingInput = $('#floatingInput');
        const textarea = $('#textarea');

        // Input validation
        let isValid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            floatingInput.addClass('is-invalid');
            isValid = false;
        } else {
            floatingInput.removeClass('is-invalid');
        }

        if (!email || !emailPattern.test(email)) {
            floatingEmail.addClass('is-invalid');
            isValid = false;
        } else {
            floatingEmail.removeClass('is-invalid');
        }

        if (!message) {
            textarea.addClass('is-invalid');
            isValid = false;
        } else {
            textarea.removeClass('is-invalid');
        }

        // If all inputs are valid, save the data
        if (isValid) {
            saveData(name, email, message);
        }

        return false; // Ensure no reload happens
    });

    // Function to save data to Firebase
    function saveData(name, email, message) {
        const newUserRef = push(ref(db, 'userMessage'));
        set(newUserRef, {
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            showPopup('Message sent successfully!', 'limegreen', 'animate__animated animate__fadeIn');
            clearForm();
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            showPopup(`Error saving data: ${error.message}`, 'coral');
        });
    }

    // Function to show popup messages
    function showPopup(message, bgcolor, animation) {
      $('#popup').removeClass('d-none');
      $('#popup').css('background-color', bgcolor);
      $('#popup').addClass(animation);
      $('#popup').text(message);
      setTimeout(() => {
          $('#popup').addClass('d-none');
      }, 2000);
    }

    // Function to clear form inputs
    function clearForm() {
        $('#floatingInput').val('');
        $('#floatingEmail').val('');
        $('#textarea').val('');
    }
});
