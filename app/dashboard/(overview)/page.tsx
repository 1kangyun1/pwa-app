import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import TasksTable from '@/app/ui/dashboard/table';
import Search from '@/app/ui/search';
import { CreateTask } from '@/app/ui/dashboard/buttons';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Tasks..." />
        <CreateTask />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <TasksTable query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
