let tasks = [];

function addTask() {
	const input = document.getElementById("taskInput");
	const taskList = document.getElementById("taskList");

	if (input.value === "") {
		alert("Please enter a task.");
		return;
	}

	const task = {
		id: Date.now(),
		name: input.value,
		completed: false
	};

	tasks.push(task);

	const li = document.createElement("li");
	li.innerHTML = `
		<span>${task.name}</span>
		<div class="buttons">
			<button onclick="completeTask(${task.id})">Complete</button>
			<button onclick="deleteTask(${task.id})">Delete</button>
		</div>
	`;

	taskList.appendChild(li);
	input.value = "";
}

function completeTask(id) {
	const task = tasks.find(task => task.id === id);

	if (!task) {
		alert("Task not found.");
		return;
	}

	task.completed = true;

	const li = document.querySelector(`li:nth-child(${tasks.indexOf(task) + 1})`);
	// li.classList.add("completed");

    li.children[0].classList.add('completed')

}

function deleteTask(id) {
	const task = tasks.find(task => task.id === id);

	if (!task) {
		alert("Task not found.");
		return;
	}

	const index = tasks.indexOf(task);
	tasks.splice(index, 1);

	const li = document.querySelector(`li:nth-child(${index + 1})`);
	li.remove();
}
