export default function ModalAddGuest(props: any) {
    return (
        <div className="modal-add-guest">
            <div>
                <span>Ajouter un nouveau participants</span>
                <p>Renseigner le mail de l'invité</p>
                <input type="mail" placeholder="exemple@shary.com" value={props.mailGuest} onChange={props.change}/>
                <button onClick={() => props.submit()}>Envoyer l'invitation</button>
                <img onClick={() => props.close(false)} src="/icons/cross-black.svg" />
            </div>
        </div>
    )
}