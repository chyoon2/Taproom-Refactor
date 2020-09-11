import React from 'react';
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          whenBuyClicked={props.onBuySelection}
          name={keg.name}
          alcohol={keg.alcohol}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onBuySelection: PropTypes.func
};

export default KegList;