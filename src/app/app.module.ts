import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartService } from './cart.service';
import { ClockViewComponent } from './clock-view/clock-view.component';
import { ClocksFlowViewComponent } from './clocks-flow-view/clocks-flow-view.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ClocksDataGridComponent } from './clocks-data-grid/clocks-data-grid.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ClockViewComponent,
    ClocksFlowViewComponent,
    StatusBarComponent,
    ClocksDataGridComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ CartService ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/