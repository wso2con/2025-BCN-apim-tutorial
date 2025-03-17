# Create API with AI

Follow these steps to create an API with AI in the API Publisher.

## Prerequisites

    Before you start, add the following configuration to the `deployment.toml` file.

    ```
    [apim.ai]
    enable = true
    endpoint = "https://dev-tools.wso2.com/apim-ai-service/v2"
    key = "<use key that you generated>"
    token_endpoint = "https://api.asgardeo.io/t/wso2devtools/oauth2/token"
    ```

1. **Access the API Publisher**

    Navigate to [API Publisher](https://localhost:9443/publisher) and log in with your credentials:

    ```
    Username: apiprovider
    Password: user123
    ```

2. **Create API with AI**

    1. Click on **Create API with AI**. 
    2. Click **Try It** or type **Create an API for a coffee shop** in the text input.
    3. Verify the generated API definition.
    4. Once the definition meets your requirements, click **Create API**.
    5. API details can be seen. Click **Create** to create the API.

3. **API Deployment**

    1. To deploy the API, under **Deploy**, select **Deployments**.
    2. Select **Default** gateway and click **Deploy**.

4. **Testing and Publishing**

    1. Select **Try Out**.
    2. Select the created resources and click **Try it out**. Then click **Execute** to invoke the resources.
    3. Select **Lifecycle**.
    4. Then click **Publish** to publish the API.
