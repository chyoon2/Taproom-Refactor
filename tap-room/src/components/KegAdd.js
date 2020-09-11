import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm"

function KegAdd(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      alcohol: event.target.alcohol.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText='ADD KEG!'
      />
    </React.Fragment>
  );
}

KegAdd.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default KegAdd;
