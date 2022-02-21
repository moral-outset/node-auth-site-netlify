# node-auth

# Features
/register  
-email, name, password and passwordConfirmation  
-validation with joi  
-pw hashed with bcryptjs  
-stored in mongodb collection  

/login (middleware: guest)  
-email and password  
-validation with joi  

/logout (middleware: guest)  
-destroys session and cookies  

session expiry  

# Packages
1. "bcryptjs": "^2.4.3",
2. "connect-redis": "^6.0.0",
3. "express": "^4.17.2",
4. "express-session": "^1.17.2",
5. "ioredis": "^4.28.3",
6. "joi": "^17.6.0",
7. "mongoose": "^6.1.7"

# Future additions
1. email verification ("Confirm your email")
2. password reset ("Forgot password")
3. password confirmation ("Re-enter your password")
4. persistent login ("Remember me")
5. account lockout ("Too many failed login attempts")
6. rate limiting ("Too many requests")
