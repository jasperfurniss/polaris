import React from 'react';

import type {ComplexAction} from '../../types';

import {Button} from './Button';
import type {ButtonProps} from './Button';

export function buttonsFrom(
  action: ComplexAction,
  overrides?: Partial<ButtonProps>,
): React.ReactElement<ButtonProps>;
export function buttonsFrom(
  actions: ComplexAction[],
  overrides?: Partial<ButtonProps>,
): React.ReactElement<ButtonProps>[];
export function buttonsFrom(
  actions: ComplexAction[] | ComplexAction,
  overrides: Partial<ButtonProps> = {},
) {
  if (Array.isArray(actions)) {
    return actions.map((action, index) => buttonFrom(action, overrides, index));
  } else {
    const action = actions;
    return buttonFrom(action, overrides);
  }
}

export function buttonFrom(
  {content, onAction, plain, destructive, ...action}: ComplexAction,
  overrides?: Partial<ButtonProps>,
  key?: any,
) {
  const tone = overrides?.tone || action.tone;
  const variant = overrides?.variant || action.variant;

  return (
    <Button
      key={key}
      onClick={onAction}
      tone={tone}
      variant={variant}
      {...action}
      {...overrides}
    >
      {content}
    </Button>
  );
}
