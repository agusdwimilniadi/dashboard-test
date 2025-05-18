import BaseTable from "@/components/atoms/BaseTable"
import Card from "@/components/molecules/Card"
import type { IBaseTableProps } from "@/lib/interface"
import { cn } from "@/lib/utils"
import { CalendarX2 } from "lucide-react"
import { useState } from "react"

type NotCheckInCard = IBaseTableProps
const NotCheckInCard = (props: NotCheckInCard) => {
    const { data, columns } = props

    const mappingData = data.map((item) => ({
        ...item,
        status: <p className={cn("text-xs", item.status === 'Not Leave' ? 'text-green-500' : 'text-red-500')}>{item.status}</p>,
        leaveDocument: <div>{item.leaveDocument ? <a href={item.leaveDocument as string} target="_blank" className="text-blue-400">Detail</a> : "-"}</div>
    }))

    const [page, setPage] = useState(1);
    const pageSize = 5;
    const paginatedData = mappingData.slice((page - 1) * pageSize, page * pageSize);
    return (
        <Card title='Employee Not Check In' total={data.length} icon={CalendarX2}>
            <BaseTable
                columns={columns}
                data={paginatedData}
                totalData={data.length}
                page={page}
                pageSize={pageSize}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </Card>
    )
}

export default NotCheckInCard