const userListElement = document.getElementById("userList");
const userDetailsElement = document.getElementById("userDetails");
const usersElement = document.getElementById("users");
const detailsElement = document.getElementById("details");
const backButton = document.getElementById("backButton");

const fetchUsers = async () => {
	try {
		const response = await fetch("https://reqres.in/api/users?page=2");
		const data = await response.json();
		displayUsers(data.data);
	} catch (error) {
		console.error("Error fetching users:", error);
	}
};

const displayUsers = (users) => {
	usersElement.innerHTML = "";
	users.forEach((user) => {
		const li = document.createElement("li");
		li.textContent = `${user.first_name} ${user.last_name}`;
		li.addEventListener("click", () => displayUserDetails(user));
		usersElement.appendChild(li);
	});
};

const displayUserDetails = (user) => {
	userListElement.classList.remove("active");
	userDetailsElement.classList.add("active");

	detailsElement.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;
};

backButton.addEventListener("click", () => {
	userListElement.classList.add("active");
	userDetailsElement.classList.remove("active");
});

fetchUsers();
