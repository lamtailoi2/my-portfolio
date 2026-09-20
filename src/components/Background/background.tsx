interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 opacity-80 [background-image:linear-gradient(rgba(168,116,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,116,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(168,116,255,0.20),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(255,94,215,0.12),transparent_24%),linear-gradient(180deg,rgba(10,6,14,0.15),rgba(10,6,14,0.92))]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.9)_0,rgba(255,255,255,0.9)_1px,transparent_1px,transparent_3px)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
