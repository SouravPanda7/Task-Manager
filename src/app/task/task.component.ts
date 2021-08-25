import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('tdata') public taskdata: any;
  @Input('id') public id: any;
  @Output() public deleteTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCheck(event:any){
    this.taskdata.checked = !this.taskdata.checked;
  }

  deletetask(){
    console.log(`sending:${this.id}`)
    this.deleteTask.emit(this.id);
  }  
}
