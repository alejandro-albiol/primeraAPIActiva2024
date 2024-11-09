import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
    const result = await axios.get("http://localhost:3000/api/v1/associationTypes");
    result.data.forEach((type:any) => {
        document.getElementById("type-field")!.innerHTML += `<option value="${type.id}">${type.name}</option>`;
    });
});