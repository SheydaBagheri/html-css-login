// onload show users login 
const usersElem = document.querySelector('#wrap-users')

window.addEventListener('load' , ()=>{
    fetch('https://ex-js-28188-default-rtdb.firebaseio.com/users.json')
    .then(res=> res.json())
    .then(data =>{
    let userData = Object.entries(data)
    userData.forEach(dataUs => {
        usersElem.insertAdjacentHTML('beforeend', 
                 `<div class="user">
                    <div class='userText'>
                    <h1>${dataUs[1].userEmail}</h1>
                    <h3>${dataUs[1].userPass}</h3>
                    </div>
                    <button onclick="deleteFunc()">Delete</button>
                </div> 
                </div>
                `

        )

        
    });
    console.log(userData)});




})

function deleteFunc(){




}