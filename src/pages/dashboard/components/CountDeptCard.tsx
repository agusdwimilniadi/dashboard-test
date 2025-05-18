import Card from "@/components/molecules/Card"
import { ShieldUser } from "lucide-react"
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFF", "#FF6699", "#00A8E8"];

interface ICountDeptCard {
    data: { name: string, value: number }[]
}
const CountDeptCard = (props: ICountDeptCard) => {
    const { data } = props
    return (
        <Card title='Head count each department' icon={ShieldUser}>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${entry.name + index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default CountDeptCard