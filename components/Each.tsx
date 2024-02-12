import { Children } from 'react';

export const Each = ({ render, of }: { render: (item: any, index: number) => JSX.Element; of: any[] }) =>
  Children.toArray(
    of.map((item, index) => render(item, index))
  );
