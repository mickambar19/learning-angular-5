import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  options: Object;

  constructor() {
    this.options = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Ingresos/Egresos'
      },
      xAxis: {
        categories: ['Junio 2017', 'Julio 2017', 'Agosto 2017', 'Septiembre 2017', 'Octubre 2017']
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Ingresos',
        data: [0, 1, 0.5, 2, 0],
        color: '#8CDFD6'
      }, {
        name: 'Egresos',
        data: [0, -1, -0.5, -2, 1],
        color: '#9AA6A2'
      }]
    };
  }

  ngOnInit() {
  }

}
