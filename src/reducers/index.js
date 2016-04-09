import { combineReducers } from 'redux';
import forca from './forca';
import opcoes from './opcoes';

const reduceApp = combineReducers({
  forca,
  opcoes,
});

export default reduceApp;
