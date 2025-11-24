import { useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";
import { Helmet } from "react-helmet";
import { FiltersCard } from "../components/Filters/FiltersCard";
import { Input } from "../components/Form/Input";
import { Dropdown } from "../components/Form/Dropdown";


export function Settings(){
    
    const {meta,setMeta,  user, theme} = useContext(AppContext);
    useEffect(() => {
        setMeta({title : 'System Settings'});
    }, []);

    return (
        <div className="p-3">
        <Helmet>
            <title>Settings | RP CRM</title>
        </Helmet>

        <FiltersCard className=''>
            <button className="btn">Cancel</button>
            <button className="btn btn-success">Save Settings</button>
        </FiltersCard>

        <div className="row">
            <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-header">
                        <b>Company Information</b>
                    </div>
                    <div className="card-body">
                        <Input className="mb-3" type="text" placeholder="" label="Company Name" />
                        <Input className='mb-3' type="email" placeholder="" label="Company Email" />
                        <Input className="mb-3" type="text" placeholder="" label="Company Phone number" />
                        <Input className="mb-3" type="text" placeholder="" label="Company Address" />
                        <Input className="mb-3" type="text" placeholder="" label="Company Pincode" />
                    </div>
                </div>
            </div>
             <div className="col-md-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-header">
                        <b>General Options</b>
                    </div>
                    <div className="card-body">
                        <Input className="mb-3" type="file" placeholder="" label="Logo" />
                        <Dropdown className='mb-3' label="Currency">
                            <option>USD</option>
                        </Dropdown>
                        <Dropdown className='mb-3' label="Country">
                            <option>India</option>
                        </Dropdown>
                        
                    </div>
                </div>
            </div>
        </div>




        </div>
    );
}