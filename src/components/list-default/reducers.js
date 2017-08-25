const initState = {
  all_stories: [],
  top_stories: [],
};

export const contentList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_CONTENT_LIST_SUCCESS':
      return Object.assign({}, state, {
        all_stories: [].concat(action.data),
        top_stories: action.data.top_stories,
      });
    default:
      return state;
  }
};
