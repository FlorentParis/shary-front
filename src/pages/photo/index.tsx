import {useState, useEffect } from "react";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import AsidePhoto from "./AsidePhoto";
import useUploadCloudinary from "../../hooks/useUploadCloudinary";
import { useAppSelector } from "../../hooks/reduxHooks";
import useUploadModule from "../../hooks/useUploadModule";
import useGetModuleByEventId from "../../hooks/useGetModuleByEventId";
import useGetUserById from "../../hooks/useGetUserById";
import { useParams } from "react-router";

const moment = require("moment");

const { io } = require("socket.io-client");
const socket = io.connect("http://localhost:3031");
let receiveFile = false;

export default function Photo() {

    const [file, setFile] = useState<any>({});
    const [array, setArray] = useState<any[]>([])

    const findUser = useGetUserById();

    const [displayUpload, setDisplayUpload] = useState<boolean>(true);
    const [displayAside, setDisplayAside] = useState<any>(false);
    const [fileSelectionned, setFileSelectionned] = useState<any>();

    const id_event : any = useParams().id

    const formData = new FormData();
    
    formData.append("upload_preset", "modules");
    const getModuleByEventId = useGetModuleByEventId();

    const author = useAppSelector((state) => state.userConnected.id)

    const uploadCloud = useUploadCloudinary();
    const uploadModule = useUploadModule(); 
    
    useEffect(() => {
        getModuleByEventId(id_event, "photos_videos").then((res:object) => {
            // @ts-ignore: Unreachable code error
            let data = res.photos_videos.medias
            // @ts-ignore: Unreachable code error
            for (const [key, value] of Object.entries(data)) {
                // @ts-ignore: Unreachable code error
                findUser(value.id_author).then(res => {
                    // @ts-ignore: Unreachable code error
                    value.firstname = res.firstname
                })
                // @ts-ignore: Unreachable code error
                setArray( array => [...array, value])
            }
        })
    }, [])

    useEffect(() => {
        const addFile = (data: any) => {
            findUser(data.id_author)
            .then(res => {
                // @ts-ignore: Unreachable code error
                data.firstname = res.firstname
            })
            .then(res => setArray( array => [...array, data]));
        };

        if(receiveFile === false){
            socket.emit("joinRoomEvent", "photo" + id_event);
            socket.on("receive_file", addFile)
        }
        
        return () => {
            // turning of socket listner on unmount
          socket.off('receive_file', addFile);
        }
    }, [array])

    useEffect(() => {
        if(file !== undefined) {
            if(file.name) {
                formData.append("file", file);
                uploadCloud("image", formData)
                .then(res=> {
                    const fileURL = res.url
                    const imageSocket = {event:"photo" + id_event, date:"à l'instant", content:fileURL, id_author:author}
                    socket.emit("upload_file", imageSocket);
                    const imageArray = {date:"à l'instant",content:fileURL, id_author:author}
                    findUser(imageArray.id_author).then(res => {
                        // @ts-ignore: Unreachable code error
                        imageArray.firstname = res.firstname
                    })
                    setArray( array => [...array, imageArray])
                    uploadModule(fileURL, id_event, author, "photos_videos")
                    .then(res=>res.data);
                })
                setFile({})
            }
        }
    }, [file])

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/photo-gradient.svg" title="Module photos & vidéos" desc="Retrouvez ici toutes les annonces qui ont été faites pour l’évènement en cours" />
            <PageContainer>
                <div className="page-photo">
                    <div className="bar-filter-photo">
                        <div>
                            <div onClick={() => setDisplayUpload(true)}>
                                <span>Upload de photos & vidéos</span>
                                <span className="underline" style={displayUpload ? {} : {display: 'none'}}></span>
                            </div>
                            <div onClick={() => setDisplayUpload(false)}>
                                <span>Galerie photos et vidéos</span>
                                <span className="underline" style={displayUpload ? {display: "none"} : {}}></span>
                            </div>
                        </div>
                        <ul>
                            <li><span></span>Photos</li>
                            <li><span></span>Vidéos</li>
                        </ul>
                    </div>
                    {displayUpload ? 
                        <div className="upload">
                            <form >
                            <input
                                type="file"
                                onChange={(event) => {
                                    setFile(event.target.files![0]);
                                }}
                            />
                                <label>Envoyez votre photo ou vidéo ici</label>
                            </form>
                        </div> 
                    : ""}
                    {displayUpload ? "" :
                        <div className="grid-photo">
                            {array.map((file:any) => {
                                return (
                                <div onClick={() => {setDisplayAside(true); setFileSelectionned(file)}}>
                                <div className="container-img">
                                    <span></span>
                                    <img src={file!.content} />
                                </div>
                                <span>Photo de {file!.firstname}</span>
                                <span>Postée le {moment(file!.date).format("DD/MM/YYYY")}</span>
                            </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </PageContainer>
            {displayAside ? <AsidePhoto file={fileSelectionned} setDisplayAside={setDisplayAside} /> : ""}
        </>
    )
}