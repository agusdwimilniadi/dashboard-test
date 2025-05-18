import AppSidebar from "../organisms/AppSidebar"
import { SidebarProvider } from "../ui/sidebar"

interface IDashboardLayout {
    children: React.ReactNode
}
const DashboardLayout = (props: IDashboardLayout) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 overflow-auto">
                <div className="max-w-full p-4">
                    {props.children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout