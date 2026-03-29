import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Info, Navigation, Settings2 } from 'lucide-react';
import { NavLink } from 'react-router';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { useLocation } from 'react-router-dom';

export default function AppSidebar() {
  const items = [
    {
      to: '/',
      label: 'Info',
      icon: Info,
    },
    {
      to: '/navigation',
      label: 'Navigation',
      icon: Navigation,
    },
    {
      to: '/demos',
      label: 'Demos',
      icon: Settings2,
    },
  ];

  const location = useLocation();

  return (
    <>
      <Sidebar collapsible="icon" variant="sidebar">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              {items.map((item) => (
                <Tooltip key={item.to}>
                  <TooltipTrigger>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.to}
                    >
                      <NavLink to={item.to}>
                        {item.icon && <item.icon />}
                      </NavLink>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <h1
            className="scroll-m-20 text-xl font-medium tracking-tight"
            style={{ writingMode: 'sideways-lr' }}
          >
            Scenwise
            <span className="text-muted-foreground"> | MappedIn Demo</span>
          </h1>
        </SidebarFooter>
      </Sidebar>

      {/* TEST OVERLAY */}
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "47px",
          height: "300px",
          background: "#f7f7f7",
          zIndex: 9999999,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            whiteSpace: "nowrap",
            fontSize: "clamp(10px, 1.2vw, 16px)",
            fontWeight: 400,
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "max-content"
          }}
        >
          <strong style={{ marginRight: "6px" }}>SCENWISE</strong>
          <span style={{ opacity: 0.7 }}>| Indoor Mapping Demo</span>
        </div>

      </div>
    </>
  );

}
