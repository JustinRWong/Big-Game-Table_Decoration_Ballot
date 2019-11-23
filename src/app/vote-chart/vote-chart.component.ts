import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

declare var Ably: any;

@Component({
  selector: 'app-vote-chart',
  templateUrl: './vote-chart.component.html',
  styleUrls: ['./vote-chart.component.css']
})
export class VoteChartComponent implements OnInit {

  // Class Attributes
  ably: any
  receiveChannel: any
  chart = []

  // All the different tables initialized with 0 votes
  all_votes: number = 0
  table_1: number = 0
  table_2: number = 0
  table_3: number = 0
  table_4: number = 0

  table_5: number = 0
  table_6: number = 0
  table_7: number = 0
  table_8: number = 0

  table_9: number = 0
  table_10: number = 0
  table_11: number = 0
  table_12: number = 0

  table_13: number = 0
  table_14: number = 0
  table_15: number = 0
  table_16: number = 0

  table_17: number = 0

  ngOnInit() {
    // Connect to ably API
    this.ably = new Ably.Realtime('I2Jq7A.QNQwAw:x21TJMf4Y43moj97')
    // Attach to channel
    this.receiveChannel = this.ably.channels.get("vote-channel")
    // Ably Subscription
    this.receiveChannel.subscribe("update", function(message: any) {
      // Increment number of votes
      this.all_votes++;
      // Parse through the different possible options
      switch(message.data.vote) {
        case 1:
          this.table_1++;
          break;
        case 2:
          this.table_2++;
          break;
        case 3:
          this.table_3++;
          break;
        case 4:
          this.table_4++;
          break;

        case 5:
          this.table_5++;
          break;
        case 6:
          this.table_6++;
          break;
        case 7:
          this.table_7++;
          break;
        case 8:
          this.table_8++;
          break;

        case 9:
          this.table_9++;
          break;
        case 10:
          this.table_10++;
          break;
        case 11:
          this.table_11++;
          break;
        case 12:
          this.table_12++;
          break;

        case 13:
          this.table_13++;
          break;
        case 14:
          this.table_14++;
          break;
        case 15:
          this.table_15++;
          break;
        case 16:
          this.table_16++;
          break;

        case 17:
          this.table_17++;
          break;

        default:
          alert("TABLE NOT FOUND: ERROR IN vote-chart.component.ts");
      }

      this.chart = new Chart('canvas', {
        type:'bar',
        data: {
          labels: ["Table 1",   "Table 2",  "Table 3", "Table 4",
                   "Table 5",   "Table 6",  "Table 7", "Table 8",
                   "Table 9",  "Table 10", "Table 11", "Table 12",
                   "Table 13", "Table 14", "Table 15", "Table 16", "Table 17"],
          datasets:[{
            label: "Current Total Vote Count: " + this.all_votes.toString(),
            data: [this.table_1, this.table_2,  this.table_3,  this.table_4,
                   this.table_5, this.table_6,  this.table_7,  this.table_8,
                   this.table_9, this.table_10, this.table_11, this.table_12,
                  this.table_13, this.table_14, this.table_15, this.table_16, this.table_17],
            // Alternate background color with Cal and Stanford colors
            // Cal Blue *  Cal Gold *  Cardinal * Red-White
            backgroundColor: [
              'rgba(0,50,98,1)',        'rgba(0,50,98,1)',     'rgba(0,50,98,1)',     'rgba(0,50,98,1)',
              'rgba(253,181,21,1)',  'rgba(253,181,21,1)',  'rgba(253,181,21,1)',  'rgba(253,181,21,1)',
              'rgba(140,21,21,1)',    'rgba(140,21,21,1)',   'rgba(140,21,21,1)',   'rgba(140,21,21,1)',
              'rgba(255,255,255,1)','rgba(255,255,255,1)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)'
            ],
            borderColor: [
              'rgba(0,50,98,1)',        'rgba(0,50,98,1)',     'rgba(0,50,98,1)',     'rgba(0,50,98,1)',
              'rgba(253,181,21,1)',  'rgba(253,181,21,1)',  'rgba(253,181,21,1)',  'rgba(253,181,21,1)',
              'rgba(140,21,21,1)',    'rgba(140,21,21,1)',   'rgba(140,21,21,1)',   'rgba(140,21,21,1)',
              'rgba(77,79,83,1)','rgba(77,79,83,1)', 'rgba(77,79,83,1)', 'rgba(77,79,83,1)', 'rgba(77,79,83,1)'
            ],
            borderWidth: 2.5
          }]
        },
        options: {
          animation: false,
          scales: {
            yAxes:[{
              ticks: {beginAtZero:true}
            }]
          }
        }
      }) // new Chart bracket
    }.bind(this));
  }
}
