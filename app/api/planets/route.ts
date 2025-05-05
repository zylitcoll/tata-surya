import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("solarSystem");
    
    const planets = await db.collection("planets").find({}).toArray();
    
    return NextResponse.json(planets);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch planets data' },
      { status: 500 }
    );
  }
}