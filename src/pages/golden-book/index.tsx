import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function GoldenBook() {

    const userConnected = useAppSelector((state) => state.userConnected);

    return (
        <>
            <PageBanner imgSrc="/icons/gradient/golden-book-gradient.svg" title="Module livre d’or" desc="Écrivez un message personnalisé intemporel" />
            <PageContainer>
                <div className="page-golden-book">
                    <div>
                        <div className="top-bar">
                            <img src="/prov/pp.png" />
                            <span className="name-user">
                                {userConnected.firstName + " " + userConnected.lastName}
                            </span>
                            <select name="" id="">
                                <option value="">Times New Roman</option>
                                <option value="">Sans serif</option>
                                <option value="">Montserrat</option>
                            </select>
                            <div className="modif-style-text">
                                <button style={{fontWeight: '700'}}>B</button>
                                <button style={{fontStyle: 'italic'}}>I</button>
                                <button style={{textDecorationLine: 'underline'}}>U</button>
                                <button style={{textDecorationLine: 'line-through'}}>S</button>
                            </div>
                            <div className="modif-color-text">
                                <span style={{backgroundColor: "red"}}></span>
                                <span style={{backgroundColor: "green"}}></span>
                                <span style={{backgroundColor: "blue"}}></span>
                                <span style={{backgroundColor: "pink"}}></span>
                            </div>
                        </div>
                        <textarea name="" placeholder="Ecrivez ici..."></textarea>
                        <div className="bot-bar">
                            <span>Cancel</span>
                            <button>
                                <img src="/icons/send-plane.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </>
    )
}