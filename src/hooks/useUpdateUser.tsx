import axios from "axios";
import UserInterface from "../interfaces/UserInterface";



export default function useUpdateUser() {
    return (user: UserInterface) => {
        return axios({
            url: "http://localhost:3030/api/user/modifyUserInfo",
            method:"patch",
            data: new URLSearchParams({
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email,
                img: user.img,
                password: user.password,
            }),
            withCredentials: true
        })
        .then(res=>res.data)
    }
}
