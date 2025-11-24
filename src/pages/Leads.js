import { Helmet } from "react-helmet";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { FiltersCard } from "../components/Filters/FiltersCard";
import { Modal } from "../components/Modal";
import { Dropdown } from "../components/Form/Dropdown";
import { Input } from "../components/Form/Input";
import { DateRange } from "../components/Form/DateRange";

export function Leads() {
     const {user, theme, meta, setMeta} = useContext(AppContext);
        useEffect(() => {
            setMeta({...meta, title: 'Leads'});
        }, []);

    
    const [filters, setFilters] = useState({
        leadSource : '',
        leadStatus : '',
        assignedTo : '',
        checkAll : 0,
        showBar : true
    });

    const [bulkActions, setBulkActions] = useState({
        delete : '',
        export : '',
        checkAll : 0,
        showBar : false
    });

    const getDropdownVal = (e) => {
        const {name, value} = e.target
        setFilters(prev => ({
            ...prev, 
            [name]: value
        }));
    }

    const applyFilters = () => {
        console.log(filters);
    }

    const checkAll = (e) => {
        if(e.target.checked){
            setFilters({...filters, checkAll : 1, showBar: false});
            setBulkActions({...bulkActions, checkAll : 1, showBar: true});
        }else {
            setFilters({...filters, checkAll : 0, showBar : true});
            setBulkActions({...bulkActions, checkAll : 1, showBar: false});
        }
    }

    return (
        <div className="p-3">
            <Helmet>
                <title>Leads | RP CRM</title>
            </Helmet>

            <Modal id='addNewLeadModal' heading="Add New Lead" btnName='Add New Lead'>
                <h1>working bhai</h1>
            </Modal>

            <FiltersCard className={bulkActions.showBar === true ? '' : 'd-none'}>
                    <Dropdown onChange={getDropdownVal} name="leadStatus" id="leadStatus">
                            <option>Change Status</option>
                            <option value='new'>New</option>
                            <option value='contacted'>Contacted</option>
                            <option value='qualified'>Qualified</option>
                    </Dropdown>
                    <button className="btn btn-danger">Delete Items</button>
            </FiltersCard>

            <FiltersCard className={filters.showBar === true ? '' : 'd-none'}>
                    <Input name="Search" placeholder="Search Leads" type='text' />
                    <DateRange nameStart='dateFrom' nameEnd='dateTo' />

                    <Dropdown onChange={getDropdownVal} value={filters.leadSource} name="leadSource" id="leadSources" >
                            <option>Lead Sources</option>
                            <option value='fb'>Facebook Ads</option>
                            <option value='ga'>Google Ads</option>
                            <option value='la'>Linkedin Ads</option>
                    </Dropdown>
                    <Dropdown onChange={getDropdownVal} name="leadStatus" id="leadStatus">
                            <option>Lead Status</option>
                            <option value='new'>New</option>
                            <option value='contacted'>Contacted</option>
                            <option value='qualified'>Qualified</option>
                    </Dropdown>
                    <Dropdown onChange={getDropdownVal} name="assignedTo" id="assignedTo">
                            <option>Assigned To</option>
                            <option value='jd'>John Doe</option>
                            <option value='sam'>Sam Doe</option>
                            <option value='elli'>Elli</option>
                    </Dropdown>
                     <button onClick={applyFilters} className="btn btn-secondary">Apply Filters</button>
            </FiltersCard>

            <table className="table table-striped table-hover">
                <thead className="bg-light">
                    <tr>
                        <th>
                            <Input onChange={checkAll} name="check" type='checkbox' />
                        </th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Created On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Input name="check" checked={filters.checkAll} type='checkbox' /></td>
                        <td>SADF87</td>
                        <td>Sharukh Khan</td>
                        <td>Sharukh@bollywood.com</td>
                        <td>9856321047</td>
                        <td>
                            New
                        </td>
                        <td>
                            12 Nov 2025
                        </td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-sm btn-secondary">Edit</button>
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td><Input name="check" checked={filters.checkAll} type='checkbox' /></td>
                        <td>MMFM87</td>
                        <td>Sallu Bhai</td>
                        <td>sallub@bollywood.com</td>
                        <td>9856421047</td>
                         <td>
                            New
                        </td>
                        <td>
                            12 Nov 2025
                        </td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-sm btn-secondary">Edit</button>
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td><Input name="check" checked={filters.checkAll} type='checkbox' /></td>
                        <td>OKSHF7</td>
                        <td>Emraan</td>
                        <td>emraan@bollywood.com</td>
                        <td>8886321047</td>
                         <td>
                            New
                        </td>
                        <td>
                            12 Nov 2025
                        </td>
                        <td className="d-flex gap-2">
                            <button className="btn btn-sm btn-secondary">Edit</button>
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}