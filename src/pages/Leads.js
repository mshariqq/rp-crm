import { Helmet } from "react-helmet";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import { useEffect } from "react";

export function Leads() {
     const {user, theme, meta, setMeta} = useContext(AppContext);
        useEffect(() => {
            setMeta({...meta, title: 'Leads'});
        }, []);
    return (
        <div className="p-3">
            <Helmet>
                <title>Leads | RP CRM</title>
            </Helmet>

            <div className="card border-0">
                <div className="card-body d-flex justify-content-between p-0">
                    <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Lead
                    </button>
                    <div className="form-group">
                        <input className="form-control" placeholder="Search Leads" />
                    </div>
                </div>
            </div>

            

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Lead</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="form-group mb-3">
                            <label for="">Name</label>
                            <input type="text" placeholder="Jhon Doe" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="">Email</label>
                            <input type="email" placeholder="john@example.com" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="">Mobile</label>
                            <input type="text" placeholder="+91 9874563210" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label for="">Country</label>
                            <select className="form-select">
                                <option>India</option>
                                <option>USA</option>
                                <option>Russia</option>
                                <option>Iran</option>
                                <option>UAE</option>
                                <option>China</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

            <table class="table table-striped table-hover">
                <thead className="bg-light">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SADF87</td>
                        <td>Sharukh Khan</td>
                        <td>Sharukh@bollywood.com</td>
                        <td>9856321047</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>MMFM87</td>
                        <td>Sallu Bhai</td>
                        <td>sallub@bollywood.com</td>
                        <td>9856421047</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>OKSHF7</td>
                        <td>Emraan</td>
                        <td>emraan@bollywood.com</td>
                        <td>8886321047</td>
                        <td>India</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}