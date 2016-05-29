import { Component } from '@angular/core';

import { Mongo } from 'meteor/mongo';
import { Parties } from '../collections/Parties';


@Component({
    selector: 'app',
    templateUrl: '/imports/components/app.html'
})
export class App {

    parties: Mongo.Cursor<Object>;

    constructor() {
        this.parties = Parties.find();
    }

}