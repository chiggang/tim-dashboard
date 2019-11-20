import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from 'reducers/reducer';

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  // 생성해놓은 리듀서를 적용함
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

// 리듀서의 값을 반환함
export const useDataState = () => {
  const { state } = useContext(DataContext);

  return state;
}

// 리듀서의 디스패치를 반환함
export const useDataDispatch = () => {
  const { dispatch } = useContext(DataContext);

  return dispatch;
}

export default ContextProvider;
