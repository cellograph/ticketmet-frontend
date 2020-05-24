import Axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import setCurrentUser from "../../utils/setCurrentUser";

export const login = async (data) => {
  try {
    const log = await Axios.post(`http://ticketmet.com/api/auth/login`, data);
    const token = log.data.data;

    if (token) {
      localStorage.setItem("auth_token", token);
      setAuthToken(token);
    }

    return {
      message: "Authenticated.",
      success: true,
      data: log.data,
    };
  } catch (err) {
    return {
      message: err.message,
      success: false,
      data: null,
    };
  }
};
