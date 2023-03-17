import { ecosystem_data } from "./ecosystem.data";

const INITIAL_STATE = {
  ecosystem_data,
};

const ecosystemReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ecosystemReducer;
