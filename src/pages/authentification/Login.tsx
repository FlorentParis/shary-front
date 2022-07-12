import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, setLoggedUser } from '../../features/userConnectedSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import UserInterface from '../../interfaces/UserInterface';

export default function Login() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState<UserInterface>({
        email: '',
        password: '',
        passwordConfirm: '',
        img: '',
        lastname: '',
        firstname: ''
    })

    const handleChange = ({target}: any) => {
        setFormInput((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(loginUser(formInput))
        .then(res => {
            dispatch(setLoggedUser(res.payload))
            navigate('/')
        })
    };

    return (
        <>
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="mail" name="email" placeholder='Adresse mail*' required/>
                <input onChange={handleChange} type="password" name="password" placeholder='Mot de passe*' required/>
                <Link to="">Mot de passe oublié ?</Link>
                <button>Connexion</button>
            </form>
            <p>Pas encore de compte ? <Link to="/auth/register">Inscrivez-vous</Link></p>
        </>
    )
}