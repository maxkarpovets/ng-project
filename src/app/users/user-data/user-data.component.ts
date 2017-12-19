/*
 * Component for displaying selected user.
 */
import { Component, Input }  from '@angular/core';

import { AdComponent } from '../../shared/ad.component';

@Component({
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})

export class UserDataComponent implements AdComponent {
  @Input() data: any;
}
