export default function MediaCard() {
    return (
        <div className="media-card">
            <div className="container-img">
                <img src="/img/demo.png" />
            </div>
            <div>
                <div>
                    <span>De <span>Floriane</span></span>
                    <div>
                        <span></span>
                        <span>En attente</span>
                    </div>
                </div>
                <div>
                    <button><img src="/icons/check.svg" /></button>
                    <button><img src="/icons/cross.svg" /></button>
                </div>
            </div>
        </div>
    )
}