import { calculateDaysLeft } from "@/lib/utils";

export const CONTRACT_EXP_COLUMN = [
    { header: "NIK", key: "nik" },
    { header: "Name", key: "name" },
    { header: "Dept", key: "department" },
    { header: "End Date", key: "endDate" },
    { header: "Days Left", key: "daysLeft" },
];
export const CONTRACT_EXP_DATA = [
    {
        nik: "EMP001",
        name: "Andi Saputra",
        department: "Engineering",
        endDate: "2025-06-10",
        daysLeft: calculateDaysLeft("2025-06-10"),
    },
    {
        nik: "EMP002",
        name: "Siska Dewi",
        department: "HR",
        endDate: "2025-06-15",
        daysLeft: calculateDaysLeft("2025-06-15"),
    },
    {
        nik: "EMP003",
        name: "Aldi Pratama",
        department: "Marketing",
        endDate: "2025-07-02",
        daysLeft: calculateDaysLeft("2025-07-02"),
    },
    {
        nik: "EMP004",
        name: "Rizky Firmansyah",
        department: "Finance",
        endDate: "2025-06-28",
        daysLeft: calculateDaysLeft("2025-06-28"),
    },
    {
        nik: "EMP005",
        name: "Lina Mulyani",
        department: "Procurement",
        endDate: "2025-07-10",
        daysLeft: calculateDaysLeft("2025-07-10"),
    },
    {
        nik: "EMP006",
        name: "Bagus Santoso",
        department: "Logistics",
        endDate: "2025-07-22",
        daysLeft: calculateDaysLeft("2025-07-22"),
    },
    {
        nik: "EMP007",
        name: "Dina Rahayu",
        department: "Legal",
        endDate: "2025-07-30",
        daysLeft: calculateDaysLeft("2025-07-30"),
    },
    {
        nik: "EMP008",
        name: "Fahmi Hidayat",
        department: "Customer Service",
        endDate: "2025-08-01",
        daysLeft: calculateDaysLeft("2025-08-01"),
    },
    {
        nik: "EMP009",
        name: "Gita Permata",
        department: "IT",
        endDate: "2025-08-10",
        daysLeft: calculateDaysLeft("2025-08-10"),
    },
    {
        nik: "EMP010",
        name: "Yusuf Maulana",
        department: "Operations",
        endDate: "2025-08-15",
        daysLeft: calculateDaysLeft("2025-08-15"),
    },
];

