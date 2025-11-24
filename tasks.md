# ✅ CRM PROJECT TASK LIST

---

## **1. LEADS MODULE**

### **1.1 Leads List Page**
- [x] Implement Leads List Page `/leads`
- [x] Add Header with title and "Add New Lead" button
- [x] Build Filter Card with:
  - [x] Lead Source dropdown
  - [x] Lead Status dropdown
  - [x] Assigned To dropdown (dynamic)
  - [x] Date Range picker
  - [x] Search box
  - [x] Apply / Reset buttons
- [ ] Build Leads DataTable with columns:
  - [x] Checkbox
  - [x] Lead Name (clickable)
  - [x] Email, Mobile
  - [x] Source, Status, Assigned To, Created On
  - [x] Actions (View/Edit/Delete)
- [ ] Implement Bulk Actions (Assign, Change Status, Delete)
- [ ] Implement Pagination

---

### **1.2 Add Lead Page**
- [ ] Implement Add Lead Page `/leads/create`
- [ ] Add Lead Information fields (Full Name, Email, Mobile, Secondary Phone, Company, Job Title)
- [ ] Add Lead Source dropdown
- [ ] Add Lead Status dropdown
- [ ] Add Location fields (Country, State, City)
- [ ] Add Additional Information (Notes, Tags)
- [ ] Add Assignment dropdown (Assign To)
- [ ] Add Buttons (Save, Cancel)

---

### **1.3 Lead Detail Page**
- [ ] Implement Lead Detail Page `/leads/{id}`
- [ ] Create Top Summary Card with Lead Name, Status, Source, Assigned To, Contact Info, Created By/On
- [ ] Create Tabs:
  - [ ] Overview Tab (Lead details, Tags, Notes, Quick Actions)
  - [ ] Notes Tab (Add Note, Note List with edit/delete)
  - [ ] Activities Tab (Call, Email, Meeting, Task, Follow-up, Table)
  - [ ] Files Tab (Upload, Table with Download/Delete)
  - [ ] Timeline Tab (chronological feed)

---

## **2. CONTACTS MODULE**

### **2.1 Contacts List Page**
- [ ] Implement Contacts List Page
- [ ] Add Filter Card:
  - [ ] Contact Source
  - [ ] Contact Owner
  - [ ] Date Range picker
  - [ ] Search
- [ ] Build Contacts Table (Contact Name, Email, Phone, Company, Owner, Source, Created On, Actions)

### **2.2 Contact Detail Page**
- [ ] Implement Contact Detail Page
- [ ] Add Tabs:
  - [ ] Overview
  - [ ] Notes
  - [ ] Activities
  - [ ] Files
  - [ ] Deals
  - [ ] Timeline

---

## **3. DEALS MODULE**

### **3.1 Deals Pipeline (Kanban)**
- [ ] Implement `/deals/pipeline` page
- [ ] Add Default Stages (Prospect, Qualification, Proposal, Negotiation, Closed Won/Lost)
- [ ] Build Pipeline Board with:
  - [ ] Stage Name
  - [ ] Total Amount
  - [ ] Deal Cards (Title, Contact, Value, Expected Close Date, Assigned User, Status bar)
  - [ ] Drag & drop stage update
- [ ] Top Actions: Add Deal, Filters (Owner, Value, Stage, Date)

### **3.2 Add Deal Page**
- [ ] Implement Add Deal Page
- [ ] Add Deal Info fields (Title, Contact, Value, Expected Close, Stage, Probability, Source, Description)
- [ ] Add Assignment field (Assigned To)
- [ ] Add Buttons (Save, Cancel)

### **3.3 Deal Detail Page**
- [ ] Implement Deal Detail Page
- [ ] Add Tabs: Overview, Notes, Activities, Files, Timeline
- [ ] Overview fields (Deal Value, Stage, Expected Close, Source, Contact Info, Owner, Probability, Notes)

---

## **4. TASKS MODULE**

### **4.1 Tasks List Page**
- [ ] Implement Tasks List Page
- [ ] Add Filters (Due Date, Assigned To, Priority, Status, Related To, Search)
- [ ] Build Table (Checkbox, Title, Due Date, Priority, Status, Related To, Assigned To, Actions)

### **4.2 Add Task Page**
- [ ] Implement Add Task Page
- [ ] Add Fields (Title, Description, Due Date, Reminder, Priority, Status)
- [ ] Add Related To selection (Lead, Contact, Deal)
- [ ] Add Assignment field (Assign To)

---

## **5. USERS & ROLES MODULE**

### **5.1 Users List Page**
- [ ] Implement Users List Page
- [ ] Add Columns (Name, Email, Role, Status, Last Login, Actions)
- [ ] Add Filters (Role, Status, Search)

### **5.2 Roles & Permissions**
- [ ] Implement predefined roles (Admin, Manager, Salesperson, Viewer)
- [ ] Admin: create custom roles and assign permissions for Leads, Contacts, Deals, Tasks, Files, Users

---

## **6. SETTINGS MODULE**

### **6.1 System Settings**
- [ ] Implement System Settings Page
- [ ] Add Company Information fields
- [ ] Add Branding options (logo, colors)
- [ ] Add Currency selection
- [ ] Implement Pipeline customization (add/remove stages)
- [ ] Lead Sources CRUD
- [ ] Tags management

---

## **7. DASHBOARD MODULE**

### **7.1 Main Dashboard**
- [ ] Implement Dashboard Page
- [ ] Add Widgets:
  - [ ] New Leads (last 30 days)
  - [ ] Sales Funnel
  - [ ] Deals by Stage
  - [ ] Deals by Owner
  - [ ] Tasks Due Today
  - [ ] Revenue Forecast
- [ ] Add Filters (Date Range, User, Pipeline)
