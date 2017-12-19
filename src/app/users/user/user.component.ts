/*
 * Component dynamic creations.
 */
import { Component,  OnChanges, Input, AfterContentInit, 
        ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from '../../shared/ad.directive';
import { UserDataComponent } from '../user-data/user-data.component';


@Component({
  selector: 'selected',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements AfterContentInit, OnDestroy,  OnChanges {
  @Input() selectedUser: any;
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnChanges() {
    this.loadComponent();
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.selectedUser.length;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(UserDataComponent);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<UserDataComponent>componentRef.instance).data = this.selectedUser;
  }

}
