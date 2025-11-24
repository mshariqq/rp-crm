export function Input(props) {
    return (
        <div className="form-group">
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <input 
            id={props.id}
            name={props.name}
            className={
                `${props.type === 'checkbox' || props.type === 'radio' ? 'form-check-input' : 'form-control'} ${props.className}`
            }
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            checked={props.type ==='checkbox' || props.type==='radio' ? props.checked : undefined}
            placeholder={props.placeholder} />
        </div>
        
    );
}