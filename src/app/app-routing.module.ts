import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { EditItemFormComponent } from './components/edit-item-form/edit-item-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component'
import { AuthGuard, RoleGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'edit-item/:id', canActivate: [AuthGuard, RoleGuard], component: EditItemFormComponent},
  {path: 'add-item', canActivate: [AuthGuard, RoleGuard], component: AddFormComponent},
  { path: 'login', component: LoginPageComponent },
  { path: '**', canActivate: [AuthGuard], component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard, RoleGuard ]
})
export class AppRoutingModule { }
