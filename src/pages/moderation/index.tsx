import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";
import MediaCard from "./MediaCard";

export default function Moderation() {
  return (
    <>
      <PageBanner
        imgSrc="/icons/gradient/moderation-gradient.svg"
        title="Moderation"
        desc="Moderez les flux de votre évènement"
      />
      <PageContainer>
        <div className="page-moderation">
          <div className="bar-filter">
            <div>
              <div>
                <span>Liste d'attente</span>
                <span className="underline"></span>
              </div>
              <div>
                <span>Blacklist</span>
                <span className="underline"></span>
              </div>
              <input type="text" name="" id="" placeholder="Recherche" />
            </div>
            <div>
              <div>
                <span>Toutes</span>
                <span className="underline"></span>
              </div>
              <div>
                <span>Approuvés</span>
                <span className="underline"></span>
              </div>
              <div>
                <span>Refusés</span>
                <span className="underline"></span>
              </div>
            </div>
          </div>
          <div className="grid-moderation-cart">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
