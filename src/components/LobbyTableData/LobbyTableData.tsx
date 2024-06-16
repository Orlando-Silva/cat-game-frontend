import React from 'react';
import AnimatedDots from '../shared/AnimatedDots/AnimatedDots';

export type SlotType = 'filled' | 'avaliable'

export interface LobbyTableDataProps {
    label: string
    slot: SlotType
}

const LobbyTableData: React.FunctionComponent<LobbyTableDataProps> = ({
  label,
  slot,
}) => {
  const getSlotSpecificClasses = (): string => {
    if (slot === 'filled') {
      return 'text-accent-900 justify-center';
    }

    return 'text-center';
  };

  const resolveAnimatedDots = (): JSX.Element | null => {
    if (slot === 'avaliable') {
      return <AnimatedDots />;
    }

    return null;
  };

  return (
    <div
      className="
        bg-primary-900
        border-primary-800

        flex
        justify-center

        w-96
        p-10
        rounded-md border

        transition
        ease-in-out

        hover:-translate-y-1
        hover:scale-110
        "
    >
      <div className={`flex flex-col gap-4 ${getSlotSpecificClasses()}`}>
        {label}
        {resolveAnimatedDots()}
      </div>
    </div>
  );
};

export default LobbyTableData;
