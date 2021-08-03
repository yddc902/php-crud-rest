const groupsTable = document.getElementById("groups-table");
const groupForm = document.getElementById("group-form");

let isEditing = false;

const API = "http://localhost:3002/api/";

editData = async (GID, GNAME) => {
	isEditing = true;

	// hide groupForm.children[1]
	groupForm.children[1].style.display = "none";
	// show groupForm.children[2]
	groupForm.children[2].style.display = "inline-block";

	console.log(GID, GNAME);
	// console.log(groupForm.children[0].value);
	groupForm.children[0].value = GNAME;
};

deleteData = async (id) => {
	try {
		const response = await fetch(API + "groups/?id=" + id, {
			method: "DELETE",
		});
		if (response.status === 200) {
			console.log("Group deleted");
			window.location.href = window.location;
		} else {
			console.log("Error deleting group");
		}
	} catch (error) {
		console.log("Error deleting group");
	}
};

postData = async ({ formData }) => {
	const plainData = Object.fromEntries(formData.entries());
	const DataJsonString = JSON.stringify(plainData);
	// console.log(data);
	await fetch(`${API}/groups`, {
		method: "post",
		body: DataJsonString,
	}).then((res) => {
		console.log("added");
		// console.log(res.json());
		// res.json();
	});
};

groupForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const form = e.currentTarget;

	const url = form.action;

	try {
		const formData = new FormData(form);

		const responseData = await postData({ url, formData });
		// window.location.reload();
		window.location = window.location;

		console.log({ responseData });
	} catch (error) {
		console.error(error);
	}
});

getData = async () => {
	await fetch(`${API}/groups`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			// create a new table row
			groupsTable.innerHTML = "";
			data.map((group) => {
				const TR = document.createElement("tr");

				const TD_GID = document.createElement("td");
				TD_GID.innerHTML = group.GID;

				const TD_GNAME = document.createElement("td");
				TD_GNAME.innerHTML = group.GNAME;

				const TD_EDIT = document.createElement("td");
				TD_EDIT.innerHTML = `<button id="edit_${group.GID}" onClick="editData(${group.GID}, '${group.GNAME}')">EDIT</button>`;

				const TD_DELETE = document.createElement("td");
				TD_DELETE.innerHTML = `<button id="delete_${group.GID}" onClick="deleteData(${group.GID})">DELETE</button>`;

				TR.appendChild(TD_GID);
				TR.appendChild(TD_GNAME);
				TR.appendChild(TD_EDIT);
				TR.appendChild(TD_DELETE);

				groupsTable.appendChild(TR);
			});
		});
};

getData();
// setInterval(() => {
// 	getData();
// }, 1000 * 10);
