import { NextResponse } from "next/server";
import { markAttendanceByPhone } from "@/lib/sheets";

export async function POST(req: Request) {
  const { phoneNumber } = await req.json();

  if (!phoneNumber) {
    return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
  }

  const success = await markAttendanceByPhone(phoneNumber);

  return NextResponse.json({ success });
}
