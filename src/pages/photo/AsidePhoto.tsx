import {useState} from "react";
import useGetUserById from "../../hooks/useGetUserById";

export default function AsidePhoto(props:any) {

    const [authorFirstname, setAuthorFirstname] = useState<string>("")

    const download = (e:any) => {
        e.preventDefault();
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
    };
    const findUser = useGetUserById();   

    findUser(props.file.id_author).then(res => {
        setAuthorFirstname(res.firstname)
    })

    return (
        <div className="aside-photo">
            <div className="container-img">
                <span></span>
                <img src={props.file.content} />
            </div>
            <span>Photo de {authorFirstname}</span>
            {props.file.date === "à l'instant" ?
            <span>Postée {props.file.date}</span>
            :
            <span>Postée le {props.file.date}</span>
            }
            <a href={props.file.content} download onClick={e => download(e)}>Télécharger</a>
            {/* <button>Télécharger</button> */}
            <span>Signaler cette photo</span>
            <img className="close" onClick={() => props.setDisplayAside(false)} src="/icons/cross.svg" />
        </div>
    )
}