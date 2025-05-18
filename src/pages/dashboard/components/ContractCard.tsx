import BaseTable from '@/components/atoms/BaseTable';
import Card from '@/components/molecules/Card'
import type { IBaseTableProps } from '@/lib/interface';
import { formatDate } from '@/lib/utils';
import { CalendarClock } from 'lucide-react'
import { useState } from 'react';


type ContractCard = IBaseTableProps
const ContractCard = (props: ContractCard) => {
    const { data, columns } = props
    const mappingData = data.map((item) => ({
        ...item,
        endDate: formatDate(item.endDate as string),
    }))

    const [page, setPage] = useState(1);
    const pageSize = 5;
    const paginatedData = mappingData.slice((page - 1) * pageSize, page * pageSize);
    return (
        <Card title='Contracts Ending Within 70 Days' total={data.length} icon={CalendarClock}>
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

export default ContractCard