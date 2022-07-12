import axios from "axios";
import { ModulesInterface } from "../interfaces/ModulesInterface";



export default function usePostModulesFeuDArtifice() {
    return (module:any) => {
        const dureePhoto = (module.dureePhotoMin) * 60 + module.dureePhotoSec;
        const dureeModule = (module.dureeModuleMin) * 60 + (module.dureeModuleHeure * 3600);
        const obj = {
                /* Attente du modèles */
            }

        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/modules/updateModules",
            method:"post",
            data: {
                id_event : module.eventID,
                feu_d_artifice : obj
            },
            withCredentials: true
        })
        .then(res=>res.data)
        }
}