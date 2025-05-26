
const $ = document;
const loginBtn = $.querySelector('#log');
const emailElem = $.querySelector('#Email');
const passElem = $.querySelector('#Pass');

loginBtn.addEventListener('click' , (e)=>{
    e.preventDefault();

    let userData ={
        userEmail : emailElem.value,
        userPass : passElem.value
    }
    // console.log(userData)
    fetch('https://ex-js-28188-default-rtdb.firebaseio.com/users.json',{
        method: 'POST',
        headers : {
            'Content-type': 'application/json'
        },
        body : JSON.stringify(userData)

    })
    .then(res => console.log(res) , clearInput())
    .catch(err => console.log(err))
})

function clearInput(){
    emailElem.value = ''
    passElem.value = ''
 
}

//Building an API with Firebase to capture and poste user data
