import axios from "axios"

export default function useGetEventsByUser() {
    return (id: string) => {
        return axios({
            url: "http://localhost:3030/api/event/getAllEventsByUser",
            method:"get",
            withCredentials: true,
            params: {
                _id: id
            }
        })
        .then(res=>res.data)
    }
}
