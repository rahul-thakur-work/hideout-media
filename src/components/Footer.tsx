export default function Footer() {
  return (
    <footer className="border-t border-[#2f0003]/15 bg-[#f8ddbf] py-8 text-[11px] text-[#2f0003]/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p>© {new Date().getFullYear()} Hideout Media. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#hero" className="hover:text-[#2f0003]">
            Back to top
          </a>
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#2f0003]"
          >
            Imagery from Pexels (free for commercial use)
          </a>
        </div>
      </div>
    </footer>
  );
}

