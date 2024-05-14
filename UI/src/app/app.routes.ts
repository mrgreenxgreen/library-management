import { Routes, RouterLink } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path:'view-books',component: PageHeaderComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'**', component: PageNotFoundComponent}

];
