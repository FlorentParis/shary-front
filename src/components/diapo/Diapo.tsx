import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import useGetModuleByEventId from "../../hooks/useGetModuleByEventId";
import useGetUserById from "../../hooks/useGetUserById";

const { io } = require("socket.io-client");
const socket = io.connect("https://fathomless-forest-78481.herokuapp.com:3031");
let receiveFile = false;

export default function Diapo(props: any) {

    const arrayQuery = useLocation().pathname.split('/');
    const id_event = arrayQuery[2];

    const findUser = useGetUserById();
    const getModuleByEventId = useGetModuleByEventId();

    const [array, setArray] = useState<any[]>([])

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const addFile = (data: any) => {
            setArray( array => [...array, data]);
            console.log(data)
        };

        if(receiveFile === false){
            socket.emit("joinRoomEvent", "photo" + id_event);
            socket.on("receive_file", addFile)
            console.log("port ouvert")
            let receiveFile = true;

        }
        
        return () => {
            // turning of socket listner on unmount
          socket.off('receive_file', addFile);
        }
    }, [array])

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

    setInterval(() => {
        if(count < array.length - 1) {
            setCount(count + 1)
        }else {
            setCount(0)
            clearInterval();
        }
    }, 5000)

    return (
        <div className="diapo">
            {array.length > 0 ? 
                <div className="image-container">
                    <img src={array[count].content} />
                </div>
            : ''}
            <img onClick={() => props.setModalDiapo(false)} src="/icons/cross.svg" />
        </div>
    )
}