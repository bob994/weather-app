import React, { FunctionComponent, SVGProps } from 'react';

interface Props {
  text: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const GridItem: FunctionComponent<Props> = ({ text, icon: Icon }) => {
  return (
    <div className="details-grid-item">
      <div>{text}</div>
      <Icon />
    </div>
  );
};
