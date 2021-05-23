import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  title: string;
  constructor() {
    this.title = 'Hello, Angular';
  }

  ngOnInit(): void {

  }

}
