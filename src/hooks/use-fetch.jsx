// import { useSession } from "@clerk/clerk-react";
// import { useState } from "react";



// const useFetch = (cb, options = {})=>{
//     const [data, setData] = useState(undefined)
//     const [loading, setLoading] = useState(null)
//     const [error, setError] = useState(null);


//     const { session } = useSession()

//     const fn = async(...args)=>{
//         setLoading(true)
//         setError(null)

//     try {
//         const supabaseAccessToken = await session.getToken({
//             template: "supabase"
//           })
//         const response = await  cb(supabaseAccessToken,options,...args)
//         setData(response)
//         setError(null)
//     } catch (error) {
//         setError(error)
//     } finally{
//         setLoading(false)
//     }    
//     }
//     return { fn, data, loading, error }
// }

// export default useFetch
import { useSession } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { session } = useSession();

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            if (!session) throw new Error("Session is not available");
            
            const supabaseAccessToken = await session.getToken({ template: "supabase" });
            const response = await cb(supabaseAccessToken, { ...options, ...args[0] });
            
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { fn, data, loading, error };
};

export default useFetch;
