import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';

interface AppScreenProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string;
}

export function AppScreen({
  classNames,
  children,
}: AppScreenProps): ReactElement {
  return (
    <div
      className={clsx(
        'flex min-h-screen p-4 bg-primary text-primary-foreground',
        classNames
      )}
    >
      {children}
    </div>
  );
}
