Main();
function Main()
{
    const submit_btn = document.querySelector('#submit_btn');
    const form = document.querySelector('#signup_form');
    submit_btn.addEventListener('click', ()=> Form_Validation());

    // array map method;
    let even_numbers = [2,3,6,9,10, 17,20];
    const odd_numbers = even_numbers.filter((item)=>{ return item%2== 0  })

    console.log('old array',even_numbers)
    console.log('new array',odd_numbers)
}


function Form_Validation()
{
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#Email');
    const phoneNo = document.querySelector('#phoneNo'); 
    const zipCode = document.querySelector('#zipCode'); 
    const city = document.querySelector('#city'); 
    const comments = document.querySelector('#comments'); 
    const passward = document.querySelector('#passward'); 
     

    Check_Required(firstName, lastName, email, phoneNo, zipCode, city, comments, passward);
  
}




function Check_Required(...feilds)
{
    
    feilds.forEach((field) => {
        if(field.value == '')
        {
            
            Show_Error(field , 'Required')
            return false;
        }

        
        else
        {
            if(field.id == 'Email')
            {
               const email_verification =  isValidEmail(field);
               if(email_verification === true)
               {
                Show_Success(field)
               }
               else
               {
                Show_Error(field, 'Invalid Email')
               }
            }

            if(field.id == 'passward'){
                const passwardValidation = isValidPassward(field)
                if(passwardValidation === true)
                {
                    Show_Success(field)
                }
                else{
                    Show_Error(field, 'not a correct passward')
                }
            }


            if(field.id == 'firstName' || field.id == 'lastName'){
                const passwardValidation = isValidPassward(field)
                if(field.length< 3 || field.length> 50)
                {
                    Show_Success(field)
                }
                else{
                    Show_Error(field, 'Name should be between 3 to 50 character')
                }
            }

            if(field.id == 'phoneNo')
            {
               const phoneNo_verification =  isValidphoneNo(field);
               if(phoneNo_verification === true)
               {
                Show_Success(field)
               }
               else
               {
                Show_Error(field, 'Phone no must contain number only')
               }
            }

            else
            {
                Show_Success(field)
            }
            
            

            return true;
        }
    })
}

function Show_Error(field, message)
{
    field.parentElement.classList.add('error')
    field.parentElement.classList.remove('success')
    field.parentElement.querySelector('span').innerText= message;
}

function Show_Success(field)
{
    field.parentElement.classList.remove('error')
    field.parentElement.classList.add('success')
    field.parentElement.querySelector('span').innerText= 'Pass'
}

function isValidEmail(email) {
    // check if email is valid using a regular expression
    
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(email.value)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}


function isValidPassward(passward){
    // check if passward is valid using a regular expression


    const passwardRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 
    if(passwardRegex.test(passward.value)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}


function isValidphoneNo(phoneNo)
{
    // check if PhoneNo is valid using a regular expression
    const phoneNoRegex = /^\d+$/; 
    if(phoneNoRegex.test(phoneNo.value)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}

