import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>
          <p>name: {props.name}</p> <p>alcohol: {props.alcohol}</p><p> Quantity in Keg: {props.quantity}</p>
        </h3>
      </div>
      <button onClick={() => props.whenBuyClicked(props.id)}>Buy Keg</button>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func,
};

export default Keg;