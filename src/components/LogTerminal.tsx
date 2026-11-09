import React from "react";
import type { PipelineStage } from "../types/pipeline";

interface LogTerminalProps {
  stage: PipelineStage;
  onApproveDeployment: () => void;
}

export const LogTerminal: React.FC<LogTerminalProps> = ({
  stage,
  onApproveDeployment,
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col flex-1 space-y-4">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div>
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Terminal Stream // {stage.name}
          </h2>
          <p className="text-[10px] text-slate-400">
            Worker Node: {stage.worker} • Status: {stage.status}
          </p>
        </div>
        {stage.status === "pending_approval" && (
          <button
            onClick={onApproveDeployment}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-lg shadow-emerald-950/50"
          >
            ✓ Approve & Deploy to Production
          </button>
        )}
      </div>

      <div className="flex-1 min-h-[320px] bg-slate-950 border border-slate-800/80 rounded-xl p-4 font-mono text-xs text-slate-300 overflow-y-auto space-y-1.5 shadow-inner">
        {stage.logs.map((log, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <span className="text-slate-600 select-none">{idx + 1}</span>
            <span
              className={
                log.includes("Successfully") || log.includes("passed")
                  ? "text-emerald-400"
                  : log.includes("warning") || log.includes("paused")
                    ? "text-amber-400"
                    : "text-slate-300"
              }
            >
              {log}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
