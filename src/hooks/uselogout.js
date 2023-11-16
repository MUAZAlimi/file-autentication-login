import axios from "../api/axios";
import useAuth from "./useAuth"

const uselogout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setAuth } = useAuth()

    const logOut = async () => {
            setAuth({});
            try {
                const response = await axios('/logout', {
                    withCredentials: true
                })
            } catch (error) {
                console.error(error);
            }
    };
  return logOut
}

export default uselogout
