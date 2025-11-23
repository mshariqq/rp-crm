import { Helmet } from "react-helmet";
import { AppContext } from "../AppProvider";
import { useContext, useEffect } from "react";
import { StatsWidget } from "../components/Widgets/StatsCard";


export function Dashboard() {
    const {user, theme, meta, setMeta} = useContext(AppContext);
    useEffect(() => {
        setMeta({...meta, title: 'Dashboard'});
    }, []);
    
    return (
        <div className="p-3">
            <Helmet>
                <title>Dashboard | RP CRM</title>
            </Helmet>
            <div className="row">
                <div className="col-md-3">
                     <StatsWidget title='Leads' value='100' color='primary' />
                </div>
                <div className="col-md-3">
                     <StatsWidget title='Invoices' value='100' color='secondary' />
                </div>
                <div className="col-md-3">
                     <StatsWidget title='Sales' value='100' color='info' />
                </div>
                <div className="col-md-3">
                     <StatsWidget title='Payments' value='100' color='success' />
                </div>
            </div>
        </div>
    );
}