# ASAP-FAQs

  

Ask and Answer Frequently Asked Questions. It uses Express as backend and React as frontend, and MongoDB as database.

  

## Installation

  

- ### Create .env file in Backend Folder

In backend folder create .env file

```bash
cd backend/
```

```bash
touch .env
```

Enter the text **MONGODB_URI=< Your  MongoDB  URI >** in the file. You can quickly setup temporary MongoDB using [Railway](https://railway.com/) or read the [docs](https://dev.to/isnan__h/how-to-setup-a-free-mongodb-database-on-railway-fi)

  

- ### Run the Backend

```bash
cd backend/
```
```bash
npm i
```
```bash
npm start
```

*After Successfull running of backend you would see the line "Server is running on port 5000" and "Connected to MongoDB"*

- ### Run the Frontend [Optional]

*I have created a small fronted that uses these APIs, if you just want to test API then you can skip this step*   

Make sure you are in root directory
```bash
cd frontend/
```
```bash
npm i
```
```bash
npm run dev
```
*Click on the link provided and run the web app*

In this app, Anyone can ask the questions, but questions can be answered only by Admin. To Login as Admin click on Login Button.
#### Credentials
```bash
Email: admin@example.com
Password: admin@123
```
(Offcourse Authentication System can be made much stronger, but this will do for now)
After Login, you can see a "Give Answer" Button to answer the questions.
  

## API ROUTES
**1. Upload/Post a Question**  
 ```bash
curl -X POST -H "Content-Type: application/json" -d '{"question":"<Your Question>", "answer":"<Answer if any>"}' localhost:5000/api/faqs
```

**2. Get all the Frequently Asked Questions (FAQs)**
 ```bash
curl localhost:5000/api/faqs
```

**3. Get only a specific FAQ using id** 
 ```bash
curl localhost:5000/api/faqs/<id>
```
*Replace < id > with FAQ id*

**4.  Get all the Frequently Asked Questions (FAQs) in other language**
 ```bash
curl localhost:5000/api/faqs?lang=<lang>
```

**5. Get only a specific FAQ using id and in some other language** 
 ```bash
curl localhost:5000/api/faqs/<id>?lang=<lang>
```

**6. Update Specific Question using id** 
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"question":"<New Question>", "answer":"<New Answer>"}' localhost:5000/api/faqs/679f3ec4b5f32fd3780444ab
```

## Example Usage API
```bash
#Post a FAQ
curl -X POST -H "Content-Type: application/json" -d '{"question":"What is 2+2?", "answer":"It is four"}' localhost:5000/api/faqs

# Fetch all FAQs in English (default)
curl http://localhost:8000/api/faqs/

# Fetch FAQs in Hindi
curl http://localhost:8000/api/faqs?lang=hi

# Fetch FAQs in Bengali
curl http://localhost:8000/api/faqs?lang=bn

# Fetch a spcific FAQ in English (default) using id
curl http://localhost:8000/api/faqs/679f3ec4b5f32fd3780444ab

# Fetch a spcific FAQ in Hindi using id
curl http://localhost:8000/api/faqs/679f3ec4b5f32fd3780444ab?lang=hi

#Update a specific FAQ using id
curl -X PUT -H "Content-Type: application/json" -d '{"question":"What is 43+45", "answer":"I dont know"}' localhost:5000/api/faqs/679f3ec4b5f32fd3780444ab

```

