import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','styles/dashboard.scss','styles/admin-portal.scss'],
})
export class AppComponent implements OnInit{


  radioModel = 0;
  datVal1 = "07/20/2021"

  ngOnInit() {
  }
}
