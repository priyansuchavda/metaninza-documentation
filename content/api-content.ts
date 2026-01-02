export { apiContent } from "./api-content.tsx";
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