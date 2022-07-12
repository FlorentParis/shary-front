import PageBanner from "../../components/common/PageBanner";
import {useState, useEffect } from "react";
import useGetModuleByEventId from "../../hooks/useGetModuleByEventId";
import {useAppSelector}  from "../../hooks/reduxHooks"
import { useNavigate, useParams } from "react-router";
import useGetUserById from "../../hooks/useGetUserById";

const moment = require("moment");
const { io } = require("socket.io-client");
const socket = io.connect("https://fathomless-forest-78481.herokuapp.com:3031");


export default function Chat() {
    let receiveMessage = false;
    const [messageContent, setMessageContent] = useState<string>("");
    const [messageData, setMessageData] = useState<object>({});
    const [listMessage, setListMessage] = useState<any[]>([]);
    const getModuleByEventId = useGetModuleByEventId();
    const eventsData = useAppSelector((state) => state.events.data);
    const id_event : any = useParams().id
    const user = useAppSelector((state) => state.userConnected)

    const navigate = useNavigate()

    const getUserById = useGetUserById();

    useEffect( () => {
        const addMessage = (data: any) => {
            getUserById(data.id_author).then((res:any) => {
                data.firstname = res.firstname
                data.lastname = res.lastname
                data.img = res.img
            }).then((res:any) => {
                setListMessage(listMessage => [...listMessage, data])
            })
        };
        if(receiveMessage === false){
            getModuleByEventId(id_event, "chat").then((res:any) => {
                let messages = res.chat.messages;
                for (const [key, value] of Object.entries(messages)) {
                    // @ts-ignore: Unreachable code error
                    getUserById(value.id_author).then((res:any) => {
                        // @ts-ignore: Unreachable code error
                        value.firstname = res.firstname
                        // @ts-ignore: Unreachable code error
                        value.lastname = res.lastname
                        // @ts-ignore: Unreachable code error
                        value.img = res.img
                    }).then((res:any) => {
                        setListMessage(listMessage => [...listMessage, value])
                    })
                }
            })
            socket.emit("joinRoomEvent", "chat" + id_event);
            socket.on("receive_message", addMessage)
            receiveMessage = true
        }
        /* return () => {
            // turning of socket listner on unmount
          socket.off('receive_message', addMessage);
        } */
    }, [])

    useEffect(() => {
        let good;
        eventsData.map(event => {
            if ( event["_id"] === id_event ) {
                good = true;
            }
        })
        good ? console.log() : navigate("/404")
    }, [id_event])

    useEffect(() => {
        setMessageData ({
            event:id_event,
            id_author: user.id,
            content: messageContent,
            date:
              new Date(Date.now()).getDate() +
              "/" +
              new Date(Date.now()).getMonth() +
              "/" +
              new Date(Date.now()).getFullYear() +
              " à " +
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
        });
    }, [messageContent])

    const handlePostMessage = async (e:any) => {
        await socket.emit("send_message", messageData)
        // @ts-ignore: Unreachable code error

        getUserById(messageData.id_author).then((res:any) => {
            // @ts-ignore: Unreachable code error
            messageData.firstname = res.firstname
            // @ts-ignore: Unreachable code error
            messageData.lastname = res.lastname
            setListMessage(listMessage => [...listMessage, messageData])
        })
        setMessageContent("")
    }

    return <>
        <PageBanner imgSrc="/icons/chat.svg" title="Chat" desc="Discutez avec tous les invités"/>
        <div className="page-chat">
            <div className="message-container">
                <div>
                    {listMessage.map((message: any) => {
                        return (message.id_author === user.id ?
                        <div className="message-container me">
                            <div className="message">
                                <div className="message-top">
                                    <div className="img-container">
                                        <img src={user.img} />
                                    </div>
                                    <span>{message.lastname + " " + message.firstname}</span>
                                    <span>{message!.date}</span>
                                </div>
                                <p>{message!.content}</p>
                            </div>
                        </div>
                        :
                        <div className="message-container">
                            <div className="message">
                                <div className="message-top">
                                    <div className="img-container">
                                        <img src={message.img} />
                                    </div>
                                    <span>{message.lastname + " " + message.firstname}</span>
                                    <span>{moment(message!.date).startOf('minute').fromNow()}</span>
                                </div>
                                <p>{message!.content}</p>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
            <div className="form-chat">
                <div>
                    <div className="img-container">
                        <img src={user.img} />
                    </div>
                    <input type="text" placeholder="Début de votre message" value={messageContent} onChange={(e:any) => setMessageContent(e.target.value)}/>
                    <button onClick={handlePostMessage}>
                        <img src="/icons/send-plane.svg" />
                    </button>
                </div>
            </div>
        </div>
    </>
}