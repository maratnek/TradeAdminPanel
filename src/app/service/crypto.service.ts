import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppModule} from '../app.module';


@Injectable({
  providedIn: AppModule
})
export class CryptoService {
  crypto: any;
 constructor(http: HttpClient) {
    http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EURn')
      // Call map on the response observable to get the parsed people object
      .pipe(map(res => res))
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(crypto => {
        console.log(crypto);
        this.crypto = crypto;
      });
  }
  public getCrypto(){
    return this.crypto;
  }
}
