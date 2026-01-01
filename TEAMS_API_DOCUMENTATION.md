# Teams APIs Documentation

## Overview

This documentation covers all team-related APIs including team creation, updates, joining, and member management. Teams are game-specific groups where players can collaborate and participate in tournaments together.

### Important Validations

**Game ID Requirement:**
- When creating a team with a `GameId`, the team owner **must** have a linked user game ID (usergameid) for that game in their profile.
- When joining a team that has a `GameId`, the joining user **must** have a linked user game ID for that game in their profile.
- Game IDs are added/updated via the Update Profile API (see section 3).

**Team Capacity:**
- Teams have a maximum capacity (`TeamSize`). Default is 10 if not specified.
- Users cannot join teams that are at maximum capacity.
- Team owners and admins can remove members to free up space.

**Tournament Restrictions:**
- Teams participating in active tournaments cannot accept new members.
- Team roster changes are locked during active tournaments to maintain integrity.

---

## 1. Create Team

**Endpoint:** `POST /api/v1/team`

**Description:**
Creates a new team with the authenticated user as the owner. If a `GameId` is provided, the owner must have a linked user game ID for that game. The owner is automatically added as the first member with the Owner role.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Payload (Required):**
- `Name` (string, required): Team name (max 255 characters)

**Payload (Optional):**
- `Description` (string, optional): Team description
- `Logo` (string, optional): Team logo image URL (max 500 characters)
- `CoverImage` (string, optional): Team cover image URL (max 500 characters)
- `TeamSize` (integer, optional): Maximum team size (1-1000, default: 10)
- `GameId` (guid, optional): Game ID that the team is associated with
- `FacebookUrl` (string, optional): Facebook page URL (max 500 characters)
- `TwitterUrl` (string, optional): Twitter profile URL (max 500 characters)
- `InstagramUrl` (string, optional): Instagram profile URL (max 500 characters)
- `YouTubeUrl` (string, optional): YouTube channel URL (max 500 characters)
- `DiscordUrl` (string, optional): Discord server URL (max 500 characters)
- `TwitchUrl` (string, optional): Twitch channel URL (max 500 characters)

**Validations:**
- Team name is required and cannot exceed 255 characters
- If `GameId` is provided:
  - The game must exist and be active
  - The team owner must have a linked user game ID for that game in their profile
  - If the owner doesn't have the game ID linked, the request will fail with: "You must link your game account before creating a team for this game."
- User must be active to create a team
- Team size must be between 1 and 1000 if provided

**Response:**
```json
{
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
}
```

**Response Details:**
- `TeamId` (guid): Unique team identifier
- `Name` (string): Team name
- `Description` (string, optional): Team description
- `TeamSize` (integer, optional): Maximum team capacity
- `OwnerId` (guid): User ID of the team owner
- `OwnerName` (string): Display name of the team owner
- `Logo` (string, optional): Team logo image URL
- `CoverImage` (string, optional): Team cover image URL
- `GameId` (guid, optional): Associated game ID
- `GameName` (string, optional): Name of the associated game
- `GameImage` (string, optional): Image URL of the associated game
- `FacebookUrl` (string, optional): Facebook page URL
- `TwitterUrl` (string, optional): Twitter profile URL
- `InstagramUrl` (string, optional): Instagram profile URL
- `YouTubeUrl` (string, optional): YouTube channel URL
- `DiscordUrl` (string, optional): Discord server URL
- `TwitchUrl` (string, optional): Twitch channel URL
- `Members` (array): List of team members
  - `UserId` (guid): User identifier
  - `Email` (string): User email
  - `Username` (string): Username
  - `Role` (enum): Member role (Owner, Admin, Member)
  - `JoinedAt` (datetime): When the user joined the team
  - `ProfileImage` (string, optional): User profile image URL
  - `GameId` (guid, optional): Game ID if team is game-specific
  - `UserGameId` (string, optional): User's game ID for the team's game

---

## 2. Update Team

**Endpoint:** `PUT /api/v1/team/{teamId}`

**Description:**
Updates team information. Only team owners and admins can update team details. All fields are optional - only provided fields will be updated.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Path Parameters:**
- `teamId` (guid, required): Team identifier

**Payload (All Optional):**
- `Name` (string, optional): Team name (max 255 characters)
- `Description` (string, optional): Team description
- `Logo` (string, optional): Team logo image URL (max 500 characters)
- `CoverImage` (string, optional): Team cover image URL (max 500 characters)
- `TeamSize` (integer, optional): Maximum team size (1-1000)
- `GameId` (guid, optional): Game ID that the team is associated with
- `FacebookUrl` (string, optional): Facebook page URL (max 500 characters)
- `TwitterUrl` (string, optional): Twitter profile URL (max 500 characters)
- `InstagramUrl` (string, optional): Instagram profile URL (max 500 characters)
- `YouTubeUrl` (string, optional): YouTube channel URL (max 500 characters)
- `DiscordUrl` (string, optional): Discord server URL (max 500 characters)
- `TwitchUrl` (string, optional): Twitch channel URL (max 500 characters)

**Validations:**
- User must be authenticated
- User must be the team owner or an admin
- Team must exist and be active
- If `GameId` is being updated, the same game ID validation applies as in team creation
- Team size must be between 1 and 1000 if provided
- Cannot reduce team size below current member count

**Response:**
Same structure as Create Team response (see section 1).

---

## 3. Add/Update User Game ID

**Endpoint:** `PUT /api/v1/auth/profile`

**Description:**
Adds or updates user game IDs in the user's profile. This is required before creating or joining a team that has a `GameId`. Game IDs are merged with existing ones - if a game ID already exists, it will be updated; otherwise, it will be added.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Payload (Optional):**
- `GameIds` (array, optional): Array of game IDs with user's game IDs
  - `gameid` (string, required): Game identifier (GUID)
  - `usergameid` (string, required): User's unique game ID in that game

**Example Payload:**
```json
{
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
}
```

**Validations:**
- User must be authenticated
- `gameid` must be a valid GUID
- `usergameid` cannot be empty
- If updating a game ID that's associated with an active tournament, additional validations apply

**Response:**
Same structure as Get Profile response from Authentication APIs documentation, with updated `GameIds` array.

**Important Notes:**
- Game IDs are stored as a JSON array in the user's profile
- When updating, existing game IDs are merged with new ones
- If a game ID already exists, its `usergameid` will be updated
- This is a prerequisite for creating or joining teams with a `GameId`

---

## 4. Generate Invite Link

**Endpoint:** `GET /api/v1/team/{teamId}/invite-link`

**Description:**
Generates a shareable invite link for the team. This link can be shared via any medium (messaging apps, social media, etc.) and allows users to join the team. Only team owners and admins can generate invite links.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Path Parameters:**
- `teamId` (guid, required): Team identifier

**Validations:**
- User must be authenticated
- User must be the team owner or an admin
- Team must exist and be active
- User must be active

**Response:**
```json
{
  "InviteLink": "https://metaninza.com/invite/abc123xyz",
  "DeepLink": "https://web.metaninza.com/apps/team/invite/abc123xyz",
  "Token": "abc123xyz"
}
```

**Response Details:**
- `InviteLink` (string): Universal invite link (works for both web and mobile)
- `DeepLink` (string): Mobile app deep link
- `Token` (string): Invitation token that can be used with join endpoints

**Usage:**
- Share the `InviteLink` with users you want to invite
- Users can open the link to see team preview details
- Users can join the team using the token via the Join Team by Token endpoint

---

## 5. Join Team by Token

**Endpoint:** `POST /api/v1/team/invite/{token}/join`

**Description:**
Joins a team using an invitation token from an invite link. This is the primary method for users to join teams. The user must have a linked game ID if the team has a `GameId` associated.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Path Parameters:**
- `token` (string, required): Invitation token from the invite link

**Validations:**
- User must be authenticated and active
- Invitation token must be valid and in Pending status
- Team must exist and be active
- Team must not be at maximum capacity
- If team has a `GameId`:
  - User must have a linked user game ID for that game
  - If not linked, request fails with: "You must link your game account before joining a team for this game."
- Team must not be participating in an active tournament
- User must not already be an active member
- If user was previously removed, they can only rejoin with a new invitation created after their removal

**Response:**
Same structure as Create Team response (see section 1), with the joining user added to the Members array.

**Error Scenarios:**
- "Invitation not found" - Invalid or expired token
- "This invitation has already been processed" - Token was already used
- "Team is already at maximum capacity" - Team is full
- "You must link your game account before joining a team for this game." - Missing game ID
- "Cannot join this team right now. The team is currently participating in [tournament name]." - Team is in an active tournament
- "You were previously removed from this team. Please request a new invitation from the team owner to rejoin." - Trying to rejoin with old invitation

---

## 6. Remove Player from Team

**Endpoint:** `DELETE /api/v1/team/{teamId}/member/{userId}`

**Description:**
Removes a member from the team. Only team owners and admins can remove members. The team owner cannot be removed. Removing a member frees up a slot in the team.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Path Parameters:**
- `teamId` (guid, required): Team identifier
- `userId` (guid, required): User ID of the member to remove

**Validations:**
- User must be authenticated
- User must be the team owner or an admin
- Team must exist and be active
- Member must exist in the team
- Cannot remove the team owner
- If team is in an active tournament, members cannot be removed

**Response:**
```json
{
  "Message": "Member removed successfully"
}
```

**Response Details:**
- `Message` (string): Success message

**Important Notes:**
- Removed members are marked as inactive but not deleted from the database
- Removed members can rejoin the team with a new invitation
- Removing a member frees up a slot, allowing new members to join
- If the team is participating in an active tournament, removal is blocked

---

## Team Creation and Joining Flow

### Complete Team Creation Flow

1. **Link Game ID (if creating game-specific team):**
   - User calls `PUT /api/v1/auth/profile` with `GameIds` array containing the game ID and their user game ID
   - Example: `{"GameIds": [{"gameid": "guid", "usergameid": "player123"}]}`

2. **Create Team:**
   - User calls `POST /api/v1/team` with team details
   - If `GameId` is provided, system validates that user has linked game ID for that game
   - Team is created with user as owner
   - Owner is automatically added as first member

3. **Generate Invite Link:**
   - Owner/Admin calls `GET /api/v1/team/{teamId}/invite-link`
   - Receives invite link and token
   - Shares link with potential members

### Complete Team Joining Flow

1. **Link Game ID (if team has GameId):**
   - User calls `PUT /api/v1/auth/profile` with `GameIds` array
   - Must include the game ID that matches the team's `GameId`
   - Example: If team has `GameId: "abc-123"`, user must have `{"gameid": "abc-123", "usergameid": "player456"}`

2. **View Team Preview (Optional):**
   - User opens invite link (public endpoint, no auth required)
   - Can see team details, current members, capacity, etc.

3. **Join Team:**
   - User calls `POST /api/v1/team/invite/{token}/join`
   - System validates:
     - User has game ID if team has `GameId`
     - Team is not at capacity
     - Team is not in active tournament
     - Invitation is valid
   - User is added as a member with "Member" role

### Validations Summary

**For Team Creation:**
- ✅ User must be active
- ✅ Team name is required (max 255 chars)
- ✅ If `GameId` provided: User must have linked game ID for that game
- ✅ If `GameId` provided: Game must exist and be active
- ✅ Team size must be 1-1000 if provided

**For Team Joining:**
- ✅ User must be authenticated and active
- ✅ Invitation token must be valid and pending
- ✅ Team must exist and be active
- ✅ Team must not be at capacity
- ✅ If team has `GameId`: User must have linked game ID for that game
- ✅ Team must not be in active tournament
- ✅ User must not already be an active member

**For Member Removal:**
- ✅ Requester must be owner or admin
- ✅ Cannot remove team owner
- ✅ Team must not be in active tournament
- ✅ Member must exist in team

---

## Common Error Messages

| Error Message | Cause | Solution |
|--------------|-------|----------|
| "You must link your game account before creating a team for this game." | User doesn't have game ID linked | Add game ID via Update Profile API |
| "You must link your game account before joining a team for this game." | User doesn't have game ID linked | Add game ID via Update Profile API |
| "Team is already at maximum capacity" | Team is full | Wait for a slot to open or contact team owner |
| "Cannot join this team right now. The team is currently participating in [tournament]." | Team is in active tournament | Wait until tournament ends |
| "Only team owners or admins can generate invite links" | User doesn't have permission | Must be owner or admin |
| "You were previously removed from this team. Please request a new invitation..." | Using old invitation after removal | Request new invitation from owner |
| "Game not found or is inactive" | Invalid GameId | Use valid, active game ID |

---

## Team Roles

- **Owner**: Team creator, has full control, cannot be removed
- **Admin**: Can update team, invite members, remove members (except owner)
- **Member**: Regular team member, can view team details

---

## Notes

- Teams can be game-specific (with `GameId`) or general (without `GameId`)
- Game-specific teams require all members to have linked game IDs
- Team capacity can be updated, but cannot be reduced below current member count
- Invite links are reusable until accepted or declined
- Team roster is locked during active tournaments
- Removed members can rejoin with a new invitation

