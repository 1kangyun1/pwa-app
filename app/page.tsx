import { lusitana } from '@/app/ui/fonts';
import LoginForm from './ui/login-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 p-6">
      <div className="mt-4 flex grow items-center justify-center">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 md:h-4/5 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>{"Welcome to Brian's scheduler application"}</strong>
          </p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
