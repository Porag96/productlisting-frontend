import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent {
  @Input() title: string = 'Toggle Button';
  isOn = false;
  buttonText = 'Turn On';

  toggle() {
    this.isOn = !this.isOn;
    this.buttonText = this.isOn ? 'Turn Off' : 'Turn On';
  }

  @Output() changed = new EventEmitter<boolean>();
  
}
