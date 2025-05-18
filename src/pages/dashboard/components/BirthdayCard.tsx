import BaseTable from '@/components/atoms/BaseTable';
import Card from '@/components/molecules/Card';
import type { IBaseTableProps } from '@/lib/interface';
import { formatDate } from '@/lib/utils';
import { Cake } from 'lucide-react';
import { useState } from 'react';

type IBirthdayCard = IBaseTableProps
const BirthdayCard = (props: IBirthdayCard) => {
    const { data, columns } = props
    const newData = data.map((item) => ({
        ...item,
        birthday: formatDate(item.birthday as string),
    }));

    const [page, setPage] = useState(1);
    const pageSize = 5;
    const paginatedData = newData.slice((page - 1) * pageSize, page * pageSize);
    return (
        <Card title='Employee Birthdays Today' total={data.length} icon={Cake}>
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

export default BirthdayCard