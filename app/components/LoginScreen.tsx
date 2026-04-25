import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PASSWORD = 'Sc3nw1$e';

interface LoginScreenProps {
  onSuccess: () => void;
}

export default function LoginScreen({ onSuccess }: LoginScreenProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setValue('');
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="w-full max-w-sm rounded-xl border bg-card p-8 shadow-md">
        <h1 className="mb-1 text-xl font-semibold">Mappedin Demo</h1>
        <p className="mb-6 text-sm text-muted-foreground">Enter the password to continue.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="password"
            placeholder="Password"
            value={value}
            autoFocus
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            aria-invalid={error}
          />
          {error && (
            <p className="text-sm text-destructive">Incorrect password. Please try again.</p>
          )}
          <Button type="submit" className="mt-1">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
