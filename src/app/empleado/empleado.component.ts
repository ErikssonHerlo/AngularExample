import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Here was a Employee Inline</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color: cyan};"]
})
export class EmpleadoComponent implements OnInit {

  name = 'Juan';
  lastName = "Gutierrez";
  age = 22;
  constructor() { }

  showCompany(value:String){

  }
  ngOnInit(): void {
  }

}
