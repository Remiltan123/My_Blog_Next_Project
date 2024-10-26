// app/api/route.js
import { NextResponse } from 'next/server';
import DBconnect from '../../../util/db';
import Posts from '../../../model/Post'

// To check the connction 
/*
    try {
        const connectionStatus = await connect();
        console.log(connectionStatus); 
        return NextResponse.json({ message: connectionStatus });

    } catch (error) {
        console.error("Connection check failed:", error);
        const err = error
        return NextResponse.json({ error: "Failed to connect to the database", msg : err }, { status: 500 });
    }

// to save the model
    try {
        // Creating a test document
        const testPost = new Posts({
            title: "Test Post",
            desc: "This is a test post description",
            img: "https://dummyimage.com/300x200/000/fff",
            content: "This is the content of the test post.",
            username: "testUser",
        });

        const savedPost = await testPost.save();
        console.log("Post saved:", savedPost);
        return NextResponse.json({ message: "Post saved successfully!", data: savedPost });

    } catch (error) {
        console.error("Error saving post:", error);
        return NextResponse.json({ error: "Failed to save post" }, { status: 500 });
    }
*/

export const GET = async () => {
    
    await DBconnect();
    
    try {
        
        const Data = await Posts.find();
        return NextResponse.json({succues: true, Data:Data});
       
    } catch (error) {
        console.error("Failed to Fech the data", error);
        return NextResponse.json({ error: "Failed to Fech the data" ,succues: false });
    }
};



