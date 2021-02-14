import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthGuard } from './state/auth.guard';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'edit-item/:id', canActivate: [AuthGuard], component: EditItemFormComponent},
  {path: 'add-item', canActivate: [AuthGuard], component: AddFormComponent},
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
