export function Dropdown(props) {
    return (
        <div className="form-group">
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <select 
            name={props.name} 
            id={props.id} 
            value={props.value} 
            onChange={props.onChange}
            className={`form-select `+props.className}>
                {props.children}
            </select>
        </div>
        
    );
}