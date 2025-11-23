export function StatsWidget(props) {
    return (
        <>
        <div className={`card text-white h-100 bg-${props.color}`}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{props.title}</h5>
                <h2 className="card-text">{props.value}</h2>
            </div>
        </div>
        </>
    );
}