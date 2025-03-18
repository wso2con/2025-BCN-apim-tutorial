# Demo 02 - AI Gateway Principles and the Functionality of AI/LLM APIs

## The Scenario
**Company:** DeepCrestAI, a SaaS provider offering AI-powered document processing and customer support.  
**Challenge:** They rely on Azure OpenAI but face issues with:
- **Overloaded models** – GPT-4o gets overwhelmed, leading to higher latencies.
- **Failover risk** – If GPT-4o goes down, there's no fallback.
- **Cost inefficiency** – All requests go to GPT-4o, even when GPT-4o-mini suffices.
- **Rate limits** – The app exceeds Azure’s request quotas.
- **No observability** – Lack of visibility into API usage.
- **Regional failures** – No backup if an Azure region fails.

**Solution:** They introduce an AI Gateway that:
- Load balances requests between GPT-4 and GPT-3.5.
- Automatically fails over if a model is unavailable.
- Provides detailed AI-specific analytics dashboards.
- Restricts token utilization to control costs and ensure fair usage.
- Supports multiple endpoints and keys.

---

## Step 1: Introduce the AI Gateway (Model Load Balancing & Failover)
### Goal:
Show how the AI Gateway intelligently distributes traffic.

### Demo:
Deploy the AI Gateway, which integrates:
- **GPT-4o** (high accuracy, high cost, slower).
- **GPT-4o-mini** (faster, cheaper, suitable for most tasks).

**Configure a load balancing policy:**
- 50% of requests go to GPT-4o.
- 50% of requests go to GPT-4o-mini.

Send API requests and show real-time balanced traffic distribution.

---

## Step 2: Failover Handling When a Model Goes Down
### Goal:
Show how the AI Gateway automatically redirects traffic if a model fails.

### Demo:
- Manually block GPT-4o API access (simulate an outage).
- Show AI Gateway instantly redirecting traffic to GPT-4o-mini.
- Open the AI Gateway logs to show real-time failover actions.

---

## Step 3: Observability & Analytics
### Goal:
Show how the AI Gateway monitors API usage and costs.

### Demo:
- Open the **AI Analytics dashboard**.
- Show:
  - Request distribution (GPT-4o vs. GPT-4o-mini).
  - Token usage distribution from load balancing.
  - Latency trends per model.

---

## Additional Requirements
- **Onboard Mistral and OpenAI vendors** and populate analytics data.
- **Additional Demos:**
  - Easily integrate with LangChain and other SDKs since the spec is similar.
  - Onboard Anthropic as a new vendor: [Onboarding Anthropic Claude](https://apim.docs.wso2.com/en/4.5.0/ai-gateway/ai-vendor-management/custom-ai-vendors/onboarding-anthropic-claude/)
