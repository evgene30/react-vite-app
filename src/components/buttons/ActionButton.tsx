import React, { ComponentProps } from 'react';
import { useCustomHook } from '@/hooks/useCustomHook';
import { Button } from './Button';

interface PropsHandler extends Partial<ComponentProps<typeof Button>> {
  text: string;
}

const composeHandler =
  (
    WrappedComponent: React.ElementType,
    hookFunction: (item: string) => string,
  ) =>
  (props: PropsHandler) => {
    const { text } = props;
    const hookResult = hookFunction(text);

    const handleClick = () => {
      console.log(hookResult);
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };

export const ActionButton = composeHandler(Button, useCustomHook);