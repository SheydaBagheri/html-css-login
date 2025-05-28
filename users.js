// onload show users login 
const usersElem = document.querySelector('#wrap-users')
const modalDe = document.querySelector('.modal')
const deletBtn = document.querySelector('.delete-btn');
const closeBtn = document.querySelector('.close-btn')
let userId = null
window.addEventListener('load' , ()=>{

    allusers()
})
//When the window is loaded, the allusers function is activated.
function allusers(){
 
    fetch('https://ex-js-28188-default-rtdb.firebaseio.com/users.json')
    .then(res=> res.json())
    .then(data =>{
    let userData = Object.entries(data)
    userData.innerHTML =''
    userData.forEach(dataUs => {
        usersElem.insertAdjacentHTML('beforeend', 
                 `<div class="user">
                    <div class='userText'>
                    <h1>${dataUs[1].userEmail}</h1>
                    <h3>${dataUs[1].userPass}</h3>
                    </div>
                    <button onclick="deleteFunc('${dataUs[0]}')">Delete</button>
                </div> 
                </div>
                `

        )
        
    });
    console.log(userData)});

}
// In the function allusers ,
//  we store the information from the API in a variable and create a forEach loop.

function deleteFunc(id){
    userId = id
    modalDe.style.display = 'flex'
    console.log(id)
}

function closeModal(){
       modalDe.style.display = 'none'
}

deletBtn.addEventListener('click', ()=>{

    fetch(`https://ex-js-28188-default-rtdb.firebaseio.com/users/${userId}.json` ,{
        method : 'DELETE'})
        .then(res => {
        allusers()
        closeModal()

    })




})

closeBtn.addEventListener('click', closeModal)
