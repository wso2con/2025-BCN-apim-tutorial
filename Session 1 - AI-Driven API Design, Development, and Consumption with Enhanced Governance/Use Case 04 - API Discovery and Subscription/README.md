# Use Case 04 - API Discovery and Subscription

## Step 1: Discover APIs in the Developer Portal

1. Log in to the Developer Portal: `https://<hostname>:9443/devportal` as **david** using the assigned password.
2. Use AI Marketplace Assistant for API Discovery:
   - In the Developer Portal, go to **Marketplace Assistant**.
   - Enter the following prompt:
     
     ```
     Hello! I'm looking to modernise an online e-commerce store where I'll need to manage the products management, categories, inventory, and the payments.
     ```
   
   - The AI Assistant will suggest the APIs based on the input.

## Step 2: Create a New Application for API Subscription

1. In the Developer Portal, navigate to the **Applications** tab.
2. Click on **Add New Application**.
3. Provide the following details:
   - **Application Name**: ProductMgtApp
   - **Tier Selection**: Choose an appropriate throttling tier.
4. Click **Save** to save the application.

## Step 3: Subscribe to an API

1. Select the **Product Mgt API** that was designed previously.
2. Go to the **Subscriptions** tab.
3. Select the **ProductMgtApp** application created earlier.
4. Select the **subscription plan** (e.g., Bronze: 1000 requests/min, Gold: 5000 requests/min).
5. Click **Subscribe**.

The API will now be linked to your application. You have successfully discovered an API, created an application, and subscribed to the API.
