import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Student.mode';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {
      id: 1,
      firstname: "Rodney",
      lastname: "Mupanduki",
      age: 21,
      gender: "Male"

    },
    {
      id: 2,
      firstname: "Tyfah",
      lastname: "Pundo",
      age: 21,
      gender: "Male"

    },
    {
      id: 3,
      firstname: "Jane",
      lastname: "Doe",
      age: 18,
      gender: "Female"

    },
    {
      id: 4,
      firstname: "John",
      lastname: "Doe",
      age: 40,
      gender: "Male"

    },
  ];


  newStudentFn: string ="";
  newStudentLn: string ="";
  newStudentAge: string ="";
  newStudentGndr: string = "";
  newStudent:any;

  

  editing: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.students.length)
  }
  
  
  

  onDelete(index: number){
    this.students.splice(index, 1)
  }

  onUpdate(e:Event, ){
    e.preventDefault();
    this.newStudent = {
      id: this.students.length + 1,
      firstname: this.newStudentFn,
      lastname: this.newStudentLn,
      age: this.newStudentAge,
      gender: this.newStudentGndr
    }
    this.students.push(this.newStudent);
    this.newStudentFn ="";
    this.newStudentLn ="";
    this.newStudentAge ="";
    this.newStudentGndr = "";
    
  }

  onEdit(index:number){
    this.editing= this.students[index]
    this.newStudentFn = this.editing.firstname;
    this.newStudentLn =this.editing.lastname;
    this.newStudentAge =this.editing.age;
    this.newStudentGndr = this.editing.gender;
  }

}
