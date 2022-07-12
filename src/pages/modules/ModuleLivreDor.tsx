import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateModuleSliceLivreDOr } from "../../features/modulesSlice";

interface ModuleInterface {
    displayMenuModule: boolean,
    setDisplayMenuModule: Function,
    moduleLivreDorActive: boolean,
    setModuleLivreDorActive: any, 
    eventId:any,
    livreDOrForm:any,
    setModulesForm:any
}

export default function ModuleLivreDor({displayMenuModule, 
    setDisplayMenuModule, 
    moduleLivreDorActive,
    setModuleLivreDorActive, 
    eventId,
    livreDOrForm,
    setModulesForm
}: ModuleInterface) {

    const closeModuleMenuLivreDor = (e:any) => {
        const moduleMenuLivreDor = document.getElementsByClassName("module-livre-dor")[0] as HTMLElement;
        if (displayMenuModule == true) {
            setDisplayMenuModule(false);
            moduleMenuLivreDor.classList.remove("active");;
        }
        e.preventDefault();
        dispatch(updateModuleSliceLivreDOr(formInput));
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxLivreDor") as HTMLInputElement;
        if(moduleLivreDorActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
        setFormInput((prev: any) => ({
            ...prev,
            ["active"]:  slider.checked
        }))
    },[moduleLivreDorActive])

    const activeModuleLivreDor = () => {
        if(moduleLivreDorActive==false){
            setModuleLivreDorActive(true)
        }else{
            setModuleLivreDorActive(false);
        }
    }

    const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        eventID: eventId,
        nom:"livre_d_or",
        QRcode: "",
        active: "",
        autorisationPhotos: "",
        videos: "",
        blacklist:[],
        disponibliteModuleUnite: "",
        disponibliteModuleValue: "",
        disponiblitePhotoUnite: "",
        disponiblitePhotoValue: "",
        is_private: ""
    })

    const handleChange = ({target}: any) => {
        if(target.type=="checkbox"){
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.checked
            })) 
            setModulesForm((prev:any) =>({
                ...prev,
                livre_d_or:{
                    ...prev.livre_d_or,
                    [target.name]: target.checked
                }
            }))
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.value
            })) 
            
            if(target.name=="is_private"){
                console.log(target.name);
                console.log(target.value);
                if(target.value=="publique"){
                    setModulesForm((prev:any) =>({
                        ...prev,
                        livre_d_or:{
                            ...prev.livre_d_or,
                            [target.name]: false
                        }
                    }))
                    setFormInput((prev: any) => ({
                        ...prev,
                        [target.name]: false
                    })) 
                }else if(target.value=="prive"){
                    setModulesForm((prev:any) =>({
                        ...prev,
                        livre_d_or:{
                            ...prev.livre_d_or,
                            [target.name]: true
                        }
                    }))
                    setFormInput((prev: any) => ({
                        ...prev,
                        [target.name]: true
                    })) 
                }
            }else{
                setModulesForm((prev:any) =>({
                    ...prev,
                    livre_d_or:{
                        ...prev.livre_d_or,
                        [target.name]: target.value
                    }
                }))
            }
            
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

    useEffect(() => {
        const videosLivreDOr = document.getElementById("checkboxVideosLivreDOr") as HTMLInputElement;
        if(livreDOrForm.videos == false){
            videosLivreDOr.checked = false;
        }else{
            videosLivreDOr.checked = true;
        }

        const priveLivreDOr = document.getElementById("priveLivreDOr") as HTMLInputElement;
        const publiqueLivreDOr = document.getElementById("publiqueLivreDOr") as HTMLInputElement;
        if(livreDOrForm.is_private == false){
            priveLivreDOr.checked = false;
            publiqueLivreDOr.checked = true;
        }else if(livreDOrForm.is_private == true){
            priveLivreDOr.checked = true;
            publiqueLivreDOr.checked = false;
        }
    }) 

    return (
        <div className="module-group module-livre-dor">
            <div className="module-livre-dor-container">
                <div className="titre-container">
                    <div className="container-slider">
                        <label className="switch">
                            <input name="active" onChange={handleChange} onClick={activeModuleLivreDor} type="checkbox" id="checkboxLivreDor" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <span>Module Livre d’or</span>
                </div>
                <div className="description-container">
                    <p>Permettez à vos invités de vous laisser un petit mot souvenir grâce à notre Livre d’or digitalisé. </p>
                </div>
                <div className="demo" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                    
                </div>
                <div className="disponibilite-container">
                    <p>Disponibilité du module</p>
                    <div className="disponibilite-photo">
                        <input name="disponiblitePhotoValue" onChange={handleChange} className="premier-input-avant" type="number" placeholder="10"></input>
                        <input name="disponiblitePhotoUnite" onChange={handleChange} list="datalist-input-disponiblite-avant" className="deuxieme-input-avant" placeholder="jour(s)"></input>
                        <datalist id="datalist-input-disponiblite-avant">
                            <option value="jour(s)"></option>
                            <option value="semaine(s)"></option>
                            <option value="mois"></option>
                            <option value="année(s)"></option>
                        </datalist>
                        <p>avant</p>
                    </div>
                    <div className="disponibilite-module">
                        <input name="disponibliteModuleValue" onChange={handleChange} className="premier-input-apres" type="number" placeholder="0"></input>
                        <input name="disponibliteModuleUnite" onChange={handleChange} list="datalist-input-disponiblite-apres" className="deuxieme-input-apres" placeholder="jour(s)"></input>
                        <datalist id="datalist-input-disponiblite-apres">
                            <option value="jour(s)"></option>
                            <option value="semaine(s)"></option>
                            <option value="mois"></option>
                            <option value="année(s)"></option>
                        </datalist>
                        <p>après</p>
                    </div>
                </div>
                <div className="autorisation-container">
                    <p>Autorisation(s)</p>
                    <div className="autoriser-video">
                        <div className="container-slider">
                            <label className="switch">
                                <input name="videos" onChange={handleChange} type="checkbox" id="checkboxVideosLivreDOr" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                        <div className="container-video-text">
                            <p>Autoriser les vidéos</p>
                            <p className="attention">Attention : lors de l’export de votre module, les vidéos se trouveront dans un .zip à part du pdf</p>
                        </div>
                    </div>
                    <div className="autoriser-photos">
                        <div className="container-slider">
                            <label className="switch">
                                <input name="autorisationPhotos" onChange={handleChange} type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                        <div className="container-photos-text">
                            <p>Autoriser les photos</p>
                        </div>
                    </div>
                </div>
                <div className="confidentialite-container">
                    <p>Confidentialité</p>  
                    <div className="lecture-container">
                        <div>
                            <label className="label-prive">
                                <input name="is_private" value="prive" onChange={handleChange} type="radio" id="priveLivreDOr"/>
                                <div className="prive-container">
                                    <p>Lecture privé</p>
                                    <p className="prive-text">La lecture des messages personnels laissés n’est disponible que pour les administrateurs de l’évènement.</p>
                                </div>
                            </label>
                            <label className="label-publique">
                                <input name="is_private" value="publique" onChange={handleChange} type="radio" id="publiqueLivreDOr"/>
                                <div className="publique-container">
                                    <p>Lecture publique</p>
                                    <p className="publique-text">Tout le monde peut lire le contenu du livre d’or</p>
                                </div>
                            </label>
                        </div>
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
                <div className="rappels-container">
                    <p>Rappels</p>
                    <p className="rappels-text">Envoyez une notification à vos invités pour leur rappeler qu’ils ont la possibilité de vous laisser un petit mot.</p>
                    <div className="rappels-notification">
                        <button className="cancel-rappels">
                            +
                        </button>
                        <p>Le</p>
                        <input className="premier-input-rappels" type="date">
                        </input>
                        <p>à</p>
                        <input className="deuxieme-input-rappels" type="time"></input>
                    </div>
                    <button className="ajouter-rappel">+ Ajouter un rappel</button>
                    <div className="generate-QRcode">
                        <div className="container-slider">
                            <label className="switch">
                                <input name="QRcode" onChange={handleChange} type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                        </div>
                        <p>Générer un QR code pour accéder rapidement au module</p>
                    </div>
                </div>
                <div className="enregistrer-container">
                    <button className="enregistrer-btn" onClick={closeModuleMenuLivreDor}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    )
}