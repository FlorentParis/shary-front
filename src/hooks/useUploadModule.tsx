import axios from "axios"

export default function useUploadModule() {
    return (fileURL:string, id_event:string, author:string, module:string) => {
        return axios({
            url: "https://fathomless-forest-78481.herokuapp.com/api/modules/uploadsModule",
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