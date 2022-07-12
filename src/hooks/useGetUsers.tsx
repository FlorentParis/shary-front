import axios from "axios"

export default function useGetUsers() {
    return (): Promise<[]> => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/user/",
            method:"get",
        }).then(res=>res.data.data.users)
    }
}
