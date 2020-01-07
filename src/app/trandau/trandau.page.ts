import { Component, OnInit } from '@angular/core';
import { EnvService } from '../service/env.service';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-trandau',
  templateUrl: './trandau.page.html',
  styleUrls: ['./trandau.page.scss'],
})
export class TrandauPage implements OnInit {
  limit = 10;
  currentTotal = 0;
  arrayTaiSuus = [];

  constructor(
    private envService: EnvService,
    private requestService: RequestService
  ) {

  }

  ionViewWillEnter(): void {
    this.loadDataTaiSuu();
  }

  reloadDataTaiSuu() {
    this.arrayTaiSuus = [];
    this.currentTotal = 0;
    this.loadDataTaiSuu();
    this.currentTotal += this.limit;
  }

  loadDataTaiSuu() {
    const urlLoadDataTaiSuu = this.envService.API_URL + this.envService.URL_LOAD_DATA_TAI_SUU;
    const params = [];
    params.push({key: 'limit', value: this.limit});
    params.push({key: 'currentTotal', value: this.currentTotal});
    this.requestService.get(urlLoadDataTaiSuu, params, undefined,
      (response) => this.onSuccessLoadDataTaiSuu(response),
      (error) => this.onErrorLoadDataTaiSuu(error),
      () => {});

  }

  onErrorLoadDataTaiSuu(error) {
    console.log(error);
  }

  onSuccessLoadDataTaiSuu(response) {
    console.log(response);
    for (let index = 0; index < Object.keys(response).length; index++) {
      this.arrayTaiSuus.push(response[index]);      
    }
  }

  ngOnInit() {
  }

}
