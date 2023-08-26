"use strict";
/*
Here we have the following entities:
    Student
    Course
    Instructor
A Student can enroll in multiple Courses,
and a Course is taught by an Instructor.
This showcases a many-to-many relationship
between Student and Course, and a one-to-many
relationship between Instructor and Course.
*/
class Student {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    enroll(course) {
        this.courses.push(course);
        course.students.push(this);
    }
}
class Course {
    constructor(name, instructor) {
        this.name = name;
        this.instructor = instructor;
        this.students = [];
    }
}
class Instructor {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    teach(courseName) {
        const course = new Course(courseName, this);
        this.courses.push(course);
        return course;
    }
}
// Usage:
const instructor = new Instructor('Dr. Smith');
const course = instructor.teach('Biology 101');
const student1 = new Student('Alice');
const student2 = new Student('Bob');
student1.enroll(course);
student2.enroll(course);
console.log(student1.courses[0].name); // "Biology 101"
console.log(course.instructor.name); // "Dr. Smith"
console.log(course.students.map(s => s.name)); // ["Alice", "Bob"]
//# sourceMappingURL=StudentCourseInstructor.js.map