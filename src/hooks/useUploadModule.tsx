import axios from "axios"

export default function useUploadModule() {
    return (fileURL:string, id_event:string, author:string, module:string) => {
        return axios({
            url: "http://localhost:3030/api/modules/uploadsModule",
            method:"post",
            data: new URLSearchParams({
                file: fileURL,
                event: id_event,
                author: author,
                module : module            
            }),
            withCredentials: true
        })
        .then(res=>res.data)
    }
}