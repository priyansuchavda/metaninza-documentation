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
*** End Patch