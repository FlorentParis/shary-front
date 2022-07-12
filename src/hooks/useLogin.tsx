import axios from "axios";

export default function useLogin() {
    return (email: string, password: string) => {
        return axios({
            url: "http://localhost:3030/api/user/getUserConnexion",
            method:"post",
            withCredentials: true,
            data: {
                email: email,
                pw: password
            },
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res=> res.data)
        .catch(res => console.log("error", res))
    }
}