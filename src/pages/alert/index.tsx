import PageBanner from "../../components/common/PageBanner";
import PageContainer from "../../components/common/PageContainer";

export default function Alert() {
  return (
    <div className="container-alert">
      <div>
        <PageBanner
          imgSrc="/icons/gradient/alert-gradient.svg"
          title="Ecrire une annonce"
          desc="Annonces ratachées à l'évènement"
        />
        <PageContainer>
          <div className="page-alert">
            <div>
              <div>
                <img src="/prov/pp.png" />
                <input type="text" placeholder="Titre" />
              </div>
              <div>
                <select>
                  <option value="">Paragraphe</option>
                </select>
                <div className="modif-style-text">
                  <button style={{ fontWeight: "700" }}>B</button>
                  <button style={{ fontStyle: "italic" }}>I</button>
                  <button style={{ textDecorationLine: "underline" }}>U</button>
                  <button style={{ textDecorationLine: "line-through" }}>
                    S
                  </button>
                </div>
              </div>
            </div>
            <form action="">
              <textarea name="" placeholder="Message..."></textarea>
              <div>
                <span>Cancel</span>
                <button className="btn-send">
                  <img src="/icons/send-plane.svg" />
                </button>
              </div>
            </form>
          </div>
        </PageContainer>
      </div>
      <div className="aside-alert">
        <span>Mes annonces passés</span>
        <p>Liste des annonces passés</p>
        <div className="alert-message-container">
          <div className="alert-message">
            <div>
              <span>Message du XX/XX/XXXX : Date repoussée</span>
              <button>
                <img src="/icons/arrow-message.svg" />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ex nunc, auctor non metus non, condimentum sagittis
              mauris. Vestibulum sagittis molestie odio, ac accumsan nisi. Cras
              venenatis aliquet eros, quis finibus neque condimentum quis. Morbi
              tempus libero massa, fermentum finibus nisl condimentum id. Aenean
              ullamcorper metus varius magna feugiat, non lacinia nisi
              fermentum. In nec nibh ac diam interdum finibus vitae sit amet
              nibh. Ut sed ipsum vel lacus sodales consequat sit amet vel
              sapien. Praesent lacinia mauris eget diam elementum dignissim. In
              vehicula luctus mi, eu accumsan lacus aliquam scelerisque.
            </p>
          </div>
          <div className="alert-message">
            <div>
              <span>Message du XX/XX/XXXX : Date repoussée</span>
              <button>
                <img src="/icons/arrow-message.svg" />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ex nunc, auctor non metus non, condimentum sagittis
              mauris. Vestibulum sagittis molestie odio, ac accumsan nisi. Cras
              venenatis aliquet eros, quis finibus neque condimentum quis. Morbi
              tempus libero massa, fermentum finibus nisl condimentum id. Aenean
              ullamcorper metus varius magna feugiat, non lacinia nisi
              fermentum. In nec nibh ac diam interdum finibus vitae sit amet
              nibh. Ut sed ipsum vel lacus sodales consequat sit amet vel
              sapien. Praesent lacinia mauris eget diam elementum dignissim. In
              vehicula luctus mi, eu accumsan lacus aliquam scelerisque.
            </p>
          </div>
          <div className="alert-message">
            <div>
              <span>Message du XX/XX/XXXX : Date repoussée</span>
              <button>
                <img src="/icons/arrow-message.svg" />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ex nunc, auctor non metus non, condimentum sagittis
              mauris. Vestibulum sagittis molestie odio, ac accumsan nisi. Cras
              venenatis aliquet eros, quis finibus neque condimentum quis. Morbi
              tempus libero massa, fermentum finibus nisl condimentum id. Aenean
              ullamcorper metus varius magna feugiat, non lacinia nisi
              fermentum. In nec nibh ac diam interdum finibus vitae sit amet
              nibh. Ut sed ipsum vel lacus sodales consequat sit amet vel
              sapien. Praesent lacinia mauris eget diam elementum dignissim. In
              vehicula luctus mi, eu accumsan lacus aliquam scelerisque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
