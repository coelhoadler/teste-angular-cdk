import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Header component';

  constructor() {
    setTimeout(_ => {
      this.title = 'Updated!';
    }, 5000);
  }

  ngOnInit() {
  }

}
