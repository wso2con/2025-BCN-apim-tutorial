# API Creation

Follow these steps to create, deploy, publish and invoke an API.

## Prerequisites

Ensure that the Train Operation application is deployed on the Tomcat server. You can refer to the instructions provided in the [ReadMe](../resources/backends/train-operations/README.md) for setup guidance.

## Create, Deploy and Publish an API

1. **Access the Publisher Portal**

    Navigate to [Publisher Portal](https://localhost:9443/publisher) and log in with admin credentials:

    ```
    Username: admin
    Password: admin
    ```

2. **Create StationInformation API**

    Select **REST API** and choose **Start From Scratch**. Enter the following details and click **Create**. Replace <tomcat-server-ip> and <port> accordingly.

    ```
    Name: StationInformation
    Context: station-information
    Version: 1.0.0
    Endpoint: http://<tomcat-server-ip>:<port>/train-operations/v1/
    ```

3. **Portal Configurations**

    1. Select **Portal Configurations**.
    2. Select **Basic Info** and update the following information:

    ```
    Image: <../resources/APIs/stationInformation/icon.png>
    Description: Station information API
    Tags: train, information, gogo
    Make this the default version: Yes
    GitHub URL: https://github.com/gogo/station-information
    Slack URL: https://app.slack.com/huddle/T06U35HMPPA/C06TEBVVALS
    ```

    3. Click **Save** to update the basic information.

4. **Business Info**

    Update the following business information and click **Save**:

    ```
    Business Owner: Boby
    Business Owner Email: boby@gogo.com
    Technical Owner: Boby
    Technical Owner Email: boby@gogo.com
    ```

5. **Add API Documentation**

    1. Select **Document**.
    2. Click **Add New Document** and provide the following:

    ```
    Name: Station Information API Documentation
    Summary: This documentation provides a detailed guide for developers on how to interact with the Station API.
    Source: Markdown
    ```

    3. Click **Add Document**. Then click **Add Content**.
    4. Copy the content from <source> and paste it into the window. Then click **Update Content**.

6. **Comments**

    Add the following comment:

    > Hello developers! We invite you to explore and test our Train Station API. Your feedback is valuable to us, so please give it a try and share your thoughts with us. We appreciate your input!

    Click **Comment** to save the comment.

7. **API Configuration**

    1. Select **API Configurations** and then **Resources**.
    2. Add the following two resources to the API:

        - **Retrieve stations**
            - **HTTP Verb:** GET
            - **URI Pattern:** /stations
        - **Retrieve specific station**
            - **HTTP Verb:** GET
            - **URI Pattern:** /stations/{station_id}

    3. Click **Endpoints** and select **HTTP/ REST Endpoint**.
    4. Update the endpoints as follows:

    ```
    Production Endpoint: http://backend-service:8080/train-operations/v1
    Sandbox Endpoint: http://backend-service:8080/train-operations/v1
    ```

    5. Click **Save** to update the endpoints.

8. **Update API Definition**

    1. Select **API Definition** and Click **Edit**.
    2. Replace the API Definition with [station_information_api.yaml](../resources/APIs/stationInformation/station_information_api.yaml).
    3. Click **Update Content** then click **Save**.

9. **Deploy API**

    1. To deploy the API, under **Deploy**, select **Deployments**.
    2. Select **Default** gateway and click **Deploy**.

10. **Test API**

    1. Under **Test**, select **Try Out**.
    2. Select the created resources and click **Try it out**. Then click **Execute** to invoke the resources.

11. **Publish API**

    1. Under **Publish**, select **Lifecycle**.
    2. Then click **Publish** to publish the API.

## API Discovery and Subscription

1. Access the Developer Portal

    Navigate to [Devportal](https://localhost:9443/devportal) and log in with admin credentials:

    ```
    Username: admin
    Password: admin
    ``` 

2. **Use Marketplace Assistant for API Discovert**

    1. Click the chat icon appearing at the bottom right corner to open **API Marketplace Assistant**.
    2. Use this bot to search for APIs using natural language. The AI Assistant will suggest APIs based on your input. Example queries include:

        ```
        Hello! I'm looking to build a application to retrieve train station related information. What APIs can I use to achieve this?
        ```
4. **Create an Application**

    1. Select **Applications** → Click **ADD NEW APPLICATION**.
    2. Fill in the fields and click **Save**:

    ```
    Application Name: SampleApp
    Shared Quota for Application Tokens: 10PerMin
    Application Description: Sample application. Allows 10 requests per minute.
    ```

5. **Subscribe to the API**

    Navigate to **Subscriptions** → Click **SUBSCRIBE APIS**. Locate the “StationInformation” API → Click **SUBSCRIBE** and exit.

6. **Generate Access Tokens**

    1. Go to **Production Keys** → Select **OAuth2 Tokens**.
    2. Click **GENERATE KEYS** → Click **GENERATE ACCESS TOKEN** → Click **GENERATE**.
    3. Copy the access token and keep it aside.

## Invoke an API

7. **Invoke the API**

    1. Select the “StationInformation” API either from the Devportal landing page, or from the Marketplace assistant suggestion.
    1. Navigate to **API CONSOLE** → Under **Try Out**.
    2. Paste the Access Token.
    3. Select the resource you wish to invoke.
    4. Click **Try It Out**.
    5. Click **Execute** to test the API.

8. **Invoke the API using APIChat**

    1. Select the “StationInformation” API.
    1. Navigate to **Try Out** → **API CHAT**.
    2. Click **CONFIGURE KEY**, paste the previously copied Access Token → Click **Done**.
    3. Enter your query → Click **EXECUTE**. Example queries include:

        ```
        Find me the station named ‘King's Cross’
        Get the station named Waterloo and add a platform named 'Platform 9 3/4' with 500 capacity
        ```
    4. View and validate the API Response. APIChat will display the API response, including:
        - Status code (200 OK, 400 Bad Request, etc.)
        - Response data

9. **Rate and Comment on the API**

    1. To rate the API, go to the **Overview** page → Click the star icon.
    2. Under comments, click **Write a comment**. Example comment:

    ```
    Easy to use and well-documented. Looking forward to seeing what else the team has in store!
    ```

