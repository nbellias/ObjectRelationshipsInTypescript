/*
The term qualified association pertains to the programming concept of
associative arrays, hashes and dictionaries among various objects.
*/
class AStudent {
    constructor(public id: number, public name: string) {}
}

class ACourse {
    constructor(public code: string, public name: string) {}
}

class Enrollment {
    constructor(public astudent: AStudent, public acourse: ACourse, public grade: string) {}
}

// Creating instances of students
const studentA = new AStudent(1, "Alice");
const studentB = new AStudent(2, "Bob");

// Creating instances of courses
const course1 = new ACourse("CSE101", "Introduction to Computer Science");
const course2 = new ACourse("MATH202", "Advanced Mathematics");

// Creating enrollments
const enrollments: Enrollment[] = [
    new Enrollment(studentA, course1, "A"),
    new Enrollment(studentA, course2, "B"),
    new Enrollment(studentB, course1, "C"),
    new Enrollment(studentB, course2, "A"),
];

// Associative arrays to store relationships
const studentEnrollments: Record<number, Enrollment[]> = {};
const courseEnrollments: Record<string, Enrollment[]> = {};
// And as associative dictionaries. Like as follows:
// const studentEnrollments = new Map<number, Enrollment[]>();
// const courseEnrollments = new Map<string, Enrollment[]>();

// Populating associative arrays
enrollments.forEach(enrollment => {
    if (!studentEnrollments[enrollment.astudent.id]) {
        studentEnrollments[enrollment.astudent.id] = [];
    }
    studentEnrollments[enrollment.astudent.id].push(enrollment);

    if (!courseEnrollments[enrollment.acourse.code]) {
        courseEnrollments[enrollment.acourse.code] = [];
    }
    courseEnrollments[enrollment.acourse.code].push(enrollment);
});

// Populating associative dictionaries
// enrollments.forEach(enrollment => {
//     if (!studentEnrollments.has(enrollment.astudent.id)) {
//         studentEnrollments.set(enrollment.astudent.id, []);
//     }
//     studentEnrollments.get(enrollment.astudent.id)?.push(enrollment);

//     if (!courseEnrollments.has(enrollment.acourse.code)) {
//         courseEnrollments.set(enrollment.acourse.code, []);
//     }
//     courseEnrollments.get(enrollment.acourse.code)?.push(enrollment);
// });

// Example usage for associative arrays
const studentId = 1;
console.log(`Enrollments for AStudent ${studentId}:`);
if (studentEnrollments[studentId]) {
    studentEnrollments[studentId].forEach(enrollment => {
        console.log(`${enrollment.acourse.name}: ${enrollment.grade}`);
    });
} else {
    console.log("No enrollments found for this AStudent.");
}

const courseCode = "CSE101";
console.log(`Enrollments for ACourse ${courseCode}:`);
if (courseEnrollments[courseCode]) {
    courseEnrollments[courseCode].forEach(enrollment => {
        console.log(`${enrollment.astudent.name}: ${enrollment.grade}`);
    });
} else {
    console.log("No enrollments found for this ACourse.");
}

// Example usage for associative dictionaries
// const studentId = 1;
// console.log(`Enrollments for Student ${studentId}:`);
// if (studentEnrollments.has(studentId)) {
//     studentEnrollments.get(studentId)?.forEach(enrollment => {
//         console.log(`${enrollment.course.name}: ${enrollment.grade}`);
//     });
// } else {
//     console.log("No enrollments found for this student.");
// }

// const courseCode = "CSE101";
// console.log(`Enrollments for Course ${courseCode}:`);
// if (courseEnrollments.has(courseCode)) {
//     courseEnrollments.get(courseCode)?.forEach(enrollment => {
//         console.log(`${enrollment.student.name}: ${enrollment.grade}`);
//     });
// } else {
//     console.log("No enrollments found for this course.");
// }