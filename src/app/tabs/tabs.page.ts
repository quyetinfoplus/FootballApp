import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  titleTab = 'Trận Đấu';
  constructor() { }

  ngOnInit() {
  }

  clickTDau() {
    this.titleTab = 'Trận Đấu';
  }

  clickTDoi() {
    this.titleTab = 'Theo Dõi';
  }
}
