import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './layout/activity/activity.component';
import { CodeComponent } from './layout/code/code.component';
import { IssuesComponent } from './layout/issues/issues.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';

const routes: Routes = [
  {path: 'overview', component: OverviewPageComponent },
  {path: 'issues', component: IssuesComponent },
  {path: 'code', component: CodeComponent },
  {path: 'activity', component: ActivityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
