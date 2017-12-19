import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaListComponent } from './media-list/media-list.component';

const routes: Routes = [
  { path: '', component: MediaListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);