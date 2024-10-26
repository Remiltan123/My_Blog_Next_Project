// app/api/route.js
import { NextResponse } from 'next/server';
import connect from '../../../util/db';

export const GET = async () => {
    try {
        const connectionStatus = await connect();
        console.log(connectionStatus); 
        return NextResponse.json({ message: connectionStatus });

    } catch (error) {
        console.error("Connection check failed:", error);
        const err = error
        return NextResponse.json({ error: "Failed to connect to the database", msg : err }, { status: 500 });
    }
};
