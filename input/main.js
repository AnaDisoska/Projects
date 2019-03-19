

var form = document.createElement("form");
form.method = 'post';
form.id = 'collect';
document.body.appendChild(form);




var firstName = document.createElement("input");
firstName.type = "text";
firstName.placeholder = 'First Name';
firstName.value = '';
// firstName.id = 'collect';
firstName.style.marginLeft = '10px';
form.appendChild(firstName);

var lastName = document.createElement("input");
lastName.type = "text";
lastName.placeholder = "Last Name";
lastName.value= '';
// lastName.id = 'collect';
lastName.style.marginLeft = '10px';
form.appendChild(lastName);

var email = document.createElement("input");
email.type = "text";
email.placeholder = "E-mail";
email.value = '';
// email.id = 'collect';
email.style.marginLeft = '10px';
form.appendChild(email);

var password = document.createElement("input");
password.type = "password";
password.placeholder = "Password";
password.value =  '';
// password.id = 'collect';
password.style.marginLeft = '10px';
form.appendChild(password);

var button = document.createElement("button");
button.innerHTML = "Sign in";
button.style.marginTop = '10px';

form.appendChild(button);


    
    button.addEventListener('click', function(event){
        event.preventDefault();
        for (var i = 0; i < form.elements.length; i++){
            // var get = new Person();  
            var get = document.getElementById('collect').elements[i].value; 
            // form.users.push(get);
            
            // get.users.push(get);
            console.log(get);
        }
        
     
        
      
    
    })