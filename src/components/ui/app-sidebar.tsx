import { useState } from "react";
import { ChartBar, Home, Mail, Pencil, Star, ChevronRight, ChevronDown, Table } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/Collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLogo from "@/assets/logo.jpeg";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Article",
    url: "/article",
    icon: Pencil,
  },
  {
    title: "Feedback",
    url: "/feedback",
    icon: Star,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
  {
    title: "Dataset",
    url: "/dataset",
    icon: Table,
  },
];

export function AppSidebar() {
  const [isVisualizationOpen, setIsVisualizationOpen] = useState(false);

  return (
    <Sidebar className="sidebar">
      <SidebarContent className="sidebar-content">
        <SidebarGroup>
        <Avatar>
        <AvatarImage src={AppLogo} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
          <SidebarGroupLabel className="sidebar-group-label">OstAIthi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="sidebar-menu">
              {items.map((item) => (
                <SidebarMenuItem className="sidebar-menu-item" key={item.title}>
                  <SidebarMenuButton asChild className="sidebar-menu-button">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Visualization Collapsible Menu */}
              <Collapsible
                open={isVisualizationOpen}
                onOpenChange={setIsVisualizationOpen}
                className="sidebar-menu-item"
              >
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="sidebar-menu-button cursor-pointer">
                    <ChartBar />
                    <span>Visualization</span>
                    {isVisualizationOpen ? (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6">
                  <SidebarMenuItem className="sidebar-menu-item">
                    <SidebarMenuButton asChild>
                      <a href="/visualization/tunisie" className="text-sm">
                        <span>Tunisie</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="sidebar-menu-item">
                    <SidebarMenuButton asChild>
                      <a href="/visualization/etranger" className="text-sm">
                        <span>Etranger</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
