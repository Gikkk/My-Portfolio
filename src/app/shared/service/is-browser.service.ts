import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IsBrowserService {

  isBrowser;

  // for server side rendering
  constructor( @Inject(PLATFORM_ID) private platformId: Object ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
