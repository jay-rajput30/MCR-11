import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { movies } from "../data";

export const dataContext = createContext();
const initialState = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : { data: movies, watchLater: [], starred: [] };
const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, initialState);
  return (
    <dataContext.Provider value={{ data, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => {
  const { data, dispatch } = useContext(dataContext);
  return { data, dispatch };
};
