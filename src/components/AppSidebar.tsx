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
                    <NavLink to={item.to}>{item.icon && <item.icon />}</NavLink>
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
          style={{ 'writing-mode': 'sideways-lr' }}
        >
          Scenwise
          <span className="text-muted-foreground"> | MappedIn Demo</span>
        </h1>
      </SidebarFooter>
    </Sidebar>
  );
}
