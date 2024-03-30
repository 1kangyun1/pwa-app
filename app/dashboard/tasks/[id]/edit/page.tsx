import Form from '@/app/ui/dashboard/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchTaskById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const task = await fetchTaskById(id);

  if (!task) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tasks', href: '/dashboard' },
          {
            label: 'Edit Task',
            href: `/dashboard/tasks/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form task={task} />
    </main>
  );
}
