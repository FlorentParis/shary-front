import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModulesPlaylist() {
    return (module:any) => {

        let unite = module.module_display_time;

        if(module.disponbilitePlaylistUnite == "semaine(s)"){
            unite = unite * 7;
        }else if(module.disponbilitePlaylistUnite == "mois"){
            unite = unite * 30;
        }else if(module.disponbilitePlaylistUnite == "année(s)"){
            unite = unite * 365;
        };

        const dureeModule = unite;

        const obj = {
                availability_time:"2022-06-18T17:00:00.000Z",
                module_display_time:dureeModule
                /* authorized_users:, */
            }

        return axios({
            url: "http://localhost:3030/api/modules/updateModules",
            method:"post",
            data: {
                id_event : module.eventID,
                playlist : obj
            },
            withCredentials: true
        })
        .then(res=>res.data)
        }
}
