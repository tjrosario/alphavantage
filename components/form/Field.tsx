import { ReactNode } from 'react';

interface FieldProps {
  children: ReactNode;
  label: string;
}

export default function Field({ children, label }: FieldProps) {
  return (
    <div className="flex items-baseline gap-2">
      <div className="md:flex items-center gap-2">
        <label className="font-semibold">{label}</label>
        <div className="mt-1 md:mt-0">{children}</div>
      </div>
    </div>
  );
}
