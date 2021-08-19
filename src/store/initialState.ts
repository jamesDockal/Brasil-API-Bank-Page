import cookies from "js-cookie";
import axios from "axios";

function getLoggedUser() {
  return cookies.get("user");
}

async function getAllBanks() {
  return await axios.get("https://brasilapi.com.br/api/banks/v1");
}

let INITIAL_STATE = {
  data: {
    user: getLoggedUser(),
    bank: getAllBanks(),
  },
};
export default INITIAL_STATE;
