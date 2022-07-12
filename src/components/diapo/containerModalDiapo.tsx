import { useState } from "react";
import Diapo from "./Diapo";
import ModalConfirmationDiapo from "./modalConfirmationDiapo";

export default function ContainerModalDiapo(props: any) {

    const [difuseDiapo, setDifuseDiapo] = useState<boolean>(false);

    return (
        <div className="container-modal-diapo">
            <ModalConfirmationDiapo setModalDiapo={props.setModalDiapo} setDifuseDiapo={setDifuseDiapo} />
            {difuseDiapo ? <Diapo setModalDiapo={props.setModalDiapo} /> : ''}
        </div>
    )
}