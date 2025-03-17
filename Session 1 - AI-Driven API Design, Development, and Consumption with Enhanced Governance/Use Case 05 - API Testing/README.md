# Use Case 05 - API Testing

Now that we have already created the APIs, this guide walks you through the process of testing an API using AI-powered **APIChat** in WSO2 API Manager. It includes generating API keys for authentication and invoking the API for testing.

## Step 1: Generate API Keys for the Application

Before testing, you need to generate an API key to authenticate requests.

1. Log in to the Developer Portal: `https://<hostname>:9443/devportal` as **david** using the assigned password.
2. Navigate to the **Applications** section.
3. Click on the **ProductMgtApp** application that subscribed to the API.
4. Generate API Keys:
   - Under the **Production Keys** section.
   - Click **Generate Key** to create an access token.

## Step 2: Invoke the API Using APIChat

1. Select the **Product Mgt API** that was designed and navigate to **Try Out** → **API Chat**.
2. Either click on the link given in the banner or click **Configure Keys** to generate one.
3. Click on **Get Test Key**.
4. Enter your query in natural language:
   
   ```
   Add two products to the catalog: Wireless Bluetooth Headphones (ID: 12345, Price: 79.99 USD, Category: Electronics, Brand: SoundX, Stock: 50) and Smart Fitness Watch (ID: 67890, Price: 129.99 USD, Category: Wearables, Brand: FitPro, Stock: 100). Return the newly added products.
   ```
   
5. Click **Execute** to test the API.
6. View and validate the API response. APIChat will display the API response, including:
   - **Status code** (200 OK, 400 Bad Request, etc.)
   - **Response data** (JSON format)

You have successfully tested an API using AI-powered APIChat in WSO2 API Manager!
