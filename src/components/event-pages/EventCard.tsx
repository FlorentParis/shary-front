import 'moment/locale/fr';
import { Link } from 'react-router-dom';
const moment = require("moment");
moment.locale('fr');

export default function EventCard(props: any) {

    function capitalizeFirstLetter(element: string) {
        return element.charAt(0).toUpperCase() + element.slice(1)
    }

    function styleEventType(type: any) {
        switch(type) {
            case "birthday":
                return {color: "#DEB655", background: "#FEF5E7"}
                break;
            case "mariage":
                return {color: "#3FACBB", background: "#D8F9FE"}
                break;
            case "workshops":
                return {color: "#EC5358", background: "#FFEAED"}
                break;
            case "escapades":
                return {color: "#08F2B6", background: "#BEFFE"}
                break;
        }
    }

    return (
        <Link className="event-card" to={`/event/${props.event._id}/information`}>
            <div className="container-img">
                <img src={props.event.banniere} />
            </div>
            <span>{props.event.name}</span>
            <div>
                <span style={styleEventType(props.event.type)}>{Object.keys(props.event.participants).length} participants</span>
                <span>{capitalizeFirstLetter(moment.utc(props.event.start).format('dddd DD MMMM YYYY'))}</span>
            </div>
        </Link>
    )
}