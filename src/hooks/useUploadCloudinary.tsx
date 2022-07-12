import axios from "axios"

export default function useUploadCloudinary() {
    return (typeData:string, formData: any) => {
        return axios.post(`https://api.cloudinary.com/v1_1/dr7db2zsv/${typeData}/upload/`, 
        formData)
        .then(res=>res.data)
    }
}