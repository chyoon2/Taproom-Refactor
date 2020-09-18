import React from "react";
import KegAdd from "./KegAdd";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import KegEdit from "./KegEdit";
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'EDIT_FORM'
    }
    dispatch(action);
  }
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, alcohol, quantity } = this.props;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      alcohol: alcohol,
      quantity: quantity,
    }
    dispatch(action);
    const action2 = {
      type: 'EDIT_FORM',
    }
    dispatch(action2);
    const action3 = {
      type: 'SELECT_GONULL'
    }
    dispatch(action3);
  }

  handleClick = () => {
    const { dispatch } = this.props;

    if (this.props.selectedKeg != null) {
      const action2 = {
        type: 'EDIT_FORM',
      }
      dispatch(action2);
      const action3 = {
        type: 'SELECT_GONULL'
      }
      dispatch(action3);

    } else {
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action)
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, alcohol, quantity } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      alcohol: alcohol,
      quantity: quantity,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM',
    }
    dispatch(action2);
    const action3 = {
      type: 'SELECT_GONULL'
    }
    dispatch(action3);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = {
      type: 'SELECT_KEG',
      id: selectedKeg.id,
      name: selectedKeg.name,
      alcohol: selectedKeg.alcohol,
      quantity: selectedKeg.quantity,
    }
    dispatch(action);
    console.log("motherfucker")
  }

  handleBuyingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg.quantity > 0) {
      selectedKeg.quantity = selectedKeg.quantity - 1;
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id,
    }
    dispatch(action);
    const action3 = {
      type: 'SELECT_GONULL'
    }
    dispatch(action3);
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editFormOnPage) {
      currentlyVisibleState = (
        <KegEdit
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.props.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <KegAdd onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return To KegList"
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.props.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          onBuySelection={this.handleBuyingSelectedKeg}
        />
      );
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editFormOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editFormOnPage: state.editFormOnPage,
    selectedKeg: state.selectKegReducer
  }
}
KegControl = connect(mapStateToProps)(KegControl)
export default KegControl;