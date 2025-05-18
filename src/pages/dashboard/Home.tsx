import Header from "@/components/molecules/Header"
import DashboardLayout from "@/components/template/DashboardLayout"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"
import BirthdayCard from "./components/BirthdayCard"
import ContractCard from "./components/ContractCard"
import CheckInOutCard from "./components/CheckInOutCard"
import { DUMMY_CI_CO } from "@/dummyData/checkInOut"
import { BIRTHDAY_COLUMN, BIRTHDAY_DATA } from "@/dummyData/birtday"
import { CONTRACT_EXP_COLUMN, CONTRACT_EXP_DATA } from "@/dummyData/contract"
import NotCheckInCard from "./components/NotCheckInCard"
import { NOT_CHECKIN_COLUMN, NOT_CHECKIN_DATA } from "@/dummyData/notCheckIn"
import CountDeptCard from "./components/CountDeptCard"
import { DUMMY_HEAD_COUNT } from "@/dummyData/countHeadDept"
import KPICard from "./components/KPICard"
import { KPI_COLUMN, KPI_DATA } from "@/dummyData/kpiData"
import OnLeaveCard from "./components/OnLeaveCard"
import TurnoverCard from "./components/TurnoverCard"
import { useApi } from "@/hooks/useApi"
import { cn } from "@/lib/utils"

interface User {
    id: string;
    name: string;
}
const DashboardHome = () => {
    // example fetch api but data with dummy, set env from https://jsonplaceholder.typicode.com/
    const { isLoading, refetch } = useApi<User[]>({
        url: "todos",
        method: "GET",
    });

    return (
        <DashboardLayout>
            <Header title="Employee Dashboard" description="Welcome to your dashboard" />
            <section className="my-3 flex flex-col gap-5">
                <div className="flex items-center justify-end gap-3">
                    <p className="text-xs">Latest sync data : Today, 10:00 AM</p>
                    <Button onClick={refetch}>
                        <RefreshCcw className={cn(isLoading && "animate-spin")} /> Sync Now
                    </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="grid grid-cols-1 gap-5">
                        <CheckInOutCard checkIn={{
                            percentage: 3,
                            status: 'up',
                            total: DUMMY_CI_CO.checkIn.total
                        }}
                            checkOut={{
                                percentage: 5,
                                status: 'down',
                                total: DUMMY_CI_CO.checkOut.total
                            }}

                        />
                        <OnLeaveCard total={{ today: 3, tommorrow: 5 }} />
                    </div>
                    <CountDeptCard data={DUMMY_HEAD_COUNT} />
                    <NotCheckInCard columns={NOT_CHECKIN_COLUMN} data={NOT_CHECKIN_DATA} />
                    <KPICard columns={KPI_COLUMN} data={KPI_DATA} />

                </div>
                <div className="grid grid-cols-1 gap-10">
                    <BirthdayCard columns={BIRTHDAY_COLUMN} data={BIRTHDAY_DATA} />
                    <ContractCard columns={CONTRACT_EXP_COLUMN} data={CONTRACT_EXP_DATA} />
                    <TurnoverCard />
                </div>
            </section>
        </DashboardLayout>
    )
}

export default DashboardHome