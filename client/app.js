/**
 * Created by MGY on 10/28/2015.
 */

// assign variables to our body template which gives us the ability to grab all our polls
// This give access to the polls object within our body template

Template.body.helpers({

  polls: function() {
    return Polls.find();
  }

});

// from poll.html there is indexedArray added to the choices each. We don't inherently have
// the index when we loop over items in Meteor right now.

// so we add index to each item

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});