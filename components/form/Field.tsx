import { ReactNode } from 'react';
import Loader from '@/components/loader/Loader';

interface FieldProps {
  children: ReactNode;
  label: string;
  loading?: boolean;
}

export default function Field({
  children,
  label,
  loading = false,
}: FieldProps) {
  return (
    <div className="flex items-baseline gap-2">
      <div className="md:flex items-center gap-2">
        <label className="font-semibold">{label}</label>
        <div className="mt-1 md:mt-0">{children}</div>
      </div>

      {loading && <Loader />}
    </div>
  );
}
