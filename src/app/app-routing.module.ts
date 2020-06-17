import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {
  path: "",
  component: DashboardComponent
},{
  path: "posts",
  component: PostsComponent
},{
  path: "contacts",
  component: ContactsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
