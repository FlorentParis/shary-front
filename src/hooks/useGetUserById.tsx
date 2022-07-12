import axios from "axios"

export default function useGetUserById() {
    return (id : string) => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/user/getUserById",
            method:"get",
            params : new URLSearchParams({
                _id: id
            }),
            withCredentials: true
        }).then((res:any)=> res.data.data.user)
    }
}
