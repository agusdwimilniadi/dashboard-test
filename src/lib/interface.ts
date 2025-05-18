import type { Column } from "@/components/atoms/BaseTable"

export interface IBaseTableProps {
    data: Record<string, React.ReactNode>[]
    columns: Column[]
}