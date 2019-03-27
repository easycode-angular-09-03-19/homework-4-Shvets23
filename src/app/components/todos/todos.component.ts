import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todosList: Array<{}> = [
    { 
      "id": 1, 
      "text": "First task", 
      "completed": false 
    },
    { 
      "id": 2, 
      "text": "Second task", 
      "completed": false 
    }
  ];
  public pickAllState: boolean = false;
  public taskNamt: string = '';
  constructor() { }
  
  ngOnInit() {
  }
  public pickAll(): void {
    this.pickAllState = !this.pickAllState;
    if(this.pickAllState){
      for (let el of this.todosList) {
      for (let key in el) {
        if (key === 'completed') {
          el[key] = true;
          }
        }
      }
    } else {
      for (let el of this.todosList) {
        for (let key in el) {
          if (key === 'completed') {
            el[key] = false
          }
        }
      }
    }
  }

  public newTask(): void {
    if (this.taskNamt == '') {
      alert('Please, enter task name');
    } else {
      let task: {} = {
      "id": Math.ceil(Math.random()*10000), 
      "text": this.taskNamt, 
      "completed": false 
    }
    this.todosList.push(task);
    this.taskNamt = '';
    }
  }
  
  public deleteTodoItem(data): void {
    console.log(data)
    if (data['action'] == 'delete') {
      if(confirm('Are you sure you want to delete this task?')){
            this.todosList = this.todosList.filter(item => item !== data)
      }
    }  
  }
  public changeStatus(data): void {
    if (data['action'] == 'complete') {
      this.pickAllState = false;
      let allState = true;
      for (let key of this.todosList) {
        if (key["id"] == data["id"]) {
          key["completed"] = !key["completed"]
          console.log(key);
        }
        if (key["completed"] == false) {
          allState = false;
        }
      }
      if(allState) this.pickAllState = true;
    }
  }
}
