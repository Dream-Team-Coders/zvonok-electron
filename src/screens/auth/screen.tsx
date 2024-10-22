import React from 'react';
import PropTypes from 'prop-types';
import { AppScreen } from '@/components/ui';
import { SignUpForm } from '@/components/features/sign-up-form/component';

export function AuthScreen() {
  return (
    <AppScreen classNames='flex items-center justify-center'>
      <SignUpForm />
    </AppScreen>
  );
}
