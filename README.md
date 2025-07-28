# 📊 CSV Upload and User Age Distribution API

This project is a RESTful API built with **Node.js**, **Express.js**, and **MySQL** that:

- Fetches a CSV file from a URL
- Converts the CSV to JSON
- Formats the data (name, age, address, gender, etc.)
- Stores it in a MySQL database
- Provides age group distribution of users via a public API

---

## 🚀 Features

✅ Fetch CSV from remote URL  
✅ Convert CSV to formatted JSON  
✅ Insert data into MySQL  
✅ Categorize users by age groups  
✅ Middleware-based logging and error handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL2
- Axios
- dotenv

---

## ⚙️ .env Variables

```env
PORT=8080
FILEPATH=http://example.com/data.csv
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=public
```

---

## 📁 Folder Structure

```
├── assets/
│ └── data.csv 
├── config/
│ └── db.js 
├── helper/
│ ├── csvtojson.js 
│ ├── dataFormat.js 
│ ├── mysqlInsert.js 
│ └── mysqlDistribution.js 
├── middleware/
│ └── logger.js
├── .env 
├── .gitignore
├── package.json
├── package-lock.json
└── server.js 
```
---

## 👨‍💻 Author

- **Name:** Sumanraj Bera  
- **GitHub:** [github.com/SumanrajBera](https://github.com/SumanrajBera)  
- **Email:** berasumanraj@gmail.com

---
