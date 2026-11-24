# SQL Diff Studio — Website Information Architecture

## 1. Information Hierarchy & Site Structure

The public showcase website is organized into four distinct pages designed for GitHub Pages hosting:

```
https://vishal-07-prajapati.github.io/safedeploy-studio-site/
├── index.html          # Product Overview, Feature Deep-Dive & 6-Step Workflow
├── user-guide.html     # Comprehensive Two-Column Interactive End-User Manual
├── docs.html           # Internal Technical Architecture & Engineering Specifications
└── releases.html       # Official Binary Distribution, System Requirements & Checksums
```

---

## 2. Global Navigation System

### Header Bar (Fixed / Sticky Blur)
* **Left:** SQL Diff Studio Brandmark + Vector Shield Icon.
* **Center Navigation Links:**
  * **Product** (`index.html#overview`)
  * **Features** (`index.html#features`)
  * **How It Works** (`index.html#workflow`)
  * **User Guide** (`user-guide.html`)
  * **Documentation** (`docs.html`)
  * **Releases** (`releases.html`)
* **Right Actions:**
  * **Theme Toggle:** SVG Sun / Moon button with `aria-label="Toggle visual theme"`.
  * **GitHub:** Vector GitHub Octocat linking to `https://github.com/vishal-07-prajapati/safedeploy-studio`.
  * **Download CTA:** Primary button linking to `releases.html`.

---

## 3. Page Specifications

### A. Index Page (`index.html`)
1. **Hero Section:**
   * Headline: *Database deployments. Controlled with confidence.*
   * Subtitle: *A centralized database deployment and management platform for engineering teams. Compare database changes, validate deployment scripts, enforce configurable safety policies, and manage deployment history from one unified workspace.*
   * Actions: "Explore SQL Diff Studio", "Read User Guide", "View on GitHub".
   * Visual Preview: Realistic developer workbench frame modeling the actual Blazor/WPF interface (Side-by-side SQL diff, ScriptDom validation badge, Vault snapshot status).
2. **Product Pillars:**
   * Centralized Schema Comparison
   * AST Safety Guardrails
   * Transactional Sandboxes
   * Automated Pre-Change Backups
   * 1-Click Rollback
   * Deterministic Performance Advisory
3. **The 6-Step Controlled Deployment Workflow:**
   * Step 01: Select Project & Route
   * Step 02: Compare Changes
   * Step 03: Validate Guardrails
   * Step 04: Review AI & Performance Advisory
   * Step 05: Transactional Sandbox Dry-Run
   * Step 06: Deploy & Vault Backup
4. **Supported Environments & Database Providers:**
   * Microsoft SQL Server 2016 - 2022
   * Azure SQL Database / Managed Instance
   * Cross-Environment Routing: Local $\to$ Development $\to$ Staging $\to$ Production.
5. **Technical Foundations:**
   * .NET 10 LTS, C# 13, ScriptDom AST Visitor, DiffPlex, EF Core.

---

### B. User Guide Page (`user-guide.html`)
* **Layout:** Professional documentation workspace.
  * **Left Sidebar (280px sticky):** Search bar with live keyword filtering; expandable category tree:
    * *Getting Started:* Overview, Installation, Sign In, Workspace Overview.
    * *Configuration:* Organizations & Projects, Database Connections, Environments.
    * *Deployment Workflow:* Creating Deployments, Procedure Comparison, SQL Diff Review, Pre-Flight Guardrails.
    * *Execution & Recovery:* Transactional Dry-Runs, Applying Deployments, Backup Vault, 1-Click Rollback.
    * *Monitoring & Admin:* AI Optimization Advisor, Audit Trail & History, Settings, Troubleshooting & FAQ.
  * **Main Content Area (Fluid):** Breadcrumbs, article header, reading time, anchor links, step-by-step procedural guides, code snippets with syntax highlights, and next/previous article navigation buttons.

---

### C. Technical Documentation Page (`docs.html`)
* **Target Audience:** Database Administrators, Security Architects, DevOps Engineers.
* **Sections:**
  1. High-Level Architecture (Clean Architecture Modular Monolith).
  2. The ScriptDom AST Guardrails Engine (How syntax trees block DDL while permitting `#temp`).
  3. Pre-Change Backup Snapshot Algorithm (Idempotent script synthesis, SHA-256 vault storage).
  4. Database Provider Abstraction Layer (`IDatabaseProvider` contract, connection handling, batch splitting).
  5. Deterministic SARGability Engine (Regex & AST rules for query plan optimization).
  6. Windows Server IIS Hosting Architecture (Out-of-process `AspNetCoreModuleV2`).

---

### D. Releases & Downloads Page (`releases.html`)
* **Contents:**
  * Latest Version Card (v1.0.0 LTS for 64-bit Windows).
  * Direct Windows MSI Installer download link.
  * Portable ZIP package download link.
  * SHA-256 Checksum verification block with one-click copy.
  * System Requirements Table (OS, CPU, Memory, Runtimes).
  * Step-by-step installation instructions.
  * Full Release Notes & Changelog.
