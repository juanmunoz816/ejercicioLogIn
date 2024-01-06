let name = document.querySelector('#name')
let password = document.querySelector('#password')
const btn = document.querySelector('#btn')
const closeAlert = document.querySelector('#close')
const IncorrectAlert = document.querySelector('#alerta')

btn.addEventListener('click', logIn)
closeAlert.addEventListener('click', goclose)


const usersDatabase=[
    {username:"andres",password:"123",},
    {username:"caro",password:"456",},
    {username:"mariana",password:"789",},
]


function logIn(){

    if(name.value !== '' && password.value !== ''){
        let accesName = name.value.toLowerCase()
        let accesPass = password.value
        let usuarioEncontrado = false

        usersDatabase.find(usuario => {
            if (usuario.username === accesName && usuario.password === accesPass){
                usuarioEncontrado = true 
            }
        } )
        
        if(usuarioEncontrado){
            window.location.href = 'home.html'
        }else{
            IncorrectAlert.classList.remove('oculto')
        }

       
    }else{
        alert('Ingresa un nombre y una contraseña')
    }



}

function goclose(){
    IncorrectAlert.classList.add('oculto')
    name.value=''
    password.value=''
}



