import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html',
  styleUrls: ['./task-four.component.css']
})
export class TaskFourComponent implements OnInit {

  // @ts-ignore
  blockquotes: Array<string> = [];
  image: string;
  biography: string;
  constructor() {
    this.blockquotes.push('To be or not to be');
    this.blockquotes.push('If you think your teacher is tough, wait till you get a boss');
    this.blockquotes.push('Life is not fair — get used to it!');
    this.blockquotes.push('Success is a lousy teacher. It seduces smart people into thinking they can’t lose');
    this.blockquotes.push('Be nice to nerds. Chances are you’ll end up working for one');
    this.image = './assets/bill.jpg';
    this.biography = 'Some biography';
  }

  ngOnInit(): void {
  }

}
