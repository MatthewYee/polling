/**
 * Created by MGY on 10/28/2015.
 */

/**
 * This goes over the problem when we remove insecure components of meteor application
 */

Meteor.methods({
  // need to add the method for this just what
  addVote: function(pollID, voteID){
    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for this choice
    Polls.update(
        { _id: pollID },
        { $inc: action }
    );
  },
 // add new poll
  addPoll: function(newPoll) {
    // create the new poll
    Polls.insert(newPoll);
  }
});