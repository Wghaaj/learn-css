"use client";

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Learn CSS",
          url: "/",
          isActive: true,
        },
        {
          title: "HTML document structure",
          url: "/learn-html",
        },
      ],
    },
    {
      title: "CSS Rules",
      url: "#",
      items: [
        {
          title: "Box Model",
          url: "/box-model",
        },
        {
          title: "Selectors",
          url: "/selectors",
        },
        {
          title: "The cascade",
          url: "/cascade",
        },
        {
          title: "Specificity",
          url: "/specificity",
        },
        {
          title: "Inheritance",
          url: "/inheritance",
        },
        {
          title: "Color",
          url: "/color",
        },
        {
          title: "Sizing Units",
          url: "/sizing",
        },
        {
          title: "Layout",
          url: "/layout",
        },
        {
          title: "Flexbox",
          url: "/flexbox",
        },
        {
          title: "Grid",
          url: "/grid",
        },
        {
          title: "Spacing",
          url: "/spacing",
        },
        {
          title: "Pseudo-elements",
          url: "/pseudo-elements",
        },
        {
          title: "Pseudo-classes",
          url: "/pseudo-classes",
        },
        {
          title: "Borders",
          url: "/borders",
        },
        {
          title: "Shadows",
          url: "/shadows",
        },
        {
          title: "Focus",
          url: "/focus",
        },
        {
          title: "Gradients",
          url: "/gradients",
        },
        {
          title: "Animations",
          url: "/animations",
        },
        {
          title: "Filters",
          url: "/filters",
        },
        {
          title: "Lists",
          url: "/lists",
        },
        {
          title: "Transitions",
          url: "/transitions",
        },
        {
          title: "Overflow",
          url: "/overflow",
        },
        {
          title: "Backgrounds",
          url: "/backgrounds",
        },
        {
          title: "Text and Typography",
          url: "/typography",
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setActiveItem(title);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={activeItem === item.title}>
                      <Link href={item.url} onClick={() => handleItemClick(item.title)}>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}