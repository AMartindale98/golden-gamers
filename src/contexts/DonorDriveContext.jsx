/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const DonorDriveContext = createContext();

const initialState = {
  isLoading: false,
  teamData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "loading/complete":
      return { ...state, isLoading: false };
    case "teamData/loaded":
      return { ...state, isLoading: false, teamData: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

function DonorDriveProvider({ children }) {
  const [{ isLoading, teamData }, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    async function getDonorDrive() {
      try {
        const team = await fetch(
          "https://extralife.donordrive.com/api/teams/63882"
        );

        const data = await team.json();
        dispatch({ type: "teamData/loaded", payload: data });
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getDonorDrive();
  }, []);
  return (
    <DonorDriveContext.Provider value={{ isLoading, teamData, dispatch }}>
      {children}
    </DonorDriveContext.Provider>
  );
}

function useDonorDrive() {
  const context = useContext(DonorDriveContext);
  if (context === undefined)
    throw new Error(
      "DonorDriveContext was used outside of the DonorDriveProvider"
    );
  return context;
}

export { DonorDriveProvider, useDonorDrive };
