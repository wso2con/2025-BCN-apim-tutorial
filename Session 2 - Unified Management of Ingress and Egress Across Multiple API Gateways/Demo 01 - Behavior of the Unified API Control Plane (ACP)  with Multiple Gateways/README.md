# Demo 01 - Behavior of the Unified API Control Plane (ACP) with Multiple Gateways

## The Scenario
**Company:** ForbizLogic, a fast-growing enterprise with services running across multiple clouds and regions.  
**Challenge:** They have different API gateways across AWS, Solace, and on-prem data centers. Managing policies, security, and traffic is fragmented.  
**Solution:** They adopt a Unified API Control Plane (ACP) to centrally manage ingress and egress traffic across all these gateways.

---

## Step 1: Show the Problem (Decentralized Gateways)
### Goal:
Highlight the complexity of managing multiple API gateways separately.

### Demo:
Show four different API gateways running:
- **AWS Gateway**: Used for cloud services running on AWS, ensuring proximity to the backend.
- **Solace Broker**: Chosen for eventing APIs to apply QoS (Quality of Service) for event-driven architecture.
- **Kubernetes Native Gateway**: Adopted by the financial services team after migrating to a microservices-based architecture deployed in a Kubernetes cluster.
- **Universal WSO2 API Gateway**: Used by all other IT teams for its support of various protocols and mediation capabilities.
  - Two different deployments for the following regions:
    - **Europe region**
    - **APAC region**

---

## Step 2: Introduce the Unified ACP (Single Source of Control)
### Goal:
Show how ACP connects and unifies all gateways.

### Demo:
1. **Create API with AWS Gateway**, Deploy it, Invoke.
2. **Create API with Solace Gateway**, Deploy it, Invoke.
3. **Create API with APK Gateway**, Deploy it, Invoke. Then show that API using `kubectl` command, explaining its importance since most users do not directly interact with Kubernetes deployments.
4. **Create Internal API for Universal Gateway**, Deploy it in all environments, Invoke.

### Security:
- Enforce **OAuth for authentication** centrally across all gateways.
- Demonstrate governance capabilities through ACP.
