import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
this.Documents = new Mongo.Collection("documents");

import './main.html';



Template.editor.helpers({
    docid:function(){
        var doc=Documents.findOne();
        if(doc)return doc._id;
        else return undefined;
    }
});
