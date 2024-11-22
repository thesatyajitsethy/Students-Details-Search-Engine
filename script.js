const students = [
    {
        name: "Student1",
        rollNumber: "1",
        course: "Course1",
        email: "student1@gmail.com",
        phone: "0123456789",
        percentage: 100,
        linkedin: "https://www.linkedin.com/",
        address: "Address of student1"
    },
    {
        name: "Student2",
        rollNumber: "2",
        course: "Course2",
        email: "student2@gmail.com",
        phone: "0123456789",
        percentage: 95,
        linkedin: "https://www.linkedin.com/",
        address: "Address of student2"
    },
    {
        name: "Student3",
        rollNumber: "3",
        course: "Course3",
        email: "student3@gmail.com",
        phone: "0123456789",
        percentage: 98,
        linkedin: "https://www.linkedin.com/",
        address: "Address of student3"
    }
];

function searchStudent() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Searching...";
    resultDiv.classList.remove('show');

    const result = students.find(student => 
        student.rollNumber.toLowerCase() === input
    );

    if (result) {
        resultDiv.innerHTML = `
            <table class="student-table">
                <tr><th>Name</th><td>${result.name}</td></tr>
                <tr><th>Roll Number</th><td>${result.rollNumber}</td></tr>
                <tr><th>Course</th><td>${result.course}</td></tr>
                <tr><th>Email</th><td>${result.email}</td></tr>
                <tr><th>Phone</th><td>${result.phone}</td></tr>
                <tr><th>Last Year Percentage</th><td>${result.percentage}%</td></tr>
                <tr><th>LinkedIn</th><td><a href="${result.linkedin}" target="_blank">LinkedIn Profile</a></td></tr>
                <tr><th>Address</th><td>${result.address}</td></tr>
            </table>
        `;
        resultDiv.classList.add('show');
    } else {
        resultDiv.innerHTML = "No student found!";
    }
}
