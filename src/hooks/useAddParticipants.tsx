import axios from "axios"

export default function useAddParticipants() {
    return (idEvent: string, mailGuest: string) => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/event/addParticipant",
            method:"post",
            withCredentials: true,
            data: {
                idEvent: idEvent,
                email: mailGuest
            }
        })
        .then(res=>res.data)
        .catch(res => console.log("error", res))
    }
}