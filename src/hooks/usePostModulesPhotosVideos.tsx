import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModulesPhotosVideos() {
    return (module:any) => {
        const dureePhoto = (module.dureePhotoMin) * 60 + module.dureePhotoSec;
        const dureeModule = (module.dureeModuleMin) * 60 + (module.dureeModuleHeure * 3600);
        const obj = {
                is_activated : module.active,
                availability_time : "2022-06-18T17:00:00.000Z", 
                medias_display_time : dureePhoto,
                module_display_time : dureeModule,
                videos : module.videos,
                loop : module.loop
            }

        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/modules/updateModules",
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