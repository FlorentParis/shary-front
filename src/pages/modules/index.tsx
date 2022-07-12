import { useNavigate, useParams } from "react-router";
import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import ModulesList from "./ModulesList";
import ModulePhotoVideo from "./ModulePhotoVideo";
import ModuleChat from "./ModuleChat";
import ModuleLivreDor from "./ModuleLivreDor";
import ModuleFresque from "./ModuleFresque";
import ModuleFeuDArtifice from "./ModuleFeuDArtifice";
import ModulePlaylist from "./ModulePlaylist";
import ModuleBLANC from "./ModuleBLANC";

export default function Modules() {
  const navigate = useNavigate();
  const eventId = useParams().id;
  const targetEventData = useAppSelector((state) => state.targetEvent.data);
  const userConnectedData = useAppSelector((state) => state.userConnected);
  const modules = useAppSelector((state) => state.modules.data);
  //@ts-ignore
  const userAdminId = targetEventData.userId;
  const isAdmin = userConnectedData.id === userAdminId;
  // navigate("/error")
  useEffect(() => {
    if (!isAdmin) {
      navigate("/error");
    }
  });
  const [modulesForm, setModulesForm] = useState<any>({
        chat: "",
        fresque: "",
        id_event: "",
        livre_d_or: "",
        photos_videos: "",
        playlist: ""
  });

  const [currentEventForm, setcurrentEventForm] = useState<any>(targetEventData);


  /* 
  chat: {messages: {…}}
  fresque: {availability_time: '2022-06-18T17:00:00.000Z', module_display_time: '345600'}
  id_event: "62cbfd8b564e13da8b692e2f"
  livre_d_or: {availability_time: '2022-06-18T17:00:00.000Z', videos: false, is_private: false}
  photos_videos: {availability_time: '2022-06-18T17:00:00.000Z', videos: true, loop: false}
  playlist: {availability_time: '2022-06-18T17:00:00.000Z', module_display_time: '172800'}
  __v: 0
  _id: "62c7f82243f47ca48ebfdb57" 
*/
  
  useEffect(() => {
    let good;
    let compteur = 0;
    const fetchData = async (module:any) => {
      setModulesForm({
        chat: module.chat,
        fresque: module.fresque,
        id_event: module.id_event,
        livre_d_or: module.livre_d_or,
        photos_videos: module.photos_videos,
        playlist: module.playlist
      });
    }
    if(eventId) {
        modules.map(module => {
            if ( module["id_event"] === eventId ) {
              compteur++;
              good = true;
                fetchData(module)
            }
        })
        
        good ? console.log() : navigate("/404")
    }
    console.log(compteur + " Kit de modules correspond à votre id_event")
    
  }, [])
  

  console.log(modulesForm);
  console.log(currentEventForm)



  

  const [displayMenuModule, setDisplayMenuModule] = useState<boolean>(false);

  const [modulePhotoVideoActive, setModulePhotoVideoActive] =
    useState<boolean>(currentEventForm.modules.photos_videos);
  const [moduleChatActive, setModuleChatActive] = useState<boolean>(currentEventForm.modules.chat);
  const [moduleLivreDorActive, setModuleLivreDorActive] =
    useState<boolean>(currentEventForm.modules.livre_d_or);
  const [moduleFresqueActive, setModuleFresqueActive] =
    useState<boolean>(currentEventForm.modules.fresque);
  const [moduleFeuDArtificeActive, setModuleFeuDArtificeActive] =
    useState<boolean>(false);
  const [modulePlaylistActive, setModulePlaylistActive] =
    useState<boolean>(currentEventForm.modules.playlist);

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/modules-gradient.svg" title="Gestion des modules" desc="Paramètrages des modules liés à l'événement" />
            <div className="container">
                <ModulesList setDisplayMenuModule={setDisplayMenuModule} 
                    modulePhotoVideoActive={modulePhotoVideoActive} 
                    setModulePhotoVideoActive={setModulePhotoVideoActive}
                    moduleChatActive={moduleChatActive}
                    setModuleChatActive={setModuleChatActive}
                    moduleLivreDorActive={moduleLivreDorActive}
                    setModuleLivreDorActive={setModuleLivreDorActive}
                    moduleFresqueActive={moduleFresqueActive}
                    setModuleFresqueActive={setModuleFresqueActive}
                    moduleFeuDArtificeActive={moduleFeuDArtificeActive}
                    setModuleFeuDArtificeActive={setModuleFeuDArtificeActive}
                    modulePlaylistActive={modulePlaylistActive}
                    setModulePlaylistActive={setModulePlaylistActive}
                    currentEventForm={currentEventForm} 
                    setcurrentEventForm={setcurrentEventForm}
                />
                <ModuleBLANC/>
                <ModulePhotoVideo displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} modulePhotoVideoActive={modulePhotoVideoActive} setModulePhotoVideoActive={setModulePhotoVideoActive} eventId={eventId} photosVideosForm={modulesForm.photos_videos} setModulesForm={setModulesForm} />
                <ModuleChat displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleChatActive={moduleChatActive} setModuleChatActive={setModuleChatActive} eventId={eventId}/>
                <ModuleLivreDor displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleLivreDorActive={moduleLivreDorActive} setModuleLivreDorActive={setModuleLivreDorActive} eventId={eventId} livreDOrForm={modulesForm.livre_d_or} setModulesForm={setModulesForm}/>
                <ModuleFresque displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleFresqueActive={moduleFresqueActive} setModuleFresqueActive={setModuleFresqueActive} eventId={eventId} fresqueForm={modulesForm.fresque} setModulesForm={setModulesForm}/> 
                <ModuleFeuDArtifice displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} moduleFeuDArtificeActive={moduleFeuDArtificeActive} setModuleFeuDArtificeActive={setModuleFeuDArtificeActive} eventId={eventId}/>
                <ModulePlaylist displayMenuModule={displayMenuModule} setDisplayMenuModule={setDisplayMenuModule} modulePlaylistActive={modulePlaylistActive} setModulePlaylistActive={setModulePlaylistActive} eventId={eventId} playlistForm={modulesForm.playlist} setModulesForm={setModulesForm}/>
            </div>
        </>
    )
}
