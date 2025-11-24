# ✔️ CRM SYSTEM — FULL PRODUCT SPECIFICATION  
(Pages, Data Flow, Fields, UI Components, User Actions)

---

# 1. LEADS MODULE

## 1.1 Leads List Page  
**Page:** `/leads`

---

### **A. Header**
- **Page title:** `Leads`
- **Action button:** `Add New Lead` (opens Create Lead Form)

---

### **B. Filter Card (Above DataTable)**  
Each filter has real options (no “etc.”).

| Filter       | Input Type | Options                                                                 |
|--------------|------------|-------------------------------------------------------------------------|
| Lead Source  | Dropdown   | Facebook Ads, Google Ads, LinkedIn, Website Form, Referral, Cold Call, Event, Walk-in |
| Lead Status  | Dropdown   | New, Attempted Contact, Contacted, Qualified, Unqualified               |
| Assigned To  | Dropdown   | List of CRM users (dynamic)                                             |
| Date Range   | Datepicker | Start Date, End Date                                                     |
| Search       | Textbox    | Searches name / email / phone                                           |

**Buttons:**
- Apply Filters (reload table)  
- Reset Filters  

---

### **C. Leads DataTable**

| Column      | Type                 | Description                     |
|-------------|----------------------|---------------------------------|
| Checkbox    | Boolean              | Multi-select for bulk actions   |
| Lead Name   | Text + clickable     | Opens lead details              |
| Email       | Text                 | —                               |
| Mobile      | Text                 | Format + country code           |
| Source      | Badge                | Facebook Ads, Google Ads…       |
| Status      | Badge                | Shows current status            |
| Assigned To | Avatar + name        | —                               |
| Created On  | DateTime             | —                               |
| Actions     | Icons                | View, Edit, Delete              |

---

### **D. Bulk Actions (Above Table)**
- Assign To User  
- Change Status  
- Delete Selected  

---

### **E. Pagination**
- Page size selector: **10 / 25 / 50 / 100**  
- Page numbers

---
## **1.2 Add Lead Page**  
**Page:** `/leads/create`

---

### **Fields**  
(Organized into clear sections)

---

## **A. Lead Information**

| Field            | Type   | Required | Notes                 |
|------------------|--------|----------|------------------------|
| Full Name        | Text   | Yes      | —                      |
| Email            | Email  | Yes      | —                      |
| Mobile Number    | Phone  | Yes      | With country code      |
| Secondary Phone  | Phone  | No       | —                      |
| Company Name     | Text   | No       | —                      |
| Job Title        | Text   | No       | —                      |

---

## **B. Lead Source**

| Field       | Type     | Options                                                                 |
|-------------|----------|-------------------------------------------------------------------------|
| Lead Source | Dropdown | Facebook Ads, Google Ads, LinkedIn, Website Form, Referral, Cold Call, Event, Walk-in |

---

## **C. Lead Status**

| Field       | Type     | Options |
|-------------|----------|---------|
| Lead Status | Dropdown | New, Attempted Contact, Contacted, Qualified, Unqualified |

---

## **D. Location**

| Field   | Type                          |
|---------|--------------------------------|
| Country | Dropdown                       |
| State   | Dropdown (depends on Country)  |
| City    | Textbox                        |

---

## **E. Additional Information**

| Field | Type          |
|-------|---------------|
| Notes | Rich text     |
| Tags  | Multi-select chips |

---

## **F. Assignment**

| Field     | Type     | Options          |
|-----------|----------|------------------|
| Assign To | Dropdown | List of CRM users |

---

### **Buttons**
- **Save Lead**  
- **Cancel** (returns to Lead List)

---

# **1.3 Lead Detail Page**  
**Page:** `/leads/{id}`

---

## **Top Summary Card**

- **Lead Name**  
- **Status** (changeable dropdown)  
- **Source**  
- **Assigned To** (changeable dropdown)  
- **Contact Info:** email, mobile, company  
- **Created By / Created On**

---

# **Tabs**

---

## **1. Overview Tab**
- Lead details (read-only)  
- Tags  
- Notes (latest visible)  

### **Quick Actions**
- Convert to Contact  
- Add Task  
- Add Note  
- Add Follow-up  

---

## **2. Notes Tab**

### **Fields**
- Add New Note (Rich text)

### **Note List Includes**
- Author  
- Date  
- Note content  
- Edit / Delete per note  

---

## **3. Activities Tab**

### **Activity Types**
- Call  
- Email  
- Meeting  
- Task  
- Follow-up  

### **Activity Table Columns**
- Type Icon  
- Description  
- Date & Time  
- User  
- Status  

---

## **4. Files Tab**

### **Upload**
- Supports: **pdf, docx, xlsx, png, jpg**

### **File Table Columns**
- File name  
- Uploaded by  
- Uploaded on  
- Download  
- Delete  

---

## **5. Timeline Tab**

### **Chronological Feed Includes**
- Lead created  
- Status changes  
- Assignment changes  
- Notes added  
- Activities completed  

# **2. CONTACTS MODULE**

Contacts are created when a lead is **converted**.

---

## **2.1 Contacts List Page**

*(Same layout and UI structure as Leads List Page)*

---

### **Filter Card**

| Filter         | Options                                                                 |
|----------------|--------------------------------------------------------------------------|
| Contact Source | Facebook Ads, Google Ads, LinkedIn, Website Form, Referral, Cold Call, Event, Walk-in |
| Contact Owner  | List of CRM users                                                        |
| Date Range     | Date picker                                                              |
| Search         | Name / email / mobile                                                    |

---

### **Contacts Table Columns**
- Contact Name  
- Email  
- Phone  
- Company  
- Owner  
- Source  
- Created On  
- Actions  

---

## **2.2 Contact Detail Page**

### **Tabs**
- **Overview**  
- **Notes**  
- **Activities**  
- **Files**  
- **Deals** (contacts may have deals)  
- **Timeline**  

# **3. DEALS MODULE**

Pipeline-based sales managed in **Kanban view** and **List view**.

---

## **3.1 Deals Pipeline (Kanban) Page**
**Page:** `/deals/pipeline`

### **Default Stages**
- Prospect  
- Qualification  
- Proposal  
- Negotiation  
- Closed Won  
- Closed Lost  

---

### **Component: Pipeline Board**

Each stage column displays:

- **Stage Name**  
- **Total Amount** (sum of deal values in that stage)  
- **Deal Cards**

---

### **Deal Card Contents**
- Deal Title  
- Contact Name  
- Value  
- Expected Close Date  
- Assigned User  
- Status color bar  

**Drag & drop** moves a deal to another stage (updates backend stage).

---

### **Top Actions**
- Add Deal  
- Filters:  
  - Owner  
  - Value range  
  - Stage  
  - Date  

---

## **3.2 Add Deal Page**

### **Fields**

#### **Deal Info**
- Deal Title  
- Contact (dropdown)  
- Value (currency)  
- Expected Close Date  
- Stage (dropdown)  
- Probability %  
- Deal Source: Ads, Referral, Website, Cold Call  
- Description (rich text)

#### **Assignment**
- Assigned To (dropdown)

---

### **Buttons**
- **Save Deal**  
- **Cancel**

---

## **3.3 Deal Detail Page**

### **Tabs**
- Overview  
- Notes  
- Activities  
- Files  
- Timeline  

---

### **Overview Fields**
- Deal value  
- Stage  
- Expected close date  
- Source  
- Contact info  
- Owner  
- Probability %  
- Notes  
# **4. TASKS MODULE**

Tasks can be linked to **Leads, Contacts, or Deals** and assigned to CRM users.

---

## **4.1 Tasks List Page**

### **Filters**
- Due Date Range  
- Assigned To  
- Priority: **Low, Medium, High**  
- Status: **Pending, In Progress, Completed, Overdue**  
- Related To: **Lead / Contact / Deal**  
- Search  

---

### **Columns**
- Checkbox  
- Task Title  
- Due Date  
- Priority  
- Status  
- Related Lead / Contact / Deal  
- Assigned To  
- Actions  

---

## **4.2 Add Task Page**

### **Fields**
- Task Title  
- Description (rich text)  
- Due Date  
- Reminder (optional time)  
- Priority: **Low, Medium, High**  
- Status: **Pending, In Progress, Completed**  

### **Related To**
- Lead  
- Contact  
- Deal  

### **Assignment**
- Assign To (user)  
# **5. USERS & ROLES MODULE**

---

## **5.1 Users List Page**

### **Columns**
- Name  
- Email  
- Role  
- Status (Active / Inactive)  
- Last Login  
- Actions  

---

### **Filters**
- Role  
- Status  
- Search  

---

## **5.2 Roles & Permissions**

### **Predefined Roles**
- **Admin** — full access  
- **Manager** — view all, manage team  
- **Salesperson** — access only assigned items  
- **Viewer** — read-only  

---

### **Admin Can Create Custom Roles With Permissions**

#### **Leads**
- Create  
- View Assigned  
- View All  
- Edit  
- Delete  

#### **Contacts**
- Same permissions as Leads  

#### **Deals**
- Same permissions as Leads  

#### **Tasks**
- Create  
- View  
- Edit  
- Delete  

#### **Files**
- Upload  
- Delete  

#### **Users**
- Manage  
- View  

# **6. SETTINGS MODULE**

---

## **6.1 System Settings**

- Company Information  
- Branding (logo + colors)  
- Currency  
- Pipeline customization (add / remove stages)  
- Lead Sources (CRUD)  
- Tags management  

---

# **7. DASHBOARD MODULE**

## **7.1 Main Dashboard**

### **Widgets**
- New Leads (last 30 days)  
- Sales Funnel (bar visualization)  
- Deals by Stage (pie chart)  
- Deals by Owner (bar chart)  
- Tasks Due Today  
- Revenue Forecast  

---

### **Filters**
- Date Range  
- User  
- Pipeline  
