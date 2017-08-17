export default function(
  state = {
    list: []
  },
  action
) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        list: [...state.list, action.text]
      };
    default:
      return state;
  }
}
