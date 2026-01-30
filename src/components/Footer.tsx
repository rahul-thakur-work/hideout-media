export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <p className="text-lg font-bold">Hideout</p>
            <p className="mt-1 text-sm text-white/40">Comedy Collective</p>
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

