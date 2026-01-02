"use client"

import React, { useCallback } from "react"
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  BackgroundVariant,
  ConnectionMode,
  Panel,
  MiniMap,
} from "reactflow"
import "reactflow/dist/style.css"

interface FlowchartProps {
  nodes: Node[]
  edges: Edge[]
  title?: string
  showMinimap?: boolean
  showControls?: boolean
}

export function Flowchart({
  nodes,
  edges,
  title,
  showMinimap = true,
  showControls = true,
}: FlowchartProps) {
  const nodeTypes = React.useMemo(() => ({}), [])

  return (
    <div className="w-full h-[600px] border border-border rounded-lg overflow-hidden bg-card">
      {title && (
        <div className="px-4 py-2 border-b border-border bg-muted/30">
          <h3 className="text-sm font-semibold">{title}</h3>
        </div>
      )}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{ type: "step" }}
        fitView
        connectionMode={ConnectionMode.Loose}
        className="bg-background"
      >
        {showControls && <Controls />}
        {showMinimap && <MiniMap />}
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  )
}

// Authentication Flow Example
export function AuthenticationFlow() {
  const nodes: Node[] = [
    {
      id: "start",
      type: "input",
      position: { x: 250, y: 0 },
      data: { label: "Start: User wants to login/signup" },
      style: {
        background: "#111737",
        color: "#FFF539",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
      },
    },
    {
      id: "choose-method",
      position: { x: 250, y: 100 },
      data: { label: "Choose Method\nPhone or Email?" },
      style: {
        background: "#FFF539",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
        textAlign: "center",
      },
    },
    {
      id: "phone-login",
      position: { x: 50, y: 200 },
      data: { label: "POST /api/v1/auth/phone-login\n\nPhoneNumber\nCountryCode" },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "email-login",
      position: { x: 450, y: 200 },
      data: { label: "POST /api/v1/auth/email-login\n\nEmail" },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "otp-sent",
      position: { x: 250, y: 350 },
      data: { label: "OTP Sent\nOtpToken received" },
      style: {
        background: "#FFF539",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
        textAlign: "center",
      },
    },
    {
      id: "verify-otp",
      position: { x: 250, y: 450 },
      data: { label: "POST /api/v1/auth/verify-otp\n\nOtpToken\nOtp (4 digits)" },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "250px",
      },
    },
    {
      id: "success",
      type: "output",
      position: { x: 250, y: 600 },
      data: { label: "Success!\nAccessToken & RefreshToken\nUser logged in" },
      style: {
        background: "#111737",
        color: "#FFF539",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
      },
    },
    {
      id: "resend-otp",
      position: { x: 500, y: 450 },
      data: { label: "POST /api/v1/auth/resend-otp\n\n(Optional)" },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px dashed #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        opacity: 0.7,
      },
    },
  ]

  const edges: Edge[] = [
    { id: "e1", source: "start", target: "choose-method", type: "step", animated: true },
    { id: "e2", source: "choose-method", target: "phone-login", type: "step", label: "Phone", animated: true },
    { id: "e3", source: "choose-method", target: "email-login", type: "step", label: "Email", animated: true },
    { id: "e4", source: "phone-login", target: "otp-sent", type: "step", animated: true },
    { id: "e5", source: "email-login", target: "otp-sent", type: "step", animated: true },
    { id: "e6", source: "otp-sent", target: "verify-otp", type: "step", animated: true },
    { id: "e7", source: "verify-otp", target: "success", type: "step", animated: true },
    { id: "e8", source: "otp-sent", target: "resend-otp", type: "step", label: "Need new OTP?", style: { stroke: "#999" } },
    { id: "e9", source: "resend-otp", target: "otp-sent", type: "step", style: { stroke: "#999" } },
  ]

  return <Flowchart nodes={nodes} edges={edges} title="Authentication Flow" />
}

// Team Creation Flow Example
export function TeamCreationFlow() {
  const nodes: Node[] = [
    {
      id: "start",
      type: "input",
      position: { x: 250, y: 0 },
      data: { label: "User wants to create a team" },
      style: {
        background: "#111737",
        color: "#FFF539",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
      },
    },
    {
      id: "check-game",
      position: { x: 250, y: 100 },
      data: { label: "Does team have GameId?" },
      style: {
        background: "#FFF539",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
        textAlign: "center",
      },
    },
    {
      id: "link-game",
      position: { x: 50, y: 200 },
      data: { label: "PUT /api/v1/auth/profile\n\nAdd GameIds array\n(gameid, usergameid)" },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
      },
    },
    {
      id: "create-team",
      position: { x: 250, y: 300 },
      data: { label: "POST /api/v1/team\n\nName (required)\nGameId (optional)\nTeamSize, Logo, etc." },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "250px",
      },
    },
    {
      id: "validate",
      position: { x: 250, y: 450 },
      data: { label: "Validation:\n- User has game ID (if GameId provided)\n- Team name valid\n- User is active" },
      style: {
        background: "#FFF539",
        color: "#111737",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
        textAlign: "center",
      },
    },
    {
      id: "team-created",
      type: "output",
      position: { x: 250, y: 600 },
      data: { label: "Team Created!\nOwner added as first member\nTeamId returned" },
      style: {
        background: "#111737",
        color: "#FFF539",
        border: "2px solid #111737",
        borderRadius: "8px",
        padding: "10px",
        fontWeight: "600",
      },
    },
    {
      id: "generate-invite",
      position: { x: 500, y: 600 },
      data: { label: "GET /api/v1/team/{teamId}/invite-link\n\n(Next step)" },
      style: {
        background: "#fff",
        color: "#111737",
        border: "2px dashed #111737",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        opacity: 0.7,
      },
    },
  ]

  const edges: Edge[] = [
    { id: "e1", source: "start", target: "check-game", type: "step", animated: true },
    { id: "e2", source: "check-game", target: "link-game", type: "step", label: "Yes", animated: true },
    { id: "e3", source: "check-game", target: "create-team", type: "step", label: "No", animated: true },
    { id: "e4", source: "link-game", target: "create-team", type: "step", animated: true },
    { id: "e5", source: "create-team", target: "validate", type: "step", animated: true },
    { id: "e6", source: "validate", target: "team-created", type: "step", animated: true },
    { id: "e7", source: "team-created", target: "generate-invite", type: "step", style: { stroke: "#999" } },
  ]

  return <Flowchart nodes={nodes} edges={edges} title="Team Creation Flow" />
}

