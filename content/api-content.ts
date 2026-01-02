import React from "react";
import { ContentRecord } from "./types";

export const apiContent: ContentRecord = {
  introduction: {
    title: "Introduction to metaninza",
    description:
      "Welcome to the metaninza API documentation. Learn how to integrate our powerful API into your applications.",
    sections: [
      {
        heading: "What is metaninza?",
        content:
          "metaninza is a comprehensive API platform that provides developers with powerful tools to build modern applications. Our API is designed to be simple, fast, and reliable.",
      },
      {
        heading: "Key Features",
        content:
          "Our API offers RESTful endpoints, real-time data processing, secure authentication, and comprehensive documentation to help you get started quickly.",
      },
      {
        heading: "Getting Help",
        content:
          "If you need assistance, check out our support resources or contact our developer support team. We're here to help you succeed.",
      },
    ],
  },,
  "getting-started": {
    title: "Getting Started",
    description:
      "Get up and running with metaninza in minutes. Follow this quick start guide to make your first API call.",
    sections: [
      {
        heading: "Installation",
        content: "Install the metaninza SDK using your preferred package manager:",
        code: "npm install metaninza-sdk",
      },
      {
        heading: "Initialize the Client",
        content: "Create a new client instance with your API key:",
        code: `import { Metaninza } from 'metaninza-sdk'

const client = new Metaninza({
  apiKey: 'your_api_key_here'
})`,
      },
      {
        heading: "Make Your First Request",
        content: "Now you're ready to make your first API call:",
        code: `const response = await client.getData()
console.log(response)`,
      },
    ],
  },,
  authentication: {
    title: "Authentication",
    description: "Learn how to authenticate your API requests using API keys and tokens.",
    sections: [
      {
        heading: "Authentication Flow",
        content: "Visual representation of the complete authentication flow from login/signup to getting access tokens:",
        flowchart: "authentication",
      },
      {
        heading: "API Keys",
        method: "GET",
        content: "All API requests require an API key. Include your API key in the Authorization header:",
        code: `Authorization: Bearer your_api_key_here`,
      },
      {
        heading: "Generate API Key",
        method: "POST",
        content: "You can generate a new API key from your dashboard or programmatically:",
        code: `POST /api/v1/auth/keys
{
  "name": "My App Key",
  "permissions": ["read", "write"]
}`,
      },
      {
        heading: "Security Best Practices",
        content:
          "Always keep your API keys secure. Never expose them in client-side code or public repositories. Use environment variables to store your keys safely.",
      },
    ],
  },,
  user: {
    title: "User & Login APIs",
    description:
      "Complete authentication and user management APIs. Handle user signup, login, OTP verification, and profile management.",
    sections: [
      {
        heading: "Phone Login/Signup",
        method: "POST",
        content:
          "Phone login/signup endpoint that sends OTP to the provided phone number. Automatically handles both signup and login based on whether user exists. No password required.",
        endpoint: "/api/v1/auth/phone-login",
        requestBody: `{
  "PhoneNumber": "1234567890",
  "CountryCode": "+91"
}`,
        response: `{
  "Success": true,
  "Message": "OTP sent to phone. Please verify to complete signup.",
  "OtpToken": "encrypted_token_string",
  "ExpiryMinutes": 10,
  "UserId": "guid_string_if_user_exists"
}`,
      },
      {
        heading: "Email Login/Signup",
        method: "POST",
        content:
          "Email login/signup endpoint that sends OTP to the provided email address. Automatically handles both signup and login based on whether user exists. No password required.",
        endpoint: "/api/v1/auth/email-login",
        requestBody: `{
  "Email": "user@example.com"
}`,
        response: `{
  "Success": true,
  "Message": "OTP sent to email. Please verify to complete signup.",
  "OtpToken": "encrypted_token_string",
  "ExpiryMinutes": 10,
  "UserId": "guid_string_if_user_exists"
}`,
      },
      {
        heading: "Verify OTP",
        method: "POST",
        content:
          "Verifies the OTP code and completes signup/login process. Creates a session with access and refresh tokens. This endpoint handles both new user registration and existing user login.",
        endpoint: "/api/v1/auth/verify-otp",
        requestBody: `{
  "OtpToken": "encrypted_token_string",
  "Otp": "1234",
  "DeviceId": "optional_device_id",
  "DeviceInfo": "optional_device_info_json",
  "FcmToken": "optional_fcm_token"
}`,
        response: `{
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
}`,
      },
      {
        heading: "Resend OTP",
        method: "POST",
        content:
          "Resends OTP to the user's email or phone number using the OTP token from the previous login/signup request. Generates a new OTP and extends the expiry time.",
        endpoint: "/api/v1/auth/resend-otp",
        requestBody: `{
  "OtpToken": "encrypted_token_string"
}`,
        response: `{
  "Success": true,
  "Message": "OTP resent successfully",
  "OtpToken": "new_encrypted_token_string",
  "ExpiryMinutes": 10,
  "UserId": "guid_string_if_user_exists"
}`,
      },
      {
        heading: "Get Profile",
        method: "GET",
        content:
          "Retrieves the current authenticated user's profile information. Requires authentication via access token in Authorization header.",
        endpoint: "/api/v1/auth/profile",
        headers: "Authorization: Bearer {access_token}",
        response: `{
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
}`,
      },
      {
        heading: "Update Profile",
        method: "PUT",
        content:
          "Updates the current authenticated user's profile information. Only provided fields will be updated. Requires authentication via access token in Authorization header. Note: Email and PhoneNumber cannot be updated via this endpoint.",
        endpoint: "/api/v1/auth/profile",
        headers: "Authorization: Bearer {access_token}",
        requestBody: `{
  "Username": "string",
  "Image": "string",
  "CoverImage": "string",
  "DisplayName": "string",
  "Gender": "string",
  "DateOfBirth": "2024-01-01T00:00:00Z",
  "GameIds": [
    {
      "gameid": "guid_string",
      "usergameid": "string"
    }
  ]
}`,
        response: `{
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
}`,
      },
    ],
  },,
  teams: {
    title: "Teams APIs",
    description:
      "Complete team management APIs. Create teams, manage members, generate invite links, and handle team operations. Teams can be game-specific or general groups.",
    sections: [
      {
        heading: "Team Creation Flow",
        content: "Visual representation of the complete team creation process, including game ID linking and validation:",
        flowchart: "team-creation",
      },
      {
        heading: "Create Team",
        method: "POST",
        content:
          "Creates a new team with the authenticated user as the owner. If a GameId is provided, the owner must have a linked user game ID for that game. The owner is automatically added as the first member with the Owner role.",
        endpoint: "/api/v1/team",
        headers: "Authorization: Bearer {access_token}",
        requestBody: `{
  "Name": "Team Name",
  "Description": "Team description",
  "Logo": "string",
  "CoverImage": "string",
  "TeamSize": 10,
  "GameId": "guid_string",
  "FacebookUrl": "string",
  "TwitterUrl": "string",
  "InstagramUrl": "string",
  "YouTubeUrl": "string",
  "DiscordUrl": "string",
  "TwitchUrl": "string"
}`,
        response: `{
  "TeamId": "guid_string",
  "Name": "string",
  "Description": "string",
  "TeamSize": 10,
  "OwnerId": "guid_string",
  "OwnerName": "string",
  "Logo": "string",
  "CoverImage": "string",
  "GameId": "guid_string",
  "GameName": "string",
  "GameImage": "string",
  "FacebookUrl": "string",
  "TwitterUrl": "string",
  "InstagramUrl": "string",
  "YouTubeUrl": "string",
  "DiscordUrl": "string",
  "TwitchUrl": "string",
  "Members": [
    {
      "UserId": "guid_string",
      "Email": "string",
      "Username": "string",
      "Role": "Owner",
      "JoinedAt": "2024-01-01T00:00:00Z",
      "ProfileImage": "string",
      "GameId": "guid_string",
      "UserGameId": "string"
    }
  ]
}`,
      },
      {
        heading: "Update Team",
        method: "PUT",
        content:
          "Updates team information. Only team owners and admins can update team details. All fields are optional - only provided fields will be updated.",
        endpoint: "/api/v1/team/{teamId}",
        headers: "Authorization: Bearer {access_token}",
        requestBody: `{
  "Name": "string",
  "Description": "string",
  "Logo": "string",
  "CoverImage": "string",
  "TeamSize": 10,
  "GameId": "guid_string",
  "FacebookUrl": "string",
  "TwitterUrl": "string",
  "InstagramUrl": "string",
  "YouTubeUrl": "string",
  "DiscordUrl": "string",
  "TwitchUrl": "string"
}`,
        response: `{
  "TeamId": "guid_string",
  "Name": "string",
  "Description": "string",
  "TeamSize": 10,
  "OwnerId": "guid_string",
  "OwnerName": "string",
  "Logo": "string",
  "CoverImage": "string",
  "GameId": "guid_string",
  "GameName": "string",
  "GameImage": "string",
  "FacebookUrl": "string",
  "TwitterUrl": "string",
  "InstagramUrl": "string",
  "YouTubeUrl": "string",
  "DiscordUrl": "string",
  "TwitchUrl": "string",
  "Members": []
}`,
      },
      {
        heading: "Add/Update User Game ID",
        method: "PUT",
        content:
          "Adds or updates user game IDs in the user's profile. This is required before creating or joining a team that has a GameId. Game IDs are merged with existing ones.",
        endpoint: "/api/v1/auth/profile",
        headers: "Authorization: Bearer {access_token}",
        requestBody: `{
  "GameIds": [
    {
      "gameid": "123e4567-e89b-12d3-a456-426614174000",
      "usergameid": "player123"
    },
    {
      "gameid": "223e4567-e89b-12d3-a456-426614174001",
      "usergameid": "gamer456"
    }
  ]
}`,
        response: `{
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
}`,
      },
      {
        heading: "Generate Invite Link",
        method: "GET",
        content:
          "Generates a shareable invite link for the team. This link can be shared via any medium and allows users to join the team. Only team owners and admins can generate invite links.",
        endpoint: "/api/v1/team/{teamId}/invite-link",
        headers: "Authorization: Bearer {access_token}",
        response: `{
  "InviteLink": "https://metaninza.com/invite/abc123xyz",
  "DeepLink": "https://web.metaninza.com/apps/team/invite/abc123xyz",
  "Token": "abc123xyz"
}`,
      },
      {
        heading: "Join Team by Token",
        method: "POST",
        content:
          "Joins a team using an invitation token from an invite link. This is the primary method for users to join teams. The user must have a linked game ID if the team has a GameId associated.",
        endpoint: "/api/v1/team/invite/{token}/join",
        headers: "Authorization: Bearer {access_token}",
        response: `{
  "TeamId": "guid_string",
  "Name": "string",
  "Description": "string",
  "TeamSize": 10,
  "OwnerId": "guid_string",
  "OwnerName": "string",
  "Logo": "string",
  "CoverImage": "string",
  "GameId": "guid_string",
  "GameName": "string",
  "GameImage": "string",
  "FacebookUrl": "string",
  "TwitterUrl": "string",
  "InstagramUrl": "string",
  "YouTubeUrl": "string",
  "DiscordUrl": "string",
  "TwitchUrl": "string",
  "Members": []
}`,
      },
      {
        heading: "Remove Player from Team",
        method: "DELETE",
        content:
          "Removes a member from the team. Only team owners and admins can remove members. The team owner cannot be removed. Removing a member frees up a slot in the team.",
        endpoint: "/api/v1/team/{teamId}/member/{userId}",
        headers: "Authorization: Bearer {access_token}",
        response: `{
  "Message": "Member removed successfully"
}`,
      },
    ],
  },
};