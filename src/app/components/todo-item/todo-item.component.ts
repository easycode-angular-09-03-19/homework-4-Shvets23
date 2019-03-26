import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() getTasks: Array<object>
  @Input() task: {}
  public completed: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  @Output() outputEventObj = new EventEmitter();
  
  public delete(): void {
    this.task['action'] = 'delete';
    this.outputEventObj.emit(this.task);
  }
  public status(): void {
    this.task['action'] = 'complete';
    this.outputEventObj.emit(this.task);
  }
}
