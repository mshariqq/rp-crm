import { Helmet } from "react-helmet";
import { AppContext } from "../AppProvider";
import { useContext } from "react";
import { useEffect } from "react";

export function Invoices() {
    const {user, theme, meta, setMeta} = useContext(AppContext);
        useEffect(() => {
            setMeta({...meta, title: 'Invoices'});
        }, []);

    return (
        <div className="p-3">
            <Helmet>
                <title>Invoices | RP CRM</title>
            </Helmet>
             <table class="table table-striped table-hover">
                <thead className="bg-light">
                    <tr>
                        <th>INV</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Client</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>INV017</td>
                        <td>12 Nov 2025</td>
                        <td>10,000</td>
                        <td className="text-success">Paid</td>
                        <td>Sharukh</td>
                    </tr>
                    <tr>
                        <td>INV018</td>
                        <td>21 Nov 2025</td>
                        <td>8,000</td>
                        <td className="text-danger">Pending</td>
                        <td>Sharukh</td>
                    </tr>
                    <tr>
                        <td>INV019</td>
                        <td>15 Nov 2025</td>
                        <td>19,000</td>
                        <td className="text-primary">Partial</td>
                        <td>Emraan</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}