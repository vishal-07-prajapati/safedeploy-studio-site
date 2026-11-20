# SafeDeploy Studio — User Guide Content Plan

## 1. Overview

The SafeDeploy Studio User Guide is designed as a software documentation hub. It provides actionable, step-by-step instructions for developers, database administrators, and DevOps personnel to configure and execute safe database deployments.

---

## 2. Article Catalog & Content Specifications

### Category 1: Getting Started
1. **Overview & Concepts**
   * *Purpose:* Understand why SafeDeploy Studio was created and how it replaces unverified script execution.
   * *Prerequisites:* Basic familiarity with relational databases and SQL scripts.
   * *Key Topics:* The deployment lifecycle, boundary isolation, why traditional migrations fail.
2. **Installation & Setup**
   * *Purpose:* Install SafeDeploy Studio on Windows 10/11 or Windows Server.
   * *Prerequisites:* Windows x64, .NET 10 Runtime (or self-contained package), Edge WebView2.
   * *Steps:* Running the installer, verifying WebView2 runtime, launching the application.
3. **Understanding the Workspace**
   * *Purpose:* Tour the 5-item navigation shell and primary workspace controls.
   * *Key Topics:* Overview, Deploy Studio, Projects & Environments, Audit & Rollback, Guardrails & Settings.

### Category 2: Configuration & Boundaries
4. **Organizations and Projects**
   * *Purpose:* Set up multi-tenant organization boundaries and project workspaces.
   * *Steps:* Adding an organization, registering project slugs, setting default guardrail policies.
5. **Database Connections**
   * *Purpose:* Configure database credentials safely.
   * *Steps:* Server hostname, port (default 1433), database name, Windows Integrated vs SQL authentication, SSL/TLS encryption.
   * *Expected Results:* Testing connection verifies immediate handshake with remote SQL Server.
6. **Environment Configuration**
   * *Purpose:* Define progression stages (Local, Development, Staging, Production).
   * *Steps:* Assigning connections to environments, designating Production environments for strict approval protection.

### Category 3: Deployment Workflow
7. **Creating a Deployment**
   * *Purpose:* Initiate a new migration route between two environments.
   * *Steps:* Choosing project, selecting source environment, selecting target environment, entering deployment title.
8. **Comparing Database Changes**
   * *Purpose:* Discover and compare stored procedures between environments.
   * *Steps:* Auto-discovering objects via `sys.sql_modules`, inspecting side-by-side SQL diffs.
9. **Reviewing SQL Diffs**
   * *Purpose:* Interpret addition, deletion, and modification line bands.
   * *Key Indicators:* Green lines (additions), Red lines (deletions), Yellow lines (modifications), line number gutters.
10. **Pre-Flight Safety Guardrails**
    * *Purpose:* Validate script safety prior to touching any target database.
    * *Rules Verified:* Physical `DROP TABLE` block, physical `TRUNCATE TABLE` block, physical `ALTER TABLE` block, administrative procedure blocker (`xp_cmdshell`), 7-bit ASCII compliance, unqualified `UPDATE`/`DELETE` traps.
11. **Transactional Sandbox Dry-Run**
    * *Purpose:* Execute script against target schema without side effects.
    * *Mechanism:* Runs inside `BEGIN TRAN ... ROLLBACK TRAN`, verifying foreign keys, columns, types, and permissions with guaranteed clean rollback.
12. **Executing Deployments & Vault Snapshots**
    * *Purpose:* Apply approved migration to target database.
    * *Steps:* Pre-change snapshot generated in Vault, SHA-256 computed, migration script applied atomically, live console streaming logs.
13. **Backup Management & 1-Click Rollback**
    * *Purpose:* Instantly restore previous database state in event of production regression.
    * *Steps:* Locating deployment in Audit log, clicking "Rollback", reviewing restore script (`DROP IF EXISTS` + previous definition), verifying rollback outcome.

### Category 4: Optimization & Administration
14. **AI & SARGability Performance Advisor**
    * *Purpose:* Detect query execution plan anti-patterns before deployment.
    * *Patterns Flagged:* `YEAR(DateCol) = ...`, `ISNULL(Col, '') = ...`, `SELECT *`, missing `SET NOCOUNT ON;`, cursors.
15. **Deployment History & Audit Logs**
    * *Purpose:* Search and inspect historical deployment records.
    * *Fields:* Status badge, risk level, execution duration, executed by, execution logs.
16. **Settings & Custom Guardrail Policies**
    * *Purpose:* Customize threshold limits, payload size, forbidden keyword lists, and custom regex policies.
17. **Troubleshooting & FAQ**
    * *Common Issues:* Connection timeouts, SQL Server firewall rules, self-signed certificate trust, WebView2 initialization errors.
