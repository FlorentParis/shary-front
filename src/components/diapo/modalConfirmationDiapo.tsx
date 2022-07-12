export default function ModalConfirmationDiapo(props: any) {
    return (
        <div className="modal-confirmation-diapo">
            <p>Etes-vous sur de vouloir lancer la diapositive ?</p>
            <div>
                <button onClick={() => props.setModalDiapo(false)}>Non</button>
                <button onClick={() => props.setDifuseDiapo(true)}>Oui</button>
            </div>
            <img onClick={() => props.setModalDiapo(false)} src="/icons/cross-black.svg" />
        </div>
    )
}