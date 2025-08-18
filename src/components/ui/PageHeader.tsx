// src/components/PageHeader.tsx
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  buttonText: string;
}

const PageHeader = ({ title, buttonText }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-[#000000]">{title}</h2>
      <Button className="bg-[#630dc6] hover:bg-[#450193] text-white px-6 py-2 rounded-full">
        ✨ {buttonText}
      </Button>
    </div>
  );
};

export default PageHeader;