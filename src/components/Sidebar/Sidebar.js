import { SidebarLink } from "./SidebarLink";

export function Sidebar() {
    return (
        <>
        <div className="d-flex flex-column bg-dark text-white flex-shrink-0 p-3 sidebar" > 
          <h2>RP CRM</h2>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto"> 
              <li className="nav-item"> 
              <SidebarLink link='/' name='Dashboard' icon='bi bi-house-heart' />
              </li> 
               <li className="nav-item"> 
              <SidebarLink link='/leads' name='Leads' icon='bi bi-people' />
              </li> 
               <li className="nav-item"> 
              <SidebarLink link='/invoices' name='Invoices' icon='bi bi-wallet' />
              </li> 
               <li className="nav-item"> 
              <SidebarLink link='/settings' name='Settings' icon='bi bi-gear' />
              </li> 
              
          </ul>
        </div>
        </>
    );
}