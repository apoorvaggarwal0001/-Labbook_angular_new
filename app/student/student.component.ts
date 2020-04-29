import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private client:HttpClient) { }
  student_data:string[];
  ngOnInit(): void {
    this.client.get('http://127.0.0.1:8080/student.json').
    subscribe(a=>{this.student_data=a as string[]});
  }
}
