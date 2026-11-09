export type StageStatus =
  | "success"
  | "running"
  | "failed"
  | "queued"
  | "pending_approval";

export interface PipelineStage {
  id: string;
  name: string;
  status: StageStatus;
  duration: string;
  worker: string;
  logs: string[];
}

export interface PipelineRun {
  id: string;
  branch: string;
  commitHash: string;
  author: string;
  trigger: string;
  status: StageStatus;
  startTime: string;
  stages: PipelineStage[];
}
