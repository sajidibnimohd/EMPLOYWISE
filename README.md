EMPLOYWISE

Overview

EMPLOYWISE is a React-based user management application that interacts with the Reqres API for authentication and user management. The app allows users to log in, view a paginated list of users, edit user details, and delete users.

Features

User Authentication: Users can log in with predefined credentials.

User Listing: Fetch and display users in a paginated format.

Edit User: Update user details.

Delete User: Remove users from the list.

Client-side Storage: Stores login token and edited user details locally.

Technologies Used

React (Frontend framework)

React Router (Navigation)

Axios (API requests)

Tailwind CSS (Styling)

Local Storage (Data persistence for edits)

API Endpoints Used

Login: POST https://reqres.in/api/login

Get Users: GET https://reqres.in/api/users?page=1

Edit User: PUT https://reqres.in/api/users/{id}

Delete User: DELETE https://reqres.in/api/users/{id}

Installation

1️⃣ Clone the Repository

git clone https://github.com/sajidibnimohd/EMPLOYWISE.git
cd EMPLOYWISE

2️⃣ Install Dependencies

npm install

3️⃣ Start the Application

npm start

This will start the application at http://localhost:3000/.

Usage

🔑 Login

Enter the following credentials:

Email: eve.holt@reqres.in

Password: cityslicka

Click the Login button.

Upon successful login, you will be redirected to the Users List page.

👥 Users List

Users are displayed in a paginated format.

Click Edit to modify user details.

Click Delete to remove a user.

✏️ Edit User

Click the Edit button on any user.

Modify the first name, last name, or email.

Click Update to save changes.

⚠ Note: Since the Reqres API does not persist data, changes are stored locally.

Deployment

You can deploy this project using Vercel, Netlify, or any hosting platform.

Deploy on Vercel

npm install -g vercel
vercel

Folder Structure
/EMPLOYWISE
│── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── UsersList.js
│   │   ├── EditUser.js
│   ├── App.js
│   ├── index.js
│── public/
│── README.md
│── package.json
