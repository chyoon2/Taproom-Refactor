import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={()=>PropTypes.whenKegClicked(props.id)}>
        <h3>
          {props.name} - {props.alcohol}
        </h3>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func,
};

export default Keg;