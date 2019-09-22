import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  title = 'taskmanagement-frontend';
  myLabel = []
  myValue = []
  myLabel2 = []
  myValue2 = []
  

  constructor( private route: ActivatedRoute) { }
  cities:String[]
  numbers:number[]
  hospitals:String[]
  donors:number[]
  ngOnInit() {
    this.cities=['Ramallah','Jenin','Nablus']
    this.numbers=[5000,9000,1000]
    
      for (let city of this.cities) {
        this.myLabel.push(city)
      }
      for(let number of this.numbers){
        this.myValue.push(number)

      }
      console.log(this.myLabel)
      console.log(this.myValue)
      this.hospitals=['Ramallah hospital','HCI hospital','alquds hospilat']
      this.donors=[5000,200,1000]
  
      for (let hospital of this.hospitals) {
        this.myLabel2.push(hospital)
      }
      for(let donor of this.donors){
        this.myValue2.push(donor)

      }
    
  }
  public pieChartOptions: ChartOptions = {


    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }, title: {
      text: 'Your Users Per City Status',
      display: true
    }
  };

  public pieChartLabels: Label[] = this.myLabel
  public pieChartData: number[] = this.myValue
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  /****************************************************** */
  public pieChartOptions2: ChartOptions = {


    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }, title: {
      text: 'Hopspitals with Donors Status',
      display: true
    }
  };

  public pieChartLabels2: Label[] = this.myLabel2
  public pieChartData2: number[] = this.myValue2
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartColors2 = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  /****************************************************** */
// public pieChartOptions3: ChartOptions = {


//   responsive: true,
//   legend: {
//     position: 'top',
//   },
//   plugins: {
//     datalabels: {
//       formatter: (value, ctx) => {
//         const label = ctx.chart.data.labels[ctx.dataIndex];
//         return label;
        
//       },
//     },
//   }
//   , title: {
//     text: 'Your Tasks Priority',
//     display: true
//   }
// };

// public pieChartLabels3: Label[] = this.myLabel3
// public pieChartData3: number[] = this.myValue3
// public pieChartType3: ChartType = 'pie';
// public pieChartLegend3 = true;
// public pieChartColors3 = [
//   {
//     backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
//   },
// ];


}
