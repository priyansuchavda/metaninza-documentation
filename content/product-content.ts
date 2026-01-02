import React from "react";
import { ContentRecord } from "./types";

export const productContent: ContentRecord = {
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
  },,
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
  },,
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
  },,
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
  },,
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
};