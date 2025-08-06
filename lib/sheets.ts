import { google } from "googleapis";
import credentials from "./googleSheetsAuth.json"; // Adjust path if needed

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

export async function markAttendanceByPhone(phoneNumber: string) {
  const spreadsheetId = "1ZR6mUWSNcT2lcoOG9gyurxRGhHdLv_sO9Wt2pSjth4s"; // Get it from the URL
  const range = "'استمارة ملتقى قسم التسويق الوطني (الردود)'!A1:Z1000"; // adjust to your sheet/tab name

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = res.data.values || [];

  const phoneColIndex = 8; // adjust to your actual phone number column (starts from 0)
  const attendanceColIndex = 14; // adjust to the attendance column (also starting from 0)

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row[phoneColIndex] === phoneNumber) {
      row[attendanceColIndex] = "✓"; // Mark attendance

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Sheet1!A${i + 1}:Z${i + 1}`,
        valueInputOption: "RAW",
        requestBody: {
          values: [row],
        },
      });

      return true;
    }
  }

  return false; // not found
}
