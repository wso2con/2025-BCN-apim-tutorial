# Governing API Management

## Prerequisites

1. **Access the Admin Portal**

   Visit [Admin Portal](https://localhost:9443/admin) and log in using the following credentials:

    ```
    Username: admin
    Password: admin
    ```
   
2. Navigate to **Labels** section
   - Select **Add Label**. 
   - Provide the following details and click on **Save**:
      - **Name**: `Healthcare`
      - **Description**: `Label for healthcare APIs`


3. Navigate to **Governance --> Ruleset Catalog** section 

    - Click on **Create Ruleset**.
   - Provide the following details and click on **Create**:

       - **Name**: `Healthcare Security Best Practices`
       - **Description**: `Ruleset for healthcare APIs`
       - **Ruleset Type**: `API Metadata`
       - **Artifact Type**: `REST API`
       - **Ruleset Content**: [healthcare-security-best-practices.yaml](../resources/governance/healthcare-security-best-practices.yaml)


4. Navigate to **Governance --> Policies** section

    - Click on **Create Policy**. 
    - Provide the following details and click on **Create**:
   
      - **Name**: `Healthcare Best Practices Policy`
      - **Description**: `Governance policy to enforce best practices for healthcare APIs`
      - **Attachment**: Select `APIs with specific labels` and choose the `Healthcare` label
      - **Enforcement** :  Click on **Add Enforcement Criteria** and select the `API Deploy` as the Governed State. Then, update `Error` level action to `Block` and click save.
      - **Rulesets**: Select the `Healthcare Security Best Practices` ruleset


5. **Access the Publisher Portal**

   Visit [Publisher Portal](https://localhost:9443/publisher) and log in using the following credentials:

    ```
    Username: admin
    Password: admin
    ```
 
  
6. Create a REST API. Provide the following details and click on **Create**:

    - **Name**: `PatientInformationAPI`
    - **Context**: `patient-information`
    - **Version**: `1.0.0`
    - **Endpoint**: `https://httpbin.org/anything`
    - **Gateway**: `Universal Gateway`



7. Navigate to **Develop --> Portal Configurations --> Basic Info** section 
   - Click on **`+` Icon** in **Labels** section and select the `Healthcare` label.


8. Navigate to **Deploy --> Deployments** and click on **Deploy** to deploy the API.

**Note that the API deployment will fail due to the enforcement criteria set in the `Healthcare Best Practices` policy.** 
Now let's update the API to comply with the security best practices and re-try the deployment.


9. Navigate to **Develop --> Portal Configurations --> Subscriptions** section 
    - Uncheck the `Unlimited` plan 
    - Check the `Gold` plan
    - Click on **Save**.


10. Navigate to **Develop --> API Configurations --> Runtime** section.
    - Expand **Transport Level Security** option
    - Uncheck the `HTTP` option
    - Click on **Save**.


11. Now again navigate to **Deploy --> Deployments** and click on **Deploy** to deploy the API.

**Note that the API is now successfully deployed as it complies with the security best practices defined in the `Healthcare Best Practices` policy.**


12. Navigate to **Compliance** section of the API and verify that the API complies with the `Healthcare Security Best Practices` ruleset.


**Note that if the compliance state is still `Pending` wait for a couple of minutes and refresh the page.**


13. **Access the Admin Portal** and navigate to **Governance --> Compliance** section to view the **organizational compliance dashboard** as an admin.



   


