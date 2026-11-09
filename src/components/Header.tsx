import React from "react";

interface HeaderProps {
  runId: string;
  branch: string;
  commitHash: string;
}

export const Header: React.FC<HeaderProps> = ({
  runId,
  branch,
  commitHash,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex flex-wrap items-center justify-between sticky top-0 z-40 backdrop-blur-md gap-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold shadow-lg shadow-cyan-950/50">
          CI
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 tracking-wider uppercase">
            DEVOPS-PIPELINE // Orchestrator Control Center
          </h1>
          <p className="text-[10px] text-slate-400">
            ENTERPRISE CI/CD EXECUTION & RUNNER CONSOLE
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-xs bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-slate-400">
            Run: <strong className="text-slate-200">{runId}</strong>
          </span>
        </div>
        <div className="text-xs bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-400">
          Branch: <strong className="text-cyan-400">{branch}</strong> (
          {commitHash})
        </div>
      </div>
    </header>
  );
};
