import { useAppSelector } from "../../hooks/reduxHooks";

interface HideIfLoggedPropsInterface {
    children: JSX.Element
}

export default function HideIfNotLogged({children}: HideIfLoggedPropsInterface) {

    const token = useAppSelector((state) => state.userConnected.token);

    if (!token) {
        return <></>
    }
    return children
}