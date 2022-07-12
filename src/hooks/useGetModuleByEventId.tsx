import axios from "axios"

export default function useGetModuleByEventId() {
    return (id : string, nameModule:string) => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/modules/getModuleByEventId",
            method:"get",
            params : new URLSearchParams({
                idEvent: id,
                nameModule: nameModule         
            }),
            withCredentials: true
        }).then(res=> res.data.data.myModule)
    }
}
