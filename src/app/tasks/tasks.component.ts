import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:{tname:string,date:string,time:string,checked:boolean}[]=[]

  constructor(private taskservice:TaskService) { }
  ngOnInit(): void {
    this.tasks = this.taskservice.listTask();
    console.log(this.tasks)
  }

  onDelete(event : any){
    console.log(`recieved:${event}`)
    this.tasks.splice(event,1)
  }
}
