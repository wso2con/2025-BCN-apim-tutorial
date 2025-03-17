# Prerequisites

## Step 1: Sign in to the AI Subscription Portal

Before using AI-assisted API design, you must subscribe to WSO2’s AI services.

1. Navigate to the [AI Subscription Portal](https://ai-subscriptions.wso2.com).
2. Sign in with your WSO2 credentials. If you don’t have an account, register for one.
3. Subscribe to the AI services by clicking on **New Subscription**. Ensure to select **wso2am** as the product.
4. Keep this key secure, as it will be required to enable AI features in WSO2 API Manager.

## Step 2: Install, Configure and Run WSO2 API Manager

### 2.1 Install WSO2 API Manager

1. Download WSO2 API Manager (version 4.5.0) from the WSO2 official site.
2. Extract the package to your preferred directory. For example:
   
   **On Linux/macOS:**
   ```sh
   tar -xvf wso2am-4.5.0.tar.gz
   cd wso2am-4.5.0/bin
   ```
   
   **On Windows:** Extract the ZIP file and navigate to the `bin` directory.

### 2.2 Configure the `deployment.toml` file

1. Open the `deployment.toml` file located at:
   ```
   <WSO2_HOME>/repository/conf/deployment.toml
   ```

2. Enable AI features by adding the following configuration:
   
   ```toml
   [apim.ai]
   enable = true
   endpoint = "https://dev-tools.wso2.com/apim-ai-service/v2"
   key = "<key that you obtained from the ai subscription portal>"
   token_endpoint = "https://api.asgardeo.io/t/wso2devtools/oauth2/token"
   ```

3. Save the `deployment.toml` file.

### 2.3 Run the WSO2 API Manager Server

After saving the changes, start the WSO2 API Manager:

**On Linux/macOS:**
```sh
sh wso2server.sh
```

**On Windows:**
```sh
wso2server.bat
```

Once the server starts, you can access the below listed protals:

- **API Publisher:** `https://<hostname>:9443/publisher/`
- **Developer Portal:** `https://<hostname>:9443/devportal/`
- **Admin Portal:** `https://<hostname>:9443/admin/`
- **Management Console:** `https://<hostname>:9443/carbon/`

## Step 3: Create Users

1. Log in to the Management Console at: `https://<hostname>:9443/carbon`
2. Create the following user personas and assign them the appropriate roles:

    | Username | Role |
    |----------|-----------------------------|
    | larry    | API Owner (Internal/creator) |
    | emily    | API Product Manager (Internal/publisher) |
    | david    | Partner App Developer (Internal/subscriber) |
    | admin    | System Admin (admin) - This is already created by default |
    | orgadmin | Organization Admin (admin and everyone) |
