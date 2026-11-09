import React, { useState } from "react";
import { INITIAL_PIPELINE } from "./data/mockPipeline";
import type { PipelineRun } from "./types/pipeline";
import { Header } from "./components/Header";
import { StageGraph } from "./components/StageGraph";
import { LogTerminal } from "./components/LogTerminal";

export const App: React.FC = () => {
  const [pipeline, setPipeline] = useState<PipelineRun>(INITIAL_PIPELINE);
  const [selectedStageId, setSelectedStageId] = useState<string>(
    INITIAL_PIPELINE.stages[3].id,
  );

  const selectedStage =
    pipeline.stages.find((s) => s.id === selectedStageId) || pipeline.stages[0];

  const handleApproveDeployment = () => {
    setPipeline((prev) => ({
      ...prev,
      status: "success",
      stages: prev.stages.map((stg) =>
        stg.id === "stg-5"
          ? {
              ...stg,
              status: "success",
              duration: "38s",
              logs: [
                ...stg.logs,
                "Administrative approval granted by Abdikadir.",
                "Applying Kubernetes manifests to production cluster EKS-US-EAST-1...",
                "Deployment rollout complete. Pods healthy and serving traffic.",
              ],
            }
          : stg,
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header
        runId={pipeline.id}
        branch={pipeline.branch}
        commitHash={pipeline.commitHash}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6 flex flex-col">
        <StageGraph
          stages={pipeline.stages}
          selectedStageId={selectedStageId}
          onSelectStage={setSelectedStageId}
        />

        <LogTerminal
          stage={selectedStage}
          onApproveDeployment={handleApproveDeployment}
        />
      </main>
    </div>
  );
};

export default App;
