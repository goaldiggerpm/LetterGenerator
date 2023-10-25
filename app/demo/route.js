import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(
    {
      id: 456,
      name: "Prince",
    },
    {
      status: 200,
    },
  );
}
