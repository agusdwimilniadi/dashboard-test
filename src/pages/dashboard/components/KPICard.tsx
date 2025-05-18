import BaseTable from "@/components/atoms/BaseTable"
import Card from "@/components/molecules/Card"
import type { IBaseTableProps } from "@/lib/interface"
import { BarChart2 } from "lucide-react"
import { useState } from "react"

type IKPICard = IBaseTableProps
const KPICard = (props: IKPICard) => {
    const { data, columns } = props
    const customizeData = data.map((item) => ({
        ...item,
        skor: item.skor as number >= 4 ? <p className="text-white text-center rounded bg-green-500">{item.skor}</p> : <p className="text-white text-center rounded bg-red-500">{item.skor}</p>,
    }))

    const [page, setPage] = useState(1);
    const pageSize = 5;
    const paginatedData = customizeData.slice((page - 1) * pageSize, page * pageSize);
    return (
        <Card title='Employee Performance Metrics' total={data.length} icon={BarChart2}>
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

export default KPICard