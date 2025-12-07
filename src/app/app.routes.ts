import { Routes } from '@angular/router';
import { Home } from './home';
import { AutoDetail } from './auto-detail';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'auto/:id', component: AutoDetail },
	{ path: '**', redirectTo: '' }
];
