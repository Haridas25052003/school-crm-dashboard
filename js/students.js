let students = [];

$(document).ready(function () {

    renderTable();

    // Add student
    $("#addStudent").click(function () {

        let name = $("#name").val();
        let studentClass = $("#class").val();

        if (name === "" || studentClass === "") {
            alert("Please fill all fields");
            return;
        }

        let student = {
            id: Date.now(),
            name: name,
            class: studentClass
        };

        students.push(student);

        renderTable();

        $("#name").val("");
        $("#class").val("");
    });

    // Delete student (IMPORTANT: event delegation)
    $(document).on("click", ".deleteBtn", function () {
        let id = $(this).data("id");

        students = students.filter(s => s.id !== id);

        renderTable();
    });

    // Search
    $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();

        let filtered = students.filter(s =>
            s.name.toLowerCase().includes(value)
        );

        renderTable(filtered);
    });

});

function renderTable(data = students) {

    $("#studentTable").empty();

    data.forEach(student => {

        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>
                    <button class="btn btn-danger deleteBtn" data-id="${student.id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        $("#studentTable").append(row);
    });

}