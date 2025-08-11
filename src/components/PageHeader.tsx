import { pageTitle } from '@/lib/title';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <>
      <title>{pageTitle(title)}</title>

      <div className="sticky top-0 bg-background z-10 py-2">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </>
  );
}
