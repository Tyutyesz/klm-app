import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  constructor() { }

  ngOnInit(): void {
  }

}
