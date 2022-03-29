//identify elements
let inputText = document.querySelector('#textInput input')
let addButton= document.querySelector('#inputButton #add')
let taskList= document.querySelector("#taskList #wholeList")
let deleteAll = document.querySelector("#inputButton #deleteAll")
let erase= document.querySelector("#inputButton #delete")
// console.log(erase)

//add item to task list
addButton.addEventListener('click', ()=> {
    let newItem = document.createElement('input')
    let label = document.createElement('label')
    label.innerText=inputText.value
    label.setAttribute('name', 'task')
    // newItem.className = "item active"
    newItem.setAttribute('name', 'task')
    newItem.setAttribute('type', 'checkbox')
    // newItem.setAttribute('type', 'checkbox')
    // newItem.value = inputText.value
    // console.log(newItem)
    // newItem.innerText = inputText.value
    // console.log(newItem)
    taskList.appendChild(newItem)
    taskList.appendChild(label)
    //identify every item in list
    let toDo = document.querySelectorAll('input[name="task"]')
    console.log(toDo)
    erase.addEventListener('click', ()=> {
        for(let task of toDo) {
            if(task.checked) {
                task.remove()
                task.value=""
            }
        }
    })
    // for(let item of toDo) {
        
    // }
    // console.log(toDo)
})

// console.log(toDo)
//toggle any element in list to be complete (strikethrough)

