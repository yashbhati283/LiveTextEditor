import { Meteor } from 'meteor/meteor';
this.Documents= new Mongo.Collection("documents");
Meteor.startup(() => {
  // code to run on server at startup
    if(!Documents.findOne()){
        Documents.insert({title:"this is textCircle"});
    }
});
