import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";
import { useAppSelector } from "../../hooks/reduxHooks";
import Informations from "../../interfaces/Informations"
import {useState} from 'react'
import useCreateEvent from "../../hooks/useCreateEvent";
import { create } from "domain";
import useUpdateEvent from "../../hooks/useUpdateEvent";
import useGetModuleByEventId from "../../hooks/useGetModuleByEventId";
import useUploadCloudinary from "../../hooks/useUploadCloudinary";
import useCreateModules from "../../hooks/useCreateModules";

export default function Information() {

    const [update, setUpdate] = useState<boolean>(false);

    const navigate = useNavigate();
    const eventId = useParams().id;
    const userConnected = useAppSelector((state) => state.userConnected.id)
    const eventsData = useAppSelector((state) => state.events.data);

    const [file,setFile] = useState<any>();
    const [eventForm, setEventForm] = useState<any>({
        _id:'',
        userId: '',

        // GENERAL
        name: '',
        type: '',
        description: '',

        // LIEU
        address: '',
        zipcode: '',
        city: '',
        train: false,
        car: false,
        autre: false,
        precision: '',

        // PERSONNE A CONTACTER
        contactName: '',
        contactPhone: '',
        contactCall: false,
        contactText: false,

        // PERSONNE A CONTACTER 2
        contactNameSec: '',
        contactPhoneSec: '',
        contactCallSec: false,
        contactTextSec: false,

        //DRESSCODE
        dresscode: '',

        //EVENT START
        start: '',
        eventStartHour: '',

        //EVENT END
        end: '',
        eventEndHour: '',

        //ALERT RAPPEL
        alertDate: '',
        alertDescription: '',
        alertHour: '',

        //NOTIFACATIONS
        inviteAccepted: false,
        inviteRefused: false,
        newClaim: false,

        //UPLOAD IMAGE
        banniere:'',
    });

    const handleChange = ({target}: any) => {
        setUpdate(true);
        if(eventForm.userId === userConnected || !eventForm.userId) {
            setEventForm((prev: any) => ({
                ...prev,
                [target.name]: target.value
            }))

            if (target.type === "checkbox") {
                setEventForm((prev: any) => ({
                    ...prev,
                    [target.name]: !eventForm[target.name]
                }))
            } 
        }        
    }

    const updateEvent = useUpdateEvent();
    const createEvent = useCreateEvent();
    const createModules = useCreateModules();

    const sendForm = () => {
        if(eventId){
            updateEvent(eventForm)
        }else{
            eventForm.userId = userConnected
            createEvent(eventForm).then((res:any) => {
                createModules(res.data.event._id)
            })  
        }
        setUpdate(false);
    }

    useEffect(() => {
        let good;
        const fetchData = async (event:any) => {
            setEventForm(
                {
                    _id: event._id,
                    userId: event.userId,
            
                    // GENERAL
                    name: event.name,
                    type: event.type,
                    description: event.description,
            
                    // LIEU
                    address: event.place.address,
                    zipcode: event.place.zipcode,
                    city: event.place.city,
                    train: event.place.access.train,
                    car: event.place.access.parking,
                    autre: event.place.access.autres,
                    precision: event.place.access.precision,
            
                    // PERSONNE A CONTACTER
                    contactName: event.contacts.contact0.name,
                    contactPhone: event.contacts.contact0.phone,
                    contactCall: event.contacts.contact0.appel,
                    contactText: event.contacts.contact0.sms,
            
                    // PERSONNE A CONTACTER 2
                    contactNameSec: event.contacts.contact1.name,
                    contactPhoneSec: event.contacts.contact1.phone,
                    contactCallSec: event.contacts.contact1.appel,
                    contactTextSec: event.contacts.contact1.sms,
            
                    //DRESSCODE
                    dresscode: event.dresscode,
            
                    //EVENT START
                    start: event.start.slice(0,10),
                    eventStartHour: event.start.slice(11,19),
            
                    //EVENT END
                    end: event.end.slice(0,10),
                    eventEndHour: event.end.slice(11,19),
            
                    //ALERT RAPPEL
                    alertDate: event.alerts.date.slice(0,10),
                    alertDescription: event.alerts.description,
                    alertHour: event.alerts.date.slice(11,19),
            
                    //NOTIFACATIONS
                    inviteAccepted: event.notifications.inviteAccepted,
                    inviteRefused: event.notifications.inviteRefused,
                    newClaim: event.notifications.announcement,
            
                    //UPLOAD IMAGE
                    img: event.banniere,
                }
            )
        }
        if(eventId) {
            eventsData.map(event => {
                if ( event["_id"] === eventId ) {
                    good = true;
                        fetchData(event)
                }
            })
            good ? console.log() : navigate("/404")
        }
        
    }, [])

    const uploadCloud = useUploadCloudinary()
    const formData = new FormData();
    formData.append("upload_preset", "modules");
    useEffect(() => {
        if(file){
            formData.append("file", file);
            uploadCloud("image", formData)
            .then(res=> {
                const fileURL = res.url
                setEventForm((prev: any) => ({
                    ...prev,
                    img: fileURL
                }))
            })
        }
    }, [file])

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/infos-gradient.svg" title="Informations" desc="Informations relatives à l'évènement" />
            {update ? 
                <div className="button-save">
                    <div onClick={() => sendForm()}>
                        <img src="/icons/save.svg" />
                    </div>
                </div>
            : ''}
            <GridContainer>
                <div>
                    <div className="grid-card gc-4 gr-2">
                        <span>Générales</span>
                        <form>
                            <input onChange={handleChange} name="name" placeholder="Nom de l'évènement" value={eventForm.name}/>

                            <select onChange={handleChange} name="type"  value={eventForm.type}>  
                                <option>Type d’évènement</option>
                                <option>Mariage</option>
                                <option >Anniversaire</option>
                                <option>Workshops</option>
                                <option>Escapades</option>
                            </select>
                            <textarea onChange={handleChange} name="description" placeholder="Description de votre évènement" value={eventForm.description}>
                            </textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-6 image-upload-card" style={{background: `url(${eventForm.img})`}}>
                        <div>
                            <span>Importer l'image de votre bannière</span>
                            <input onChange={(event) => {setFile(event.target.files![0])}} name="image" type="file" />
                        </div>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Début de l'évènement</span>
                        <form>
                            <div>
                                <label>Date</label>
                                <input onChange={handleChange} name="start" type="date" value={eventForm.start}/>
                            </div>
                            <div>
                                <label>Heure</label>
                                <input onChange={handleChange} name="eventStartHour" type="time" value={eventForm.eventStartHour}/>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Fin de l'évènement</span>
                        <form>
                            <div>
                                <label>Date</label>
                                <input onChange={handleChange} name="end" type="date" value={eventForm.end}/>
                            </div>
                            <div>
                                <label>Heure</label>
                                <input onChange={handleChange} name="eventEndHour" type="time" value={eventForm.eventEndHour}/>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-4 place-card">
                        <span>Lieu</span>
                        <form>
                            <input onChange={handleChange} name="address" placeholder="Adresse" value={eventForm.address}/>
                            <div>
                                <input onChange={handleChange} name="zipcode" placeholder="Code Postal" value={eventForm.zipcode}/>
                                <input onChange={handleChange} name="city" placeholder="Ville" value={eventForm.city}/>
                            </div>
                            <label>Accès</label>
                            <div>
                                <div>
                                    <input onChange={handleChange} name="train" type="checkbox" value={eventForm.train} checked={eventForm.train}/>
                                    <label>Train</label>
                                </div>
                                <div>
                                    <input onChange={handleChange} name="car" type="checkbox" value={eventForm.car} checked={eventForm.car}/>
                                    <label>Voiture (parking)</label>
                                </div>
                                <div>
                                    <input onChange={handleChange} name="autre" type="checkbox" value={eventForm.autre} checked={eventForm.autre} />
                                    <label>Autre</label>
                                </div>
                                <input onChange={handleChange} name="precision" type="text" placeholder="Précision" value={eventForm.precision}/>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 contact-card">
                        <span>Personne(s) à contacter</span>
                        <form>
                            <p>Définissez les personnes que pourront contacter vos invités.</p>
                            <div>
                                <label>contact n°1</label>
                                <input onChange={handleChange} name="contactName" placeholder="Prénom" value={eventForm.contactName}/>
                                <input onChange={handleChange} name="contactPhone"  placeholder="Téléphone" value={eventForm.contactPhone}/>
                                <label>Privilégier le contact par</label>
                                <div className="options-select">
                                    <div>
                                        <input onChange={handleChange} name="contactCall"  type="checkbox" value={eventForm.contactCall} checked={eventForm.contactCall}/>
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input onChange={handleChange} name="contactText"  type="checkbox" value={eventForm.contactText} checked={eventForm.contactText}/>
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>contact n°2</label>
                                <input  onChange={handleChange} name="contactNameSec" placeholder="Prénom" value={eventForm.contactNameSec}/>
                                <input  onChange={handleChange} name="contactPhoneSec" placeholder="Téléphone" value={eventForm.contactPhoneSec}/>
                                <label>Privilégier le contact par</label>
                                <div className="options-select">
                                    <div>
                                        <input onChange={handleChange} name="contactCallSec" type="checkbox" value={eventForm.contactCallSec} checked={eventForm.contactCallSec}/>
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input  onChange={handleChange} name="contactTextSec" type="checkbox" value={eventForm.contactTextSec} checked={eventForm.contactTextSec}/>
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 place-card">
                        <span>Dresscode / Thème</span>
                        <form>
                            <p>Communiquez un thème ou un dresscode à vos invités</p>
                            <textarea  onChange={handleChange} name="dresscode" placeholder="Dresscode" value={eventForm.dresscode}></textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-4 notifs-card">
                        <span>Notifications</span>
                        <form>
                            <p>Définissez les évènements pour lesquels vous souhaitez recevoir une notification</p>
                            <div>
                                <input onChange={handleChange} name="inviteAccepted" type="checkbox" value={eventForm.inviteAccepted} checked={eventForm.inviteAccepted}/>
                                <label>Invitation acceptée</label>
                            </div>
                            <div>
                                <input onChange={handleChange} type="checkbox" name="inviteRefused" value={eventForm.inviteRefused} checked={eventForm.inviteRefused}/>
                                <label>Invitation déclinée</label>
                            </div>
                            <div>
                                <input onChange={handleChange} type="checkbox" name="newClaim" value={eventForm.newClaim} checked={eventForm.newClaim}/>
                                <label>Nouvelle annonce créée</label>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 remainder-card">
                        <span>Alertes / Rappels</span>
                        <form>
                            <p>Envoyer un rappel aux invités</p>
                            <div>
                                <input onChange={handleChange} name="alertHour" type="time"  id="" value={eventForm.alertHour}/>
                                <input onChange={handleChange} name="alertDate" type="date"  id="" value={eventForm.alertDate}/>
                            </div>
                            <textarea onChange={handleChange} name="alertDescription" placeholder="Message personnalisé" value={eventForm.alertDescription} ></textarea>
                        </form>
                    </div>
                </div>  
            </GridContainer>
        </>
    )
}