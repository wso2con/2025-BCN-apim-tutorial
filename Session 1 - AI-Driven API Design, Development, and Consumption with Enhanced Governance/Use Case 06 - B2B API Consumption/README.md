# Use Case 06 - B2B API Consumption

## Step 1: Configure B2B Setup in WSO2 Identity Server

Follow the steps provided under [WSO2 API Manager B2B API Management](https://apim.docs.wso2.com/en/4.5.0/design/b2b-api-management/api-consumption/) to configure the B2B setup.

After completing the setup, proceed with creating the following organizations and users in WSO2 API Manager and Identity Server:

| Username | Partner Organisation | Role | Responsibility |
|----------|----------------------|------|---------------|
| Ethan    | SupplySync (Supplier and Manufacturer) | App Developer (Internal/subscriber) | Discover, subscribe, and utilize the Product Management API |
| Bob      | FulfillHub (Warehouse and Fulfillment Center) | App Developer (Internal/subscriber) | Discover, subscribe, and utilize the Product Management API |
| Sophie   | RetailNet (Retail Partner) | App Developer (Internal/subscriber) | Discover, subscribe, and utilize the Product Management API |

## Step 2: Create an Organization in WSO2 Identity Server (Repeat for All Organizations)

1. Log in to your root organization from the WSO2 Identity Server Console: `https://<hostname>:<port>/console` as **admin** using the assigned password.
2. Navigate to **Organization Management** → **Organizations** and click **Add Organization**.
3. In the Add Organization dialog box that opens, enter the name provided above for organization.
4. Click **Register** to add the new organization.
5. Save the **Organization ID** (needed for registering the organization in WSO2 API Manager).
6. View the created organization under **Organizations**.

## Step 3: Create Users for the Created Organization in WSO2 Identity Server (Repeat for All Organizations).

1. Click the **Switch** icon next to the organization name to access its console.
2. Navigate to **User Management** → **Users** and add the specified user for each organization.
3. Assign the required role to each user:
   - Go to **Roles**.
   - Click on the **Subscriber** role.
4. Assign the created user to this role.
5. Click **Update** to save the changes.

## Step 4: Register Organizations in WSO2 API Manager (Repeat for All Organizations)

First you need to map the organization in the identity server in the API manager.

1. Log in to the **Admin Portal**: `https://<hostname>:9443/admin/` as **orgadmin** using the assigned password.
   - Note: You cannot use `admin/admin` as this user does not belong to any organization.
2. Go to the **Organizations** tab and select **Register Organization**.
3. Use the **Organization IDs** you got during organization registration step in WSO2 Identity Server as the **Reference IDs**.
4. Click **Save**.

## Step 5: Set Organization Visibility for APIs

We can set APIs to be visible for users in all organizations, current organization, or set of organizations.

1. Log in to the **API Publisher Portal** as **larry** using the assigned password (with creator and publisher roles).
2. Select the **Product Mgt API** that was created.
3. Click the **Share** button in the top bar.
4. Under **Share API**, select **Share with only selected organizations**.
5. Select which organization you need to share and select organization specific business plans as well and save.

| Organization | Business Plans |
|-------------|---------------|
| RetailNet   | Bronze        |
| SupplySync  | Gold          |

6. Click **Save**.

## Step 6: Discover and Consume the API

1. Log in to the **Developer Portal** and click the **Login** button.
2. Use the **SSO** option and give the organization name as **RetailNet** and Login as sophie (user created under RetailNet).
3. You should be able to see APIs shared with the **RetailNet** organization.
4. Create a new application and subscribe to the **Product Mgt API**.
5. Generate the keys for the application.
6. Try out the API by generating an access token.
7. Logout and attempt to log in again as **bob** from FulfillHub organization. You won't be able to see the API since it wasn't shared with FulfillHub.

By completing these steps, you have successfully set up B2B API consumption with organization-specific visibility and access controls.
