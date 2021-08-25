import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  isShown:boolean = true;
  isHidden:boolean = true;
  isDisabled:boolean = true;
  isShown1:boolean = true;
  isShown2:boolean = true;
  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit(tname: string,date: string,time: string,checked: boolean){
    if(tname==""){
      this.isHidden=true;
      this.isShown=false;
      this.isShown1=true;
      this.isShown2=true;
    }
    else if(date==""){
      this.isHidden=true;
      this.isShown=true;
      this.isShown1=false;
      this.isShown2=true;
    }
    else if(time==""){
      this.isHidden=true;
      this.isShown=true;
      this.isShown1=true;
      this.isShown2=false;
    }
    else{
      this.isHidden=false;
      this.isShown=true;
      this.isShown1=true;
      this.isShown2=true;
      var task={
        tname: tname,
        date: date,
        time: time,
        checked: checked
      }
      this.taskservice.addTask(task)
    }
  }
}
