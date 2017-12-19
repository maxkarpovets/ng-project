import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaService } from './services/media.service';
import { MatCardModule } from "@angular/material";
import { routing } from './media.routing';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    routing
  ],
  
  declarations: [MediaListComponent],
  providers: [MediaService]
})

export class MediaModule { }
