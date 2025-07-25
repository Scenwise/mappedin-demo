import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SpaceTreeCollapsibleProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  label: string;
}

export default function SpaceTreeCollapsible({
  children,
  icon,
  label,
}: SpaceTreeCollapsibleProps) {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible
      className="group/collapsible"
      open={open}
      onOpenChange={setOpen}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {icon}
            {label}

            <SidebarMenuAction>
              <ChevronRight
                className={`transition-transform ${open ? 'rotate-90' : ''}`}
              />
            </SidebarMenuAction>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="pr-0 mr-0">{children}</SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
