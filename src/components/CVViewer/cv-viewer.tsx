import { Viewer, Worker } from "@react-pdf-viewer/core";
export const CVViewer = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="https://drive.google.com/uc?id=1bPWc0QdgWMcWdR5AvEEmwzxsdH0WXf7x&export=download" />
      </Worker>
    </div>
  );
};
