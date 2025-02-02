require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection and Schema Setup
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FAQ = mongoose.model("FAQ", faqSchema);

// Get all FAQs
async function translateText(text, targetLang) {
  return text + "Consider that this is " + targetLang;
}

app.get("/api/faqs", async (req, res) => {
  const { lang } = req.query;
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    if (lang && lang !== "en") {
      for (let faq of faqs) {
        faq.question = await translateText(faq.question, lang);
        faq.answer = await translateText(faq.answer, lang);
      }
    }
    res.status(200).json(faqs);
  } catch (err) {
    res.status(400).json({ error: "Error fetching FAQs", details: err.message });
  }
});

app.get("/api/faqs/:id", async (req, res) => {
  const { id } = req.params;
  const { lang } = req.query;
  try {
    const faq = await FAQ.findById(id);
    if (!faq) {
      return res.status(404).json({ error: "FAQ not found" });
    }
    if (lang && lang !== "en") {
      faq.question = await translateText(faq.question, lang);
      faq.answer = await translateText(faq.answer, lang);
    }
    res.status(200).json(faq);
  } catch (err) {
    res.status(400).json({ error: "Error fetching this FAQ", details: err.message });
  }
});

// Post new FAQ
app.post("/api/faqs", async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json({ message: "FAQ saved successfully", faq: newFAQ });
  } catch (err) {
    res.status(400).json({ error: "Error saving FAQ", details: err.message });
  }
});

// Update an existing FAQ
app.put("/api/faqs/:id", async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true, runValidators: true });

    if (!updatedFAQ) {
      return res.status(404).json({ error: "FAQ not found" });
    }

    res.status(200).json({ message: "FAQ updated successfully", faq: updatedFAQ });
  } catch (err) {
    res.status(400).json({ error: "Error updating FAQ", details: err.message });
  }
});

// Login as ADMIN
const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "admin@123",
};

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    res.status(200).json({ message: "Login successful", token: "fake-admin-token" });
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
