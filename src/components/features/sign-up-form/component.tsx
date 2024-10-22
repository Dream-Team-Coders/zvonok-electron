import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@/components/ui';
import { Button } from '@/components/ui/button/component';
import React from 'react';

export function SignUpForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-3 w-72'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='Email' type='email' />
            </div>
            <div>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' placeholder='Password' type='password' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button>Create Account</Button>
      </CardFooter>
    </Card>
  );
}
