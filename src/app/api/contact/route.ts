import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Reuse connection across API calls in development
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI as string).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Define the Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

// Create the model (or reuse if it already exists)
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    await Contact.create(body);
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}
