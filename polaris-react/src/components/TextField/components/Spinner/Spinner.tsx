import React from 'react';
import {ChevronDown, ChevronUp} from '@shopify/polaris-icons';

import {Icon} from '../../../Icon';
import styles from '../../TextField.scss';

type HandleStepFn = (step: number) => void;

export interface SpinnerProps {
  onChange: HandleStepFn;
  onClick?(event: React.MouseEvent): void;
  onMouseDown(onChange: HandleStepFn): void;
  onMouseUp(): void;
  onBlur(event: React.FocusEvent): void;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  function Spinner({onChange, onClick, onMouseDown, onMouseUp, onBlur}, ref) {
    function handleStep(step: number) {
      return () => onChange(step);
    }

    function handleMouseDown(onChange: HandleStepFn) {
      return (event: React.MouseEvent) => {
        if (event.button !== 0) return;
        onMouseDown?.(onChange);
      };
    }

    return (
      <div className={styles.Spinner} onClick={onClick} aria-hidden ref={ref}>
        <div
          role="button"
          className={styles.Segment}
          tabIndex={-1}
          onClick={handleStep(1)}
          onMouseDown={handleMouseDown(handleStep(1))}
          onMouseUp={onMouseUp}
          onBlur={onBlur}
        >
          <div className={styles.SpinnerIcon}>
            <Icon source={ChevronUp} />
          </div>
        </div>
        <div
          role="button"
          className={styles.Segment}
          tabIndex={-1}
          onClick={handleStep(-1)}
          onMouseDown={handleMouseDown(handleStep(-1))}
          onMouseUp={onMouseUp}
          onBlur={onBlur}
        >
          <div className={styles.SpinnerIcon}>
            <Icon source={ChevronDown} />
          </div>
        </div>
      </div>
    );
  },
);
