import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';

export interface SigningLayoutProps {
  title?: string;
  description?: string;
}

export const SigningLayout: FC<PropsWithChildren<SigningLayoutProps>> = ({
  children,
  description,
  title,
}) => {
  return (
    <div className="flex flex-col p-8 min-h-screen bg-gradient-to-r from-gray-200 from-50% to-zinc-100 to-50%">
      <div className="m-auto w-full max-w-5xl flex flex-row">
        <header className="flex flex-col w-3/6 p-8 bg-gradient-radial from-zinc-800 to-zinc-700 text-white text-sm leading-normal">
          <div className="mb-8 flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M-0.001248 -0.000936V11.9995C-0.001248 18.6273 5.37156 23.9999 11.9993 23.9999C18.627 23.9999 23.9997 18.6273 23.9997 11.9995C23.9997 5.37173 18.627 -0.000936 11.9993 -0.000936C11.9993 6.62664 17.372 11.9995 23.9997 11.9995C17.372 11.9995 11.9993 17.372 11.9993 23.9999V11.9995C11.9993 5.37173 6.6264 -0.000936 -0.001248 -0.000936Z"
                fill="#FF7555"
              />
            </svg>

            <span className="ml-4 text-2xl font-semibold">DevSphere</span>
          </div>

          <div className="mb-12">
            {title && <h1 className="mb-2 text-2xl font-bold">{title}</h1>}
            {description && <p>{description}</p>}
          </div>

          <Image
            src="/images/network.svg"
            height={800}
            width={800}
            alt=""
            className="mt-auto mx-auto w-5/6"
          />
        </header>
        <main className="flex flex-col justify-center w-3/6 p-12 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};
