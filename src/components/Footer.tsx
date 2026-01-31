import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/assets/logo.png"
              alt="Hideout Media"
              width={100}
              height={33}
              className="h-auto w-24"
            />
            <p className="mt-2 text-sm text-white/40">Comedy Collective</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="/#about" className="hover:text-[#ee0202]">
              About
            </a>
            <a href="/#artists" className="hover:text-[#ee0202]">
              Roster
            </a>
            <a href="/comedy-club" className="hover:text-[#ee0202]">
              Club
            </a>
            <a href="/#work" className="hover:text-[#ee0202]">
              Work
            </a>
          </div>

          <div className="text-center text-sm text-white/40 sm:text-right">
            <p>Mumbai • Delhi • Bangalore</p>
            <p className="mt-1">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

