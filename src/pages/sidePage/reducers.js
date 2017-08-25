// author: @chenyu

const initState = {
  active: false,
};

export const sidebarList = (state = initState, action) => {
  switch (action.type){
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        ...state,
        active: !state.active,
      });
    default:
      return state;
  }
};
