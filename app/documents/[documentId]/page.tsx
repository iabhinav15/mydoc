import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
