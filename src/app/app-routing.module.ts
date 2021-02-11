import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component'
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component'
import { AddFormComponent } from './add-form/add-form.component'

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'edit-item/:id', component: EditItemFormComponent},
  {path: 'add-item', component: AddFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
