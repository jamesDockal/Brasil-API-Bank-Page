export function login(email: string, password: string) {
  return {
    type: "LOGIN",
    payload: { email, password },
  };
}

export function logOut() {
  return {
    type: "LOGOUT",
  };
}
