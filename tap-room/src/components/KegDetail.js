import React from 'react';
import PropTypes from 'prop-types';

function KegDetail() {
  const { keg, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}-{keg.alcohol} - {keg.quantity}</h3>

      <button onClick={() => onClickingDelete(keg.id)}>Close Ticket</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;