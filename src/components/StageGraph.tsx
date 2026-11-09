import React from "react";
import type { PipelineStage, StageStatus } from "../types/pipeline";

interface StageGraphProps {
  stages: PipelineStage[];
  selectedStageId: string;
  onSelectStage: (id: string) => void;
}

const statusBadgeStyles: Record<StageStatus, string> = {
  success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  running: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 animate-pulse",
  failed: "bg-rose-500/10 border-rose-500/30 text-rose-400",
  queued: "bg-slate-800 border-slate-700 text-slate-400",
  pending_approval: "bg-amber-500/10 border-amber-500/30 text-amber-400",
};

export const StageGraph: React.FC<StageGraphProps> = ({
  stages,
  selectedStageId,
  onSelectStage,
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-4">
      <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
        Pipeline Execution Stages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map((stage) => {
          const isSelected = stage.id === selectedStageId;
          return (
            <button
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`text-left bg-slate-950 border p-4 rounded-xl transition-all space-y-2 relative ${
                isSelected
                  ? "border-cyan-500 shadow-lg shadow-cyan-950/50 bg-slate-900"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${statusBadgeStyles[stage.status]}`}
                >
                  {stage.status.replace("_", " ")}
                </span>
                <span className="text-[10px] text-slate-500">
                  {stage.duration}
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-100">
                  {stage.name}
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {stage.worker}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
