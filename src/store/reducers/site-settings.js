import { SHOW_ANIMATION } from './../actions/site-settings';

const initialData = {
  isShowLoading: false,
};

export default (state = initialData, actions) => {
  switch (actions.type) {
    case SHOW_ANIMATION:
      return {
        ...state,
        isShowLoading: actions.isShowLoading,
      };

    default:
      return state;
  }
};
