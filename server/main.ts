import { Meteor } from 'meteor/meteor';
import { loadData } from '../imports/server/load-data.ts';


Meteor.startup(() => {
    loadData()
});