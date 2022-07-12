import { Link } from "react-router-dom";
import PageContainer from "../../components/common/PageContainer";

export default function Error404() {
    return (
        <PageContainer>
            <div className="page-404">
                <img src="/gif/Error404.gif" />
                <span>Oups ! Cette page est introuvable :(</span>
                <Link to="/" >Retour à l'accueil</Link>
            </div>
        </PageContainer>
    )
}