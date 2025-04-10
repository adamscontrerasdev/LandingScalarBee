"use server";

import { Lead } from "@/components/types";

export async function createLead(lead: Lead) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead),
  });

  if (!res.ok) {
    // Handle error response
    const errorData = await res.json();
    console.error("Error creating lead:", errorData);
    throw new Error(errorData.detail || "Error creating lead");
  }

  return res.json();
}
