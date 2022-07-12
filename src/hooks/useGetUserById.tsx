import axios from "axios"

export default function useGetUserById() {
    return (id : string) => {
        return axios({
            url: "http://localhost:3030/api/user/getUserById",
            method:"get",
            params : new URLSearchParams({
                _id: id
            }),
            withCredentials: true
        }).then((res:any)=> res.data.data.user)
    }
}
