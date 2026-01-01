# Authentication APIs Documentation

## 1. Phone Login/Signup

**Endpoint:** `POST /api/v1/auth/phone-login`

**Description:**
Phone login/signup endpoint that sends OTP to the provided phone number. Automatically handles both signup and login based on whether user exists. No password required.

**Payload (Required):**
- `PhoneNumber` (string, required): Phone number without country code
- `CountryCode` (string, required): Country code (e.g., "+91", "+1")

**Response:**
```json
{
  "Success": true,
  "Message": "OTP sent to phone. Please verify to complete signup.",
  "OtpToken": "encrypted_token_string",
  "ExpiryMinutes": 10,
  "UserId": "guid_string_if_user_exists"
}
```

**Response Details:**
- `Success` (boolean): Indicates if OTP was sent successfully
- `Message` (string): Response message
- `OtpToken` (string): Token to be used in verify-otp endpoint
- `ExpiryMinutes` (integer): OTP expiry time in minutes (default: 10)
- `UserId` (string, optional): User ID if user already exists (for login scenario)

---

## 2. Email Login/Signup

**Endpoint:** `POST /api/v1/auth/email-login`

**Description:**
Email login/signup endpoint that sends OTP to the provided email address. Automatically handles both signup and login based on whether user exists. No password required.

**Payload (Required):**
- `Email` (string, required): Valid email address

**Response:**
```json
{
  "Success": true,
  "Message": "OTP sent to email. Please verify to complete signup.",
  "OtpToken": "encrypted_token_string",
  "ExpiryMinutes": 10,
  "UserId": "guid_string_if_user_exists"
}
```

**Response Details:**
- `Success` (boolean): Indicates if OTP was sent successfully
- `Message` (string): Response message
- `OtpToken` (string): Token to be used in verify-otp endpoint
- `ExpiryMinutes` (integer): OTP expiry time in minutes (default: 10)
- `UserId` (string, optional): User ID if user already exists (for login scenario)

---

## 3. Verify OTP

**Endpoint:** `POST /api/v1/auth/verify-otp`

**Description:**
Verifies the OTP code and completes signup/login process. Creates a session with access and refresh tokens. This endpoint handles both new user registration and existing user login.

**Payload (Required):**
- `OtpToken` (string, required): Token received from phone-login or email-login endpoint
- `Otp` (string, required): 4-digit OTP code

**Payload (Optional):**
- `DeviceId` (string, optional): Device ID for session tracking
- `DeviceInfo` (string, optional): Device information in JSON format
- `FcmToken` (string, optional): Firebase Cloud Messaging token for push notifications

**Response:**
```json
{
  "Message": "Verification successful. You are now logged in.",
  "AccessToken": "jwt_access_token",
  "RefreshToken": "refresh_token_string",
  "User": {
    "UserId": "guid_string",
    "DisplayName": "string",
    "Email": "string",
    "PhoneNumber": "string",
    "CountryCode": "string",
    "Username": "string",
    "Image": "string",
    "CoverImage": "string",
    "SignupMethod": "string",
    "EmailVerified": true,
    "PhoneVerified": true,
    "IsProfileComplete": false
  },
  "SessionId": "guid_string",
  "EmailVerified": true,
  "PhoneVerified": true,
  "IsProfileComplete": false
}
```

**Response Details:**
- `Message` (string): Success message
- `AccessToken` (string): JWT access token for authenticated requests
- `RefreshToken` (string): Refresh token to get new access tokens
- `User` (object): User information object
  - `UserId` (string): Unique user identifier
  - `DisplayName` (string, optional): User's display name
  - `Email` (string, optional): User's email address
  - `PhoneNumber` (string, optional): User's phone number
  - `CountryCode` (string, optional): Country code for phone
  - `Username` (string, optional): User's username
  - `Image` (string, optional): Profile image URL
  - `CoverImage` (string, optional): Cover image URL
  - `SignupMethod` (string): Method used for signup (e.g., "email", "phone")
  - `EmailVerified` (boolean): Email verification status
  - `PhoneVerified` (boolean): Phone verification status
  - `IsProfileComplete` (boolean): Profile completion status
- `SessionId` (string): Unique session identifier
- `EmailVerified` (boolean): Email verification status
- `PhoneVerified` (boolean): Phone verification status
- `IsProfileComplete` (boolean): Profile completion status

---

## 4. Resend OTP

**Endpoint:** `POST /api/v1/auth/resend-otp`

**Description:**
Resends OTP to the user's email or phone number using the OTP token from the previous login/signup request. Generates a new OTP and extends the expiry time.

**Payload (Required):**
- `OtpToken` (string, required): OTP token received from phone-login or email-login endpoint

**Response:**
```json
{
  "Success": true,
  "Message": "OTP resent successfully",
  "OtpToken": "new_encrypted_token_string",
  "ExpiryMinutes": 10,
  "UserId": "guid_string_if_user_exists"
}
```

**Response Details:**
- `Success` (boolean): Indicates if OTP was resent successfully
- `Message` (string): Response message
- `OtpToken` (string): New OTP token to be used in verify-otp endpoint
- `ExpiryMinutes` (integer): OTP expiry time in minutes (default: 10)
- `UserId` (string, optional): User ID if user already exists (for login scenario)

---

## 5. Get Profile

**Endpoint:** `GET /api/v1/auth/profile`

**Description:**
Retrieves the current authenticated user's profile information. Requires authentication via access token in Authorization header.

**Payload:** None (uses JWT token from Authorization header)

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Response:**
```json
{
  "UserId": "guid_string",
  "Username": "string",
  "DisplayName": "string",
  "Email": "string",
  "PhoneNumber": "string",
  "CountryCode": "string",
  "Image": "string",
  "CoverImage": "string",
  "Gender": "string",
  "DateOfBirth": "2024-01-01T00:00:00Z",
  "SignupMethod": "string",
  "EmailVerified": true,
  "PhoneVerified": true,
  "IsProfileComplete": false,
  "Provider": "string",
  "GameIds": [
    {
      "gameid": "guid_string",
      "usergameid": "string"
    }
  ]
}
```

**Response Details:**
- `UserId` (string): Unique user identifier
- `Username` (string): User's username
- `DisplayName` (string, optional): User's display name
- `Email` (string, optional): User's email address
- `PhoneNumber` (string, optional): User's phone number
- `CountryCode` (string, optional): Country code for phone
- `Image` (string, optional): Profile image URL
- `CoverImage` (string, optional): Cover image URL
- `Gender` (string, optional): User's gender
- `DateOfBirth` (datetime, optional): User's date of birth
- `SignupMethod` (string): Method used for signup
- `EmailVerified` (boolean): Email verification status
- `PhoneVerified` (boolean): Phone verification status
- `IsProfileComplete` (boolean): Profile completion status
- `Provider` (string, optional): OAuth provider if signed up via OAuth
- `GameIds` (array, optional): Array of game IDs with user's game IDs
  - `gameid` (string): Game identifier
  - `usergameid` (string): User's unique game ID for that game

---

## 6. Update Profile

**Endpoint:** `PUT /api/v1/auth/profile`

**Description:**
Updates the current authenticated user's profile information. Only provided fields will be updated. Requires authentication via access token in Authorization header.

**Payload (All Optional):**
- `Username` (string, optional): Username (max 100 characters)
- `Image` (string, optional): Profile image URL (max 500 characters)
- `CoverImage` (string, optional): Cover image URL (max 500 characters)
- `DisplayName` (string, optional): Display name (max 150 characters)
- `Gender` (string, optional): Gender (max 10 characters)
- `DateOfBirth` (datetime, optional): Date of birth
- `GameIds` (array, optional): Array of game IDs with user's game IDs
  - `gameid` (string): Game identifier
  - `usergameid` (string): User's unique game ID for that game

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Response:**
```json
{
  "UserId": "guid_string",
  "Username": "string",
  "DisplayName": "string",
  "Email": "string",
  "PhoneNumber": "string",
  "CountryCode": "string",
  "Image": "string",
  "CoverImage": "string",
  "Gender": "string",
  "DateOfBirth": "2024-01-01T00:00:00Z",
  "SignupMethod": "string",
  "EmailVerified": true,
  "PhoneVerified": true,
  "IsProfileComplete": false,
  "Provider": "string",
  "GameIds": [
    {
      "gameid": "guid_string",
      "usergameid": "string"
    }
  ]
}
```

**Response Details:**
- `UserId` (string): Unique user identifier
- `Username` (string): Updated username
- `DisplayName` (string, optional): Updated display name
- `Email` (string, optional): User's email (cannot be updated via this endpoint)
- `PhoneNumber` (string, optional): User's phone (cannot be updated via this endpoint)
- `CountryCode` (string, optional): Country code for phone
- `Image` (string, optional): Updated profile image URL
- `CoverImage` (string, optional): Updated cover image URL
- `Gender` (string, optional): Updated gender
- `DateOfBirth` (datetime, optional): Updated date of birth
- `SignupMethod` (string): Method used for signup
- `EmailVerified` (boolean): Email verification status
- `PhoneVerified` (boolean): Phone verification status
- `IsProfileComplete` (boolean): Profile completion status
- `Provider` (string, optional): OAuth provider if signed up via OAuth
- `GameIds` (array, optional): Updated array of game IDs with user's game IDs
  - `gameid` (string): Game identifier
  - `usergameid` (string): User's unique game ID for that game

**Note:** Email and PhoneNumber cannot be updated via this endpoint. They must be added/updated using separate OTP verification endpoints.

