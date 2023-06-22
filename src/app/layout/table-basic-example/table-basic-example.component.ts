import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.css']
})




export class TableBasicExampleComponent implements OnInit {
  displayedColumns: string[] = ['repo', 'startingCoverage', 'finalCoverage', 'percentChange', 'newUnitTests'];


  ELEMENT_DATA: PeriodicElement[] = [
    {repo: 'UI/src/app/.module.ts', startingCoverage: '30%', finalCoverage: '76%', percentChange: '43', newUnitTests: 8 },
    {repo: 'UI/src/app/interceptor/http-trace.interceptor.ts', startingCoverage: '52%', finalCoverage: '84%', percentChange: '32', newUnitTests: 5},
    {repo: 'UI/src/app/app.component.ts', startingCoverage: '26%', finalCoverage: '80%', percentChange: '54', newUnitTests: 5},
    {repo: 'UI/src/app/services/launch-darkly.service.ts', startingCoverage: '56%', finalCoverage:'84%%', percentChange: '28', newUnitTests: 4},
    {repo: 'UI/src/app/services/app-insights.service.ts', startingCoverage: '47%', finalCoverage: '90%', percentChange: '43', newUnitTests: 7},
    {repo: 'UI/src/app/pages/ktu/challenge-question/challenge-question.component.ts', startingCoverage: '46%', finalCoverage:'82%', percentChange: '36', newUnitTests: 4},

  ];

  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }


}
 export interface PeriodicElement {
    startingCoverage: string;
    repo: string;
    finalCoverage: string;
    percentChange: string;
    newUnitTests: number;

  }
