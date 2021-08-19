import cookies from "js-cookie";

function getLoggedUser() {
  const user = cookies.get("user");
  console.log("cookie user", user);
  return user;
}

let INITIAL_STATE = {
  data: {
    user: getLoggedUser(),
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
