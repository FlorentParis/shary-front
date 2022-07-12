import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateModuleSliceChat } from "../../features/modulesSlice";

interface ModuleInterface {
    displayMenuModule: boolean,
    setDisplayMenuModule: Function,
    moduleChatActive: boolean,
    setModuleChatActive: any, 
    eventId:any
}

export default function ModuleChat({displayMenuModule, 
    setDisplayMenuModule, moduleChatActive, setModuleChatActive, eventId}: ModuleInterface) {

    const closeModuleMenuChat = (e: any) => {
        const moduleMenuChat = document.getElementsByClassName("module-chat")[0] as HTMLElement;
        if (displayMenuModule == true) {
            setDisplayMenuModule(false);
            moduleMenuChat.classList.remove("active");
        }
        e.preventDefault();
        dispatch(updateModuleSliceChat(formInput));
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxChat") as HTMLInputElement;
        if(moduleChatActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
        setFormInput((prev: any) => ({
            ...prev,
            ["active"]:  slider.checked
        }))
    },[moduleChatActive])

    const activeModuleChat = () => {
        if(moduleChatActive==false){
            setModuleChatActive(true)
        }else{
            setModuleChatActive(false);
        }
    }

    const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        eventID: eventId,
        nom:"chat",
        active: "",
        autorisationPhotos: "",
        autorisationVideos: "",
        blacklist:[],
        disponibilitePhotoApresUnite: "",
        disponibilitePhotoApresValue: "",
        disponibilitePhotoAvantUnite: "",
        disponibilitePhotoAvantValue: "",
        moduleActiveDurantEvent: "",
        
    })

    const handleChange = ({target}: any) => {
        if(target.type=="checkbox"){
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.checked
            })) 
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.value
            })) 
        }
    }

    const [words, setWords] = useState<any>([]);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (formTermes.replace(/\s/g, '').length){
            setWords((prevState:any) => [{terme: formTermes}, ...prevState])
            let temp:any = formInput["blacklist"];
            temp.push(formTermes);
            setFormInput((prev: any) => ({
                ...prev,
                ["blacklist"]: temp
            })) 
        }
    }

    const [formTermes, setFormTermes] = useState('');


    const handleTermesChange = (e:any) => {
        setFormTermes(e.target.value);
    }
    
    


    return (
        <div className="module-group module-chat">
            <div className="module-chat-container">
                <div className="titre-container">
                    <div className="container-slider">
                        <label className="switch">
                            <input name="active" onChange={handleChange} onClick={activeModuleChat} type="checkbox" id="checkboxChat" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <span>Module chat</span>
                </div>
                <div className="description-container">
                    <p>Permettez à vos invités d’échanger au moyen d’une messagerie privée spécialement créee pour votre évènement. </p>
                </div>
                <div className="demo" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                    
                </div>
                <div className="disponibilite-container">
                    <p>Disponibilité du module</p>
                    <div className="disponibilite-photo">
                        <input name="disponibilitePhotoAvantValue" onChange={handleChange} className="premier-input-avant" type="number" placeholder="10"></input>
                        <input name="disponibilitePhotoAvantUnite" onChange={handleChange} list="datalist-deuxieme-input-avant" className="deuxieme-input-avant" placeholder="jour(s)"></input>
                        <datalist id="datalist-deuxieme-input-avant">
                            <option value="jour(s)"></option>
                            <option value="semaine(s)"></option>
                            <option value="mois"></option>
                            <option value="année(s)"></option>
                        </datalist>
                        <p>avant</p>
                    </div>
                    <div className="disponibilite-module">
                        <input name="disponibilitePhotoApresValue" onChange={handleChange} className="premier-input-apres" type="number" placeholder="0"></input>
                        <input name="disponibilitePhotoApresUnite" onChange={handleChange} list="datalist-deuxieme-input-apres" className="deuxieme-input-apres" placeholder="jour(s)"></input>
                        <datalist id="datalist-deuxieme-input-apres">
                            <option value="jour(s)"></option>
                            <option value="semaine(s)"></option>
                            <option value="mois"></option>
                            <option value="année(s)"></option>
                        </datalist>
                        <p>après</p>
                    </div>
                    <div className="activate-chat">
                        <div className="container-slider">
                            <label className="switch">
                                <input name="moduleActiveDurantEvent" onChange={handleChange} type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                        <p>Laisser le module chat activé pendant l’évènement</p>
                    </div>
                </div>
                <div className="autorisation-container">
                    <p>Autorisation(s)</p>
                    <div className="autoriser-video">
                        <div className="container-slider">
                            <label className="switch">
                                <input name="autorisationVideos" onChange={handleChange} type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                        <p>Autoriser les vidéos</p>
                    </div>
                    <div className="autoriser-photos">
                        <div className="container-slider">
                            <label className="switch">
                                <input name="autorisationPhotos" onChange={handleChange} type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                        <p>Autoriser les photos</p>
                    </div>
                </div>
                <div className="blacklist-container">
                    <p>Blacklister des termes</p>
                    <div className="blacklist">
                        <form className="my-5 mx-auto" style={{maxWidth: '600px', display:"flex"}}>
                            <div className="mb-3">
                                <input type="text" className="input-blacklist" placeholder="terme" id="word" onChange={handleTermesChange} value={formTermes}/>
                            </div>
                            <button className="blacklist-btn" type="submit" onClick={handleSubmit}>+</button>
                        </form>
                        <div className="word-list">
                            {words.map((word:any )=> (
                                <p className="blacklist-word">{word.terme}</p>
                            ))} 
                        </div>
                    </div>
                </div>
                <div className="enregistrer-container">
                    <button className="enregistrer-btn" onClick={closeModuleMenuChat}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    )
}