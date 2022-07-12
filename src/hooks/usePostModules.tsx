import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModules() {
    return (module:any) => {
        const nom = module.nom;
        const obj = {
            id_event: module.eventId,
            chat:{
                test:"test"
            },
            active : module.active,
            autorisationPhotos: module.autorisationPhotos,
            autorisationVideos: module.autorisationVideos,
            blacklist:module.blacklist,
            disponibilitePhotoApresUnite: module.disponibilitePhotoApresUnite,
            disponibilitePhotoApresValue: module.disponibilitePhotoApresValue,
            disponibilitePhotoAvantUnite: module.disponibilitePhotoAvantUnite,
            disponibilitePhotoAvantValue: module.disponibilitePhotoAvantValue,
            moduleActiveDurantEvent: module.moduleActiveDurantEvent
        };

        return axios({
            url: "http://localhost:3030/api/modules/updateModules",
            method:"post",
            data: obj,
            withCredentials: true
        })
        .then(res=>res.data)
        }
}
