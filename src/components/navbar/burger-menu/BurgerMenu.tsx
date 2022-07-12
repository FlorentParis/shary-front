import { Link, useLocation } from "react-router-dom";
import { resetTargetEvent } from "../../../features/currentEventSlice";
import { resetEvents } from "../../../features/eventsSlice";
import { logoutLoggedUser } from "../../../features/userConnectedSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import useEraseCookie from "../../../hooks/useEraseCookie";

export default function BurgerMenu() {

    /* Page location */
    const location = useLocation();
    const pathname = location.pathname;
    const splittedPath = pathname.split("/");
    const pageLocation = splittedPath[splittedPath.length - 1];

    /* Get if userConnected is admin or Moderator on this event */
    const targetEventData = useAppSelector((state) => state.targetEvent.data);
    const userConnectedData = useAppSelector((state) => state.userConnected);

    let isModerator = false;
    if(targetEventData.participants){
        for(let i = 0; i < Object.keys(targetEventData.participants).length ; i++) {
            //@ts-ignore
            if (targetEventData.participants[i].userId == userConnectedData.id) {
            isModerator = true;
            }
        }
    }

    //@ts-ignore
    const userAdminId = targetEventData.userId;
    const isAdmin = userConnectedData.id === userAdminId;
    //@ts-ignore
    const eventId = targetEventData._id;

    const dispatch = useAppDispatch();
    const eraseCookie = useEraseCookie();

    const disconnect = () => {
        eraseCookie();
        dispatch(resetEvents());
        dispatch(resetTargetEvent());
        dispatch(logoutLoggedUser());
    }

    return (
        <div className="burger-menu">
            {splittedPath[1] == 'event' ? 
                isModerator || isAdmin ? 
                <>
                    <div>
                        <span>{targetEventData.name}</span>
                    </div>
                    <ul>
                        <li>
                            <Link to={`/event/${eventId}/information`}>
                                <img src="/icons/infos.svg" alt="icon infos" />
                                <span>Information</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/event/${eventId}/guest-list`}>
                                <img src="/icons/guest-list.svg" alt="icon guest-list" />
                                <span>Participants</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/event/${eventId}/alert`}>
                                <img src="/icons/alert.svg" alt="icon alert" />
                                <span>Annonces</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/event/${eventId}/modules`}>
                                <img src="/icons/modules.svg" alt="icon modules" />
                                <span>Modules</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/event/${eventId}/moderation`}>
                                <img src="/icons/moderation.svg" alt="icon moderation" />
                                <span>Modération</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <span onClick={() => disconnect()}>Déconnexion</span>
                        <span>© shary - 2022</span>
                    </div>
                </>
                :
                    <>
                        <div>
                            <span>{targetEventData.name}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to={`/event/${eventId}/information`}>
                                    <img src="/icons/infos.svg" alt="icon infos" />
                                    <span>Information</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/event/${eventId}/photo`}>
                                    <img src="/icons/photo.svg" alt="icon photo" />
                                    <span>Module Photo / Vidéo</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/event/${eventId}/golden-book`}>
                                    <img src="/icons/golden-book.svg" alt="icon golden book" />
                                    <span>Module Livre d'or</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/event/${eventId}/fresco`}>
                                    <img src="/icons/fresco.svg" alt="icon fresco" />
                                    <span>Module Fresque</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/event/${eventId}/playlist`}>
                                    <img src="/icons/playlist.svg" alt="icon playlist" />
                                    <span>Module Playlist</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/event/${eventId}/fireworks`}>
                                    <img src="/icons/fireworks.svg" alt="icon fireworks" />
                                    <span>Module Feu d'artifice</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/event/${eventId}/chat`}>
                                    <img src="/icons/chat.svg" alt="icon chat" />
                                    <span>Module Discussion</span>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <span onClick={() => disconnect()}>Déconnexion</span>
                            <span>© shary - 2022</span>
                        </div>
                    </>
            :
                <>
                    <div>
                        <div className="img-container">
                            <img src="/prov/pp.png" />
                        </div>
                        <span>Hi *nom* !</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="/profil">
                                <img src="/icons/user.svg" alt="icon user" />
                                <span>Profil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profil">
                                <img src="/icons/bell.svg" alt="icon notifs" />
                                <span>Notification</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings">
                                <img src="/icons/params.svg" alt="icon settings" />
                                <span>Paramètres</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us">
                                <img src="/icons/contact.svg" alt="icon contact" />
                                <span>Nous contacter</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <span onClick={() => disconnect()}>Déconnexion</span>
                        <span>© shary - 2022</span>
                    </div>
                </>
            }
        </div>
    )
}