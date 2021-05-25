import { Routes } from '@angular/router';

import { RtlComponent } from '../../pages/rtl/rtl.component';
import {LoginComponent} from '../../login/login.component';
import {RegisterComponent} from '../../register/register.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'rtl',component: RtlComponent },
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
];
