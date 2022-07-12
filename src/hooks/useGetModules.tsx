import axios from "axios"

export default function useGetModules() {
    return () => {
        return axios({
            url: "http://localhost:3030/api/modules/getAllModules",
            method:"get",
            withCredentials: true,
        }).then(res=>res.data)
    }
}
