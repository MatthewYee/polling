/**
 * Created by MGY on 10/28/2015.
 */

/**
 * The collection is about establishing on both server and client
 */


//establishing MongoDB which is a database
Polls = new Mongo.Collection('polls');


// we want both client and server to subscribe and publish respectively

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("polls", function () {
    return Polls.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("polls");
}