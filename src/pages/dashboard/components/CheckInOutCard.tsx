import Card from "@/components/molecules/Card"
import CountCard from "@/components/molecules/CountCard"
import { CalendarCheck2 } from "lucide-react"

type Status = 'up' | 'down'
interface ICheckInOutCard {
    checkIn: {
        total: number,
        status: Status,
        percentage: number
    },
    checkOut: {
        total: number
        status: Status,
        percentage: number

    }
}
const CheckInOutCard = (props: ICheckInOutCard) => {
    const { checkIn, checkOut } = props
    return (
        <Card title='Daily Attendance Summary' icon={CalendarCheck2}>
            <div className="grid grid-cols-2 gap-3 items-center justify-center text-center">
                <CountCard title="Check In" total={checkIn.total} status={checkIn.status} percentage={checkIn.percentage} />
                <CountCard title="Check Out" total={checkOut.total} status={checkOut.status} percentage={checkOut.percentage} />
            </div>
        </Card>
    )
}

export default CheckInOutCard