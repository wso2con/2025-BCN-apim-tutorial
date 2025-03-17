# Use Case 02 - API Governance

Now that we've created the API and applied essential QoS policies like security and rate limiting, it's time to validate compliance with the defined governance policies.

## Step 1: Create and Manage Rulesets

1. Log in to the Admin Portal at: `https://<hostname>:9443/admin` as the **admin** with the assigned password.
2. Go to the **Governance** section in the main menu.
3. Click **Rulesets Catalog** to view all available rulesets.
4. Click **Create Ruleset** to create a new one and enter the following information:
   - **Name**: Organization Rules
   - **Ruleset Type**: API Metadata
   - **Artifact Type**: REST API
   - **Ruleset Content**:

   ```yaml
   rules:
     api-resources-security-required:
       description: "Checks that security is enabled for all resources."
       message: "Security is not enabled for all resources."
       severity: "error"
       given: "$.data.operations.*"
       then:
         field: "authType"
         function: "pattern"
         functionOptions:
           notMatch: "None"

     api-tags:
       description: "API should have tags."
       message: "API should have tags."
       severity: "warn"
       given: "$.data"
       then:
         field: "tags"
         function: "truthy"

     api-business-owner-email:
       description: "Checks that the business owner’s email is set."
       message: "Business owner email is missing or empty."
       severity: "warn"
       given: "$.data.businessInformation"
       then:
         field: "businessOwnerEmail"
         function: "truthy"
   ```

5. Click **Create**.

## Step 2: Create a Label

1. Navigate to the **Labels** section in the Admin Portal.
2. Create a **Label** as **E-Commerce**.

## Step 3: Create and Manage Policies

1. Navigate to the **Governance** section in the Admin Portal.
2. Click **Policies** to view the list of available policies.
3. Click **Create Policy** to create a new one and enter the following information:
   - **Name**: E-Commerce Policy
   - **Attachment**: APIs with Specific Labels and select the **Label: E-Commerce**.
   - **Enforcement**: Add **API deploy** as an enforcement criteria and select **Block** as the action for all the cases.
   - **Rulesets**: Select the ruleset created in the previous step.
4. Click **Create** to finalize the policy.

## Step 4: API Compliance Dashboard

1. Log in to the API Publisher at: `https://<hostname>:9443/publisher` as **larry** using the assigned password. 
2. Select the **Product Mgt API** that was created and navigate to the **Basic Info** section under **Portal Configurations**.
3. Add **E-Commerce** label to the API.
4. Navigate to **“Deploy” → “Deployments”** and try to deploy the API.
5. Review and validate compliance rules, and resolve any errors to ensure the successful deployment of the API.
