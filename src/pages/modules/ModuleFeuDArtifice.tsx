import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateModuleSliceFeuDArtifice } from "../../features/modulesSlice";

interface ModuleInterface {
    displayMenuModule: boolean,
    setDisplayMenuModule: Function,
    moduleFeuDArtificeActive: boolean,
    setModuleFeuDArtificeActive: any, eventId:any
}

export default function ModuleFeuDArtifice({displayMenuModule, 
    setDisplayMenuModule, 
    moduleFeuDArtificeActive,
    setModuleFeuDArtificeActive, eventId}: ModuleInterface) {

    const closeModuleMenuFeuDArtifice = (e:any) => {
        const moduleMenuFeuDArtifice = document.getElementsByClassName("module-feu-d-artifice")[0] as HTMLElement;
        if (displayMenuModule == true) {
            setDisplayMenuModule(false);
            moduleMenuFeuDArtifice.classList.remove("active");
        }
        e.preventDefault();
        dispatch(updateModuleSliceFeuDArtifice(formInput));
    }

    const activeArtifice = (e:any) => {
        const container = e.target;
        container.classList.toggle("activate");
        if(container.classList.contains("activate")==true){
            setFormInput((prev: any) => ({
                ...prev,
                [container.name]: false
            })) 
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [container.name]: true
            })) 
        }
        
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxFeuDArtifice") as HTMLInputElement;
        if(moduleFeuDArtificeActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
        setFormInput((prev: any) => ({
            ...prev,
            ["active"]:  slider.checked
        }))
    },[moduleFeuDArtificeActive])

    const activeModuleFeuDArtifice = () => {
        if(moduleFeuDArtificeActive==false){
            setModuleFeuDArtificeActive(true)
        }else{
            setModuleFeuDArtificeActive(false);
        }
    }

    const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        eventID: eventId,
        nom:"feu_d_artifice",
        active: "",
        artifice1: "",
        artifice2: "",
        artifice3: "",
        artifice4: ""
    })

    const handleChange = ({target}: any) => {
        if(target.type=="checkbox"){
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.checked
            })) 
        }else if(target.type="button"){
            
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.value
            })) 
        }
    }


    return (
        <div className="module-group module-feu-d-artifice">
            <div className="module-feu-d-artifice-container">
                <div className="titre-container">
                    <div className="container-slider">
                        <label className="switch">
                            <input onChange={handleChange} name="active" onClick={activeModuleFeuDArtifice} type="checkbox" id="checkboxFeuDArtifice" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <span>Module Feu d'artifices</span>
                </div>
                <div className="description-container">
                    <p>Permettez à vos invités de    collaborer ensemble dans la création d’un feu d’artifice digital unique via leur smartphone. </p>
                </div>
                <div className="demo" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                    
                </div>
                <div className="artifice-container">
                    <p>Choisissez les couleurs autorisées</p>
                    <div className="artifice-image-container">
                        <input name="artifice1" type="button" onClick={activeArtifice} className="artifice-image" style={{ backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')" }}></input>
                        <input name="artifice2" type="button" onClick={activeArtifice} className="artifice-image" style={{ backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')" }}></input>
                        <input name="artifice3" type="button" onClick={activeArtifice} className="artifice-image" style={{ backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')" }}></input>
                        <input name="artifice4" type="button" onClick={activeArtifice} className="artifice-image" style={{ backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')" }}></input>
                    </div>
                </div>
                <div className="enregistrer-container">
                    <button className="enregistrer-btn" onClick={closeModuleMenuFeuDArtifice}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    )
}