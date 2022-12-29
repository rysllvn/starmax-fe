import { useEffect, useReducer } from 'react';

import './App.css';
import { AppStateContext, DispatchContext } from './utilities/Contexts';
import { initialState, reducer } from './utilities/AppReducer';
import Router from './components/Router';
import eCommerce_API from './utilities/ApiConfig';
import { UPDATE_ITEMS } from './utilities/constants';

function App() {
  /***************************************************************
  //  global application state
  //  see AppReducer.ts for information
  ****************************************************************/
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    eCommerce_API.get('/items/all')
    .then((response) => {
      console.log(response.data)
      dispatch({ type: UPDATE_ITEMS, items: response.data });
    });
  }, [dispatch])

  return (
    <DispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <Router />
      </AppStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
