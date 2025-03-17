const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 3000;

app.use(express.json());

// Mocked response for listing objects in a bucket
app.get("/s3/buckets/:bucketName/objects", (req, res) => {
  const { bucketName } = req.params;
  res.json({
    bucket: bucketName,
	objects: [
    { "key": "project-docs/report-Q1-2024.pdf", "size": 204800, "lastModified": "2024-03-05T14:23:45Z" },
    { "key": "images/team-photo.jpg", "size": 512000, "lastModified": "2024-03-08T10:15:30Z" },
    { "key": "backups/db-backup-2024-03-09.sql.gz", "size": 10485760, "lastModified": "2024-03-09T02:45:00Z" },
    { "key": "logs/app-server-log-2024-03-10.log", "size": 307200, "lastModified": "2024-03-10T06:10:20Z" },
    { "key": "videos/product-demo.mp4", "size": 52428800, "lastModified": "2024-03-11T18:05:00Z" }
  ],
  });
});

// Mocked response for uploading an object
app.post("/s3/buckets/:bucketName/objects", (req, res) => {
  res.json({ message: "File uploaded successfully", file: "documents/contract.pdf" });
});

// --- Employee Management ---
app.post("/employees", (req, res) => {
  res.json({ message: "Employee created successfully", employeeId: "E001" });
});

app.get("/employees/:employeeId", (req, res) => {
  const { employeeId } = req.params;
  if (employeeId === "E001") {
    res.json({
      employeeId,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Engineering",
      dateOfJoining: "2021-04-15",
      email: "alice.johnson@company.com",
      phone: "+1 234 567 8901"
    });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

app.put("/employees/:employeeId", (req, res) => {
  const { employeeId } = req.params;
  if (employeeId === "E001") {
    res.json({ message: `Employee ${employeeId} updated successfully` });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

app.delete("/employees/:employeeId", (req, res) => {
  const { employeeId } = req.params;
  if (employeeId === "E001") {
    res.json({ message: `Employee ${employeeId} deleted successfully` });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

// --- Internal Messaging ---
app.post("/messages", (req, res) => {
  res.json({ message: "Message sent successfully", messageId: "MSG001" });
});

app.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  if (messageId === "MSG001") {
    res.json({
      messageId,
      sender: "bob.smith@company.com",
      subject: "Project Kickoff",
      body: "The project kickoff meeting is scheduled for March 20th at 10 AM.",
      dateSent: "2024-03-10T09:30:00Z"
    });
  } else {
    res.status(404).json({ message: "Message not found" });
  }
});

app.get("/messages/inbox", (req, res) => {
  res.json({
    messages: [
      { messageId: "MSG001", sender: "bob.smith@company.com", subject: "Project Kickoff" },
      { messageId: "MSG002", sender: "john.doe@company.com", subject: "Lunch Plans" }
    ]
  });
});

app.put("/messages/:messageId/read", (req, res) => {
  const { messageId } = req.params;
  if (messageId === "MSG001") {
    res.json({ message: `Message ${messageId} marked as read` });
  } else {
    res.status(404).json({ message: "Message not found" });
  }
});

// --- Project Management ---
app.post("/projects", (req, res) => {
  res.json({ message: "Project created successfully", projectId: "P001" });
});

app.get("/projects/:projectId", (req, res) => {
  const { projectId } = req.params;
  if (projectId === "P001") {
    res.json({
      projectId,
      name: "Website Redesign",
      status: "In Progress",
      startDate: "2024-02-01",
      endDate: "2024-05-01",
      assignedTeam: ["Alice Johnson", "Bob Smith"],
    });
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.put("/projects/:projectId", (req, res) => {
  const { projectId } = req.params;
  if (projectId === "P001") {
    res.json({ message: `Project ${projectId} updated successfully` });
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.post("/projects/:projectId/tasks", (req, res) => {
  const { projectId } = req.params;
  if (projectId === "P001") {
    res.json({ message: `Task assigned to project ${projectId}`, taskId: "T001" });
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

// --- Financial Records ---
app.post("/financials/expenses", (req, res) => {
  res.json({ message: "Expense recorded successfully", expenseId: "EXP001" });
});

app.get("/financials/expenses/:expenseId", (req, res) => {
  const { expenseId } = req.params;
  if (expenseId === "EXP001") {
    res.json({
      expenseId,
      description: "Business trip to New York",
      amount: 1500.00,
      date: "2024-03-05",
      category: "Travel"
    });
  } else {
    res.status(404).json({ message: "Expense not found" });
  }
});

app.get("/financials/expenses", (req, res) => {
  res.json({
    expenses: [
      { expenseId: "EXP001", description: "Business trip to New York", amount: 1500.00 },
      { expenseId: "EXP002", description: "Office Supplies", amount: 250.00 }
    ]
  });
});

app.put("/financials/expenses/:expenseId", (req, res) => {
  const { expenseId } = req.params;
  if (expenseId === "EXP001") {
    res.json({ message: `Expense ${expenseId} updated successfully` });
  } else {
    res.status(404).json({ message: "Expense not found" });
  }
});

// --- Content Management ---
app.post("/content/articles", (req, res) => {
  res.json({ message: "Article created successfully", articleId: "ART001" });
});

app.get("/content/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  if (articleId === "ART001") {
    res.json({
      articleId,
      title: "The Impact of AI on Healthcare",
      content: "Artificial Intelligence is revolutionizing healthcare by providing predictive analytics, improving diagnostic accuracy...",
      author: "Dr. Emily Clark",
      publishedDate: "2024-03-01"
    });
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

app.get("/content/articles", (req, res) => {
  res.json({
    articles: [
      { articleId: "ART001", title: "The Impact of AI on Healthcare" },
      { articleId: "ART002", title: "Sustainable Development in Urban Planning" }
    ]
  });
});

app.put("/content/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  if (articleId === "ART001") {
    res.json({ message: `Article ${articleId} updated successfully` });
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

// --- System Monitoring ---
app.get("/system/health", (req, res) => {
  res.json({ status: "Healthy", uptime: "10 days", lastChecked: "2024-03-10T10:00:00Z" });
});

app.get("/system/metrics", (req, res) => {
  res.json({
    cpuUsage: "40%",
    memoryUsage: "55%",
    diskSpace: "700GB",
    networkTraffic: "1.2GB"
  });
});

app.get("/system/logs", (req, res) => {
  res.json({
    logs: [
      { timestamp: "2024-03-10T09:00:00Z", level: "INFO", message: "System startup" },
      { timestamp: "2024-03-10T09:15:00Z", level: "ERROR", message: "Failed to connect to database" }
    ]
  });
});

const mockTransactions = [
    { transaction_id: "txn001", account_id: "ACC001", amount: 1500.75, currency: "USD", type: "DEPOSIT", timestamp: "2025-03-17T08:30:00Z" },
    { transaction_id: "txn002", account_id: "ACC002", amount: -200.50, currency: "USD", type: "WITHDRAWAL", timestamp: "2025-03-17T10:15:00Z" },
    { transaction_id: "txn003", account_id: "ACC001", amount: 5000.00, currency: "EUR", type: "TRANSFER", timestamp: "2025-03-17T12:45:00Z" },
];

// Store query execution status
const queryStatus = {};

// --- Redshift Data API Endpoints ---
app.get("/redshift/query", (req, res) => {
    const sql = req.query.sql || "SELECT * FROM transactions";
    console.log(`Executing query: ${sql}`);

    const queryId = "query" + Math.random().toString(36).substr(2, 9);  // Generate a unique query ID
    queryStatus[queryId] = "PROCESSING";

    setTimeout(() => {
        queryStatus[queryId] = "COMPLETED";
    }, 2000); // Simulate processing delay

    res.json({
        queryId: queryId,
        status: "PROCESSING",
        data: mockTransactions,
    });
});

app.post("/redshift/insert", (req, res) => {
    const { account_id, amount, currency, type } = req.body;

    if (!account_id || !amount || !currency || !type) {
        return res.status(400).json({ status: "FAILED", message: "Missing required fields" });
    }

    const transaction = {
        transaction_id: "txn" + Math.random().toString(36).substr(2, 9),  // Generate a unique transaction ID
        account_id,
        amount,
        currency,
        type,
        timestamp: new Date().toISOString(),
    };

    mockTransactions.push(transaction);
    console.log("Inserted:", transaction);

    const queryId = "query" + Math.random().toString(36).substr(2, 9);  // Generate a unique query ID
    queryStatus[queryId] = "PROCESSING";

    setTimeout(() => {
        queryStatus[queryId] = "COMPLETED";
    }, 1500);

    res.json({
        queryId: queryId,
        status: "PROCESSING",
        message: "Transaction recorded successfully",
        transaction: transaction
    });
});

app.get("/redshift/query/status/:queryId", (req, res) => {
    const queryId = req.params.queryId;
    console.log(`Checking status for queryId: ${queryId}`);

    res.json({
        queryId: queryId,
        status: queryStatus[queryId] || "UNKNOWN"
    });
});

// Mock data for Salesforce API responses
// Utility function to generate mock data
const generateMockData = (type) => {
  const mockData = {
    contact: () => ({
      id: Math.random().toString(36).substring(2, 15),
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phone: '555-1234',
      accountName: 'Company Inc.',
      title: 'Software Engineer',
      createdAt: new Date('2020-01-01'),
      updatedAt: new Date('2024-01-01')
    }),
    opportunity: () => ({
      id: Math.random().toString(36).substring(2, 15),
      opportunityName: 'New Business Opportunity',
      stageName: 'Prospecting',
      amount: '10000',
      closeDate: new Date('2025-12-31'),
      accountName: 'Company Inc.',
      owner: 'Jane Smith'
    }),
    account: () => ({
      id: Math.random().toString(36).substring(2, 15),
      name: 'Company Inc.',
      industry: 'Technology',
      annualRevenue: '5000000',
      billingAddress: '123 Business St, Business City, BC 12345',
      phone: '555-6789',
      website: 'http://company.com',
      createdAt: new Date('2020-01-01'),
      updatedAt: new Date('2024-01-01')
    })
  };
  return mockData[type]();
};

// Route for retrieving a contact (GET /contacts/:id)
app.get('/services/contact/:id', (req, res) => {
  res.status(200).json(generateMockData('contact'));
});

// Route for creating a new contact (POST /contacts)
app.post('/services/contact/', (req, res) => {
  const newContact = { ...req.body, id: Math.random().toString(36).substring(2, 15), createdAt: new Date(), updatedAt: new Date() };
  res.status(201).json(newContact);
});

// Route for listing contacts (GET /contacts)
app.get('/services/contact/', (req, res) => {
  res.status(200).json({ records: Array.from({ length: 10 }, () => generateMockData('contact')) });
});

// Route for retrieving an opportunity (GET /opportunities/:id)
app.get('/services/opportunity/:id', (req, res) => {
  res.status(200).json(generateMockData('opportunity'));
});

// Route for listing opportunities (GET /opportunities)
app.get('/services/opportunity/', (req, res) => {
  res.status(200).json({ records: Array.from({ length: 5 }, () => generateMockData('opportunity')) });
});

// Route for retrieving related data (Example: Account of a Contact)
app.get('/services/contact/:id/account', (req, res) => {
  res.status(200).json(generateMockData('account'));
});

// Route for retrieving accounts (GET /accounts)
app.get('/services/account/', (req, res) => {
  res.status(200).json({ records: Array.from({ length: 5 }, () => generateMockData('account')) });
});

// Route for retrieving specific account (GET /accounts/:id)
app.get('/services/account/:id', (req, res) => {
  res.status(200).json(generateMockData('account'));
});

// Route for retrieving contacts for an account (GET /accounts/:id/contacts)
app.get('/services/account/:id/contacts', (req, res) => {
  res.status(200).json({ records: Array.from({ length: 3 }, () => generateMockData('contact')) });
});


app.listen(PORT, () => {
  console.log(`ForBizLogic mock response server running on http://localhost:${PORT}`);
});