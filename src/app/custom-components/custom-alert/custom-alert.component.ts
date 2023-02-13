import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css'],
})
export class CustomAlertComponent implements OnInit {
  @Input() msg!: string;
  @Input() class!: string;

  showAlert = true;

  ngOnInit() {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
