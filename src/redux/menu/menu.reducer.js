import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
  menuHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        menuHidden: !state.menuHidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
