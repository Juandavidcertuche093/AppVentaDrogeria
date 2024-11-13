import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',//ruta principal o ruta publica
        // canActivate: [redirectGuard],
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
];
