export const getAllList = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_LIST_STARTED' })
        fetch('http://5b35ede16005b00014c5dc86.mockapi.io/list')
		  .then((response) => {
		    return response.json();
		  })
		  .then((myJson) => {
		    dispatch({ type: 'GET_LIST_ITEMS_SUCCESS', lists: myJson })
		  });
    }
}


export const getSimilarItems = (id) => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_GET_SIMILER_LIST_STARTED' })
        fetch('http://5b35ede16005b00014c5dc86.mockapi.io/similar/' + id)
		  .then((response) => {
		    return response.json();
		  })
		  .then((myJson) => {
		    dispatch({ type: 'GET_SIMILER_LIST_ITEMS_SUCCESS', similerLists: myJson })
		  });
    }
}