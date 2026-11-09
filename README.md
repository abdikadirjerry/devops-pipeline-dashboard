# DevOps CI/CD Pipeline Dashboard (`devops-pipeline-dashboard`)

An enterprise-grade CI/CD pipeline orchestration console and live execution monitor built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-Stage Workflow Graph:** Visualizes CI/CD stages (Checkout, Lint, Tests, Docker Build, Security Scan, Production Deploy).
- **Real-Time Terminal Stream:** Live ANSI-styled log inspector for runner node telemetry.
- **Manual Approval Gate:** Interactive production deployment gate allowing authorized rollouts.
- **Strict TypeScript Types:** Fully typed pipeline runs, stages, and status states.

## Setup & Running

1. Clone repository & install dependencies:
   ```bash
   cd devops-pipeline-dashboard
   npm install
   ```
