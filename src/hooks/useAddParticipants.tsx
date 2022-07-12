import axios from "axios"

export default function useAddParticipants() {
    return (idEvent: string, mailGuest: string) => {
        return axios({
            url: "http://localhost:3030/api/event/addParticipant",
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