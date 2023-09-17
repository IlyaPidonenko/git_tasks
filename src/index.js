function reverseString(string) {
    const reversedString = string.split('').reverse().join('');
    return reversedString
}

console.log(reverseString("String")); 


function validateEmail(email) {
    const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
    
  }

  console.log(validateEmail("Ilja.pidonenko@gmail.com"))

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    return passwordRegex.test(password);
}

console.log(validatePassword("123456789qQ"))