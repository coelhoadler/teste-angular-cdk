import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  public title = 'Section component';

  constructor() {
    setTimeout(_ => {
      this.title = 'Updated!';
  }, 5000);
  }

  ngOnInit() {
  }

}
