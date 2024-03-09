import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'satesto',
        loadComponent: ()=>import('./satesto/satesto.component').then(m=> m.SatestoComponent)
    }
];
