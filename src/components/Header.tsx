import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold">
          Hideout
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/#about" className="hover:text-[#ee0202]">
            About
          </Link>
          <Link href="/#artists" className="hover:text-[#ee0202]">
            Roster
          </Link>
          <Link href="/comedy-club" className="hover:text-[#ee0202]">
            Club
          </Link>
          <Link href="/#work" className="hover:text-[#ee0202]">
            Work
          </Link>
          <Link
            href="/book-comedian"
            className="border-b-2 border-[#ee0202] bg-[#ee0202] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#ff2626]"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

