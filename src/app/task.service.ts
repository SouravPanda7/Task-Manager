import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  task:{tname:string,date:string,time:string,checked:boolean}[]=[]

  addTask(task:{tname:string,date:string,time:string,checked:boolean}){
    this.task.push(task);
  }
  listTask(){
    return this.task;
  }
}
