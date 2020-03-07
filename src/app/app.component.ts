import { Component, ComponentFactoryResolver, Injector, ApplicationRef, OnInit } from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal } from '@angular/cdk/portal';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cdk';

  private portalHost: DomPortalHost;
  private portal: ComponentPortal<HeaderComponent>;
  private portalSection: ComponentPortal<SectionComponent>;

  public _portalInstance: Portal<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

  ngOnInit() {
    console.log('el: ', document.querySelector('#pageHeader'));
    // this.portalHost = new DomPortalHost(
    //   document.querySelector('#pageHeader'),
    //   this.componentFactoryResolver,
    //   this.appRef,
    //   this.injector
    // );

    // this.portal = new ComponentPortal(HeaderComponent);
    // this.portalHost.attach(this.portal);
    this._portalInstance = new ComponentPortal(HeaderComponent);
  }

  public callComponent() {
    // this.portalSection = new ComponentPortal(SectionComponent);
    // this.portalHost.detach();
    // this.portalHost.attach(this.portalSection);
    this._portalInstance = new ComponentPortal(SectionComponent);
  }
}
