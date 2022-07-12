import axios from "axios"

export default function useGetModules() {
    return () => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/modules/getAllModules",
            method:"get",
            withCredentials: true,
        }).then(res=>res.data)
    }
}
