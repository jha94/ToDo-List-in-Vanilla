const input = document.getElementById('inputBox');
const addBtn = document.getElementsByClassName('addBtn')[0];
const wrapper = document.getElementById('listWrapper');

let todoList = [];
const currentTodo = '';

addBtn.disabled = !input.value

input.addEventListener('input', ({target:{value}})=>{
    addBtn.disabled = value?false:true
})

const  status = (name, complete, index) => {
    todoList[index] = {name, complete:!complete, index}
    renderList()
}

const remove = (index) => {
    todoList.splice(index, 1);
    renderList()
}

const renderTodo = ({name, complete}, index) => {
    return(
      name?
      `<div class="wrapperDiv">
      <p style="text-decoration: ${complete?'line-through':''}" >${name}</p>
      <button class="editBtn" onClick="status('${name}', ${complete}, ${index})" >${complete?'Undone':'Done'}</button>
      <button class="editBtn" onClick="remove(${index}), input.value='${name}'">Edit</button>
      <button class="editBtn" onClick="remove(${index})" >Delete</button>
    </div>`:`<div></div>`
    )
  }

  const renderList = () =>{
    wrapper.innerHTML= todoList.length?todoList.map((value, index)=>renderTodo(value, index)):`<div></div>`
  }

addBtn.addEventListener('click', ()=>{
    todoList.push({
        name:input.value,
        index:todoList.length,
        complete:false
    })
    input.value='';
    renderList();
})


