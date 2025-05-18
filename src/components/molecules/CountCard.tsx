import { cn } from "@/lib/utils"
import { TrendingDown, TrendingUp } from "lucide-react"

interface ICountCard {
    title: string
    total: number
    status?: "up" | "down"
    percentage?: number
}
const CountCard = (props: ICountCard) => {
    const { title, total, status, percentage } = props
    return (
        <div className="border flex rounded-xl flex-col justify-center min-h-36 gap-2 p-5 text-center">
            <p className="text-sm font-bold">{title}</p>
            <div className="text-3xl font-light flex items-center justify-center gap-2">
                <p>{new Intl.NumberFormat("id-ID").format(total)}</p>
            </div>
            <small className="text-xs text-center">Employees</small>
            {
                status && percentage && (
                    <p
                        className={cn(
                            "text-xs mt-1 flex items-center justify-center gap-1",
                            status === "up" ? "text-green-500" : "text-red-500"
                        )}
                    >
                        {status === "up" ? (
                            <TrendingUp size={20} color="#1A9B3E" />
                        ) : (
                            <TrendingDown size={20} color="#CE3F23" />
                        )}
                        {percentage}% from yesterday
                    </p>
                )
            }
        </div>
    )
}

export default CountCard