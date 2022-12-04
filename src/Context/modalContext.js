import { createContext, useState } from 'react';
import { DummyData } from '../DummyData';

export const modalContext = createContext('');
export const ContextProvider = ({ children }) => {
  const [first, setfirst] = useState(false);
  const [boardData, setBoardData] = useState([...DummyData]);
  const toggleModal = () => {
    setfirst((prev) => !prev);
  };

  // console.log(boardData)  
  return (
    <modalContext.Provider
      value={{ first, toggleModal, boardData, setBoardData }}
    >
      {children}
    </modalContext.Provider>
  );
};
