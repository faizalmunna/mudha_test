const initState = {
    listItems: [],
    similerItems: []
}


const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_LIST_ITEMS_SUCCESS':
      console.log('all list project', action.lists);
      return {...state, listItems:action.lists}
    case 'GET_SIMILER_LIST_ITEMS_SUCCESS':
      return {...state, similerItems:action.similerLists}
      //
  }
  return state;
};

export default listReducer;