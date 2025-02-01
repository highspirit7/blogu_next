import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-center p-4 pb-8">
      <div className="flex justify-center">
        <Link
          href="https://github.com/highspirit7"
          target="_blank"
          aria-label="Visit to the github page of the author for this blog"
        >
          <FontAwesomeIcon icon={faGithub} width={24} height={24} />
        </Link>
      </div>
      <div className="mt-1">
        <p>© Jiyeol Jake Lee 2025. All rights reserved.</p>
        <p>
          Built with{' '}
          <span>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="hover:underline hover:underline-offset-4"
              aria-label="Visit to Next.js official website"
            >
              Next.js
            </Link>
          </span>{' '}
          and{' '}
          <span>
            <Link
              href="https://www.sanity.io"
              target="_blank"
              className="hover:underline hover:underline-offset-4"
              aria-label="Visit to Sanity official website"
            >
              Sanity
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
