import { LayoutGrid, Settings, User } from "lucide-react"
import IMG_RunSystem from '@/assets/images/IMG_LogoRunSystem.jpg'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"
import BaseImage from "../atoms/BaseImage"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"

const items = [
    {
        title: "Dashboard",
        url: "/",
        isActive: true,
        icon: LayoutGrid,
    },
    {
        title: "Employee",
        url: "/employee",
        isActive: false,
        icon: User,
    },
    {
        title: "Settings",
        url: "#",
        isActive: false,
        icon: Settings,
    }

]

const AppSidebar = () => {
    const { state } = useSidebar()
    return (
        <Sidebar variant="inset" collapsible="icon" className="bg-primary relative h-full">
            <SidebarTrigger className="m-2 absolute top-2 right-3 z-10 text-white cursor-pointer" />
            <SidebarContent className="bg-primary">
                <SidebarGroup>
                    <SidebarGroupLabel className="my-5 flex items-center justify-center">
                        <BaseImage className="h-12" src={IMG_RunSystem} />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex flex-col gap-3 mt-5">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className={cn("px-2 py-1 hover:bg-primary-foreground rounded", item.isActive && "bg-primary-foreground text-white  ", state === "collapsed" && "p-0")}>
                                    <SidebarMenuButton asChild className={cn("text-white hover:bg-primary-foreground hover:text-white", item.isActive && "hover:bg-primary-foreground hover:text-white")}>
                                        <NavLink
                                            to={item.url}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span className="text-sm">{item.title}</span>
                                        </NavLink>

                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar