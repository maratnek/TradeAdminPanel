import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../../service/crypto.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [CryptoService]
})
export class PanelComponent implements OnInit {

  constructor(private cryptoServ: CryptoService) {
    // console.log(cryptoServ.getCrypto());
  }

  ngOnInit() {
  }

}
