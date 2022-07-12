import axios from "axios"

export default function useGetEvents() {
    return (): Promise<[]> => {
        return axios({
            url: "http://localhost:3030/api/event/getAllEvents",
            method:"get",
        }).then(res=> res.data.data.events)
    }
}
