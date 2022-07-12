import { ReactElement } from "react";

export default function ButtonSave(props: any) {
    return (
        <div className="button-save">
            <div onClick={() => props.send()}>
                <img src="/icons/save.svg" />
            </div>
        </div>
    )
}