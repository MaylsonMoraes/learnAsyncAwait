var docs = ["Processos", "Seguros", "Projetos"];
var ul = document.getElementById("lista");

docs.forEach(function(valor, index, array){
    let li = document.createElement("li")
    li.innerHTML = valor;
    ul.appendChild(li);
});

//sintaxe
// function primeiraFunction() {
//     return new Promise((resolve) =>{
        
//         setTimeout(() => {
//             console.log("Esperou isso aqui!")
//             resolve()
//         }, 1000)
//     })
// }

// async function segundoFunction() {

//     console.log("Iniciou")

//     await primeiraFunction()

//     console.log("Terminou")
// }

// segundoFunction()

// prático
function getUser(id) {

    return fetch('https://reqres.in/api/users?id=${id}')
    .then(data => data.json())
    .catch(err => console.log(err))

}

async function showUserName(id) {

    const user = await getUser(id)

    console.log('O nome do usuário é: ${user.data.first_name}')

}

showUserName(3)


