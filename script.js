document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('address-error');
    const resumeInput = document.getElementById('resume');
    const resumeError = document.getElementById('resume-error');
    const nextButton1 = document.getElementById('next-1');
    const nextButton2 = document.getElementById('next-2');
    const nextButton3 = document.getElementById('next-3');
    const nextButton4 = document.getElementById('next-4');
    const nextButton5 = document.getElementById('next-5');
    const backButton2 = document.getElementById('back-2');
    const backButton3 = document.getElementById('back-3');
    const backButton4 = document.getElementById('back-4');
    const backButton5 = document.getElementById('back-5');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const step4 = document.getElementById('step-4');
    const step5 = document.getElementById('step-5');
    const resultMessage = document.getElementById('result-message');
  
    nextButton5.addEventListener('click', function(){
        resultMessage.innerHTML = 'Congratulations!';

    });
  
    function displayFileName() {
      const fileInput = document.getElementById('resume');
      const fileName = document.getElementById('file-name');
      if (fileInput.files.length > 0) {
        fileName.textContent = 'Selected file: ' + fileInput.files[0].name;
      } else {
        fileName.textContent = ''; // Clear the text if no file is selected
      }
    }
  
    function validateResume(file) {
      const allowedExtensions = ['.pdf', '.docx'];
      const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
      const fileSize = file.size;
  
      const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      const isValidExtension = allowedExtensions.includes(extension);
      const isValidSize = fileSize <= maxSize;
  
      return isValidExtension && isValidSize;
    }
  
    nextButton4.addEventListener('click', function() {
      step4.style.display = 'none';
      step5.style.display = 'block';
    });
  
    resumeInput.addEventListener('change', function() {
      if (validateResume(resumeInput.files[0])) {
        resumeError.textContent = '';
        resumeInput.classList.remove('invalid');
        nextButton5.disabled = false;
      } else {
        resumeError.textContent = 'Please upload a valid resume (PDF or DOCX format, max size 5 MB).';
        resumeInput.classList.add('invalid');
        nextButton5.disabled = true;
      }
      displayFileName(); // Call the function to display the file name
    });
  
    function validateName(name) {
      return /^[a-zA-Z\s]*$/.test(name);
    }
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    function validatePhoneNumber(phone) {
      const re = /^\d{10}$/;
      return re.test(phone);
    }
  
    function validateAddress(address) {
      return address.trim() !== '' && address.length >= 5; // Minimum length of 5 characters
    }
  
    nameInput.addEventListener('input', function() {
      if (validateName(nameInput.value.trim())) {
        nameError.textContent = '';
        nameInput.classList.remove('invalid');
        nextButton1.disabled = false;
      } else {
        nameError.textContent = 'Please enter a valid name.';
        nameInput.classList.add('invalid');
        nextButton1.disabled = true;
      }
    });
  
    nextButton1.addEventListener('click', function() {
      if (validateName(nameInput.value.trim())) {
        step1.style.display = 'none';
        step2.style.display = 'block';
      } else {
        nameError.textContent = 'Please enter a valid name to proceed.';
      }
    });
  
    emailInput.addEventListener('input', function() {
      if (validateEmail(emailInput.value.trim())) {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
        nextButton2.disabled = false;
      } else {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
        nextButton2.disabled = true;
      }
    });
  
    nextButton2.addEventListener('click', function() {
      if (validateEmail(emailInput.value.trim())) {
        step2.style.display = 'none';
        step3.style.display = 'block';
      } else {
        emailError.textContent = 'Please enter a valid email address to proceed.';
      }
    });
  
    phoneInput.addEventListener('input', function() {
      if (validatePhoneNumber(phoneInput.value.trim())) {
        phoneError.textContent = '';
        phoneInput.classList.remove('invalid');
        nextButton3.disabled = false;
      } else {
        phoneError.textContent = 'Please enter a valid phone number.';
        phoneInput.classList.add('invalid');
        nextButton3.disabled = true;
      }
    });
  
    nextButton3.addEventListener('click', function() {
      if (validatePhoneNumber(phoneInput.value.trim())) {
        step3.style.display = 'none';
        step4.style.display = 'block';
      } else {
        phoneError.textContent = 'Please enter a valid phone number to proceed.';
      }
    });
  
    addressInput.addEventListener('input', function() {
      if (validateAddress(addressInput.value.trim())) {
        addressError.textContent = '';
        addressInput.classList.remove('invalid');
        nextButton4.disabled = false;
      } else {
        addressError.textContent = 'Address must not be empty and should have a minimum length of 5 characters.';
        addressInput.classList.add('invalid');
        nextButton4.disabled = true;
      }
    });
  
    nextButton5.addEventListener('click', function() {
      step5.style.display = 'none';
      resultMessage.style.display = 'block'; // Display the result message instead of the next step
    });
  });
  