import cookies from "js-cookie";
import INITIAL_STATE from "../initialState";

type ActionType = {
  type: string;
};

export default function authReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case "LOGIN":
      cookies.set("user", "user");
      return {
        ...state,
        data: {
          user: "user",
        },
      };
    case "LOGOUT":
      cookies.remove("user");

      return {
        ...state,
        data: {
          user: "",
        },
      };
    default:
      return state;
  }
}
