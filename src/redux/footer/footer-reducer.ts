import { footer_data } from "./footer.data";

const INITIAL_STATE = {
  footer_data,
};

const footerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default footerReducer;
