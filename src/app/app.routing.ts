import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    {path: '', component: AppComponent},
    {path: 'dashboard', component: DashboardComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
