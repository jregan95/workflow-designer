import { useReducer } from 'react';


const initialState = {
  adminView: false
}


function reducer(state, action) {

  switch (action.type) {

    case "TOGGLE_ADMIN":
      return {
        ...state,
        adminView: action.payload
      };
    

      default:
        throw new Error(
          `Unsupported action: ${action.type}`
        )
  }

}


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState)


  const toggleAdminView = () => {
    dispatch({ type: "TOGGLE_ADMIN", payload: !state.adminView})
  }


  const setAdminViewFalse = () => {
    dispatch({ type: "TOGGLE_ADMIN", payload: false})
  }


  return {
    state,
    toggleAdminView,
    setAdminViewFalse
  }

}

export default useApplicationData;