import axios from "axios";
import { LocalEventPost } from "../interfaces/LocalEventPost";



export default function usePostBlog() {
    return (token: string, event: LocalEventPost) => {
        const obj = {
            userId: event.userId,
            name: event.name,
            start: event.start,
            end: event.end,
            dresscode: event.dresscode,
            place:{
                address: event.address,
                zipcode: event.zipcode,
                city: event.city,
            },
            transport: event.transport,
            parking: event.parking,
            pedestrian: event.pedestrian,
            contacts:{
                username: event.username,
                phone: event.phone,
                contactBy: event.contactBy
            },
            notifications:{
                inviteAccepted: event.inviteAccepted,
                inviteRefused: event.inviteRefused,
                announcement: event.announcement,
            },
            alerts:{
                date: event.date,
                description: event.description
            },
            participants:{

            },
            modules:{
                photoVideo: event.photoVideo,
                chat: event.chat,
                livre: event.livre,
                artifice: event.artifice,
                fresque: event.fresque,
                playlist: event.playlist
            }

        }
        return axios({
            url: "http://localhost:3030/api/event/createEvent",
            method:"post",
            data: obj,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.data)
        }
}
