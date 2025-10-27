import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "lucide-react";
import { SidebarProps } from "@/types";
type AppSidebarProps = {
  items: SidebarProps[];
};

export default function AppSidebar({ items }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>VSU NCS</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton>Log out</SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
