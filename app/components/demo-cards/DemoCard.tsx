import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useState, type ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DemoCardProps {
  title: string;
  description?: string;
  defaultEnabled?: boolean;
  onEnabled: (enabled: boolean) => void;
  disabled?: string;
  children?: ReactNode;
}

export default function DemoCard({
  title,
  description,
  defaultEnabled = false,
  onEnabled,
  disabled,
  children,
}: DemoCardProps) {
  const [enabled, setEnabled] = useState(defaultEnabled);

  const onCheckedChange = (checked: boolean) => {
    setEnabled(checked);
    onEnabled(checked);
  };

  return (
    <Card
      className={`${enabled ? 'ring-2 ring-primary ring-inset' : ''} shadow-none`}
    >
      <CardHeader>
        <CardTitle className={disabled ? 'opacity-50' : ''}>{title}</CardTitle>
        {description && (
          <CardDescription className={disabled ? 'opacity-50' : ''}>
            {description}
          </CardDescription>
        )}
        <CardAction>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Switch
                  checked={enabled}
                  onCheckedChange={onCheckedChange}
                  disabled={!!disabled}
                />
              </div>
            </TooltipTrigger>

            <TooltipContent side="right">
              {disabled ? (
                <>
                  Not available
                  <p className="text-[0.625rem]">{disabled}</p>
                </>
              ) : enabled ? (
                'Turn demo off'
              ) : (
                'Turn demo on'
              )}
            </TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>

      {enabled && children && (
        <CardContent className="space-y-2">{children}</CardContent>
      )}
    </Card>
  );
}
