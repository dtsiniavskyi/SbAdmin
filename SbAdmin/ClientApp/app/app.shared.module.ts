import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BadgeComponent } from './components/dashboard/badge/badge.component';
import { AreaChartComponent } from './components/dashboard/charts/area-chart/area-chart.component';
import { BarChartComponent } from './components/dashboard/charts/bar-chart/bar-chart.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        BadgeComponent,
        AreaChartComponent,
        BarChartComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: '**', redirectTo: 'dashboard' }
        ])
    ]
})
export class AppModuleShared {
}
