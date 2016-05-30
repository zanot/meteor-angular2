import { Component } from '@angular/core';

import { Mongo } from 'meteor/mongo';
import { Parties } from '../collections/Parties';

import { PartiesForm } from './parties-form';


@Component({
    selector: 'app',
    templateUrl: '/imports/components/app.html',
    directives: [ PartiesForm ],
})
export class App {

    parties: Mongo.Cursor<Object>;

    constructor() {
        this.parties = Parties.find();
    }

    deleteParty( party ) {
        Parties.remove( party._id );
    }
}