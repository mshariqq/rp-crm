// import { Children } from "react";

export function FiltersCard({children}) {
    return (
        <div className="card border-0">
                <div className="card-body d-flex justify-content-end p-0 align-items-center gap-2">
                    {children}
                </div>
                <hr />
        </div>
    );
}