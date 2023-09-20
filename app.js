let addToDoButton = document.querySelector('#addToDo')
let toDoContainer = document.querySelector('#toDoContainer')
let inputField = document.querySelector('#inputField')



addToDoButton.onclick = function (){
    if(inputField.value != ""){
        var paragraphe = document.createElement('p')
    }

    paragraphe.innerText = inputField.value

    // Styliser le paragraphe
    paragraphe.classList.add('paragraphe_style')

    toDoContainer.appendChild(paragraphe)

    inputField.value = "";

    paragraphe.addEventListener('click', function(){
        paragraphe.classList.add('machin')
    })

    paragraphe.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraphe)
    })
}
