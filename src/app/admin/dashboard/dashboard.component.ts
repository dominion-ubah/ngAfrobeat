import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.encrypt( 'ear' );
  }



  encrypt ( string ) {
    const alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let letter = string.split('');

    // let nthIndex = alphabet.indexOf(letter) + 1;
    console.log(letter, string);
    let nthIndexArray = [];
    let hashVArray = [];
    let encryptedVArray = [];
    let hashV;
    let nthIndex;
    let encryptedV;
    let newEncryptedValue;
    for (let num  in letter ) {
      if ( num ) {
        console.log('stuff',  letter, num );
          // finding the nth Index
          nthIndex = alphabet.indexOf(letter[num]) + 1;
          // populating an array with the nth index 
          nthIndexArray.push(nthIndex);

          // hash value setting
          if ( this.isEven(nthIndex) ) {
            // for even numbers
           hashV = nthIndex / 2;
           hashVArray.push(hashV);
           encryptedV = 'e' + hashV;
           console.log( encryptedV )
           encryptedVArray.push(encryptedV);

          }else {
            // for odd numbers
            console.log('the nthIndex is odd');
            hashV = (nthIndex * 3) + 1;
            hashVArray.push(hashV);
            encryptedV = 'o' + hashV;
            encryptedVArray.push(encryptedV);
          }
         
      }

    }
    newEncryptedValue = encryptedVArray.join('');
    console.log('nthIndex Array:', nthIndexArray, 'newEncryptedValue Array:', newEncryptedValue, 'hashV Array:', hashVArray, 'encryptedV Array:', encryptedVArray,  );
  }
  isEven (num) {
    return num % 2 === 0;
}

}
