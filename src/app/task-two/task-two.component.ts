import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {

  blockquote: string;
  constructor() {
    this.blockquote = 'To be or not to be';
  }

  ngOnInit(): void {
  }

}
