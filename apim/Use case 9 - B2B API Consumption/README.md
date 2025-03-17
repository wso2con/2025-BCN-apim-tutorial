# B2B API Consumption

## Prerequisites

1. Setup an organization supported Identity Server. Follow the steps outlined in [guide](https://apim.docs.wso2.com/en/4.5.0/design/b2b-api-management/setup-identity-server/) without creating organizations.

2. Follow the steps provided under  [documentation](https://apim.docs.wso2.com/en/4.5.0/design/b2b-api-management/api-consumption/#set-up-wso2-api-manager) to configure the API Manager for B2B setup.

## Steps

1. **Create organizations and users in WSO2 Identity Server**


    | **Username** | **Partner Organization**                        | **Role - IS (API-M)**           |
    |--------------|-------------------------------------------------|---------------------------------|
    | Ethan        | SupplySync  (Supplier and Manufacturer)         | devportal (Internal/subscriber) |
    | Bob          | FullfillHub  (Warehouse and Fulfillment center) | devportal (Internal/subscriber) |
    | Sophie       | RetailNet (Retail Partner)                      | devportal (Internal/subscriber) |

    Repeat following steps for all the 3 organizations.

    a. **Create an organization in WSO2 Identity Server**

    - Login to your organization (root) from the WSO2 Identity Server Console - `https://<hostname>:<port>/console` as `admin` using the assigned password.
    - Navigate to `Organizations` and click `+ New Organization`.
    - In the Create Organization dialog box that opens, enter the name provided above for organization.
    - Click `Create` to add the new organization.
    - Save the Organization ID, as it is required for registering the organization in WSO2 API Manager.
    - View the created organization under Organizations.

    b. **Create users for the created organization in WSO2 Identity Server**

    - Click the Switch icon next to the organization name to access its console.
    - Navigate to `User Management` → `Users` and add the specified user for each organization.
    - Assign the required role to each user:
        - Go to `Roles`.
        - Click on the `devportal` role.
        - Assign the created user to this role.
        - Click `Update` to save the changes.

2. **Register Organizations in WSO2 API Manager**

    First you need to map the organization in the Identity Server to the API Manager. Repeat following steps for all the 3 organizations.

- Log in to Admin portal as `orgadmin` using the assigned password (You cannot use `admin`/`admin` for this because locally created admin user does not belong to any organization).
- Go to Organizations Tab and select Register Organization. 
- Use the Organization IDs you got during organization registration step in WSO2 Identity Server as the Reference IDs.
- Click `Save`.

3. **Set Organization Visibility for APIs**

    We can set APIs to be visible for users in all organizations, current organization, or set of organizations.

- Login to API Publisher Portal using as `larry` using the assigned password (with `creator` and `publisher` roles).
- Select an API that was created.
- At the top bar, click `Share` button.
- Under `Share API`, select `Share with only selected organizations`.
- Select which organization you need to share and select organization specific business plans as well and save.

    | **Organization** | **Business Plans** |
    |------------------|--------------------|
    | RetailNet        | Bronze             |
    | SupplySync       | Gold               |

4. **Discover and Consume the API**

- Login to the Developer Portal and Click Login button.
- Use the SSO option and give the organization name as `RetailNet` and Login as `Sophie` (user created under `RetailNet`)
- You should be able to see APIs shared with the RetailNet organization.
- Create a new application and subscribe to the API.
- Generate the keys for the application.
- Try out the API by generating an access token.
- Logout and attempt to log in again as `bob` from `FulfillHub` organization. You won't be able to see the API since it wasn't shared with `FulfillHub`.
