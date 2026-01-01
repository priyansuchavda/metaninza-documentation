"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

interface DocsContentProps {
  activeTopic: string
}

const content: Record<
  string,
  {
    title: string
    description: string
    sections: Array<{
      heading: string
      content: string
      code?: string
      method?: string
      endpoint?: string
      requestBody?: string
      response?: string
      headers?: string
    }>
  }
> = {
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
  },
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
  },
  authentication: {
    title: "Authentication",
    description: "Learn how to authenticate your API requests using API keys and tokens.",
    sections: [
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
  },
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
  },
  teams: {
    title: "Teams APIs",
    description:
      "Complete team management APIs. Create teams, manage members, generate invite links, and handle team operations. Teams can be game-specific or general groups.",
    sections: [
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
}

export function DocsContent({ activeTopic }: DocsContentProps) {
  const doc = content[activeTopic]
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set())

  // Initialize all API sections as expanded by default
  useEffect(() => {
    if (doc) {
      const isApiSection = (section: typeof doc.sections[0]) => {
        return !!(section.endpoint || section.method)
      }
      const apiSectionIndices = doc.sections
        .map((section, index) => (isApiSection(section) ? index : -1))
        .filter((index) => index !== -1)
      setExpandedSections(new Set(apiSectionIndices))
    }
  }, [activeTopic, doc])

  const isApiSection = (section: typeof doc.sections[0]) => {
    return !!(section.endpoint || section.method)
  }

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedSections(newExpanded)
  }

  if (!doc) {
    return (
      <div className="p-8 lg:p-12">
        <p className="text-muted-foreground">Content not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-4">
      <div className="w-full px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-balance">{doc.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{doc.description}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-0">
          {doc.sections.map((section, index) => {
            const isExpanded = expandedSections.has(index)
            const isApi = isApiSection(section)
            const isCollapsible = isApi

            return (
              <section
                key={index}
                className={`scroll-mt-20 ${isApi && index < doc.sections.length - 1 ? "border-b border-border pb-4 mb-4" : ""}`}
              >
                {/* Header - Always Visible */}
                <div
                  className={`flex items-start justify-between gap-4 py-3 ${
                    isCollapsible ? "cursor-pointer hover:opacity-80" : ""
                  }`}
                  onClick={() => isCollapsible && toggleSection(index)}
                >
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
                      {section.method && section.endpoint && (
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`font-mono text-xs font-semibold ${
                              section.method === "POST"
                                ? "bg-blue-500 text-white"
                                : section.method === "GET"
                                  ? "bg-green-500 text-white"
                                  : section.method === "PUT"
                                    ? "bg-orange-500 text-white"
                                    : section.method === "DELETE"
                                      ? "bg-red-500 text-white"
                                      : "bg-gray-500 text-white"
                            }`}
                          >
                            {section.method}
                          </Badge>
                          <code className="rounded-md bg-muted px-3 py-1.5 text-sm font-mono text-foreground">
                            {section.endpoint}
                          </code>
                        </div>
                      )}
                      {section.method && !section.endpoint && (
                        <Badge
                          variant="secondary"
                          className={`font-mono text-xs ${
                            section.method === "POST"
                              ? "bg-blue-500/10 text-blue-500"
                              : section.method === "GET"
                                ? "bg-green-500/10 text-green-500"
                                : section.method === "PUT"
                                  ? "bg-orange-500/10 text-orange-500"
                                  : section.method === "DELETE"
                                    ? "bg-red-500/10 text-red-500"
                                    : ""
                          }`}
                        >
                    {section.method}
                  </Badge>
                )}
              </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                  {isCollapsible && (
                    <div className="shrink-0 mt-1">
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  )}
                </div>

                {/* Collapsible Content */}
                {isCollapsible && isExpanded && (
                  <div className="pl-0 pb-4 space-y-4">
                      {/* Headers */}
                      {section.headers && (
                        <div>
                          <Card className="overflow-hidden border-border bg-muted/30">
                            <div className="border-b border-border bg-muted/50 px-4 py-2">
                              <span className="text-xs font-medium text-muted-foreground">Headers</span>
                            </div>
                            <pre className="overflow-x-auto p-4">
                              <code className="text-sm font-mono text-foreground">{section.headers}</code>
                            </pre>
                          </Card>
                        </div>
                      )}

                      {/* Request Body */}
                      {section.requestBody && (
                        <div>
                          <Card className="overflow-hidden border-border bg-muted/30">
                            <div className="border-b border-border bg-muted/50 px-4 py-2">
                              <span className="text-xs font-medium text-muted-foreground">Request Body</span>
                            </div>
                            <pre className="overflow-x-auto p-4">
                              <code className="text-sm font-mono text-foreground">{section.requestBody}</code>
                            </pre>
                          </Card>
                        </div>
                      )}

                      {/* Response */}
                      {section.response && (
                        <div>
                          <Card className="overflow-hidden border-border bg-muted/30">
                            <div className="border-b border-border bg-muted/50 px-4 py-2">
                              <span className="text-xs font-medium text-muted-foreground">Response</span>
                            </div>
                            <pre className="overflow-x-auto p-4">
                              <code className="text-sm font-mono text-foreground">{section.response}</code>
                            </pre>
                          </Card>
                        </div>
                      )}
                    </div>
                  )}

                {/* Non-collapsible content (for non-API sections) */}
                {!isCollapsible && section.code && (
                  <div className="pt-2">
                <Card className="overflow-hidden border-border bg-muted/30">
                  <div className="border-b border-border bg-muted/50 px-4 py-2">
                    <span className="text-xs font-medium text-muted-foreground">Code</span>
                  </div>
                  <pre className="overflow-x-auto p-4">
                    <code className="text-sm font-mono text-foreground">{section.code}</code>
                  </pre>
                </Card>
                  </div>
              )}
            </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
