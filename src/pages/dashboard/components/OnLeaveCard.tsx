import Card from '@/components/molecules/Card'
import CountCard from '@/components/molecules/CountCard'
import { CalendarClock } from 'lucide-react'

interface IOnLeaveCard {
    total: {
        today: number
        tommorrow: number
    }
}
const OnLeaveCard = (props: IOnLeaveCard) => {
    const { total } = props
    return (
        <Card title='Employee On Leave' icon={CalendarClock}>
            <div className='grid grid-cols-2 gap-3'>
                <CountCard title="On Leave Today" total={total.today} />
                <CountCard title="On Leave Tommorrow" total={total.tommorrow} />
            </div>
        </Card>
    )
}

export default OnLeaveCard