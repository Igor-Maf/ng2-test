import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us';
import { PortfolioComponent } from './portfolio';
import { ServicesComponent } from './services';
import { provideRouter } from '@angular/router';

const APP_ROUTES = [{
    path: 'portfolio',
    component: PortfolioComponent
}, {
    path: 'services',
    component: ServicesComponent
}, {
    path: 'about-us',
    component: AboutUsComponent
}, {
    path: '',
    component: AppComponent
}];

export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];
