import React from "react";
import KegAdd from "./KegAdd";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import KegEdit from "./KegEdit";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editFormOnPage: false 
    }
  }
  handleEditClick = () => {
    // const selectedKeg = this.masterKegList.filter(
    //   (keg) => keg.id === id)[0];
    console.log("reached")
      this.setState({ 
        editFormOnPage:true 
      });
  }
  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({ masterKegList:editedMasterKegList, EditFormOnPage: false,selectedKeg:null  
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
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    })
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg })
  }

  handleBuyingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id)[0]; 
      if(selectedKeg.quantity >0) {
        selectedKeg.quantity = selectedKeg.quantity- 1;
      }
        this.setState({})
  }
  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editFormOnPage) {
      currentlyVisibleState = (
        <KegEdit Keg ={this.state.selectedKeg} onEditTicket ={this.handleEditingTicketInList}/>
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
          kegList={this.state.masterKegList}
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

export default KegControl;

