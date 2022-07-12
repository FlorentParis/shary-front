import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModulesChat() {
    return (module:any) => {
        const obj = {
                /*En attente des modèles */
            }

        return axios({
            url: "http://localhost:3030/api/modules/updateModules",
            method:"post",
            data: {
                id_event : module.eventID,
                photos_videos : obj
            },
            withCredentials: true
        })
        .then(res=>res.data)
        }
}
