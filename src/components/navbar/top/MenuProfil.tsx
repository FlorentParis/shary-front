import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { resetTargetEvent } from "../../../features/currentEventSlice";
import { resetEvents } from "../../../features/eventsSlice";
import { logoutLoggedUser } from "../../../features/userConnectedSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import useEraseCookie from "../../../hooks/useEraseCookie";

export default function MenuProfil() {

    const dispatch = useAppDispatch();
    const eraseCookie = useEraseCookie();

    const disconnect = () => {
        eraseCookie();
        dispatch(resetEvents());
        dispatch(resetTargetEvent());
        dispatch(logoutLoggedUser());
    }

    return (
        <div className="menu-profil">
            <Link to="/profil">
                <img src="/icons/user.svg" alt="icon user" />
                <span>Profil</span>
            </Link>
            <Link to="/settings">
                <img src="/icons/params.svg" alt="icon user" />
                <span>Paramètres</span>
            </Link>
            <Link to="/contact-us">
                <img src="/icons/contact.svg" alt="icon user" />
                <span>Nous contacter</span>
            </Link>
            <span id="btn-disconnect" onClick={() => disconnect()}>Déconnexion</span>
        </div>
    )
}