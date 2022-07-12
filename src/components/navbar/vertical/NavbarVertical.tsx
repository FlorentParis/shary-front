import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

import { Link, useLocation } from "react-router-dom";

export default function NavbarVertical(props: any) {
  const location = useLocation();
  const pathname = location.pathname;
  const splittedPath = pathname.split("/");

  const targetEventData = useAppSelector((state) => state.targetEvent.data);
  const userConnectedData = useAppSelector((state) => state.userConnected);
  //@ts-ignore
  const userAdminId = targetEventData.userId;
  const isAdmin = userConnectedData.id === userAdminId;
  //@ts-ignore
  const eventId = targetEventData._id;

  let isModerator = false;
  
  //@ts-ignore
  if(targetEventData.participants && targetEventData.participants.userId){
    for(let i = 0; i < Object.keys(targetEventData.participants).length ; i++) {
      //@ts-ignore
      if (targetEventData.participants[i].userId == userConnectedData.id) {
        isModerator = true;
      }
    }
  }
  

  const pageLocation = splittedPath[splittedPath.length - 1];

  const displayDynamicTools = () => {
    switch (splittedPath.length) {
      case 2:
        //@ts-ignore
        return (
          <>
            <Link to="/event/information">
              <button>+</button>
            </Link>
            <Link to="/">
              <img src={pageLocation == "" ? "/icons/gradient/home-gradient.svg" : "/icons/home.svg"} alt="" />
            </Link>
            <Link to="/event-to-come">
              <img src={pageLocation == "event-to-come" ? "/icons/gradient/event-to-come-gradient.svg" : "/icons/event-to-come.svg"} alt="" />
            </Link>
            <Link to="/event-pass">
              <img src={pageLocation == "event-pass" ? "/icons/gradient/event-pass-gradient.svg" : "/icons/event-pass.svg"} alt="" />
            </Link>{" "}
          </>
        );
      case 3:
        //@ts-ignore
        if (splittedPath[1] === "event" && isAdmin) {
          return (
            <>
              <Link to="/">
                <img src={pageLocation == "" ? "/icons/gradient/home-gradient.svg" : "/icons/home.svg"} alt="" />
              </Link>
              <Link to="/event-to-come">
                <img src={pageLocation == "event-to-come" ? "/icons/gradient/event-to-come-gradient.svg" : "/icons/event-to-come.svg"} alt="" />
              </Link>
              <Link to="/event-pass">
                <img src={pageLocation == "event-pass" ? "/icons/gradient/event-pass-gradient.svg" : "/icons/event-pass.svg"} alt="" />
              </Link>
              <span className="line"></span>
              <Link to="/information">
                <img src={pageLocation == "information" ? "/icons/gradient/infos-gradient.svg" : "/icons/infos.svg"} alt="" />
              </Link>
            </>
          );
        } else {
          return (
            <>
              <Link to="/event/information">
                <button>+</button>
              </Link>
              <Link to="/">
                <img src={pageLocation == "" ? "/icons/gradient/home-gradient.svg" : "/icons/home.svg"} alt="" />
              </Link>
              <Link to="/event-to-come">
                <img src={pageLocation == "event-to-come" ? "/icons/gradient/event-to-come-gradient.svg" : "/icons/event-to-come.svg"} alt="" />
              </Link>
              <Link to="/event-pass">
                <img src={pageLocation == "event-pass" ? "/icons/gradient/event-pass-gradient.svg" : "/icons/event-pass.svg"} alt="" />
              </Link>{" "}
            </>
          );
        }
      case 4:
        if (splittedPath[1] === "event" && (isAdmin || isModerator )) {
          return (
            <>
              <button>
                <img src="/icons/white-gradient/play-white-gradient.svg" onClick={() => props.setModalDiapo(true)} alt="" />
              </button>
              <Link to="/">
                <img src={pageLocation == "/" ? "/icons/gradient/home-gradient.svg" : "/icons/home.svg"} alt="" />
              </Link>
              <Link to="/event-to-come">
                <img src={pageLocation == "event-to-come" ? "/icons/gradient/event-to-come-gradient.svg" : "/icons/event-to-come.svg"} alt="" />
              </Link>
              <Link to="/event-pass">
                <img src={pageLocation == "event-pass" ? "/icons/gradient/event-pass-gradient.svg" : "/icons/event-pass.svg"} alt="" />
              </Link>

              <span className="line"></span>

              <Link to={`/event/${eventId}/information`}>
                <img src={pageLocation == "information" ? "/icons/gradient/infos-gradient.svg" : "/icons/infos.svg"} alt="" />
              </Link>

              <Link to={`/event/${eventId}/guest-list`}>
                <img src={pageLocation == "guest-list" ? "/icons/gradient/guest-list-gradient.svg" /* actif */ : /* Non actif */ "/icons/guest-list.svg"} alt="" />
              </Link>

              <Link to={`/event/${eventId}/alert`}>
                <img src={pageLocation == "alert" ? "/icons/gradient/alert-gradient.svg" : "/icons/alert.svg"} alt="" />
              </Link>

              <Link to={`/event/${eventId}/modules`}>
                <img src={pageLocation == "modules" ? "/icons/gradient/modules-gradient.svg" : "/icons/modules.svg"} alt="" />
              </Link>

              <Link to={`/event/${eventId}/moderation`}>
                <img src={pageLocation == "moderation" ? "/icons/gradient/moderation-gradient.svg" : "/icons/moderation.svg"} alt="" />
              </Link>
            </>
          );
        }
        if (splittedPath[1] === "event" && !(isAdmin || isModerator )) {
          return (
            <>
              <Link to="/">
                <img src={pageLocation == "/" ? "/icons/gradient/home-gradient.svg" : "/icons/home.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/information`}>
                <img src={pageLocation == "information" ? "/icons/gradient/infos-gradient.svg" : "/icons/infos.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/announce`}>
                <img src={pageLocation == "announce" ? "/icons/gradient/alert-gradient.svg" : "/icons/alert.svg"} alt="" />
              </Link>

              <span className="line"></span>
              
              <Link to={`/event/${eventId}/photo`}>
                <img src={pageLocation == "photo" ? "/icons/gradient/photo-gradient.svg" : "/icons/photo.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/golden-book`}>
                <img src={pageLocation == "golden-book" ? "/icons/gradient/golden-book-gradient.svg" : "/icons/golden-book.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/fresco`}>
                <img src={pageLocation == "fresco" ? "/icons/gradient/fresco-gradient.svg" : "/icons/fresco.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/playlist`}>
                <img src={pageLocation == "playlist" ? "/icons/gradient/playlist-gradient.svg" : "/icons/playlist.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/fireworks`}>
                <img src={pageLocation == "fireworks" ? "/icons/gradient/fireworks-gradient.svg" : "/icons/fireworks.svg"} alt="" />
              </Link>
              <Link to={`/event/${eventId}/chat`}>
                <img src={pageLocation == "chat" ? "/icons/gradient/chat-gradient.svg" : "/icons/chat.svg"} alt="" />
              </Link>
            </>
          );
        } else break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar-left">
      {displayDynamicTools()}
    </nav>
  );
}
