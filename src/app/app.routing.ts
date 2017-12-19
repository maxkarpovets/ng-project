import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from './users/user-list/user-list.component';
import { MediaModule } from "./media/media.module";
import { PermissionGuard } from './shared/guards/permission.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: 'users', component: UserListComponent, canActivate: [PermissionGuard]},
    {path: 'events', loadChildren: './media/media.module#MediaModule', canActivate: [PermissionGuard]},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});


 