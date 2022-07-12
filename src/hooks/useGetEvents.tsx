import axios from "axios"

export default function useGetEvents() {
    return (): Promise<[]> => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/event/getAllEvents",
            method:"get",
        }).then(res=> res.data.data.events)
    }
}
