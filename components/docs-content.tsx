"use client"

import React, { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AuthenticationFlow, TeamCreationFlow } from "@/components/flowchart"

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
      content: string | React.ReactNode
      code?: string
      method?: string
      endpoint?: string
      requestBody?: string
      response?: string
      headers?: string
      flowchart?: "authentication" | "team-creation"
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
  "product-overview": {
    title: "Product Overview",
    description:
      "MetaNinza is a gaming app built for gamers and casual players. Learn about the core features, user experiences, and how everything connects.",
    sections: [
      {
        heading: "App Overview",
        content: (
          <>
            <p>
              MetaNinza is a gaming app built for gamers as well as users who simply enjoy playing casual games. The idea is to bring different types of gaming experiences into one app—competitive esports, skill-based casual challenges, and simple free play—while giving users a reason to keep coming back through rewards and progression.
            </p>
            <p>
              The app is designed so users can choose how they want to play. Some users may only want to play casual games for fun, while others may want to compete, rank higher, and earn rewards. MetaNinza supports both mindsets without forcing users into a single play style.
            </p>
            <p>
              At the center of the app is <strong>NinzaCoin</strong>, an internal coin system that rewards users for playing, competing, and completing activities. Coins are earned through different parts of the app and can later be used for rewards, discounts, or in-app benefits.
            </p>
          </>
        ),
      },
      {
        heading: "What Users Can Do in MetaNinza",
        content: (
          <>
            <p>
              Users can engage with MetaNinza in different ways depending on whether they are looking for a competitive esports experience or casual gameplay. The app is designed so users can move between these two without friction.
            </p>
              <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Esports Experience</h3>
                <p className="mb-2">
                  MetaNinza allows users to participate in esports tournaments built for competitive players who want structured gameplay and clear outcomes.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Users can join tournaments either individually or as part of a team</li>
                  <li>Tournaments follow defined rules and schedules</li>
                  <li>Rankings, match results, and rewards based on performance</li>
                  <li>Team-focused chat functionality for coordination</li>
                  <li>Performance can contribute to NinzaCoin earnings</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Casual Gaming Experience</h3>
                <p className="mb-2">
                  For users who prefer lighter or shorter gaming sessions, MetaNinza offers a dedicated casual games experience.
                </p>
                <div className="ml-4 space-y-2">
                  <div>
                    <strong>Clash Arena</strong>
                    <p className="text-xs mt-1">
                      Competitive casual mode where users play casual games under defined rules, such as limited tries or time. Players are placed into pools, and their scores are compared with others. Based on their final rank, users can earn NinzaCoin.
                    </p>
                  </div>
                  <div>
                    <strong>Free Play</strong>
                    <p className="text-xs mt-1">
                      Allows users to play the same casual games without any competition or ranking. This mode is focused on relaxed gameplay, practice, or exploration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        heading: "Feature Overview",
        content: (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left font-semibold">Area</th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">What Users Can Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2 font-medium">Esports Tournaments</td>
                  <td className="border border-border px-4 py-2">Structured tournaments with clear rules, rankings, team participation, and performance-based rewards</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border px-4 py-2 font-medium">Clash Arena</td>
                  <td className="border border-border px-4 py-2">Competitive casual gameplay with limited tries or time, pool-based rankings, and NinzaCoin rewards</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2 font-medium">Free Play</td>
                  <td className="border border-border px-4 py-2">Unlimited casual gameplay without rankings or pressure, focused on fun and exploration</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border px-4 py-2 font-medium">Quests & Daily Rewards</td>
                  <td className="border border-border px-4 py-2">Simple tasks, streak-based rewards, and engagement activities to earn NinzaCoin</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2 font-medium">Wallet (NinzaCoin)</td>
                  <td className="border border-border px-4 py-2">A single place to track coin balance, earnings, and spending</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border px-4 py-2 font-medium">Chat</td>
                  <td className="border border-border px-4 py-2">Team-focused chat mainly used for tournament coordination</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2 font-medium">Shop / Reward Store</td>
                  <td className="border border-border px-4 py-2">Redeem NinzaCoin for rewards, discounts, or in-app benefits (some features planned)</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
    ],
  },
  tournaments: {
    title: "Tournaments (Esports)",
    description:
      "Learn about MetaNinza's tournament system, formats, entry types, and how users participate in competitive esports events.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              Tournaments in MetaNinza are built for competitive gaming. Users can join esports tournaments for different games and compete either as solo players or as part of a team. Everything related to a tournament—registration, match details, communication, and results—is handled inside the app.
            </p>
            <p>
              The tournament system supports multiple games such as <strong>Valorant</strong>, <strong>Free Fire</strong>, <strong>FIFA</strong>, <strong>BGMI</strong>, <strong>Chess</strong>, and others. The structure is flexible, so the same system can be used across different game types.
            </p>
          </>
        ),
      },
      {
        heading: "Tournament Formats",
        content: (
          <>
            <p>
              MetaNinza supports two main tournament types:
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-2">
                  <strong>Free For All (FFA)</strong> tournaments are individual-based formats where players compete without fixed opponents.
                </p>
                <p className="mb-2">Supported FFA formats include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Normal</li>
                  <li>Normal Shuffle</li>
                  <li>Round Robin</li>
                  <li>Round Robin Shuffle</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">
                  <strong>Team Vs Team (Duel)</strong> tournaments are head-to-head or bracket-based competitions.
                </p>
                <p className="mb-2">Supported Duel formats include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Single Elimination</li>
                  <li>Double Elimination</li>
                  <li>Area-type rounds</li>
                </ul>
              </div>
            </div>
            <p className="mt-2">
              These formats decide how players or teams are grouped, matched, and eliminated.
            </p>
          </>
        ),
      },
      {
        heading: "Solo and Team Tournaments",
        content: (
          <>
            <p>
              Tournaments can be created as <strong>solo</strong> or <strong>team-based</strong>.
            </p>
            <p>
              For team tournaments, users create a team inside the app and invite other players to join. Once the team is ready, the team can register for the tournament together.
            </p>
          </>
        ),
      },
      {
        heading: "Entry and Rewards",
        content: (
          <>
            <p>
              Tournaments can be either <strong>free</strong> or <strong>paid</strong>.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-2">Paid tournaments support two entry types:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Real money</li>
                  <li>NinzaCoin</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Prize distribution can be configured in different ways:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Real money</li>
                  <li>NinzaCoin</li>
                  <li>Vouchers or rewards</li>
                </ul>
              </div>
            </div>
            <p className="mt-2">
              Entry type and prize type are configurable per tournament and are defined during tournament setup.
            </p>
          </>
        ),
      },
      {
        heading: "Tournament Creation and Organizers",
        content: (
          <>
            <p className="mb-2">
              Tournaments are created and managed from the admin panel.
            </p>
            <p>
              Along with internal tournaments, <strong>third-party organizers</strong> can also host their own tournaments on MetaNinza. Organizers can set up tournaments, define formats, entry rules, and prizes, and run their events on the platform.
            </p>
          </>
        ),
      },
      {
        heading: "How Users Participate",
        content: (
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>User opens the tournaments section in the app</li>
            <li>User selects a tournament</li>
            <li>
              If the tournament is team-based:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>User creates a team</li>
                <li>Invites other players</li>
              </ul>
            </li>
            <li>User completes tournament registration</li>
            <li>
              After the registration deadline:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Tournament admin assigns groups, rounds, or brackets</li>
                <li>Users can view all match-related details inside the app, including schedules, opponents, and lobby or join codes</li>
                <li>Users play their matches as scheduled</li>
                <li>Results and standings are updated</li>
                <li>Rewards are distributed after the tournament ends</li>
              </ul>
            </li>
          </ol>
        ),
      },
      {
        heading: "Communication",
        content: (
          <>
            <p className="mb-2">
              The app includes built-in chat for tournament-related communication.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Team members can chat with each other inside the app</li>
              <li>Users can contact tournament admins for questions or issues</li>
            </ul>
            <p>
              This avoids the need to move to external platforms for coordination.
            </p>
          </>
        ),
      },
      {
        heading: "Key Points to Know",
        content: (
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Tournaments support both casual and professional-level competition</li>
            <li>Match gameplay happens in the game itself; MetaNinza handles coordination and results</li>
            <li>The system is designed to support different formats and expand over time</li>
          </ul>
        ),
      },
    ],
  },
  "casual-games": {
    title: "Casual Games",
    description:
      "Learn about MetaNinza's casual gaming experience, including Clash Arena and Free Play modes.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              Casual Games in MetaNinza are built for users who want quick and simple gameplay without the complexity of full esports tournaments. These games are <strong>HTML5-based</strong> and are designed for short sessions, easy access, and repeat play.
            </p>
            <p>
              Casual games are divided into two parts: <strong>Clash Arena</strong> and <strong>Free Play</strong>. Both use the same set of games, but the way users play and earn rewards is different.
            </p>
          </>
        ),
      },
      {
        heading: "Clash Arena",
        content: (
          <>
            <p>
              Clash Arena is the competitive side of casual games. Here, users play casual HTML5 games but in a pool-based competitive setup where performance matters.
            </p>
            <p>
              In Clash Arena, a pool is created for a specific game. Users join the pool, play the game under defined rules, and compete with other users in the same pool for prizes.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-2">Pools can be configured with different prize types:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>NinzaCoin</li>
                  <li>Real money</li>
                  <li>Vouchers or rewards</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Pools can also have different entry conditions:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Free</li>
                  <li>Ad-based</li>
                  <li>Paid using NinzaCoin</li>
                  <li>(Real-money entry may be supported depending on pool configuration)</li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        heading: "Solo Clash (Current Structure)",
        content: (
          <>
            <p>
              At present, Clash Arena supports a <strong>Solo Clash</strong> structure.
            </p>
            <p className="mb-2">In Solo Clash:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Each user gets a fixed number of tries</li>
              <li>Each try has a limited play time</li>
              <li>The goal is to score as high as possible within the given limits</li>
              <li>The best score from all tries is considered for ranking</li>
            </ul>
            <p>
              Once the pool ends, a leaderboard is finalized. Based on the final rankings, users receive rewards according to the prize distribution defined for that pool.
            </p>
            <p>
              Solo Clash is designed to keep gameplay fair, fast, and skill-based, while still being easy for casual players to understand.
            </p>
          </>
        ),
      },
      {
        heading: "Free Play",
        content: (
          <>
            <p>
              Free Play is the non-competitive side of casual games.
            </p>
            <p>
              In Free Play, users can access a large library of HTML5 games (<strong>1000+ games planned</strong>) and play them without any restrictions such as tries, rankings, or competition. This mode is focused purely on fun, exploration, and relaxed gameplay.
            </p>
            <p>
              Free Play can include ads as a monetization layer, but gameplay itself remains unrestricted.
            </p>
            <p className="mb-2">
              Free Play also ties into the Quest system. For example:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Play a specific game for X minutes and earn coins</li>
              <li>Complete simple play-based tasks for rewards</li>
            </ul>
            <p>
              This allows users to earn NinzaCoin through engagement without needing to compete.
            </p>
          </>
        ),
      },
      {
        heading: "How Casual Games Fit into the App",
        content: (
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Clash Arena is for users who want competition and rewards</li>
            <li>Free Play is for users who want unlimited casual gameplay</li>
            <li>Both modes use the same games but serve different user intents</li>
            <li>Coins earned through casual games flow into the same wallet system used across the app</li>
          </ul>
        ),
      },
    ],
  },
  "quests-rewards": {
    title: "Quests, Daily Rewards, and Referral Program",
    description:
      "Learn about engagement features that keep users coming back and help grow the platform.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              This part of MetaNinza is focused on user engagement and retention. It gives users simple reasons to open the app regularly, try different features, and invite others to join.
            </p>
            <p>
              All rewards in this section are given in <strong>NinzaCoin</strong> and are tied to clear, trackable actions.
            </p>
          </>
        ),
      },
      {
        heading: "Quests",
        content: (
          <>
            <p>
              Quests are task-based activities that users can complete to earn NinzaCoin. These tasks are designed to guide users toward specific actions inside and outside the app, while keeping the effort simple.
            </p>
            <p>
              Some quests are one-time, while others can be repeatable or time-based, depending on configuration.
            </p>
            <p className="font-semibold text-foreground mb-2">Examples of quests include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Follow MetaNinza on social platforms (e.g., Instagram) and get X coins</li>
              <li>Play a specific tournament and earn X coins</li>
              <li>Play a casual game for a certain duration (for example, 15 minutes) and earn X coins</li>
              <li>Watch an ad to earn X coins</li>
              <li>Invite a certain number of users and earn X coins</li>
            </ul>
            <p className="font-semibold text-foreground mb-2">Quests can be used to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Increase gameplay engagement</li>
              <li>Push users toward new features</li>
              <li>Drive traffic to tournaments or specific games</li>
              <li>Support monetization through ads</li>
            </ul>
            <p className="mt-2">
              All quests are configurable from the admin side, including reward amount and completion rules.
            </p>
          </>
        ),
      },
      {
        heading: "Daily Rewards",
        content: (
          <>
            <p>
              MetaNinza includes a daily login reward system to encourage users to return to the app regularly.
            </p>
            <p>
              When a user logs in daily, they receive NinzaCoin based on their current streak. The reward increases as the streak continues.
            </p>
            <p className="font-semibold text-foreground mb-2">Example structure:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Day 1: 10 coins</li>
              <li>Day 2: 20 coins</li>
              <li>Day 3: higher reward</li>
              <li>And so on</li>
            </ul>
            <p className="mt-2">
              If a user misses a day, the streak may reset based on the configured rules.
            </p>
            <p className="mt-2">
              Daily rewards are simple by design and do not require gameplay. They exist mainly to build habit and retention.
            </p>
          </>
        ),
      },
      {
        heading: "Referral Program",
        content: (
          <>
            <p>
              MetaNinza also supports a referral system to help grow the user base organically.
            </p>
            <p>
              When a user refers another user to MetaNinza:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The referring user receives NinzaCoin</li>
              <li>The referred user also receives NinzaCoin after completing basic conditions (such as signup or first activity)</li>
            </ul>
            <p className="mb-2">
              Referral rewards and conditions are configurable. This can include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Signup-based rewards</li>
              <li>First play or first tournament-based rewards</li>
            </ul>
            <p>
              The referral program is meant to reward genuine invites rather than abuse, and additional checks can be added as the system evolves.
            </p>
          </>
        ),
      },
      {
        heading: "How This Fits into the App",
        content: (
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Quests push users toward playing games, tournaments, and engaging with the app</li>
            <li>Daily rewards keep users coming back consistently</li>
            <li>Referrals help grow the platform while rewarding both sides</li>
            <li>All rewards flow into the same wallet and NinzaCoin system</li>
          </ul>
        ),
      },
    ],
  },
  shop: {
    title: "Shop / Reward Store",
    description:
      "Learn how users can redeem their NinzaCoin for rewards, discounts, and in-app benefits.",
    sections: [
      {
        heading: "Overview",
        content: (
          <>
            <p>
              The Shop / Reward Store is where users can use their NinzaCoin. It gives value to the coins earned through tournaments, casual games, quests, and referrals.
            </p>
            <p>
              The store is divided into two parts, depending on how the coins are used.
            </p>
          </>
        ),
      },
      {
        heading: "Direct Reward Store",
        content: (
          <>
            <p>
              In the direct reward store, users can redeem NinzaCoin directly for rewards.
            </p>
            <p className="mb-2">
              Users exchange their NinzaCoin for items such as:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gift cards</li>
              <li>Vouchers</li>
              <li>Other digital rewards</li>
            </ul>
            <p>
              Each reward has a fixed NinzaCoin cost. Once a user redeems a reward, the required number of coins is deducted from their wallet.
            </p>
            <p>
              This section is meant to be simple and straightforward—earn coins, redeem rewards, and get clear value in return.
            </p>
          </>
        ),
      },
      {
        heading: "Game Shop (Coin + Money)",
        content: (
          <>
            <p>
              The game shop allows users to purchase products using a combination of NinzaCoin and real money.
            </p>
            <p>
              In this section:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Products or items are listed with a total price</li>
              <li>Users can apply NinzaCoin as a discount</li>
              <li>The remaining amount is paid using real money</li>
            </ul>
            <p>
              For example, a user might use 500 NinzaCoin to reduce the price of an item, and then pay the remaining amount in cash.
            </p>
            <p className="mb-2">
              This model allows NinzaCoin to act as a discount or benefit, rather than a full replacement for money.
            </p>
            <p className="mb-2">
              The game shop can include a wide range of products, such as:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>In-game items</li>
              <li>Digital goods</li>
              <li>Game-related products or services</li>
            </ul>
          </>
        ),
      },
      {
        heading: "How the Store Fits into the App",
        content: (
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>The store gives real value to NinzaCoin</li>
            <li>Users are encouraged to play more and earn coins</li>
            <li>Coins can be fully redeemed for rewards or partially used for discounts</li>
            <li>Wallet balance updates in real time after every redemption or purchase</li>
          </ul>
        ),
      },
    ],
  },
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
                className={`scroll-mt-20 ${isApi && index < doc.sections.length - 1 ? "border-b border-border pb-3 mb-3" : ""}`}
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
                    <div className="text-sm text-muted-foreground leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mb-2 [&_ol]:mb-2 [&_div]:mb-2">
                      {typeof section.content === "string" ? (
                        <p>{section.content}</p>
                      ) : (
                        section.content
                      )}
                    </div>
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

                {/* Flowchart */}
                {section.flowchart && (
                  <div className="my-6">
                    {section.flowchart === "authentication" && <AuthenticationFlow />}
                    {section.flowchart === "team-creation" && <TeamCreationFlow />}
                  </div>
                )}

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
