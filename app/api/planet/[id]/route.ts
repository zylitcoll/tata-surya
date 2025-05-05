import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const client = await clientPromise;
    const db = client.db("solarSystem");
    
    let planet;
    
    // Check if id is a valid ObjectId
    if (ObjectId.isValid(id)) {
      planet = await db.collection("planets").findOne({ _id: new ObjectId(id) });
    }
    
    // If not found by ObjectId or not a valid ObjectId, try to find by slug
    if (!planet) {
      planet = await db.collection("planets").findOne({ id: id });
    }
    
    if (!planet) {
      return NextResponse.json(
        { error: 'Planet not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(planet);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch planet data' },
      { status: 500 }
    );
  }
}