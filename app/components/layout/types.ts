export type TMenuItemProps = {
  children: React.ReactNode;
  active?: boolean;
  href: string;
  onClick: () => void;
};

export type TLayout = {
  children: React.ReactNode;
};
