import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateModuleSliceFresque } from "../../features/modulesSlice";

interface ModuleInterface {
    displayMenuModule: boolean,
    setDisplayMenuModule: Function,
    moduleFresqueActive: boolean,
    setModuleFresqueActive:any, 
    eventId:any,
    fresqueForm:any,
    setModulesForm:any
}

export default function ModuleFresque({displayMenuModule, 
    setDisplayMenuModule, 
    moduleFresqueActive,
    setModuleFresqueActive, 
    eventId,
    fresqueForm,
    setModulesForm
}: ModuleInterface) {

    const closeModuleMenuFresque = (e:any) => {
        const moduleMenuFresque = document.getElementsByClassName("module-fresque")[0] as HTMLElement;
        if (displayMenuModule == true) {
            setDisplayMenuModule(false);
            moduleMenuFresque.classList.remove("active");
        }
        e.preventDefault();
        dispatch(updateModuleSliceFresque(formInput));
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxFresque") as HTMLInputElement;
        if(moduleFresqueActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
        setFormInput((prev: any) => ({
            ...prev,
            ["active"]:  slider.checked
        }))
    },[moduleFresqueActive])

    const activeModuleFresque = () => {
        if(moduleFresqueActive==false){
            setModuleFresqueActive(true)
        }else{
            setModuleFresqueActive(false);
        }
    }

    const dispatch = useAppDispatch();

    const [formInput, setFormInput] = useState({
        eventID: eventId,
        nom:"fresque",
        active: "",
        disponibliteFresqueUnite:"",
        module_display_time:""
        
    })
    

    const handleChange = ({target}: any) => {
        if(target.type=="checkbox"){
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.checked
            })) 
            setModulesForm((prev:any) =>({
                ...prev,
                fresque:{
                    ...prev.fresque,
                    [target.name]: target.checked
                }
            }))
            
        }else{
            setFormInput((prev: any) => ({
                ...prev,
                [target.name]: target.value
            })) 
            console.log(target.value);
            setModulesForm((prev:any) =>({
                ...prev,
                fresque:{
                    ...prev.fresque,
                    [target.name]: target.value
                }
            }))
           
        }
    }
    

    

    return (
        <div className="module-group module-fresque">
            <div className="module-fresque-container">
                <div className="titre-container">
                    <div className="container-slider">
                        <label className="switch">
                            <input name="active" onChange={handleChange} onClick={activeModuleFresque} type="checkbox" id="checkboxFresque" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                    <span>Module fresque</span>
                </div>
                <div className="description-container">
                    <p>Permettez à vos invités d’échanger au moyen d’une messagerie privée spécialement créee pour votre évènement. </p>
                </div>
                <div className="demo" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                    
                </div>
                <div className="disponibilite-container">
                    <p>Disponibilité du module</p>
                    <div className="disponibilite-fresque">
                        <input name="module_display_time" onChange={handleChange} className="premier-input-apres" type="number" placeholder="0" value={fresqueForm.module_display_time}></input>
                        <input name="disponibliteFresqueUnite" onChange={handleChange} list="datalist-deuxieme-input-apres" className="deuxieme-input-apres" placeholder="jour(s)"></input>
                        <datalist id="datalist-deuxieme-input-apres">
                            <option value="jour(s)"></option>
                            <option value="semaine(s)"></option>
                            <option value="mois"></option>
                            <option value="année(s)"></option>
                        </datalist>
                        <p>après</p>
                    </div>
                </div>
                <div className="enregistrer-container">
                    <button className="enregistrer-btn" onClick={closeModuleMenuFresque}>
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    )
}