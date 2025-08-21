import { BsCloudCheck } from 'react-icons/bs'
import { Doc } from '../../../../convex/_generated/dataModel';


interface DocumentsInputProps {
  document: Doc<"documents">;
}

  // export const DocumentInput = ( { document } : DocumentsInputProps) => {
  export const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">Untitled Document</span>
      <BsCloudCheck/>
    </div>
  )
}
