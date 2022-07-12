import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../features/userConnectedSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import UserInterface from "../../interfaces/UserInterface";

export default function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState<UserInterface>({
        email: '',
        password: '',
        lastname: '',
        firstname: '',
        img: '',
        passwordConfirm: ''
    })

    const handleChange = ({target}: any) => {
        setFormInput((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(signupUser(formInput))
        .then(res => navigate('/'));
    };
    
    return (
        <>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="lastname" placeholder='Nom*' required/>
                <input onChange={handleChange} type="text" name="firstname" placeholder='Prénom*' required/>
                <input onChange={handleChange} type="mail" name="email" placeholder='Adresse mail*' required/>
                <input onChange={handleChange} type="phone" name="" placeholder='Téléphone' />
                <input onChange={handleChange} type="password" name="password" placeholder='Mot de passe*' required/>
                <input onChange={handleChange} type="password" name="passwordConfirm" placeholder='Confirmation du mot de passe*' required/>
                <div>
                    <input onChange={handleChange} type="checkbox" name="newsletter" />
                    <p>En cochant cette case, j’accepte de recevoir par mail les dernières nouveautés de Shary.</p>
                </div>
                <button>Inscription</button>
            </form>
            <p>Vous avez déjà un compte ? <Link to="/auth/login">Connectez-vous</Link></p>
        </>
    )
}