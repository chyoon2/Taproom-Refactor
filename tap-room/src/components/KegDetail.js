import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}-{keg.alcohol} - {keg.quantity}</h3>

      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={ onClickingEdit}>Edit Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;