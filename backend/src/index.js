import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({ path:"./.env"});

const PORT = process.env.PORT || 8000; /*so if port is undefined /missing in .env then fallback as 8000*/

const startServer = async () => {
    try {
        await connectDB();

        const server = app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`); // starts express
        });

        server.on("error",(error) => {
            console.error("ERROR:",error);
            process.exit(1); // handles server error such as port already in use
        });


    } catch (error) {
        console.error("server startup failed:",error.message);
    }
};

startServer();

