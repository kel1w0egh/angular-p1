import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {

  // @ts-ignore
  blockquotes: Array<string> = [];
  constructor() {
    this.blockquotes.push('To be or not to be');
    this.blockquotes.push('If you think your teacher is tough, wait till you get a boss');
    this.blockquotes.push('Life is not fair — get used to it!');
    this.blockquotes.push('Success is a lousy teacher. It seduces smart people into thinking they can’t lose');
    this.blockquotes.push('Be nice to nerds. Chances are you’ll end up working for one');
  }

  ngOnInit(): void {
  }

}
