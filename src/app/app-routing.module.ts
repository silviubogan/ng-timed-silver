import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClocksFlowViewComponent } from './clocks-flow-view/clocks-flow-view.component';
import { ClocksDataGridComponent } from './clocks-data-grid/clocks-data-grid.component';


const routes: Routes = [
  { path: '', redirectTo: '/flow-view', pathMatch: 'full' },
  { path: 'flow-view', component: ClocksFlowViewComponent },
  { path: 'data-grid', component: ClocksDataGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
