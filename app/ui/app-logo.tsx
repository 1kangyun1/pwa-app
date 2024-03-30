import { FolderIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AppLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <FolderIcon className="mr-1 h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Tasks</p>
    </div>
  );
}
