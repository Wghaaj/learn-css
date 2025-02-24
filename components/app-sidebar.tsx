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
          url: "#",
        },
        {
          title: "Selectors",
          url: "#",
        },
        {
          title: "The cascade",
          url: "#",
        },
        {
          title: "Specificity",
          url: "#",
        },
        {
          title: "Inheritance",
          url: "#",
        },
        {
          title: "Color",
          url: "#",
        },
        {
          title: "Sizing Units",
          url: "#",
        },
        {
          title: "Layout",
          url: "#",
        },
        {
          title: "Flexbox",
          url: "#",
        },
        {
          title: "Grid",
          url: "#",
        },
        {
          title: "Spacing",
          url: "#",
        },
        {
          title: "Pseudo-elements",
          url: "#",
        },
        {
          title: "Pseudo-classes",
          url: "#",
        },
        {
          title: "Borders",
          url: "#",
        },
        {
          title: "Shadows",
          url: "#",
        },
        {
          title: "Focus",
          url: "#",
        },
        {
          title: "Gradients",
          url: "#",
        },
        {
          title: "Animations",
          url: "#",
        },
        {
          title: "Filters",
          url: "#",
        },
        {
          title: "Lists",
          url: "#",
        },
        {
          title: "Transitions",
          url: "#",
        },
        {
          title: "Overflow",
          url: "#",
        },
        {
          title: "Backgrounds",
          url: "#",
        },
        {
          title: "Text and Typography",
          url: "#",
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link href={item.url}>{item.title}</Link>
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

