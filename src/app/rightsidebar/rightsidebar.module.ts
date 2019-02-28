import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightsidebarComponent } from './rightsidebar.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    RightsidebarComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RightsidebarComponent
  ]
})
export class RightsidebarModule { }
