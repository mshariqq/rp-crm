export function Input(props) {
    return (
        <div className="form-group">
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <input 
            id={props.id}
            name={props.name}
            className={`form-control `+props.className}
            value={props.value}
            placeholder={props.placeholder} />
        </div>
        
    );
}