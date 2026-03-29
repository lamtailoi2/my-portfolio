import { Spinner } from "@/components/spinner";

export default function Loading() {
  return (
    <div className="text-white">
      <Spinner size="large" className="text-white" />
    </div>
  );
}
