const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
	const taskText = taskInput.value.trim();
	if (taskText === "") return;

	const listItem = document.createElement("li");

	const taskSpan = document.createElement("span");
	taskSpan.textContent = taskText;
	listItem.appendChild(taskSpan);

	const buttonsDiv = document.createElement("div");
	buttonsDiv.classList.add("task-buttons");

	const completeButton = document.createElement("button");
	completeButton.classList.add("complete");
	completeButton.innerHTML = "✓";
	completeButton.addEventListener("click", () => {
		listItem.classList.toggle("completed");
	});
	buttonsDiv.appendChild(completeButton);

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerHTML = "✗";
	deleteButton.addEventListener("click", () => {
		taskList.removeChild(listItem);
	});
	buttonsDiv.appendChild(deleteButton);

	listItem.appendChild(buttonsDiv);
	taskList.appendChild(listItem);

	taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
