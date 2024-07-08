const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MSSQL Configuration
const dbConfig = {
    server: 'ROY\\SQLEXPRESS',
    database: 'tenant', // Set the database name to 'tenant'
    options: {
        encrypt: true, // Use this if you're on Azure or want encryption
        trustServerCertificate: true, // Change to true for development environment
        enableArithAbort: true
    },
    authentication: {
        type: 'ntlm',
        options: {
            domain: 'ROY', // This is the domain name part of the username
            userName: 'wanjo',
            password: '', // Can be left empty if using Windows Authentication
            workstation: '' // Optional
        }
    }
};

// Connect to MSSQL
sql.connect(dbConfig, err => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Database connected successfully.');
    }
});

// Register a new tenant
app.post('/api/register', async (req, res) => {
    const { name, email, password, status, houseDetails, paymentStatus } = req.body;
    try {
        const result = await sql.query`INSERT INTO Tenants (name, email, password, status, houseDetails, paymentStatus) VALUES (${name}, ${email}, ${password}, ${status}, ${houseDetails}, ${paymentStatus})`;
        res.status(201).send({ message: 'Tenant registered successfully.' });
    } catch (err) {
        res.status(500).send('Error registering tenant.');
    }
});

// Get all tenants
app.get('/api/tenants', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Tenants');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send('Error retrieving tenants.');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
