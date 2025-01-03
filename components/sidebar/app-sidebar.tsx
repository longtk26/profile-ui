import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { sidebarGroups } from "./sidebarGroups";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible";

export function AppSidebar() {
    console.log("ON APP SIDEBAR");
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-x-6 border-b border-gray-200 py-4">
                    <div className="w-[32px] h-[32px] bg-gradient-to-br from-green-500 to-blue-700 rounded-full" />
                    <span>
                        <h1 className="text-xl font-semibold">Leon Pham</h1>
                        <p className="text-sm text-gray-500">
                            Software Engineer
                        </p>
                    </span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {sidebarGroups.map((group) => (
                    <SidebarGroup key={group.name}>
                        <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
                        <SidebarContent>
                            {group.items.map((item) => (
                                <SidebarMenu
                                    key={item.title}
                                    className="w-full"
                                >
                                    <SidebarMenuItem>
                                        <Collapsible defaultOpen className="group/collapsible w-full">
                                            <CollapsibleTrigger className="w-full">
                                                <SidebarMenuSubButton>
                                                    {item.icon && (
                                                        <item.icon className="w-5 h-5 mr-2" />
                                                    )}
                                                    <span>{item.title}</span>
                                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                                </SidebarMenuSubButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="w-[--radix-popper-anchor-width]">
                                                {item.contents.map(
                                                    (content) => (
                                                        <Link
                                                            href={`${item.url}/${content}`}
                                                            className="block w-full text-left pl-2 py-1"
                                                            key={content}
                                                        >
                                                            {content}
                                                        </Link>
                                                    )
                                                )}
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            ))}
                        </SidebarContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
