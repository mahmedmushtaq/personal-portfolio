export const SHOW_ANIMATION = 'SHOW_ANIMATION';

export const setShowLoading = (isShowLoading) => async (dispatch) => {
  dispatch({
    type: SHOW_ANIMATION,
    isShowLoading,
  });
};
