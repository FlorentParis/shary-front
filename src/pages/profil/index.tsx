import { useEffect, useState } from "react";
import GridContainer from "../../components/common/GridContainer";
import PageBanner from "../../components/common/PageBanner";
import { setUpdateUser, updateUser } from "../../features/userConnectedSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import useUploadCloudinary from "../../hooks/useUploadCloudinary";
import UserInterface from "../../interfaces/UserInterface";

export default function Profil() {

    const dispatch = useAppDispatch();

    const [update, setUpdate] = useState<boolean>(false);

    const userConnected = useAppSelector((state) => state.userConnected);

    const formData = new FormData();
    formData.append("upload_preset", "modules");

    const uploadCloud = useUploadCloudinary();

    const [email, setEmail] = useState<string>('');
    const [emailConfirm, setEmailConfirm] = useState<string>('');

    const [profilInfo, setProfilInfo] = useState<UserInterface>({
        lastname: userConnected.lastName,
        firstname: userConnected.firstName,
        email: userConnected.mail,
        img: userConnected.img,
        password: '',
        passwordConfirm: ''
    });

    const [selectedImage, setSelectedImage] = useState<any>();

    useEffect(() => {
        setUpdate(true);
        if (typeof selectedImage != 'string'){
            formData.append("file", selectedImage);
            uploadCloud("image", formData)
            .then((res: any) => {
                let newObj = {...profilInfo};
                newObj["img"] = res.url;
                setProfilInfo(newObj);
            })
        }else {
            let newObj = {...profilInfo};
            newObj["img"] = selectedImage;
            setProfilInfo(newObj);
        }
    }, [selectedImage])

    const handleChange = ({target}: any) => {
        setUpdate(true);
        setProfilInfo((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = () => {
        if(profilInfo.password == profilInfo.passwordConfirm && email == emailConfirm) {
            dispatch(updateUser(profilInfo))
                .then(res => {
                    dispatch(setUpdateUser(res.payload))
                    setUpdate(false);
                    window.location.reload();
                })
        }
    };

    return (
        <>
            <PageBanner imgSrc="/icons/user.svg" title="Profil" desc="Consultez ou modifiez votre profil" />
            {update ? 
                <div className="button-save">
                    <div onClick={() => handleSubmit()}>
                        <img src="/icons/save.svg" />
                    </div>
                </div>
            : ''}
            <GridContainer>
                <div className="page-profil">
                    <div className="grid-card gc-4 gr-2 infos-perso">
                        <span>Informations personnelles</span>
                        <form>
                            <input onChange={handleChange} type="text" placeholder="Nom" name="lastname" value={profilInfo.lastname} />
                            <input onChange={handleChange} type="text" placeholder="Prénom" name="firstname" value={profilInfo.firstname} />
                            <div className="separator-ou">ou</div>
                            <input type="text" placeholder="Société" />
                            <div>
                                <label htmlFor="">Date de naissance</label>
                                <input type="date" />
                            </div>
                            <input type="tel" placeholder="Téléphone" />
                            <span>à propos de moi</span>
                            <textarea placeholder="Description personnalisée"></textarea>
                        </form>
                    </div>
                    <div className="grid-card gc-3 date-card">
                        <span>Photo de profil</span>
                        <form>
                            <div className="add-pp" style={{backgroundImage: `url('${profilInfo.img}')`}}>
                                <img src="/icons/download-black.svg" />
                                
                                <input type="file" onChange={(event) => {setSelectedImage(event.target.files![0])}} onClick={(event)=> {
                                    // @ts-ignore: Unreachable code error
                                    event.target.value = null
                                }} />
                            </div>
                            <p>Suggéré pour vous</p>
                            <div className="suggestion-pp">
                                <div>
                                    <img src="/img/suggestion-pp-1.jpg" onClick={(() => setSelectedImage(process.env.PUBLIC_URL + '/img/suggestion-pp-1.jpg'))} />
                                </div>
                                <div>
                                    <img src="/img/suggestion-pp-2.jpg" onClick={(() => setSelectedImage(process.env.PUBLIC_URL + '/img/suggestion-pp-2.jpg'))} />
                                </div>
                                <div>
                                    <img src="/img/suggestion-pp-3.jpg" onClick={(() => setSelectedImage(process.env.PUBLIC_URL + '/img/suggestion-pp-3.jpg'))} />
                                </div>
                                <div>
                                    <img src="/img/suggestion-pp-4.jpg" onClick={(() => setSelectedImage(process.env.PUBLIC_URL + '/img/suggestion-pp-4.jpg'))} />
                                </div>
                                <div>
                                    <img src="/img/suggestion-pp-5.jpg" onClick={(() => setSelectedImage(process.env.PUBLIC_URL + '/img/suggestion-pp-5.jpg'))} />
                                </div>
                                <div>
                                    <img src="/img/suggestion-pp-6.jpg" onClick={(() => setSelectedImage(process.env.PUBLIC_URL + '/img/suggestion-pp-6.jpg'))} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-3 contact-card">
                        <span>Personne(s) à contacter</span>
                        <form>
                            <p>Définissez les personnes à contacter en cas d'urgence.</p>
                            <div>
                                <label>contact n°1</label>
                                <input placeholder="Prénom" />
                                <input placeholder="Téléphone" />
                                <label>Contacter par</label>
                                <div className="options-select">
                                    <div>
                                        <input type="checkbox" />
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>contact n°2</label>
                                <input placeholder="Prénom" />
                                <input placeholder="Téléphone" />
                                <label>Contacter par</label>
                                <div className="options-select">
                                    <div>
                                        <input type="checkbox" />
                                        <label>Appel</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <label>SMS</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid-card gc-4 change-mail-card">
                        <span>Changer d’adresse mail</span>
                        <form>
                            <p>Adresse mail actuelle</p>
                            <span className="actual-mail">{profilInfo.email}</span>
                            <p>Changer d’adresse mail</p>
                            <input type="mail" onChange={event => setEmail(event.target.value)} value={email} placeholder="Nouvelle adresse mail" />
                            <input type="mail" onChange={event => setEmailConfirm(event.target.value)} value={emailConfirm} placeholder="Confirmation nouvelle adresse mail" />
                        </form>
                    </div>
                    <div className="grid-card gc-3 change-pw-card">
                        <span>Changer de mot de passe</span>
                        <form>
                            <input onChange={handleChange} value={profilInfo.password} type="password" name="password" placeholder="Nouveau mot de passe" />
                            <input onChange={handleChange} value={profilInfo.passwordConfirm} type="password" name="passwordConfirm" placeholder="Confirmation nouveau mot de passe" />
                        </form>
                    </div>
                    <div className="grid-card gc-3 pref-card">
                        <span>Préférences</span>
                        <form>
                            <p>Qui peut voir mon profil ?</p>
                            <div className="options-select">
                                <div>
                                    <input type="checkbox" />
                                    <label>Tout le monde</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Personne</label>
                                </div>
                            </div>
                            <p>Recevoir des notifications par mail</p>
                            <div className="options-select">
                                <div>
                                    <input type="checkbox" />
                                    <label>Toujours</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Jamais</label>
                                </div>
                            </div>
                            <div className="option">
                                <input type="checkbox" />
                                <label>Seulement lorsque je ne suis pas sur Shary</label>
                            </div>
                            <p>Abonnement à notre newsletter</p>
                            <div className="options-select">
                                <div>
                                    <input type="checkbox" />
                                    <label>Oui</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Non</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </GridContainer>
        </>
    )
}