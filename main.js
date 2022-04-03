//identify elements
let inputText = document.querySelector('#textInput input')
let addButton= document.querySelector('#inputButton #add')
let taskList= document.querySelector("#taskList")
let deleteAll = document.querySelector("#inputButton #deleteAll")
let erase= document.querySelector("#inputButton #delete")
// console.log(inputText)

//add item to task list
addButton.addEventListener('click', ()=> {
    //create and add checkbox and set name as label value
    let newItem = document.createElement('div')
    newItem.className = "task"
    newItem.innerHTML=`
    <input type="checkbox" id="${inputText.value}" name ="${inputText.value}"/>
    <label for="${inputText.value}">${inputText.value}</label>
    `
    //add div to parent
    taskList.appendChild(newItem)
    // console.log(taskList)
    //identify every item in list
    let toDo = document.querySelectorAll('.task')
    // console.log(toDo)
    erase.addEventListener('click', ()=> {
        for(let box of toDo) {
            //specifically select input and see if its checked
            if (box.querySelector("input").checked) {
                box.remove()
            }
        }
    })
    deleteAll.addEventListener('click', ()=> {
        for(let task of toDo) {
            task.remove()
        }
    })
    
})

// console.log(toDo)
//toggle any element in list to be complete (strikethrough)

