const groupsTable = document.getElementById("groups-table");
const groupForm = document.getElementById("group-form");

postData = async ({ formData }) => {
	const plainData = Object.fromEntries(formData.entries());
	const DataJsonString = JSON.stringify(plainData);
	// console.log(data);
	await fetch("http://localhost/php-rest/php-crud-rest/api/groups/", {
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

		console.log({ responseData });
	} catch (error) {
		console.error(error);
	}
});

getData = async () => {
	await fetch("http://localhost/php-rest/php-crud-rest/api/groups/")
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
				TR.appendChild(TD_GID);
				TR.appendChild(TD_GNAME);
				groupsTable.appendChild(TR);
			});
		});
};

getData();
// setInterval(() => {
// 	getData();
// }, 1000 * 10);
