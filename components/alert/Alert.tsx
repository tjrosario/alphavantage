import { classNames } from '@/utils/classNames';
import { ReactNode } from 'react';
import { Alert as AlertType } from '@/types/alert';

interface AlertProps extends AlertType {
  children: ReactNode;
}

export default function Alert({ children, type = 'info' }: AlertProps) {
  const componentClassNames = classNames(
    'flex items-center p-4 mb-4 text-sm rounded-lg dark:bg-gray-800',
    {
      'text-blue-800 bg-blue-50  dark:text-blue-400': type === 'info',
    },
    {
      'text-red-800 bg-red-50 dark:text-red-400': type === 'danger',
    },
    {
      'text-green-800 bg-green-50 dark:text-green-400': type === 'success',
    },
    {
      'text-yellow-800 bg-yellow-50 dark:text-yellow-400': type === 'warning',
    }
  );

  return (
    <div className={componentClassNames} role="alert">
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">{type}</span>
      <div className="font-medium">{children}</div>
    </div>
  );
}
