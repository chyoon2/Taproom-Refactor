import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>
          {props.name} - {props.alcohol} - {props.quantity}
        </h3>
      </div>
      <button onClick={() => props.whenBuyClicked(props.id)}>Buy Keg</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func,
};

export default Keg;