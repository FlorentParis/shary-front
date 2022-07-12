import { useEffect, useState } from "react"
import useGetUserById from "../../hooks/useGetUserById"

export default function GuestCard(props: any) {

    const [userImg, setUserImg] = useState<string>();

    const findUser = useGetUserById();   

    findUser(props.guest.userId).then(res => setUserImg(res.img))

    return (
        <div className="guest-card">
            <div className="container-img">
                <img src={userImg} />
            </div>
            <span>{props.guest.email}</span>
            <div>
                <div>
                    <span></span>Participe
                </div>
            </div>
        </div>
    )
}