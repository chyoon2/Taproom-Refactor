import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editFormReducer from './edit-form-reducer';
import { combineReducers } from 'redux';
import selectKegReducer from './select-keg-reducer'

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editFormOnPage: editFormReducer,
  selectKeg: selectKegReducer
}); 

export default rootReducer;