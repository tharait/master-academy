import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
type ResponseData = {
  message: string
}
 
export function POST(
  req: NextApiRequest
) {
  const data = req.body();
  return NextResponse.json(data);
}