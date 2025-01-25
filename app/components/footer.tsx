import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center p-4 py-8">
      <div className="flex justify-center">
        <a
          href="https://github.com/highspirit7"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Image aria-hidden src="/github.svg" alt="Github icon" width={24} height={24} />
        </a>
      </div>
      <div className="mt-1">
        <p>© Jiyeol Jake Lee 2025. All rights reserved.</p>
        <p>
          Built with{' '}
          <span>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4"
            >
              Next.js
            </a>
          </span>{' '}
          and{' '}
          <span>
            <a
              href="https://www.sanity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-4"
            >
              Sanity
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
