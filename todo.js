function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span class="editable" onclick="editTask(this)">${taskInput.value}</span>
        <div>
          <button class="btn btn-warning btn-sm mr-2 de" onclick="editTask(this.parentElement.parentElement.querySelector('.editable'))"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn btn-warning btn-sm de" onclick="deleteTask(this)"><i class="fa-solid fa-delete-left"></i></button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
      li.style.color="black";
    }
  }

  function deleteTask(element) {
    var li = element.parentElement.parentElement;
    li.remove();
  }

  function editTask(element) {
    var span = element;
    var currentText = span.innerText;
    var input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "form-control";
    input.addEventListener("blur", function () {
      span.innerText = this.value;
    });
    span.innerText = "";
    span.appendChild(input);
    input.focus();
  }
