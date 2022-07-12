import { Link } from "react-router-dom";
import PageContainer from "../../components/common/PageContainer";

export default function Error() {
    return (
        <PageContainer>
            <div className="page-404">
                <img src="/gif/Error.gif" />
                <span>Oups ! Vous n'avez pas les droits administrateurs :(</span>
                <Link to="/" >Retour à l'accueil</Link>
            </div>
        </PageContainer>
    )
}