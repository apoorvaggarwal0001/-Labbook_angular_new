import { Component, OnInit, Input} from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-lab12',
  templateUrl: './lab12.component.html',
  styleUrls: ['./lab12.component.css']
})
export class Lab12Component implements OnInit {
  @Input() id: number;
  @Input() name:string;
  @Input() salary:number;
  @Input() department:string;
  empdata;
  constructor() { 
    this.empdata=Employee;
  }
    show(){
      alert(this.id+" having name "+this.name+"having salary"+this.salary+" in "+this.department)
    }

  ngOnInit(): void {
    
  }

}
