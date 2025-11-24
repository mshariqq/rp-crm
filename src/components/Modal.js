export function Modal(props){
    return (
        <>
        <button type="button" class="btn btn-primary mb-3" 
                    data-bs-toggle="modal" 
                    data-bs-target={`#`+props.id}>{props.btnName}</button>

        <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby={props.labelBy} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id={props.labelBy}>{props.heading}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {props.children}
                    </div>
                    
                    </div>
                </div>
            </div>
                    
                    
        </>
    );
}