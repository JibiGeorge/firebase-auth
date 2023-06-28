# Firebase Authentication for Sign-In with Google, GitHub, and Mobile Number
This repository contains a project that demonstrates how to implement Firebase Authentication for sign-in using various methods such as Google, GitHub, and mobile number. The project leverages the power of Firebase Authentication to provide a seamless and secure sign-in experience for users.

## Features
- Sign-in with Google: Users can sign in to the application using their Google accounts, allowing for easy access and authentication.
- Sign-in with GitHub: Users can also choose to sign in using their GitHub accounts, providing an alternative sign-in method.
- Sign-in with Mobile Number: The project also supports sign-in with mobile number, allowing users to authenticate using their phone numbers and verification codes.

## Technologies Used
- Firebase Authentication: Firebase Authentication is a powerful service that provides easy-to-use SDKs and ready-to-use UI libraries to authenticate users in your application.

## Packages Used
```bash
    "dependencies": {
        "@emotion/react": "^11.11.1",
        "@emotion/styled": "^11.11.0",
        "@mui/icons-material": "^5.11.16",
        "@mui/material": "^5.13.6",
        "@reduxjs/toolkit": "^1.9.5",
        "@types/node": "20.3.1",
        "@types/react": "18.2.14",
        "@types/react-dom": "18.2.6",
        "autoprefixer": "10.4.14",
        "dotenv": "^16.3.1",
        "eslint": "8.43.0",
        "eslint-config-next": "13.4.7",
        "firebase": "^9.23.0",
        "next": "13.4.7",
        "postcss": "8.4.24",
        "react": "18.2.0",
        "react-dom": "18.2.0",
        "react-firebase-hooks": "^5.1.1",
        "react-icons": "^4.10.1",
        "react-otp-input": "^3.0.2",
        "react-phone-input-2": "^2.15.1",
        "react-redux": "^8.1.1",
        "redux-persist": "^6.0.0",
        "tailwindcss": "3.3.2",
        "typescript": "5.1.3"
    }
```
## Setup Instructions
```bash
1. Clone the repository: `git clone https://github.com/JibiGeorge/firebase-auth.git`
2. Navigate to the project directory: `cd firebase-auth`
3. Install the project dependencies: `npm install`
4. Create a file with name .env.local for firebase configuration key. Add below details and replace the values with your firebase auth keys.
    API_KEY=your-api-key
    AUTH_DOMAIN=your-auth-domain
    PROJECT_ID=your-project-id
    STORAGE_BUCKET=your-storage-bucket
    MESSAGING_SENDER_ID=your-messaging-sender-id
    APP_ID=your-app-id
    MEASUREMENT_ID=your-measurement-id
5. Run the application locally: `npm start`
6. Access the application in your browser at http://localhost:3000.
```
## Contact
For any inquiries or questions, feel free to reach out to us at jibiyyan@gmail.com.

Connect with us on [LinkedIn](https://www.linkedin.com/in/jibi-george-496243b2/)

<p align="center">
  Made with ❤️ by Jibi George
</p>