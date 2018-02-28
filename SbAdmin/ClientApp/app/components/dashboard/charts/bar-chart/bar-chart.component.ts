import { Component, OnInit } from '@angular/core';
declare var Morris: any;

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
    data: {
      y: string;
      a: number;
      b: number;
    }[];

    ngOnInit() {
      this.data = [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }];

      Morris.Bar({
        element: 'morris-bar-chart',
        data: this.data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
      });
    }
}
