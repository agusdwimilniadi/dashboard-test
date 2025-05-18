# Employee Dashboard
by: Agus Dwi Milniadi

A dashboard system built to help a contractor company with 25K+ employees manage employee engagement and workflow in real-time.

Live: [fe-test-agusdm.netlify.app](https://fe-test-agusdm.netlify.app)

GitHub: [github.com/agusdwimilniadi/dashboard-test](https://github.com/agusdwimilniadi/dashboard-test)

Mockup : [Link](https://www.figma.com/design/oTH3oAFDDcEaMVd13ukXKN/UI-Coding-Test?node-id=0-1&t=4USdzbrGOYgFZh4L-1)

---

## Features

This dashboard includes:

1. Today's birthday employees
2. Check-in & check-out summary
3. Employees not checked in vs leave/travel docs
4. Head count each department/unit (Pie Chart)
5. Onboarding & Turnover rate (Bar Chart)
6. Upcoming 70 days contract expiry list
7. Performance metrics (KPI, attendance, projects)

---

## Tech Stack

- React + TypeScript
- TailwindCSS
- shadcn/ui
- Recharts
- Axios for data fetching
- Dummy data via constant variable (simulating REST API response)
- React Context for Global State

---

## Project Structure

## 📁 Project Structure

```bash
src/
├── assets/                      # Static assets
│   └── images/                  # Image files (logos, etc)
├── components/                  # UI components using Atomic Design + shadcn/ui
│   ├── atoms/                   # Basic elements (ex: BaseImage, BaseTable)
│   ├── molecules/               # Mid-level components (ex: cards, table layouts)
│   ├── organisms/               # High-level UI patterns (ex: AppSidebar)
│   ├── template/                # Layout templates (ex: DashboardLayout)
│   └── ui/                      # UI elements from shadcn (button, input, etc)
├── context/                     # Global state with Context
│   └── AuthContext.tsx
├── dummyData/                   # Mock data simulating backend
├── hooks/                       # Custom hooks (e.g., useApi)
├── lib/                         # Utilities and shared logic
├   ├── router/                  # Router and protected route config
│   ├──── PrivateRoute.tsx       # component to protected route
│   ├── axiosInstance.ts         # Axios configuration
│   ├── interface.ts             # Type interfaces
│   └── utils.ts                 # Utility functions
├── pages/                       # Page based on routing
│   ├── dashboard/
│   │   ├── Home.tsx             # Main dashboard page
│   │   └── components/          # Section components within dashboard
│   └── NotFound/
│       └── index.tsx            # 404 component if url didn't match
├── App.tsx                      # Root application component with layout
├── main.tsx                     # App entry (ReactDOM + Router setup + context)
├── index.css                    # Global styles (TailwindCSS)
```

---
## Getting Started – Run Locally:

Getting Started – Run Locally:

1. Clone the project:
```bash
git clone https://github.com/agusdwimilniadi/dashboard-test
cd dashboard-test
```

2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

3. Create .env file:
```bash
cp .env.example .env
```

4. Fill your VITE_BASE_URL
```bash
VITE_BASE_URL="https://example.com/api"
```

5. Start development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

App runs at http://localhost:5173

---
## Thankyou


