const express = require('express');
const app = express();

app.use(express.json());

// Flow endpoint
app.post('/flow', (req, res) => {
  console.log("FLOW DATA RECEIVED:");
  console.log(JSON.stringify(req.body, null, 2));

  res.json({
    success: true
  });
});

// Health check
app.get('/', (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
