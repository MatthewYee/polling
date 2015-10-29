/**
 * Created by MGY on 10/28/2015.
 */

// we will handle the voting portion which is corresponding to poll.js

Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      question: event.target.question.value,
      choices: [
        {  text: event.target.choice1.value, votes: 0 },
        {  text: event.target.choice2.value, votes: 0 },
        {  text: event.target.choice3.value, votes: 0 }
      ]
    };
  //create a new poll
    Meteor.call('addPoll', newPoll);
  }

});