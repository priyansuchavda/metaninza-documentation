import React from "react";
import { Card } from "@/components/ui/card";
import { ContentRecord } from "./types";

export const tournamentApiContent: ContentRecord = {
  "tournaments-api-overview": {
    title: "Tournaments - Overview",
    description:
      "Overview of tournament APIs, round types, and complete tournament flows. This page provides a high-level understanding of the tournament system.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              This documentation covers all tournament-related APIs including tournament discovery, rounds, groups, matches, and standings. Tournaments can be of two types: <strong>Duel</strong> (1v1 matches) or <strong>FFA</strong> (Free-for-All, multiple participants per match).
            </p>
          </>
        ),
      },
      {
        heading: "Round Types",
        content: (
          <>
            <p>
              Rounds define how participants are organized and how matches are structured within a tournament.
            </p>
            <div className="grid gap-3 mt-4 md:grid-cols-2">
              <Card className="p-4 border-border bg-muted/30">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Normal</h3>
                  <p className="text-sm text-muted-foreground">
                    Standard round where participants are divided into groups. Matches created per group. Supports both <strong>Duel</strong> and <strong>FFA</strong>.
                  </p>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Normal with Shuffle</h3>
                  <p className="text-sm text-muted-foreground">
                    Same as Normal, but participants are automatically shuffled/randomized for fair distribution.
                  </p>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Round Robin</h3>
                  <p className="text-sm text-muted-foreground">
                    Each participant plays against every other participant exactly once. Complete round-robin schedule with maximum number of matches. Ensures fair competition.
                  </p>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Round Robin with Shuffle</h3>
                  <p className="text-sm text-muted-foreground">
                    Same as Round Robin, but with automatic participant shuffling for group assignment.
                  </p>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Single Elimination</h3>
                  <p className="text-sm text-muted-foreground">
                    Bracket-style elimination where participants are eliminated after one loss. Bracket structure with winner advancing. Typically for <strong>Duel</strong> matches only.
                  </p>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Double Elimination</h3>
                  <p className="text-sm text-muted-foreground">
                    Bracket-style elimination with two brackets: Winners and Losers. Participants eliminated after two losses. Typically for <strong>Duel</strong> matches only.
                  </p>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30 md:col-span-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-base">Arena</h3>
                  <p className="text-sm text-muted-foreground">
                    Special round type where participants are added directly to the round. Standings are manually uploaded by admins. No groups required. Supports both <strong>Duel</strong> and <strong>FFA</strong>.
                  </p>
                </div>
              </Card>
            </div>
          </>
        ),
      },
      {
        heading: "FFA Tournament Complete Flow",
        content: (
          <>
            <p className="mb-4">
              Complete step-by-step flow for creating and managing an FFA (Free-for-All) tournament:
            </p>
            <div className="space-y-3">
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Create Tournament</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament</code>
                    <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MatchType: "Ffa"</code>. Configure enrollment, team sizes, dates, and registration details.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">2</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Create Rounds</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-round</code>
                    <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">RoundType: "Normal"</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs">"RoundRobin"</code>. Configure TeamCount, NumberOfGroups, MatchesPerGroup, and dates.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">3</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Create Groups</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-group</code>
                    <p className="text-sm text-muted-foreground">Create groups for each round. Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MaxTeamCount</code> to define maximum participants per group.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">4</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Assign Participants to Groups</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-group-participant/assign</code>
                    <p className="text-sm text-muted-foreground">Assign registered tournament participants to groups. Specify <code className="bg-muted px-1.5 py-0.5 rounded text-xs">ParticipantType: "Team"</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs">"User"</code>.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">5</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Create Matches</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/match</code>
                    <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MatchType: "Ffa"</code>. Link to RoundId and GroupId. Set ScheduledAt time and BestOf (typically 1 for FFA).</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">6</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Assign Teams to FFA Matches</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/match/{`{matchId}`}/team-participations</code>
                    <p className="text-sm text-muted-foreground">Add all teams participating in the match. This links teams to the match for result tracking.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">7</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Upload Match Results</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/match/{`{matchId}`}/team-participations</code>
                    <p className="text-sm text-muted-foreground">Update with results: Rank, TotalPoints, ChickenDinner, Knocks, Finishes, PlacementPoints, FinishPoints, BonusPoints, MapId. Update match status to "Completed".</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">8</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Upload Player Statistics <span className="text-xs font-normal text-muted-foreground">(Optional)</span></h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/match/{`{matchId}`}/player-participations</code>
                    <p className="text-sm text-muted-foreground">Add individual player statistics: Kills, Knocks, Deaths, EliminationPosition, IsMvp.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">9</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Get Standings</h3>
                    <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">GET /api/v1/match/round/{`{roundId}`}/standings</code>
                    <p className="text-sm text-muted-foreground">View aggregated standings for the round. Shows total points, rankings, and statistics calculated from all match results.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-border bg-muted/30">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">10</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Create Next Round <span className="text-xs font-normal text-muted-foreground">(if applicable)</span></h3>
                    <p className="text-sm text-muted-foreground">Repeat steps 2-9 for subsequent rounds. Assign top performers from previous round to new groups. Continue until tournament completion.</p>
                  </div>
                </div>
              </Card>
            </div>
          </>
        ),
      },
      {
        heading: "Duel Tournament Complete Flow",
        content: (
          <>
            <p className="mb-4">
              Complete step-by-step flow for creating and managing a Duel tournament. Two different flows depending on round type:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">For Group-Based Rounds (Normal/RoundRobin)</h3>
                <div className="space-y-3">
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">1</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Tournament</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament</code>
                        <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MatchType: "Duel"</code>. Configure enrollment, team sizes, dates, and registration details.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">2</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Rounds</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-round</code>
                        <p className="text-sm text-muted-foreground">Choose appropriate RoundType: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">"Normal"</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs">"RoundRobin"</code>. Set TeamCount, NumberOfGroups, MatchesPerGroup, and dates.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">3</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Groups</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-group</code>
                        <p className="text-sm text-muted-foreground">Create groups for the round. Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MaxTeamCount</code> to define participants per group.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">4</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Assign Participants to Groups</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-group-participant/assign</code>
                        <p className="text-sm text-muted-foreground">Assign participants to groups.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">5</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Matches</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/match</code>
                        <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MatchType: "Duel"</code>. Link to RoundId and GroupId. Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">BestOf</code> (1, 3, 5, etc.).</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">6</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Assign Teams to Matches</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">PUT /api/v1/match/{`{matchId}`}/assign-teams</code>
                        <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Participant1Id</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Participant2Id</code>. This creates the 1v1 matchup.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">7</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Upload Duel Match Results</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">PUT /api/v1/match/{`{matchId}`}/duel-details</code>
                        <p className="text-sm text-muted-foreground">Provide Participant1Score, Participant2Score, WinnerTeamId, MapId, Duration. For Best-of-N matches, also update individual games using <code className="bg-muted px-1.5 py-0.5 rounded text-xs">PUT /api/v1/match/game/{`{matchGameId}`}</code>.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">8</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Get Standings</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">GET /api/v1/match/round/{`{roundId}`}/standings</code>
                        <p className="text-sm text-muted-foreground">Shows win/loss records, points, and rankings for group rounds.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">For Elimination Rounds (Single/Double Elimination)</h3>
                <div className="space-y-3">
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">1</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Tournament</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament</code>
                        <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">MatchType: "Duel"</code>. Configure enrollment, team sizes, dates, and registration details.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">2</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Rounds</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/tournament-round</code>
                        <p className="text-sm text-muted-foreground">Set <code className="bg-muted px-1.5 py-0.5 rounded text-xs">RoundType: "SingleElimination"</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs">"DoubleElimination"</code>. Set TeamCount and dates.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">3</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Create Bracket</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">POST /api/v1/match/bracket</code>
                        <p className="text-sm text-muted-foreground">Provide bracket structure. System automatically creates matches and links them. Matches are linked to show advancement path.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">4</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Assign Participants to Bracket</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">PUT /api/v1/match/{`{matchId}`}/assign-teams</code>
                        <p className="text-sm text-muted-foreground">Assign participants to initial bracket matches. Winners automatically advance when results are uploaded.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">5</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Upload Match Results</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">PUT /api/v1/match/{`{matchId}`}/duel-details</code>
                        <p className="text-sm text-muted-foreground">Provide Participant1Score, Participant2Score, WinnerTeamId. System automatically advances winners to next round.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">6</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Get Bracket View</h3>
                        <code className="bg-muted px-2 py-1 rounded text-xs block mb-2">GET /api/v1/match/bracket/tournament/{`{tournamentId}`}</code>
                        <p className="text-sm text-muted-foreground">Visualize elimination tree. See match progression and winners.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        heading: "API Endpoint Summary",
        content: (
          <>
            <p className="mb-3">
              Quick reference of all tournament-related API endpoints:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-2">Tournament APIs</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament</code> - List tournaments</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament/{`{tournamentId}`}</code> - Get tournament details</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament/my-tournaments</code> - Get user's tournaments</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament/{`{tournamentId}`}/assigned-details</code> - Get assigned details</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Round APIs</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament-round/tournament/{`{tournamentId}`}</code> - Get tournament rounds</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament-round/{`{roundId}`}</code> - Get round details</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament-round/{`{roundId}`}/groups-with-matches</code> - Get round structure</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Group APIs</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament-group/round/{`{roundId}`}</code> - Get groups by round</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/tournament-group/{`{groupId}`}/details</code> - Get group details</li>
                  <li><code className="bg-muted px-2 py-1 rounded">POST /api/v1/tournament-group-participant/assign</code> - Assign participants to group</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Match APIs</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/bracket/tournament/{`{tournamentId}`}</code> - Get bracket</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/round/{`{roundId}`}/standings</code> - Get round standings</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/tournament/{`{tournamentId}`}/duel-standings</code> - Get duel standings</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/tournament/{`{tournamentId}`}</code> - Get tournament matches</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/{`{matchId}`}</code> - Get match details</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/{`{matchId}`}/games</code> - Get match games</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/{`{matchId}`}/team-participations</code> - Get FFA team results</li>
                  <li><code className="bg-muted px-2 py-1 rounded">GET /api/v1/match/{`{matchId}`}/player-participations</code> - Get FFA player results</li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  "tournaments-api-tournament": {
    title: "Tournaments - Tournament API",
    description:
      "API endpoints for tournament discovery, details, and user participation tracking.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              This documentation covers all tournament-related APIs including tournament discovery, rounds, groups, matches, and standings. Tournaments can be of two types: <strong>Duel</strong> (1v1 matches) or <strong>FFA</strong> (Free-for-All, multiple participants per match).
            </p>
          </>
        ),
      },
      {
        heading: "Get Tournaments List",
        method: "GET",
        content:
          "Retrieves a list of tournaments with optional filtering. Supports pagination and sorting. Can be accessed anonymously, but authenticated users get additional context (e.g., whether they've joined).",
        endpoint: "/api/v1/tournament",
        headers: "Authorization: Bearer {access_token} (Optional)",
        requestBody: `Query Parameters (All Optional):
- GameId (guid): Filter by game ID
- Status (enum): Filter by tournament status (Draft, Published, RegistrationOpen, Ongoing, Completed, Cancelled)
- IsActive (boolean): Filter by active status
- RegistrationOpen (boolean): Filter by registration status
- IsTrending (boolean): Filter trending tournaments
- IsFeatured (boolean): Filter featured tournaments
- IsOnline (boolean): Filter online/offline tournaments
- Currency (enum): Filter by currency (Rupee, Dollar, etc.)
- PageNumber (integer): Page number (default: 1)
- PageSize (integer): Items per page (default: 20)
- SortBy (string): Field to sort by
- SortOrder (string): Sort order (asc/desc)`,
        response: `{
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
      "PrizePool": 10000.00,
      "EntryFee": 100.00,
      "Currency": "Rupee",
      "TeamsJoinedCount": 45,
      "HasJoined": true,
      "CanJoin": true
    }
  ],
  "TotalCount": 100,
  "PageNumber": 1,
  "PageSize": 20,
  "TotalPages": 5
}`,
      },
      {
        heading: "Get Tournament by ID",
        method: "GET",
        content:
          "Retrieves detailed information about a specific tournament. Can be accessed anonymously, but authenticated users get additional context.",
        endpoint: "/api/v1/tournament/{tournamentId}",
        headers: "Authorization: Bearer {access_token} (Optional)",
        response: `Same structure as tournament item in list response, but with full details including all fields from TournamentResponseDto.`,
      },
      {
        heading: "Get My Participated Tournaments",
        method: "GET",
        content:
          "Retrieves all tournaments where the authenticated user (or their teams) is registered and approved. Shows tournaments the user is actively participating in.",
        endpoint: "/api/v1/tournament/my-tournaments",
        headers: "Authorization: Bearer {access_token}",
        response: `Same structure as Get Tournaments List response, but filtered to only include tournaments where the user is a participant.`,
      },
      {
        heading: "Get Assigned Tournament Details",
        method: "GET",
        content:
          "Retrieves detailed tournament structure showing all rounds, groups, and matches where the authenticated user (or their team) is assigned. This is the primary endpoint for participants to see their tournament schedule and assignments.",
        endpoint: "/api/v1/tournament/{tournamentId}/assigned-details",
        headers: "Authorization: Bearer {access_token}",
        response: `{
  "Rounds": [
    {
      "Round": {
        "Id": "guid_string",
        "RoundName": "string",
        "RoundType": "Normal",
        "Status": "Ongoing",
        "RoundNumber": 1
      },
      "Group": {
        "Id": "guid_string",
        "GroupName": "Group A"
      },
      "Match": {
        "MatchId": "guid_string",
        "MatchType": "Duel",
        "Status": "Upcoming",
        "ScheduledAt": "2024-01-02T10:00:00Z"
      }
    }
  ]
}`,
      },
    ],
  },
  "tournaments-api-rounds-groups": {
    title: "Tournaments - Rounds & Groups",
    description:
      "API endpoints for managing tournament rounds and groups. Supports both Duel and FFA tournament types.",
    sections: [
      {
        heading: "Get Tournament Rounds",
        method: "GET",
        content:
          "Retrieves all rounds for a specific tournament. Shows round structure, types, and status.",
        endpoint: "/api/v1/tournament-round/tournament/{tournamentId}",
        headers: "Authorization: Bearer {access_token} (Optional)",
        response: `[
  {
    "Id": "guid_string",
    "RoundName": "Group Stage",
    "RoundType": "Normal",
    "Status": "Ongoing",
    "RoundNumber": 1,
    "NumberOfGroups": 4,
    "NumberOfMatches": 12,
    "StartDate": "2024-01-01T00:00:00Z",
    "EndDate": "2024-01-05T00:00:00Z"
  }
]`,
      },
      {
        heading: "Get Round Details",
        method: "GET",
        content:
          "Retrieves detailed information about a specific round.",
        endpoint: "/api/v1/tournament-round/{roundId}",
        response: `Same structure as round item in rounds list, with full details.`,
      },
      {
        heading: "Get Round Groups with Matches",
        method: "GET",
        content:
          "Retrieves all groups in a round along with their matches. This is the primary endpoint to see the complete round structure including groups, participants, and matches.",
        endpoint: "/api/v1/tournament-round/{roundId}/groups-with-matches",
        response: `{
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
          "IsMyTeam": false
        }
      ],
      "Matches": [
        {
          "MatchId": "guid_string",
          "MatchType": "Duel",
          "ScheduledAt": "2024-01-02T10:00:00Z",
          "Status": "Upcoming",
          "BestOf": 3,
          "DuelDetail": {
            "Participant1Id": "guid_string",
            "Participant1Name": "string",
            "Participant2Id": "guid_string",
            "Participant2Name": "string"
          }
        }
      ]
    }
  ]
}`,
      },
      {
        heading: "Get Groups by Round",
        method: "GET",
        content:
          "Retrieves all groups for a specific round.",
        endpoint: "/api/v1/tournament-group/round/{roundId}",
        response: `[
  {
    "Id": "guid_string",
    "GroupName": "Group A",
    "RoundId": "guid_string",
    "MaxTeamCount": 4,
    "IsActive": true
  }
]`,
      },
      {
        heading: "Get Group Details",
        method: "GET",
        content:
          "Retrieves detailed information about a group including participants and matches.",
        endpoint: "/api/v1/tournament-group/{groupId}/details",
        response: `Similar to group structure in round groups response, with full participant and match details.`,
      },
      {
        heading: "Duel vs FFA - Round & Group Differences",
        content: (
          <>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-2">
                  <strong>Duel Tournaments</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Participants can be assigned directly to matches OR through groups</li>
                  <li>Each match has exactly 2 participants</li>
                  <li>Supports all round types including Single/Double Elimination</li>
                  <li>Groups are optional for elimination rounds</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">
                  <strong>FFA Tournaments</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Participants must be assigned to groups first, then to matches</li>
                  <li>Each match has multiple participants (4-100+)</li>
                  <li>Does NOT support Single/Double Elimination (designed for 1v1)</li>
                  <li>Groups are required for organizing participants</li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  "tournaments-api-matches": {
    title: "Tournaments - Matches",
    description:
      "API endpoints for managing tournament matches, standings, and results. Supports both Duel and FFA match types.",
    sections: [
      {
        heading: "Get Bracket by Tournament",
        method: "GET",
        content:
          "Retrieves the complete bracket structure for a tournament. Used for Single/Double Elimination tournaments to visualize the elimination tree.",
        endpoint: "/api/v1/match/bracket/tournament/{tournamentId}",
        response: `{
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
          "NextMatchId": "guid_string"
        }
      ]
    }
  ]
}`,
      },
      {
        heading: "Get Round Standings",
        method: "GET",
        content:
          "Retrieves standings for a specific round. For FFA tournaments, shows aggregated results from all matches. For Duel tournaments, shows win/loss records.",
        endpoint: "/api/v1/match/round/{roundId}/standings",
        requestBody: `Query Parameters (Optional):
- groupId (guid): Filter standings by group
- matchId (guid): Filter standings by match`,
        response: `FFA Tournament:
[
  {
    "teamId": "guid_string",
    "teamName": "Team Alpha",
    "totalPoints": 150,
    "chickenDinner": 2,
    "knocks": 45,
    "finishes": 38,
    "rank": 1.5,
    "matchCount": 3
  }
]

Duel Tournament:
[
  {
    "participantId": "guid_string",
    "participantName": "Team Alpha",
    "wins": 5,
    "losses": 2,
    "draws": 0,
    "totalPoints": 15,
    "matchCount": 7
  }
]`,
      },
      {
        heading: "Get Duel Standings",
        method: "GET",
        content:
          "Retrieves aggregated duel standings across all rounds in a tournament. Shows win/loss records and points for all participants.",
        endpoint: "/api/v1/match/tournament/{tournamentId}/duel-standings",
        requestBody: `Query Parameters (Optional):
- roundId (guid): Filter by specific round`,
        response: `[
  {
    "participantId": "guid_string",
    "participantName": "Team Alpha",
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
]`,
      },
      {
        heading: "Get Matches by Tournament",
        method: "GET",
        content:
          "Retrieves all matches for a tournament with optional filtering.",
        endpoint: "/api/v1/match/tournament/{tournamentId}",
        requestBody: `Query Parameters (Optional):
- RoundId (guid): Filter by round
- GroupId (guid): Filter by group
- Status (enum): Filter by match status (Upcoming, Live, Completed)
- MatchType (enum): Filter by match type (Duel, Ffa)
- PageNumber (integer): Page number
- PageSize (integer): Items per page`,
        response: `{
  "Items": [
    {
      "MatchId": "guid_string",
      "MatchType": "Duel",
      "ScheduledAt": "2024-01-02T10:00:00Z",
      "Status": "Upcoming",
      "BestOf": 3,
      "DuelDetail": {
        "Participant1Id": "guid_string",
        "Participant1Name": "Team A",
        "Participant2Id": "guid_string",
        "Participant2Name": "Team B"
      }
    }
  ],
  "TotalCount": 50,
  "PageNumber": 1,
  "PageSize": 20
}`,
      },
      {
        heading: "Get Match Details",
        method: "GET",
        content:
          "Retrieves detailed information about a specific match including all games, participants, and results.",
        endpoint: "/api/v1/match/{matchId}",
        response: `Full match details including:
- Match information (type, status, schedule)
- For Duel: Duel detail with participants
- For FFA: Team participations array
- Match games (if Best-of-N)
- Results and scores`,
      },
      {
        heading: "Get Match Games",
        method: "GET",
        content:
          "Retrieves all games within a match. Used for Best-of-N matches where a match consists of multiple games.",
        endpoint: "/api/v1/match/{matchId}/games",
        response: `[
  {
    "MatchGameId": "guid_string",
    "MatchId": "guid_string",
    "GameSerial": 1,
    "MapId": "guid_string",
    "MapName": "Erangel",
    "Participant1Score": 10,
    "Participant2Score": 8,
    "WinnerId": "guid_string",
    "GameResult": "Completed"
  }
]`,
      },
      {
        heading: "Get Team Participations (FFA Matches)",
        method: "GET",
        content:
          "Retrieves all team participations for an FFA match. Shows results, rankings, and statistics for each team in the match.",
        endpoint: "/api/v1/match/{matchId}/team-participations",
        response: `[
  {
    "TeamId": "guid_string",
    "TeamName": "Team Alpha",
    "TotalPoints": 50,
    "ChickenDinner": true,
    "Knocks": 15,
    "Finishes": 12,
    "Rank": 1,
    "MapId": "guid_string",
    "MapName": "Erangel"
  }
]`,
      },
      {
        heading: "Get Player Participations (FFA Matches)",
        method: "GET",
        content:
          "Retrieves individual player statistics within an FFA match. Shows performance of each player on each team.",
        endpoint: "/api/v1/match/{matchId}/player-participations",
        response: `[
  {
    "PlayerId": "guid_string",
    "PlayerName": "string",
    "TeamId": "guid_string",
    "TeamName": "Team Alpha",
    "Kills": 8,
    "Knocks": 10,
    "Deaths": 2,
    "EliminationPosition": 5,
    "IsMvp": true
  }
]`,
      },
    ],
  },
};