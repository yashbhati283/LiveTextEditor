import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
this.Documents = new Mongo.Collection("documents");

import './main.html';

Meteor.setInterval(function(){
   Session.set("date",new Date()) 
},1000);
Template.current_date.helpers({
   date:function(){
       return Session.get("date");
   }
});

Template.editor.helpers({
    docid:function(){
        var doc=Documents.findOne();
        if(doc)return doc._id;
        else return undefined;
    }
});
