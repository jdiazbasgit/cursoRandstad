import { Routes } from "@angular/router";
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

export const rutas:Routes=[
    {path:"uno/:pais", component:UnoComponent},
    {path:"dos", component:DosComponent}
]