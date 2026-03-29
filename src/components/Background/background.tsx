interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg-dracula-bg w-full h-full min-h-screen">{children}</div>
  );
};
