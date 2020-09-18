import React from "react";
import KegAdd from "./KegAdd";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import KegEdit from "./KegEdit";
import {connect} from 'react-redux';
import PropTypes from "prop-types";


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      // masterKegList: [],
      selectedKeg: null,
      editFormOnPage: false 
    }
  }
  handleEditClick = () => {
    // const selectedKeg = this.masterKegList.filter(
    //   (keg) => keg.id === id)[0];
      this.setState({ 
        editFormOnPage:true 
      });
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
    this.setState({ 
      editFormOnPage: false,
      selectedKeg : null  
    });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editFormOnPage: false
      });
    } else {
      this.setState((prevState) => ({ formVisibleOnPage: !prevState.formVisibleOnPage }))
    }
  };

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
    this.setState({formVisibleOnPage: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg })
  }
//hey
  handleBuyingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    console.log(this.props.masterKegList[id]) 
      if(selectedKeg.quantity >0) {
        selectedKeg.quantity = selectedKeg.quantity- 1;
      }
        this.setState({})
  }
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id,
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editFormOnPage) {
      currentlyVisibleState = (
        <KegEdit 
        keg ={this.state.selectedKeg} 
        onEditKeg ={this.handleEditingKegInList}/>
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
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
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}
KegControl = connect(mapStateToProps)(KegControl)
export default KegControl;