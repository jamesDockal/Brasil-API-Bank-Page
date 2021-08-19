let INITIAL_STATE = {
  data: {
    user: "",
  },
};

type ActionType = {
  type: string;
};

export default function loginReducer(
  state = INITIAL_STATE,
  action: ActionType
) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        data: {
          user: "user",
        },
      };
    default:
      return state;
  }
}
