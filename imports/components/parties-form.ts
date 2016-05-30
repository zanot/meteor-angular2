import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';

import { Parties } from './../collections/Parties';


@Component({
    selector: 'parties-form',
    templateUrl: '/imports/components/parties-form.html'
})
export class PartiesForm {

    partiesForm: ControlGroup;

    constructor() {
        const fb = new FormBuilder();

        this.partiesForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
        });
    }


    addParty( party ) {
        if ( !this.partiesForm.valid ) {
            return;
        }

        const { name, description, location } = party;
        Parties.insert({ name, description, location });

        (<Control>this.partiesForm.controls['name']).updateValue('');
        (<Control>this.partiesForm.controls['description']).updateValue('');
        (<Control>this.partiesForm.controls['location']).updateValue('');
    }

}