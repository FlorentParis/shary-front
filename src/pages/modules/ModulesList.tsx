import { useEffect } from "react";

interface ModuleInterface {
    setDisplayMenuModule: Function,
    modulePhotoVideoActive: boolean,
    setModulePhotoVideoActive: any,
    moduleChatActive: boolean,
    setModuleChatActive: any,
    moduleLivreDorActive: boolean,
    setModuleLivreDorActive: any,
    moduleFresqueActive: boolean,
    setModuleFresqueActive: any,
    moduleFeuDArtificeActive: boolean,
    setModuleFeuDArtificeActive: any,
    modulePlaylistActive: boolean,
    setModulePlaylistActive: any,
    currentEventForm: any,
    setcurrentEventForm: any
}

export default function ModulesList({setDisplayMenuModule, 
    modulePhotoVideoActive, 
    setModulePhotoVideoActive, 
    moduleChatActive, 
    setModuleChatActive, 
    moduleLivreDorActive, 
    setModuleLivreDorActive, 
    moduleFresqueActive, 
    setModuleFresqueActive, 
    moduleFeuDArtificeActive, 
    setModuleFeuDArtificeActive, 
    modulePlaylistActive, 
    setModulePlaylistActive ,
    currentEventForm,
    setcurrentEventForm
}: ModuleInterface) {

    const openModuleMenuPhotosVideo = () => {
        const moduleGroup = document.querySelectorAll(".module-group");
        const moduleMenuPhotosVideo = document.getElementsByClassName("module-photo-video")[0] as HTMLElement;
        setDisplayMenuModule(true);
        
        moduleGroup.forEach((module) => {
            const moduleTemp = module as HTMLElement;
            
            moduleTemp.classList.remove("active");
        })
        moduleMenuPhotosVideo.classList.add("active");
        
    }

    const openModuleMenuChat = () => {
        const moduleGroup = document.querySelectorAll(".module-group");
        const moduleMenuChat = document.getElementsByClassName("module-chat")[0] as HTMLElement;
        setDisplayMenuModule(true);
        
        moduleGroup.forEach((module) => {
            const moduleTemp = module as HTMLElement;
            
            moduleTemp.classList.remove("active");
        })
        moduleMenuChat.classList.add("active");
    }

    const openModuleMenuLivreDor = () => {
        const moduleGroup = document.querySelectorAll(".module-group");
        const moduleMenuLivreDor = document.getElementsByClassName("module-livre-dor")[0] as HTMLElement;
        setDisplayMenuModule(true);
        
        moduleGroup.forEach((module) => {
            const moduleTemp = module as HTMLElement;
            
            moduleTemp.classList.remove("active");
        })
        moduleMenuLivreDor.classList.add("active");
    }
    
    const openModuleMenuFresque = () => {
        const moduleGroup = document.querySelectorAll(".module-group");
        const moduleMenuFresque = document.getElementsByClassName("module-fresque")[0] as HTMLElement;
        setDisplayMenuModule(true);
        
        moduleGroup.forEach((module) => {
            const moduleTemp = module as HTMLElement;
            
            moduleTemp.classList.remove("active");
        })
        moduleMenuFresque.classList.add("active");
    }

    const openModuleMenuFeuDArtifice = () => {
        const moduleGroup = document.querySelectorAll(".module-group");
        const moduleMenuFeuDArtifice = document.getElementsByClassName("module-feu-d-artifice")[0] as HTMLElement;
        setDisplayMenuModule(true);
        
        moduleGroup.forEach((module) => {
            const moduleTemp = module as HTMLElement;
            
            moduleTemp.classList.remove("active");
        })
        moduleMenuFeuDArtifice.classList.add("active");
    }

    const openModuleMenuPlaylist = () => {
        const moduleGroup = document.querySelectorAll(".module-group");
        const moduleMenuPlaylist = document.getElementsByClassName("module-playlist")[0] as HTMLElement;
        setDisplayMenuModule(true);
        
        moduleGroup.forEach((module) => {
            const moduleTemp = module as HTMLElement;
            
            moduleTemp.classList.remove("active");
        })
        moduleMenuPlaylist.classList.add("active");

    }

    useEffect(() => {
        const slider = document.getElementById("checkboxPhotosVideoContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-photos-video") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(modulePhotoVideoActive==true){
            parentModule.classList.toggle("activateModule");
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[])

    useEffect(() => {
        const slider = document.getElementById("checkboxPhotosVideoContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-photos-video") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(modulePhotoVideoActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[modulePhotoVideoActive])

    const activeModulePhotosVideo = (e:any) => {
        const container = e.target;
        if(modulePhotoVideoActive==false){
            setModulePhotoVideoActive(true)
        }else{
            setModulePhotoVideoActive(false);
        }
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxChatContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-chat") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleChatActive==true){
            parentModule.classList.toggle("activateModule");
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[])

    useEffect(() => {
        const slider = document.getElementById("checkboxChatContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-chat") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleChatActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[moduleChatActive])

    const activeModuleChat = (e:any) => {
        const container = e.target;
        if(moduleChatActive==false){
            setModuleChatActive(true)
        }else{
            setModuleChatActive(false);
        }
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxLivreDorContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-livre-d-or") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleLivreDorActive==true){
            parentModule.classList.toggle("activateModule");
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[])

    useEffect(() => {
        const slider = document.getElementById("checkboxLivreDorContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-livre-d-or") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleLivreDorActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[moduleLivreDorActive])

    const activeModuleLivreDor = (e:any) => {
        const container = e.target;
        if(moduleLivreDorActive==false){
            setModuleLivreDorActive(true)
        }else{
            setModuleLivreDorActive(false);
        }
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxFresqueContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-fresque") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleFresqueActive==true){
            parentModule.classList.toggle("activateModule");
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[])

    useEffect(() => {
        const slider = document.getElementById("checkboxFresqueContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-fresque") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleFresqueActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[moduleFresqueActive])

    const activeModuleFresque = (e:any) => {
        const container = e.target;
        if(moduleFresqueActive==false){
            setModuleFresqueActive(true)
        }else{
            setModuleFresqueActive(false);
        }
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxFeuDArtificeContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-feu-d-artifice") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleFeuDArtificeActive==true){
            parentModule.classList.toggle("activateModule");
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[])

    useEffect(() => {
        const slider = document.getElementById("checkboxFeuDArtificeContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-feu-d-artifice") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(moduleFeuDArtificeActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[moduleFeuDArtificeActive])

    const activeModuleFeuDArtifice = (e:any) => {
        const container = e.target;
        if(moduleFeuDArtificeActive==false){
            setModuleFeuDArtificeActive(true)
        }else{
            setModuleFeuDArtificeActive(false);
        }
    }

    useEffect(() => {
        const slider = document.getElementById("checkboxPlaylistContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-playlist") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(modulePlaylistActive==true){
            parentModule.classList.toggle("activateModule");
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[])

    useEffect(() => {
        const slider = document.getElementById("checkboxPlaylistContainer") as HTMLInputElement;
        const parentModule = document.getElementById("modules-card-playlist") as HTMLInputElement;
        parentModule.classList.toggle("activateModule");
        if(modulePlaylistActive==true){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    },[modulePlaylistActive])

    const activeModulePlaylist = (e:any) => {
        const container = e.target;
        if(modulePlaylistActive==false){
            setModulePlaylistActive(true)
        }else{
            setModulePlaylistActive(false);
        }
    }



    return (
        
                <div className="page-modules-list">
                    <div className="grid-modules-list">
                        <div className="modules-card" id="modules-card-photos-video" onClick={openModuleMenuPhotosVideo}>
                            <div className="container-modules" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                                <div className="information-container">
                                    <span>Module photo &#x26; vidéo</span>
                                    <p>Permettez à vos invités de contribuer une gallerie de votre évènement</p>
                                </div>
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onClick={activeModulePhotosVideo} type="checkbox" id="checkboxPhotosVideoContainer" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modules-card" id="modules-card-chat" onClick={openModuleMenuChat}>
                            <div className="container-modules" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                                <div className="information-container">
                                    <span>Module Chat</span>
                                    <p>Permettez à vos invités de contribuer une gallerie de votre évènement</p>
                                </div>
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onClick={activeModuleChat} type="checkbox" id="checkboxChatContainer" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modules-card" id="modules-card-livre-d-or" onClick={openModuleMenuLivreDor}>
                            <div className="container-modules" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                                <div className="information-container">
                                    <span>Module Livre D'or</span>
                                    <p>Permettez à vos invités de contribuer une gallerie de votre évènement</p>
                                </div>
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onClick={activeModuleLivreDor} type="checkbox" id="checkboxLivreDorContainer" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modules-card" id="modules-card-fresque" onClick={openModuleMenuFresque}>
                            <div className="container-modules" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                                <div className="information-container">
                                    <span>Module Fresque</span>
                                    <p>Permettez à vos invités de contribuer une gallerie de votre évènement</p>
                                </div>
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onClick={activeModuleFresque} type="checkbox" id="checkboxFresqueContainer" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modules-card" id="modules-card-feu-d-artifice" onClick={openModuleMenuFeuDArtifice}>
                            <div className="container-modules" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                                <div className="information-container">
                                    <span>Module Feu d'artifice</span>
                                    <p>Permettez à vos invités de contribuer une gallerie de votre évènement</p>
                                </div>
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onClick={activeModuleFeuDArtifice} type="checkbox" id="checkboxFeuDArtificeContainer" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modules-card" id="modules-card-playlist" onClick={openModuleMenuPlaylist}>
                            <div className="container-modules" style={{backgroundImage: "url('https://img.freepik.com/vecteurs-libre/fond-silhouettes-palmiers-colores_23-2148541792.jpg?w=2000')"}}>
                                <div className="information-container">
                                    <span>Module Playlist</span>
                                    <p>Permettez à vos invités de contribuer une gallerie de votre évènement</p>
                                </div>
                                <div className="container-slider">
                                    <label className="switch">
                                        <input onClick={activeModulePlaylist} type="checkbox" id="checkboxPlaylistContainer" />
                                        <div className="slider round"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
