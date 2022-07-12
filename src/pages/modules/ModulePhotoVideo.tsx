import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateModuleSlicePhotosVideos } from "../../features/modulesSlice";

interface ModuleInterface {
    displayMenuModule: boolean,
    setDisplayMenuModule: Function,
    modulePhotoVideoActive: boolean,
    setModulePhotoVideoActive:any, 
    eventId:any
    photosVideosForm:any,
    setModulesForm:any
}

export default function ModulePhotoVideo({displayMenuModule, setDisplayMenuModule, modulePhotoVideoActive, setModulePhotoVideoActive, eventId, photosVideosForm, setModulesForm}: ModuleInterface) {

    const closeModuleMenu = (e:any) => {
        const moduleMenu = document.getElementsByClassName("module-photo-video")[0] as HTMLElement;
        if (displayMenuModule == true) {
            setDisplayMenuModule(false);
            moduleMenu.classList.remove("active");
            modulePhotoVideoActive = true;
        }
        e.preventDefault();
        dispatch(updateModuleSlicePhotosVideos(formInput));
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxPhotosVideo") as HTMLInputElement;
        if(modulePhotoVideoActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
        setFormInput((prev: any) => ({
            ...prev,
            ["active"]:  slider.checked
        }))
    },[modulePhotoVideoActive])

    const activeModulePhotosVideo = () => {
        if(modulePhotoVideoActive==false){
            setModulePhotoVideoActive(true)
        }else{
            setModulePhotoVideoActive(false);
        }
    }

    const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        eventID: eventId,
        nom:"photos_videos",
        active: "",
        autorisationLegendesCommentaires: "",
        videos: "",
        blacklist: [],
        disponibiliteApresEvenementUnite: "",
        disponibiliteApresEvenementValue: "",
        dureeModuleHeure: "",
        dureeModuleMin: "",
        dureePhotoMin: "",
        dureePhotoSec: "",
        loop: "",
    })

    const handleChange = ({target}: any) => {
        if(target.type=="checkbox"){
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.checked
            })) 
            setModulesForm((prev:any) =>({
                ...prev,
                photos_videos:{
                    ...prev.photos_videos,
                    [target.name]: target.checked
                }
            }))
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.value
            })) 
            setModulesForm((prev:any) =>({
                ...prev,
                photos_videos:{
                    ...prev.photos_videos,
                    [target.name]: target.value
                }
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

    useEffect(() => {
        const loopPhotosVideos = document.getElementById("checkboxLoopPhotosVideos") as HTMLInputElement;
        if(photosVideosForm.loop == false){
            loopPhotosVideos.checked = false;
        }else{
            loopPhotosVideos.checked = true;
        }


        const videosPhotosVideos = document.getElementById("checkboxVideosPhotosVideos") as HTMLInputElement;
        if(photosVideosForm.videos == false){
            videosPhotosVideos.checked = false;
        }else{
            videosPhotosVideos.checked = true;
        }
    }) 

    return (
                <div className="module-group module-photo-video">
                    <div className="module-photo-video-container">
                        <div className="titre-container">
                            <div className="container-slider">
                                <label className="switch">
                                    <input onChange={handleChange} name="active" onClick={activeModulePhotosVideo} type="checkbox" id="checkboxPhotosVideo" />
                                    <div className="slider round"></div>
                                </label>
                            </div>
                            <span>Module photo &#x26; vidéo</span>
                        </div>
                        <div className="description-container">
                            <p>Diffusez un diaporama photo contribué par vos invités en live lors de votre évènement.</p>
                            <p>Donnez leur la possibilité de créer des souvenirs uniques et une expérience collaborative exceptionnelle. </p>
                        </div>
                        <div className="demo" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                            
                        </div>
                        <div className="duree-container">
                            <p>Durées d’affichage</p>
                            <div className="duree-photo">
                                <input onChange={handleChange} name="dureePhotoMin" className="premier-input-photo" type="number" placeholder="min"></input>
                                <p>:</p>
                                <input onChange={handleChange} name="dureePhotoSec" className="deuxieme-input-photo" type="number" placeholder="sec"></input>
                                <p>par photos</p>
                            </div>
                            <div className="duree-module">
                                <input onChange={handleChange} name="dureeModuleHeure" className="premier-input-duree" type="number" placeholder="heure"></input>
                                <p>:</p>
                                <input onChange={handleChange} name="dureeModuleMin" className="deuxieme-input-duree" type="number" placeholder="min"></input>
                                <p>modules</p>
                            </div>
                        </div>
                        <div className="autorisation-container">
                            <p>Autorisation(s)</p>
                            <div className="autoriser-video">
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onChange={handleChange} name="videos" type="checkbox" id="checkboxVideosPhotosVideos" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                                <p>Autoriser les vidéos</p>
                            </div>
                            <div className="autoriser-legendes">
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onChange={handleChange} name="autorisationLegendesCommentaires" type="checkbox" id="checkbox" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                                <p>Autoriser les légendes/commentaires</p>
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
                        <div className="lecture-container">
                            <div className="container-slider">
                                <label className="switch">
                                    <input onChange={handleChange} name="loop" type="checkbox" id="checkboxLoopPhotosVideos"/>
                                    <div className="slider round"></div>
                                </label>
                            </div>
                            <p>Lecture en boucle</p>
                        </div>
                        <div className="jour-container">
                            <p>Disponibilité après l’évènement</p>
                            <div className="jour">
                                <input onChange={handleChange} name="disponibiliteApresEvenementValue" className="premier-input-jour" placeholder="1" type="number"></input>
                                <input onChange={handleChange} name="disponibiliteApresEvenementUnite" list="datalistInput" className="deuxieme-input-jour" placeholder="jour(s)"></input>
                                <datalist id="datalistInput">
                                    <option value="jour(s)"></option>
                                    <option value="semaine(s)"></option>
                                    <option value="mois"></option>
                                    <option value="année(s)"></option>
                                </datalist>
                            </div>
                        </div>
                        <div className="enregistrer-container">
                            <button className="enregistrer-btn" onClick={closeModuleMenu}>
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
    )
}