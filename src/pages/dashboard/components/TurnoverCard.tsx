import Card from "@/components/molecules/Card"
import { Shuffle } from "lucide-react"
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    { month: "Jan", onboarding: 120, turnover: 40 },
    { month: "Feb", onboarding: 100, turnover: 50 },
    { month: "Mar", onboarding: 140, turnover: 30 },
    { month: "Apr", onboarding: 160, turnover: 60 },
    { month: "May", onboarding: 180, turnover: 70 },
    { month: "Jun", onboarding: 130, turnover: 50 },
    { month: "Jul", onboarding: 150, turnover: 55 },
    { month: "Aug", onboarding: 170, turnover: 65 },
    { month: "Sep", onboarding: 190, turnover: 70 },
    { month: "Oct", onboarding: 200, turnover: 80 },
    { month: "Nov", onboarding: 160, turnover: 60 },
    { month: "Dec", onboarding: 180, turnover: 50 },
];

const TurnoverCard = () => {
    return (
        <Card title='Turnover' icon={Shuffle}>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="onboarding" fill="#00C950" name="Onboarding" />
                    <Bar dataKey="turnover" fill="#FA2C37" name="Turnover" />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default TurnoverCard