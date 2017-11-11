import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { StatisticsHistoryComponent } from './dashboard/statistics-history/statistics-history.component';
import { ChartComponent } from './dashboard/statistics/chart/chart.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    DashboardComponent,
    StatisticsComponent,
    StatisticsHistoryComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [
    {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
