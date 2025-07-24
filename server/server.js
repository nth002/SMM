const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Services API proxy
app.post("/api/services", async (req, res) => {
  try {
    const response = await axios.post("https://safesmmpanel.com/api/v2", {
      key: "72e916d44c6ae2b93154f06f7b6abc423a770318",
      action: "services",
    });

    // Log raw data to confirm structure
    console.log("Services API response:", response.data);

    // Here we assume response.data is an object with services keyed by IDs
    // Convert to array of services with 'service' key as ID
    const data = response.data;
    let servicesArray = [];

    if (Array.isArray(data)) {
      servicesArray = data;
    } else if (typeof data === "object" && data !== null) {
      servicesArray = Object.entries(data).map(([key, val]) => ({
        service: key,
        ...val,
      }));
    }

    res.json(servicesArray);
  } catch (err) {
    console.error("Error fetching services:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// Balance API proxy
app.post("/api/balance", async (req, res) => {
  try {
    const response = await axios.post("https://safesmmpanel.com/api/v2", {
      key: "72e916d44c6ae2b93154f06f7b6abc423a770318",
      action: "balance",
    });

    if (response.data && response.data.balance !== undefined) {
      return res.json({ balance: response.data.balance });
    } else {
      return res.status(500).json({ error: "Invalid response from balance API" });
    }
  } catch (error) {
    console.error("Error fetching balance:", error.message);
    return res.status(500).json({ error: "Failed to fetch balance" });
  }
});

app.post("/api/place-order", async (req, res) => {
  try {
    const { key, action, service, link, quantity, comments, runs, interval } = req.body;

    // Check required fields
    if (!key || !action || !service || !link || !quantity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Build payload with all string values
    const payload = {
      key: String(key),
      action: String(action),
      service: String(service),
      link: String(link),
      quantity: String(quantity),
      comments: comments ? String(comments) : "",
    };
    console.log("payload server : ",payload)

    // Add optional fields only if provided and not "optional"
    if (runs && runs !== "optional") payload.runs = String(runs);
    if (interval && interval !== "optional") payload.interval = String(interval);

    console.log("Payload sent to external API:", payload);

    const apiResponse = await axios.post("https://safesmmpanel.com/api/v2", payload, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response from external API:", apiResponse.data);

    if (apiResponse.data && apiResponse.data.order) {
        return res.json({ success: true, data: apiResponse.data });
    } else {
        return res.status(400).json({ error: apiResponse.data.message || "Failed to place order" });
    }
  } catch (error) {
    console.error("Place order error:", error.response?.data || error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
