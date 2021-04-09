import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() details: string | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
