    const validEmail = "nibeditanayak@gmail.com";
    const validpassword="Ranirani@123";

    document.getElementById("registrationForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const emailInput = document.getElementById("email").value;
      const passwordInput=document.getElementById("password").value;

      const resultDiv = document.getElementById("result");


      localStorage.setItem("name",input.value);

      if ((emailInput.toLowerCase() === validEmail.toLowerCase())&&(passwordInput.toLowerCase()===validpassword.toLowerCase())) {
        resultDiv.style.color = "green";
        resultDiv.textContent = "✅ Registration Successful";
      } 

      else if((emailInput.toLowerCase() != validEmail.toLowerCase())&&(passwordInput.toLowerCase()===validpassword.toLowerCase())){
        resultDiv.style.color = "red";
        resultDiv.textContent = "❌ Invalid Gmail";
      }

      else if((emailInput.toLowerCase()=== validEmail.toLowerCase())&&(passwordInput.toLowerCase()!=validpassword.toLowerCase())){
        resultDiv.style.color = "red";
        resultDiv.textContent = "❌ Invalid password";
    
      }

      else{
        resultDiv.style.color = "red";
        resultDiv.textContent = "❌ Registration unsuccessful";
      }
    });

