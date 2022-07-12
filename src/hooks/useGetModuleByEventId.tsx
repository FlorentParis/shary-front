import axios from "axios"

export default function useGetModuleByEventId() {
    return (id : string, nameModule:string) => {
        return axios({
            url: "http://localhost:3030/api/modules/getModuleByEventId",
            method:"get",
            params : new URLSearchParams({
                idEvent: id,
                nameModule: nameModule         
            }),
            withCredentials: true
        }).then(res=> res.data.data.myModule)
    }
}
