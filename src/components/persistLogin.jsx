import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";


const persistLogin = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refresh = useRefreshToken()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { auth } = useAuth()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
                // eslint-disable-next-line no-unused-vars
                let isMounted = true
        const verifyRefreshToken = async () => {
            try {
                  await refresh
            } catch (error) {
                console.error(error);
            } finally {
                 setIsLoading(false)
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

         return () => isMounted = false;
    }, [])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
            console.log(`isLoading : ${isLoading}`)
            console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])
    
    

}

export default persistLogin
