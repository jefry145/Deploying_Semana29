import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PostdsComponent } from "./pages/postds/postds.component";

const routes: Routes=[
    {path : "home" , component : HomeComponent, 
      children:[
        {path:"posts" , component : PostdsComponent}
      ]},
    {path : "" , pathMatch:"full" , redirectTo:"/home"}
    
]
 @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
 })
 export class AppRoutingModule{}