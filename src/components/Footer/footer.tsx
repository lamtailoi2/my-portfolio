export const Footer = () => {
  return (
    <div className="h-fit w-full">
      <div className="w-full h-[50px] bg-black flex justify-center items-center max-h-full">
        <p className="text-white">
          © {new Date().getFullYear()} All Rights Reserved by Loi{" "}
          <strong className="text-[#BB86FC]">Lam</strong>
        </p>
      </div>
    </div>
  );
};
