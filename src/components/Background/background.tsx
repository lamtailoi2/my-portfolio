interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg-dark-gray w-screen h-full min-h-screen">{children}</div>
  );
};
