require("module-alias/register");
const app = require("./app");
const dotenv = require("dotenv");
const writeInitialTasks = require("./controllers/initialize");

// Load environment variables
dotenv.config();

const StartServer = async () => {
  try {
    // Write the initial tasks to the tasks.json file
    await writeInitialTasks();

    // Define the port
    const port = process.env.PORT || 3000;

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

StartServer();
