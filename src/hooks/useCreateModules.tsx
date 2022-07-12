import axios from "axios"

export default function useCreateModules() {
    return (idEvent: any) => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/modules/createModules",
            method:"post",
            withCredentials: true,
            data: { 
                id_event : idEvent,
                photos_videos : {
                    medias : {},
                    medias_display_time : "",
                    module_display_time : "",
                    videos : false,
                    loop : false
                },
                livre_d_or : {
                    messages : {},
                    is_private : true
                },
                fresque : {
                    module_display_time : "",
                    usable_graphic_elems : {
                    }
                },
                playlist : {
                    module_display_time : "", 
                    authorized_users : true, 
                    songs : {
                    }
                },
                chat : {
                    messages : {}
                }
            }
        })
        .then(res=>res.data)
        .catch(res => console.log("error", res))
    }
}