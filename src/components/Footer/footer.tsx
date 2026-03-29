export const Footer = () => {
  return (
    <div className="h-fit w-full">
      <div className="w-full h-[50px] bg-dracula-bg border-t border-dracula-current flex justify-center items-center max-h-full">
        <p className="text-dracula-comment">
          © {new Date().getFullYear()} All Rights Reserved by Loi{" "}
          <strong className="text-dracula-pink">Lam</strong>
        </p>
      </div>
    </div>
  );
};
