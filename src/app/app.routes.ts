import { Routes } from '@angular/router';
import { CRUDComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

export const routes: Routes = [
    {path: 'crud', component: CRUDComponent},
    {path: 'addUser', component: AddUserComponent},
    {path: 'updateUser/:id', component: UpdateUserComponent},
    {path: 'viewUser/:id', component: ViewUserComponent}
];
