import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-accent text-gray-400 text-center py-4">
      <p className="text-sm">
        CSI 2024-present ©{' '}
        <Link href="https://github.com/Mbensassi2026" className="text-primary hover:underline">
          Mohammed Bensassi
        </Link>
      </p>
    </footer>
  );
}
