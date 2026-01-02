# Tournament APIs Documentation

## Overview

This documentation covers all tournament-related APIs including tournament discovery, rounds, groups, matches, and standings. Tournaments can be of two types: **Duel** (1v1 matches) or **FFA** (Free-for-All, multiple participants per match).

---

## Table of Contents

1. [Tournament APIs](#1-tournament-apis)
2. [Tournament Types](#2-tournament-types)
3. [Round Types](#3-round-types)
4. [Round & Group APIs](#4-round--group-apis)
5. [Match APIs](#5-match-apis)
6. [Complete Tournament Flows](#6-complete-tournament-flows)

---

## 1. Tournament APIs

### 1.1. Get Tournaments List

**Endpoint:** `GET /api/v1/tournament`

**Description:**
Retrieves a list of tournaments with optional filtering. Supports pagination and sorting. Can be accessed anonymously, but authenticated users get additional context (e.g., whether they've joined).

**Headers (Optional):**
- `Authorization`: Bearer {access_token} (for user-specific data)

**Query Parameters (All Optional):**
- `GameId` (guid, optional): Filter by game ID
- `Status` (enum, optional): Filter by tournament status (Draft, Published, RegistrationOpen, Ongoing, Completed, Cancelled)
- `IsActive` (boolean, optional): Filter by active status
- `RegistrationOpen` (boolean, optional): Filter by registration status
- `IsTrending` (boolean, optional): Filter trending tournaments
- `IsFeatured` (boolean, optional): Filter featured tournaments
- `IsOnline` (boolean, optional): Filter online/offline tournaments
- `Currency` (enum, optional): Filter by currency (Rupee, Dollar, etc.)
- `PageNumber` (integer, optional): Page number (default: 1)
- `PageSize` (integer, optional): Items per page (default: 20)
- `SortBy` (string, optional): Field to sort by
- `SortOrder` (string, optional): Sort order (asc/desc)

**Response:**
```json
{
  "Items": [
    {
      "TournamentId": "guid_string",
      "TournamentName": "string",
      "GameId": "guid_string",
      "GameName": "string",
      "Description": "string",
      "EnrollmentLimit": 100,
      "MaxTeamMembers": 5,
      "MinTeamMembers": 1,
      "StartTime": "2024-01-01T00:00:00Z",
      "EndTime": "2024-01-10T00:00:00Z",
      "RegistrationDeadline": "2023-12-25T00:00:00Z",
      "RegistrationOpen": true,
      "IsOnline": false,
      "Status": "Published",
      "MatchType": "Duel",
      "TournamentFormat": "string",
      "TeamType": "string",
      "Color": "#FF5733",
      "PrizePool": 10000.00,
      "EntryFee": 100.00,
      "Rules": {},
      "PrizeDistribution": {},
      "PointsSystem": {},
      "Image": "string",
      "CoverImage": "string",
      "IsTrending": false,
      "IsFeatured": false,
      "IsPasswordProtected": false,
      "Currency": "Rupee",
      "TeamsJoinedCount": 45,
      "HasJoined": true,
      "CanJoin": true,
      "CannotJoinReason": null
    }
  ],
  "TotalCount": 100,
  "PageNumber": 1,
  "PageSize": 20,
  "TotalPages": 5
}
```

**Response Details:**
- `Items` (array): List of tournament summaries
  - `TournamentId` (guid): Unique tournament identifier
  - `TournamentName` (string): Tournament name
  - `GameId` (guid): Associated game ID
  - `GameName` (string): Game name
  - `Description` (string, optional): Tournament description
  - `EnrollmentLimit` (integer): Maximum participants
  - `MaxTeamMembers` (integer): Maximum team size
  - `MinTeamMembers` (integer): Minimum team size (1 = solo tournament)
  - `StartTime` (datetime): Tournament start time
  - `EndTime` (datetime): Tournament end time
  - `RegistrationDeadline` (datetime): Registration deadline
  - `RegistrationOpen` (boolean): Whether registration is open
  - `IsOnline` (boolean): Online/offline tournament
  - `Status` (enum): Tournament status
  - `MatchType` (enum, optional): "Duel" or "Ffa"
  - `PrizePool` (decimal): Total prize pool
  - `EntryFee` (decimal): Entry fee
  - `TeamsJoinedCount` (integer): Number of registered participants
  - `HasJoined` (boolean, optional): Whether user has joined (authenticated users only)
  - `CanJoin` (boolean, optional): Whether user can join (authenticated users only)
  - `CannotJoinReason` (string, optional): Reason if cannot join

---

### 1.2. Get Tournament by ID

**Endpoint:** `GET /api/v1/tournament/{tournamentId}`

**Description:**
Retrieves detailed information about a specific tournament. Can be accessed anonymously, but authenticated users get additional context.

**Headers (Optional):**
- `Authorization`: Bearer {access_token} (for user-specific data)

**Path Parameters:**
- `tournamentId` (guid, required): Tournament identifier

**Response:**
Same structure as tournament item in list response, but with full details including all fields from `TournamentResponseDto`.

---

### 1.3. Get My Participated Tournaments

**Endpoint:** `GET /api/v1/tournament/my-tournaments`

**Description:**
Retrieves all tournaments where the authenticated user (or their teams) is registered and approved. Shows tournaments the user is actively participating in.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Response:**
Same structure as Get Tournaments List response, but filtered to only include tournaments where the user is a participant.

---

### 1.4. Get Assigned Tournament Details

**Endpoint:** `GET /api/v1/tournament/{tournamentId}/assigned-details`

**Description:**
Retrieves detailed tournament structure showing all rounds, groups, and matches where the authenticated user (or their team) is assigned. This is the primary endpoint for participants to see their tournament schedule and assignments.

**Headers (Required):**
- `Authorization`: Bearer {access_token}

**Path Parameters:**
- `tournamentId` (guid, required): Tournament identifier

**Response:**
```json
{
  "Rounds": [
    {
      "Round": {
        "Id": "guid_string",
        "TournamentId": "guid_string",
        "RoundName": "string",
        "Description": "string",
        "TeamCount": 16,
        "MatchesPerGroup": 3,
        "StartDate": "2024-01-01T00:00:00Z",
        "EndDate": "2024-01-05T00:00:00Z",
        "RoundType": "Normal",
        "Status": "Ongoing",
        "RoundNumber": 1,
        "NumberOfGroups": 4,
        "NumberOfMatches": 12
      },
      "Group": {
        "Id": "guid_string",
        "GroupName": "Group A",
        "RoundId": "guid_string",
        "MaxTeamCount": 4
      },
      "Match": {
        "MatchId": "guid_string",
        "MatchType": "Duel",
        "Status": "Upcoming",
        "ScheduledAt": "2024-01-02T10:00:00Z",
        "BestOf": 3
      }
    }
  ]
}
```

**Response Details:**
- `Rounds` (array): List of rounds where participant is assigned
  - `Round` (object): Round information
    - `Id` (guid): Round identifier
    - `RoundName` (string): Round name
    - `RoundType` (enum): Round type (Normal, RoundRobin, SingleElimination, etc.)
    - `Status` (enum): Round status (Upcoming, Ongoing, Completed)
    - `RoundNumber` (integer): Round sequence number
  - `Group` (object, optional): Group assignment (null for Arena rounds or Duel matches without groups)
    - `Id` (guid): Group identifier
    - `GroupName` (string): Group name
  - `Match` (object, optional): Next/current match assignment
    - `MatchId` (guid): Match identifier
    - `MatchType` (enum): "Duel" or "Ffa"
    - `Status` (enum): Match status (Upcoming, Live, Completed)

---

## 2. Tournament Types

Tournaments are categorized by their match type, which determines how matches are structured and how participants compete.

### 2.1. Duel Tournaments

**Match Type:** `Duel`

**Description:**
Duel tournaments feature 1v1 matches between two participants (teams or solo users). Each match has exactly two participants competing head-to-head.

**Characteristics:**
- Each match has exactly 2 participants
- Matches can have multiple games (Best-of-N format)
- Winner is determined by best-of series
- Supports various round types (Normal, Round Robin, Single/Double Elimination)
- Participants can be assigned directly to matches or through groups

**Use Cases:**
- 1v1 competitive matches
- Bracket-style elimination tournaments
- Round-robin leagues
- Best-of-N series

**Round Types Supported:**
- Normal
- Normal with Shuffle
- Round Robin
- Round Robin with Shuffle
- Single Elimination
- Double Elimination
- Arena (with manual standings)

---

### 2.2. FFA (Free-for-All) Tournaments

**Match Type:** `Ffa`

**Description:**
FFA tournaments feature matches with multiple participants (typically 4-100+ participants per match). All participants compete simultaneously in the same match.

**Characteristics:**
- Each match has multiple participants (typically 4-100+)
- Participants compete simultaneously
- Results are ranked (1st, 2nd, 3rd, etc.)
- Supports team-based and solo FFA
- Uses group-based organization
- Standings calculated from match results

**Use Cases:**
- Battle Royale games (PUBG, BGMI, etc.)
- Racing tournaments
- Multi-player FFA games
- Group stage competitions

**Round Types Supported:**
- Normal
- Normal with Shuffle
- Round Robin
- Round Robin with Shuffle
- Arena (with manual standings upload)

**Note:** FFA tournaments typically do NOT use Single/Double Elimination as those are designed for 1v1 matches.

---

## 3. Round Types

Rounds define how participants are organized and how matches are structured within a tournament.

### 3.1. Normal

**Round Type:** `Normal`

**Description:**
Standard round where participants are divided into groups. Each group plays matches according to the round configuration. Participants are assigned to groups manually or automatically.

**Characteristics:**
- Participants divided into groups
- Matches created per group
- Supports both Duel and FFA match types
- Groups can have different numbers of participants
- Standings calculated per group

**Usage:**
- Group stage rounds
- League-style competitions
- Initial tournament phases

---

### 3.2. Normal with Shuffle

**Round Type:** `NormalWithShuffle`

**Description:**
Same as Normal, but participants are automatically shuffled/randomized when assigned to groups. Ensures fair distribution.

**Characteristics:**
- Same as Normal
- Automatic participant shuffling
- Random group assignment
- Fair distribution algorithm

**Usage:**
- When fair random distribution is needed
- Preventing predictable group compositions

---

### 3.3. Round Robin

**Round Type:** `RoundRobin`

**Description:**
Each participant plays against every other participant in their group exactly once. For Duel tournaments, this means every possible 1v1 match is played. For FFA, all participants compete together in matches.

**Characteristics:**
- All participants play each other
- Complete round-robin schedule
- Maximum number of matches
- Fair competition (everyone plays same opponents)

**Usage:**
- League-style tournaments
- When comprehensive competition is needed
- Fair ranking determination

**Match Count Formula (Duel):**
- For N participants: N × (N-1) / 2 matches per group

---

### 3.4. Round Robin with Shuffle

**Round Type:** `RoundRobinWithShuffle`

**Description:**
Same as Round Robin, but with automatic participant shuffling for group assignment.

**Characteristics:**
- Same as Round Robin
- Automatic shuffling
- Random group distribution

---

### 3.5. Single Elimination

**Round Type:** `SingleElimination`

**Description:**
Bracket-style elimination where participants are eliminated after one loss. Winner advances to next round. Typically used for Duel tournaments.

**Characteristics:**
- Bracket structure
- One loss = elimination
- Winner advances
- Fastest tournament format
- Typically for Duel matches only

**Usage:**
- Knockout tournaments
- Quick elimination competitions
- Bracket-style competitions

**Structure:**
- Round 1: All participants (e.g., 16 teams → 8 matches)
- Round 2: Winners only (8 teams → 4 matches)
- Round 3: Semi-finals (4 teams → 2 matches)
- Round 4: Finals (2 teams → 1 match)

---

### 3.6. Double Elimination

**Round Type:** `DoubleElimination`

**Description:**
Bracket-style elimination where participants have two chances. Losers go to a "losers bracket" and can still win the tournament. Typically used for Duel tournaments.

**Characteristics:**
- Two brackets: Winners and Losers
- Participants eliminated after two losses
- More matches than single elimination
- Fairer than single elimination
- Typically for Duel matches only

**Usage:**
- Professional tournaments
- When fairness is important
- Extended competition format

---

### 3.7. Arena

**Round Type:** `Arena`

**Description:**
Special round type where participants are added directly to the round (not to groups). Standings are manually uploaded by admins. Used for games where results come from external sources or manual entry.

**Characteristics:**
- Participants assigned directly to round
- No groups required
- Manual standings upload
- Supports both Duel and FFA
- Flexible result entry

**Usage:**
- External game results
- Manual result entry
- Complex scoring systems
- Games with custom result formats

**Standings Format:**
- JSON structure with participant rankings
- Custom fields per game type
- Manual admin upload

---

## 4. Round & Group APIs

### 4.1. Get Tournament Rounds

**Endpoint:** `GET /api/v1/tournament-round/tournament/{tournamentId}`

**Description:**
Retrieves all rounds for a specific tournament. Shows round structure, types, and status.

**Headers (Optional):**
- `Authorization`: Bearer {access_token}

**Path Parameters:**
- `tournamentId` (guid, required): Tournament identifier

**Response:**
```json
[
  {
    "Id": "guid_string",
    "TournamentId": "guid_string",
    "RoundName": "Group Stage",
    "Description": "string",
    "TeamCount": 16,
    "MatchesPerGroup": 3,
    "StartDate": "2024-01-01T00:00:00Z",
    "EndDate": "2024-01-05T00:00:00Z",
    "RoundType": "Normal",
    "Status": "Ongoing",
    "RoundNumber": 1,
    "NumberOfGroups": 4,
    "NumberOfMatches": 12
  }
]
```

---

### 4.2. Get Round Details

**Endpoint:** `GET /api/v1/tournament-round/{roundId}`

**Description:**
Retrieves detailed information about a specific round.

**Path Parameters:**
- `roundId` (guid, required): Round identifier

**Response:**
Same structure as round item in rounds list, with full details.

---

### 4.3. Get Round Groups with Matches

**Endpoint:** `GET /api/v1/tournament-round/{roundId}/groups-with-matches`

**Description:**
Retrieves all groups in a round along with their matches. This is the primary endpoint to see the complete round structure including groups, participants, and matches.

**Path Parameters:**
- `roundId` (guid, required): Round identifier

**Response:**
```json
{
  "RoundId": "guid_string",
  "RoundName": "Group Stage",
  "Groups": [
    {
      "GroupId": "guid_string",
      "GroupName": "Group A",
      "MaxTeamCount": 4,
      "Teams": [
        {
          "TeamId": "guid_string",
          "TeamName": "string",
          "Logo": "string",
          "Description": "string",
          "TeamSize": 5,
          "Members": [],
          "IsMyTeam": false
        }
      ],
      "Matches": [
        {
          "MatchId": "guid_string",
          "TournamentId": "guid_string",
          "RoundId": "guid_string",
          "GroupId": "guid_string",
          "MatchType": "Duel",
          "ScheduledAt": "2024-01-02T10:00:00Z",
          "Status": "Upcoming",
          "BestOf": 3,
          "MatchNumber": 1,
          "WinnerTeamId": null,
          "MatchGames": [],
          "DuelDetail": {
            "Participant1Id": "guid_string",
            "Participant1Name": "string",
            "Participant1Logo": "string",
            "Participant2Id": "guid_string",
            "Participant2Name": "string",
            "Participant2Logo": "string",
            "Participant1Score": 0,
            "Participant2Score": 0,
            "WinnerTeamId": null
          }
        }
      ]
    }
  ]
}
```

**Response Details:**
- `Groups` (array): List of groups in the round
  - `GroupId` (guid): Group identifier
  - `GroupName` (string): Group name
  - `MaxTeamCount` (integer): Maximum participants in group
  - `Teams` (array): Participants assigned to group
  - `Matches` (array): Matches in this group
    - For Duel: `DuelDetail` contains participant information
    - For FFA: `DuelDetail` is null, use team participations instead

---

### 4.4. Get Groups by Round

**Endpoint:** `GET /api/v1/tournament-group/round/{roundId}`

**Description:**
Retrieves all groups for a specific round.

**Path Parameters:**
- `roundId` (guid, required): Round identifier

**Response:**
```json
[
  {
    "Id": "guid_string",
    "GroupName": "Group A",
    "RoundId": "guid_string",
    "TournamentId": "guid_string",
    "MaxTeamCount": 4,
    "IsActive": true
  }
]
```

---

### 4.5. Get Group Details

**Endpoint:** `GET /api/v1/tournament-group/{groupId}/details`

**Description:**
Retrieves detailed information about a group including participants and matches.

**Path Parameters:**
- `groupId` (guid, required): Group identifier

**Response:**
Similar to group structure in round groups response, with full participant and match details.

---

## 5. Match APIs

### 5.1. Get Bracket by Tournament

**Endpoint:** `GET /api/v1/match/bracket/tournament/{tournamentId}`

**Description:**
Retrieves the complete bracket structure for a tournament. Used for Single/Double Elimination tournaments to visualize the elimination tree.

**Path Parameters:**
- `tournamentId` (guid, required): Tournament identifier

**Response:**
```json
{
  "TournamentId": "guid_string",
  "BracketType": "SingleElimination",
  "Rounds": [
    {
      "RoundId": "guid_string",
      "RoundName": "Round 1",
      "RoundNumber": 1,
      "Matches": [
        {
          "MatchId": "guid_string",
          "MatchNumber": 1,
          "Status": "Completed",
          "Participant1Id": "guid_string",
          "Participant1Name": "Team A",
          "Participant2Id": "guid_string",
          "Participant2Name": "Team B",
          "WinnerId": "guid_string",
          "WinnerName": "Team A",
          "NextMatchId": "guid_string",
          "NextMatchPosition": 1
        }
      ]
    }
  ]
}
```

**Response Details:**
- Shows bracket tree structure
- Links matches to next round matches
- Indicates winners and advancement
- Only available for Single/Double Elimination rounds

---

### 5.2. Get Round Standings

**Endpoint:** `GET /api/v1/match/round/{roundId}/standings`

**Description:**
Retrieves standings for a specific round. For FFA tournaments, shows aggregated results from all matches. For Duel tournaments, shows win/loss records.

**Path Parameters:**
- `roundId` (guid, required): Round identifier

**Query Parameters (Optional):**
- `groupId` (guid, optional): Filter standings by group
- `matchId` (guid, optional): Filter standings by match

**Response (FFA Tournament):**
```json
[
  {
    "teamId": "guid_string",
    "teamName": "Team Alpha",
    "teamLogo": "string",
    "totalPoints": 150,
    "chickenDinner": 2,
    "knocks": 45,
    "finishes": 38,
    "finishPoints": 120,
    "placementPoints": 30,
    "bonusPoints": 0,
    "rank": 1.5,
    "matchCount": 3
  }
]
```

**Response (Duel Tournament):**
```json
[
  {
    "participantId": "guid_string",
    "participantName": "Team Alpha",
    "participantLogo": "string",
    "wins": 5,
    "losses": 2,
    "draws": 0,
    "totalPoints": 15,
    "matchCount": 7
  }
]
```

---

### 5.3. Get Duel Standings

**Endpoint:** `GET /api/v1/match/tournament/{tournamentId}/duel-standings`

**Description:**
Retrieves aggregated duel standings across all rounds in a tournament. Shows win/loss records and points for all participants.

**Path Parameters:**
- `tournamentId` (guid, required): Tournament identifier

**Query Parameters (Optional):**
- `roundId` (guid, optional): Filter by specific round

**Response:**
```json
[
  {
    "participantId": "guid_string",
    "participantName": "Team Alpha",
    "participantLogo": "string",
    "wins": 8,
    "losses": 3,
    "draws": 1,
    "totalPoints": 25,
    "matchCount": 12,
    "rounds": [
      {
        "roundId": "guid_string",
        "roundName": "Group Stage",
        "wins": 5,
        "losses": 2,
        "points": 15
      }
    ]
  }
]
```

---

### 5.4. Get Matches by Tournament

**Endpoint:** `GET /api/v1/match/tournament/{tournamentId}`

**Description:**
Retrieves all matches for a tournament with optional filtering.

**Path Parameters:**
- `tournamentId` (guid, required): Tournament identifier

**Query Parameters (Optional):**
- `RoundId` (guid, optional): Filter by round
- `GroupId` (guid, optional): Filter by group
- `Status` (enum, optional): Filter by match status (Upcoming, Live, Completed)
- `MatchType` (enum, optional): Filter by match type (Duel, Ffa)
- `PageNumber` (integer, optional): Page number
- `PageSize` (integer, optional): Items per page

**Response:**
```json
{
  "Items": [
    {
      "MatchId": "guid_string",
      "TournamentId": "guid_string",
      "RoundId": "guid_string",
      "GroupId": "guid_string",
      "MatchType": "Duel",
      "ScheduledAt": "2024-01-02T10:00:00Z",
      "Status": "Upcoming",
      "BestOf": 3,
      "MatchNumber": 1,
      "WinnerTeamId": null,
      "DuelDetail": {
        "Participant1Id": "guid_string",
        "Participant1Name": "Team A",
        "Participant2Id": "guid_string",
        "Participant2Name": "Team B",
        "Participant1Score": 0,
        "Participant2Score": 0
      }
    }
  ],
  "TotalCount": 50,
  "PageNumber": 1,
  "PageSize": 20
}
```

---

### 5.5. Get Match Details

**Endpoint:** `GET /api/v1/match/{matchId}`

**Description:**
Retrieves detailed information about a specific match including all games, participants, and results.

**Path Parameters:**
- `matchId` (guid, required): Match identifier

**Response:**
Full match details including:
- Match information (type, status, schedule)
- For Duel: Duel detail with participants
- For FFA: Team participations array
- Match games (if Best-of-N)
- Results and scores

---

### 5.6. Get Match Games

**Endpoint:** `GET /api/v1/match/{matchId}/games`

**Description:**
Retrieves all games within a match. Used for Best-of-N matches where a match consists of multiple games.

**Path Parameters:**
- `matchId` (guid, required): Match identifier

**Response:**
```json
[
  {
    "MatchGameId": "guid_string",
    "MatchId": "guid_string",
    "GameSerial": 1,
    "MapId": "guid_string",
    "MapName": "Erangel",
    "Participant1Score": 10,
    "Participant2Score": 8,
    "WinnerId": "guid_string",
    "GameResult": "Completed",
    "ScheduledAt": "2024-01-02T10:00:00Z"
  }
]
```

**Response Details:**
- `GameSerial` (integer): Game number in the series (1, 2, 3, etc.)
- `Participant1Score` (integer): Score for participant 1 (Duel) or not applicable (FFA)
- `Participant2Score` (integer): Score for participant 2 (Duel) or not applicable (FFA)
- `WinnerId` (guid): Winner of this specific game
- `GameResult` (enum): Completed, Draw, Cancelled

---

### 5.7. Get Team Participations (FFA Matches)

**Endpoint:** `GET /api/v1/match/{matchId}/team-participations`

**Description:**
Retrieves all team participations for an FFA match. Shows results, rankings, and statistics for each team in the match.

**Path Parameters:**
- `matchId` (guid, required): Match identifier

**Response:**
```json
[
  {
    "TeamId": "guid_string",
    "TeamName": "Team Alpha",
    "TeamLogo": "string",
    "TotalPoints": 50,
    "ChickenDinner": true,
    "Knocks": 15,
    "Finishes": 12,
    "FinishPoints": 30,
    "PlacementPoints": 20,
    "BonusPoints": 0,
    "Rank": 1,
    "MapId": "guid_string",
    "MapName": "Erangel"
  }
]
```

**Response Details:**
- `Rank` (integer): Final ranking in the match (1 = winner)
- `ChickenDinner` (boolean): Whether team won (for Battle Royale games)
- `TotalPoints` (integer): Total points earned
- `PlacementPoints` (integer): Points from final placement
- `FinishPoints` (integer): Points from eliminations
- `BonusPoints` (integer): Additional bonus points

---

### 5.8. Get Player Participations (FFA Matches)

**Endpoint:** `GET /api/v1/match/{matchId}/player-participations`

**Description:**
Retrieves individual player statistics within an FFA match. Shows performance of each player on each team.

**Path Parameters:**
- `matchId` (guid, required): Match identifier

**Response:**
```json
[
  {
    "PlayerId": "guid_string",
    "PlayerName": "string",
    "TeamId": "guid_string",
    "TeamName": "Team Alpha",
    "Kills": 8,
    "Knocks": 10,
    "Deaths": 2,
    "EliminationPosition": 5,
    "IsMvp": true,
    "IsActive": true
  }
]
```

---

## 6. Complete Tournament Flows

### 6.1. FFA Tournament Complete Flow

#### Step 1: Tournament Creation (Admin)
1. **Create Tournament**
   - `POST /api/v1/tournament` (Admin only)
   - Set `MatchType: "Ffa"`
   - Configure enrollment, team sizes, dates
   - Set registration details

#### Step 2: Round Creation (Admin)
2. **Create Rounds**
   - `POST /api/v1/tournament-round`
   - Set `RoundType: "Normal"` or `"RoundRobin"` (typical for FFA)
   - Set `TeamCount`: Total participants in round
   - Set `NumberOfGroups`: How many groups to create
   - Set `MatchesPerGroup`: Matches per group
   - Set start/end dates

#### Step 3: Group Creation (Admin)
3. **Create Groups**
   - `POST /api/v1/tournament-group`
   - Create groups for each round
   - Set `MaxTeamCount`: Maximum participants per group
   - Groups are created per round

#### Step 4: Participant Assignment to Groups (Admin)
4. **Assign Participants to Groups**
   - `POST /api/v1/tournament-group-participant/assign`
   - Assign registered tournament participants to groups
   - Specify `ParticipantType`: "Team" or "User"
   - Provide list of participant IDs
   - Participants must be registered in tournament first

#### Step 5: Match Creation (Admin)
5. **Create Matches**
   - `POST /api/v1/match`
   - Set `MatchType: "Ffa"`
   - Link to `RoundId` and `GroupId`
   - Set `ScheduledAt` time
   - Set `BestOf`: Number of games (typically 1 for FFA)
   - Matches are created per group

#### Step 6: Assign Participants to Matches (Admin)
6. **Assign Teams to FFA Matches**
   - `POST /api/v1/match/{matchId}/team-participations`
   - Add all teams participating in the match
   - This links teams to the match for result tracking
   - Can be done before or after match starts

#### Step 7: Upload Match Results (Admin)
7. **Upload Match Results**
   - `POST /api/v1/match/{matchId}/team-participations` (Update with results)
   - For each team, provide:
     - `Rank`: Final ranking (1 = winner)
     - `TotalPoints`: Total points earned
     - `ChickenDinner`: Whether team won (if applicable)
     - `Knocks`, `Finishes`: Elimination statistics
     - `PlacementPoints`, `FinishPoints`, `BonusPoints`: Point breakdown
     - `MapId`: Map played on
   - Update match status to "Completed" when done

#### Step 8: Upload Player Results (Admin - Optional)
8. **Upload Player Statistics** (Optional)
   - `POST /api/v1/match/{matchId}/player-participations`
   - Add individual player statistics:
     - `Kills`, `Knocks`, `Deaths`
     - `EliminationPosition`: When player was eliminated
     - `IsMvp`: Most valuable player flag

#### Step 9: View Standings
9. **Get Standings**
   - `GET /api/v1/match/round/{roundId}/standings`
   - View aggregated standings for the round
   - Shows total points, rankings, statistics
   - Standings are calculated from all match results in the round

#### Step 10: Advance to Next Round (Admin)
10. **Create Next Round** (if applicable)
    - Repeat steps 2-9 for subsequent rounds
    - Assign top performers from previous round to new groups
    - Continue until tournament completion

---

### 6.2. Duel Tournament Complete Flow

#### Step 1: Tournament Creation (Admin)
1. **Create Tournament**
   - `POST /api/v1/tournament` (Admin only)
   - Set `MatchType: "Duel"`
   - Configure enrollment, team sizes, dates
   - Set registration details

#### Step 2: Round Creation (Admin)
2. **Create Rounds**
   - `POST /api/v1/tournament-round`
   - Choose appropriate `RoundType`:
     - `"Normal"` or `"RoundRobin"`: For group stages
     - `"SingleElimination"`: For knockout brackets
     - `"DoubleElimination"`: For double elimination brackets
   - Set `TeamCount`: Total participants
   - Set `NumberOfGroups`: For Normal/RoundRobin rounds
   - Set `MatchesPerGroup`: For group stages
   - Set start/end dates

#### Step 3A: For Group-Based Rounds (Normal/RoundRobin)
3A. **Create Groups** (if using groups)
   - `POST /api/v1/tournament-group`
   - Create groups for the round
   - Set `MaxTeamCount`: Participants per group

3B. **Assign Participants to Groups**
   - `POST /api/v1/tournament-group-participant/assign`
   - Assign participants to groups

3C. **Create Matches**
   - `POST /api/v1/match`
   - Set `MatchType: "Duel"`
   - Link to `RoundId` and `GroupId`
   - Set `BestOf`: Number of games (1, 3, 5, etc.)

3D. **Assign Teams to Matches**
   - `PUT /api/v1/match/{matchId}/assign-teams`
   - Set `Participant1Id` and `Participant2Id`
   - This creates the 1v1 matchup

#### Step 3B: For Elimination Rounds (Single/Double Elimination)
3E. **Create Bracket**
   - `POST /api/v1/match/bracket`
   - Provide bracket structure
   - System automatically creates matches and links them
   - Matches are linked to show advancement path

3F. **Assign Participants to Bracket**
   - `PUT /api/v1/match/{matchId}/assign-teams`
   - Assign participants to initial bracket matches
   - Winners automatically advance (when results are uploaded)

#### Step 4: Upload Match Results (Admin)
4. **Upload Duel Match Results**
   - `PUT /api/v1/match/{matchId}/duel-details`
   - Provide:
     - `Participant1Score`: Total score/wins
     - `Participant2Score`: Total score/wins
     - `WinnerTeamId`: Winner participant ID
     - `MapId`: Map played (if applicable)
     - `Duration`: Match duration (optional)
   - For Best-of-N matches, also update individual games:
     - `PUT /api/v1/match/game/{matchGameId}`
     - Set scores and winner for each game

#### Step 5: Update Match Status (Admin)
5. **Mark Match as Completed**
   - `PUT /api/v1/match/{matchId}`
   - Set `Status: "Completed"`
   - System automatically advances winners (for elimination brackets)

#### Step 6: View Standings
6. **Get Standings**
   - For group rounds: `GET /api/v1/match/round/{roundId}/standings`
   - For tournament-wide: `GET /api/v1/match/tournament/{tournamentId}/duel-standings`
   - Shows win/loss records, points, rankings

#### Step 7: View Bracket (Elimination Tournaments)
7. **Get Bracket View**
   - `GET /api/v1/match/bracket/tournament/{tournamentId}`
   - Visualize elimination tree
   - See match progression and winners

---

## Important Notes

### Tournament Type vs Round Type
- **Tournament Type** (`MatchType`): Determines match structure (Duel or FFA)
- **Round Type** (`RoundType`): Determines how participants are organized (Normal, RoundRobin, Elimination, etc.)

### Participant Assignment
- **FFA Tournaments**: Participants assigned to groups first, then to matches
- **Duel Tournaments**: Participants can be assigned directly to matches OR through groups

### Results Upload
- **FFA**: Use team participations endpoint with rankings and statistics
- **Duel**: Use duel details endpoint with scores and winner

### Standings Calculation
- **FFA**: Aggregated from match results (points, rankings, statistics)
- **Duel**: Win/loss records, points from match outcomes

### Best-of-N Matches
- Both Duel and FFA support multiple games per match
- Use match games endpoints to track individual game results
- Match winner determined by best-of series

---

## Common Error Scenarios

| Error | Cause | Solution |
|-------|-------|----------|
| "Match type mismatch" | Trying to use FFA endpoints for Duel match | Use correct endpoints for match type |
| "Participant not in tournament" | Assigning unregistered participant | Register participant first |
| "Group capacity exceeded" | Too many participants in group | Check group MaxTeamCount |
| "Round limit exceeded" | Too many participants in round | Check round TeamCount |
| "Invalid round type for match type" | Using incompatible round type | Use supported round types |

---

## API Endpoint Summary

### Tournament APIs
- `GET /api/v1/tournament` - List tournaments
- `GET /api/v1/tournament/{tournamentId}` - Get tournament details
- `GET /api/v1/tournament/my-tournaments` - Get user's tournaments
- `GET /api/v1/tournament/{tournamentId}/assigned-details` - Get assigned details

### Round APIs
- `GET /api/v1/tournament-round/tournament/{tournamentId}` - Get tournament rounds
- `GET /api/v1/tournament-round/{roundId}` - Get round details
- `GET /api/v1/tournament-round/{roundId}/groups-with-matches` - Get round structure

### Group APIs
- `GET /api/v1/tournament-group/round/{roundId}` - Get groups by round
- `GET /api/v1/tournament-group/{groupId}/details` - Get group details
- `POST /api/v1/tournament-group-participant/assign` - Assign participants to group

### Match APIs
- `GET /api/v1/match/bracket/tournament/{tournamentId}` - Get bracket
- `GET /api/v1/match/round/{roundId}/standings` - Get round standings
- `GET /api/v1/match/tournament/{tournamentId}/duel-standings` - Get duel standings
- `GET /api/v1/match/tournament/{tournamentId}` - Get tournament matches
- `GET /api/v1/match/{matchId}` - Get match details
- `GET /api/v1/match/{matchId}/games` - Get match games
- `GET /api/v1/match/{matchId}/team-participations` - Get FFA team results
- `GET /api/v1/match/{matchId}/player-participations` - Get FFA player results

