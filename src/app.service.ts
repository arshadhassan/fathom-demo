/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
const fathom = require('fathom-privacy');
@Injectable()
export class AppService {
  getHello(): any {
    fathom('your-application-id').then((newLookup) => {
      //when the button is clicked, promise is resolved and returns a newLookup object

      newLookup.listenForStatus((message) => {
        //listenForStatus(callback(message)) will run on every new status update
        if (message.status === 'in progress') {
          console.log('sign up successful!');
        }

        if (message.status === 'complete') {
          //newLookup's getLIData() function will return the data for that user's lookup
          newLookup.getLIData().then((results) => {
            console.log(results);
          });
        }
      });
    });
    return '<div id="fathom-signup">Button</div>';
  }
}
