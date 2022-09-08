import React from "react";
<<<<<<< HEAD
=======
import { v4 } from 'uuid';
>>>>>>> 01b5cbb (add working starter project)
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
<<<<<<< HEAD
      
=======
      id: v4()
>>>>>>> 01b5cbb (add working starter project)
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
