import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-workarea-layout',
  styleUrls: ['./workarea.layout.scss'],
  template: `
    <nb-layout >

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>


    </nb-layout>
  `,
})
export class WorkAreaLayoutComponent {
}
