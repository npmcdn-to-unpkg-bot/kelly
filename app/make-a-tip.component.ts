import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'make-a-tip',
  templateUrl: 'app/make-a-tip.component.html'
})
export class MakeATipComponent {
  constructor(private _router: Router) {
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/