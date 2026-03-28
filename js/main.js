$(document).ready(function () {

    // Dummy data (later we will use AJAX)
    let students = [
        { id: 1, name: "Rahul" },
        { id: 2, name: "Sneha" },
        { id: 3, name: "Amit" }
    ];

    // Show total students
    $("#totalStudents").text(students.length);

});