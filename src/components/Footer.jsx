export default function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 font-display text-lg font-semibold text-paper">
          <span aria-hidden="true">🎬</span>
          <span>MovieExplorer</span>
        </div>
        <p className="text-sm text-paper-dim">
          © 2026 MovieExplorer. Show data courtesy of{" "}
          <a
            href="https://www.tvmaze.com/"
            target="_blank"
            className="underline"
          >
            TVMaze
          </a>
          .
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/reyad9009/move-explorer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
