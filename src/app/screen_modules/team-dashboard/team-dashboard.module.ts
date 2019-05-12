import { NgModule } from '@angular/core';

import { BuildWidgetComponent} from '../../widget_modules/build/build-widget/build-widget.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamDashboardRoutingModule } from './team-dashboard-routing.module';
import { TeamDashRoutingModule } from './team-dashboard-routing-module';
import { TestDashComponent } from './test-dash/test-dash.component';

@NgModule({
  declarations: [
    BuildWidgetComponent,
    DashboardViewComponent,
    TestDashComponent
  ],
  imports: [
    SharedModule,
    TeamDashboardRoutingModule,
    TeamDashRoutingModule
  ],
  entryComponents: [
    BuildWidgetComponent
  ]
})
export class TeamDashboardModule { }
