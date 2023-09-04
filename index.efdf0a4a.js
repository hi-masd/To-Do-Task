var e=[],t=[],n=[],l=document.getElementById("add-button"),a=document.getElementById("todo-input"),i=document.getElementById("delete-all"),c=document.getElementById("all-todos"),r=document.getElementById("delete-selected");//updates the all the remaining, completed and main list
function s(){t=e.filter(e=>e.complete),n=e.filter(e=>!e.complete),document.getElementById("r-count").innerText=e.length.toString(),document.getElementById("c-count").innerText=t.length.toString()}//adds the task in main list
function d(){var t=a.value;if(""===t){alert("\uD83D\uDE2E Task cannot be empty \uD83D\uDE2E");return}e.push({task:t,id:Date.now().toString(),complete:!1}),a.value="",s(),o(e)}//renders the main list and views on the main content
function o(e){c.innerHTML="",e.forEach(e=>{var t=`<li id=${e.id} class="todo-item">
    <p id="task"> ${e.complete?`<strike>${e.task}</strike>`:e.task} </p>
    <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class=" ci bx bx-check bx-sm"></i> Select

                </button>

                <button class="delete btn btn-error" >
                    <i class="di bx bx-trash bx-sm"></i> Delete
                </button>
            </div>
        </li>`;c.innerHTML+=t})}//event listners for add and delete
l.addEventListener("click",d),i.addEventListener("click",//deletes all the tasks
function(t){e=[],s(),o(e)}),r.addEventListener("click",//deletes only completed task
function(t){e=e.filter(e=>!e.complete),s(),o(e)}),//event listeners for filtersk
document.addEventListener("click",l=>{var a,i;("complete"==l.target.className.split(" ")[0]||"ci"==l.target.className.split(" ")[0])&&(a=l.target.parentElement.parentElement.getAttribute("id"),e.forEach(e=>{e.id==a&&(!1==e.complete?(e.complete=!0,l.target.parentElement.parentElement.querySelector("#task").classList.add("line")):(e.complete=!1,l.target.parentElement.parentElement.querySelector("#task").classList.remove("line")))}),s(),o(e)),("delete"==l.target.className.split(" ")[0]||"di"==l.target.className.split(" ")[0])&&(i=l.target.parentElement.parentElement.getAttribute("id"),e=e.filter(e=>e.id!=i),s(),o(e)),"all"==l.target.id&&o(e),"rem"==l.target.id&&o(n),"com"==l.target.id&&o(t)}),//event listner for enter key
a.addEventListener("keypress",e=>{"Enter"===e.key&&d()});//# sourceMappingURL=index.efdf0a4a.js.map

//# sourceMappingURL=index.efdf0a4a.js.map
