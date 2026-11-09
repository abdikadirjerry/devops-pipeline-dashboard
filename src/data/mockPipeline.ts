import type { PipelineRun } from "../types/pipeline";

export const INITIAL_PIPELINE: PipelineRun = {
  id: "run-8492",
  branch: "main",
  commitHash: "f7c3902",
  author: "Abdikadir",
  trigger: "git push origin main",
  status: "running",
  startTime: "10 mins ago",
  stages: [
    {
      id: "stg-1",
      name: "1. Checkout & Lint",
      status: "success",
      duration: "14s",
      worker: "ubuntu-runner-01",
      logs: [
        "Initialized empty Git repository in /home/runner/work/...",
        "Fetching origin/main...",
        "Running ESLint & TypeScript type check...",
        "Found 0 errors, 0 warnings. Lint passed successfully.",
      ],
    },
    {
      id: "stg-2",
      name: "2. Unit & Integration Tests",
      status: "success",
      duration: "42s",
      worker: "ubuntu-runner-04",
      logs: [
        "Executing Jest test suite across 42 spec files...",
        "PASS src/tests/auth.test.ts",
        "PASS src/tests/gateway.test.ts",
        "Test Suites: 4 passed, 4 total. Coverage: 94.2%.",
      ],
    },
    {
      id: "stg-3",
      name: "3. Docker Container Build",
      status: "success",
      duration: "1m 18s",
      worker: "docker-builder-cluster",
      logs: [
        "Sending build context to Docker daemon 48.2MB...",
        "Step 1/12 : FROM python:3.11-slim",
        "Step 5/12 : COPY . /app",
        "Successfully built tag ghcr.io/secops/api-gateway:v1.4.2",
      ],
    },
    {
      id: "stg-4",
      name: "4. Security Vulnerability Scan",
      status: "running",
      duration: "24s (active)",
      worker: "trivy-scanner-node",
      logs: [
        "Scanning container image for CVE vulnerabilities...",
        "Checking Python dependencies in requirements.txt...",
        "Analyzing OS packages for high-severity flaws...",
        "Status: No critical vulnerabilities detected. Finalizing report...",
      ],
    },
    {
      id: "stg-5",
      name: "5. Production Deployment",
      status: "pending_approval",
      duration: "Awaiting Gate",
      worker: "k8s-cluster-prod",
      logs: [
        "Deployment pipeline paused at manual approval gate.",
        "Target cluster: AWS EKS Production (us-east-1).",
        "Awaiting administrative authorization to roll out v1.4.2.",
      ],
    },
  ],
};
