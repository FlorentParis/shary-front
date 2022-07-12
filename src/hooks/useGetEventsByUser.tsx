import axios from "axios"

export default function useGetEventsByUser() {
    return (id: string) => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/event/getAllEventsByUser",
            method:"get",
            withCredentials: true,
            params: {
                _id: id
            }
        })
        .then(res=>res.data)
    }
}
