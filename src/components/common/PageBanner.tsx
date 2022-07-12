import { PageBannerInterface } from "../../interfaces/PageBannerInterface";


export default function PageBanner({imgSrc, title, desc}: PageBannerInterface) {
    return (
        <div className="page-banner">
            <img src={imgSrc} alt="icon banner" />
            <div>
                <span>{title}</span>
                <p>{desc}</p>
            </div>
        </div>
    )
}