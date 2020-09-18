import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function KegEdit(props) {
  const { keg } = props;
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, alcohol: event.target.alcohol.value, quantity: event.target.quantity.value, id: keg.id
    });
   
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

KegEdit.propTypes = {
  onEditKeg: PropTypes.func
}
export default KegEdit;