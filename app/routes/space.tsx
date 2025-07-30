import { useMap } from '@mappedin/react-sdk';
import type { Route } from './+types/space';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import useClickNavigation from '@/composables/useClickNavigation';

export default function Space({ params }: Route.ComponentProps) {
  const { mapData } = useMap();
  useClickNavigation();

  const space = mapData.getById('space', params.id);

  if (!space) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <span>Space not found</span>
        <Button asChild variant="secondary">
          <Link to="/">
            <ArrowLeft />
            <span>Back to home</span>
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <header className="sticky top-0 bg-background py-2">
        <Button asChild variant="secondary" size="icon" className="size-8">
          <Link to="/">
            <ArrowLeft />
          </Link>
        </Button>
      </header>

      <main className="space-y-4 overflow-x-scroll">
        {!!space.images?.length && (
          <img
            src={space.images[0].url}
            alt={space.name}
            className="w-full h-auto rounded-xl overflow-hidden aspect-video object-cover bg-sidebar"
          />
        )}

        <div className="space-y-2">
          <Badge variant="secondary" className="capitalize">
            {space.type}
          </Badge>
          <h2 className="text-lg font-semibold">{space.name}</h2>
          <p className="leading-7 text-muted-foreground">{space.description}</p>

          <span className="text-muted-foreground text-xs">
            <Layers className="inline-block mr-1" size={12} />{' '}
            {space.floor.name}
          </span>
        </div>

        <div className="flex gap-2">
          {space.links?.map((link) => (
            <Button key={link.id} asChild variant="default" size="sm">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}

                <ExternalLink />
              </a>
            </Button>
          ))}
        </div>
      </main>
    </div>
  );
}
