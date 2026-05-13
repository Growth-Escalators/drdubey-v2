import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const revalidate = 3600

export async function GET() {
  try {
    const count = await db.lead.count({
      where: { patientStatus: 'IPD' }
    })
    const base = 35000
    const total = Math.max(base, count)
    return NextResponse.json({ count: total })
  } catch {
    return NextResponse.json({ count: 35000 })
  }
}
