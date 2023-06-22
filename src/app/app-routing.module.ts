import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './layout/activity/activity.component';
import { CodeComponent } from './layout/code/code.component';
import { IssuesComponent } from './layout/issues/issues.component';
import { TableBasicExampleComponent } from './layout/table-basic-example/table-basic-example.component';

const routes: Routes = [
  {path: 'issues', component: IssuesComponent },
  {path: 'code', component: CodeComponent },
  {path: 'activity', component: ActivityComponent },
  {path: 'table-basic-example', component: TableBasicExampleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
