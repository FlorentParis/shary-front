import axios from "axios";
import UserInterface from "../interfaces/UserInterface";

export default function useRegister() {
    return (user: UserInterface) => {
        return axios({
            url: "http://localhost:3030/api/user/createUser",
            method:"post",
            data: {
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email,
                password: user.password,
                passwordConfirm: user.passwordConfirm,
            },
            withCredentials: true
        })
        .then(res=>res.data)
        .catch(res => console.log("error", res))
    }
}
