import axios from "axios"

export default function useGetUsers() {
    return (): Promise<[]> => {
        return axios({
            url: "http://localhost:3030/api/user/",
            method:"get",
        }).then(res=>res.data.data.users)
    }
}
