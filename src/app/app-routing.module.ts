import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalComponent } from './goal/goal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent },
  { path: 'about', component: AboutComponent },
  // passing parameter
  { path: 'goals/:id', component: GoalDetailComponent},
  // redirect ho home
  { path: '', redirectTo: "/goals", pathMatch: "full" },
  // not found === 404 page
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
