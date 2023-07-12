import StartApplication from "@framework";
import "dotenv/config";
import * as config from "./config";

global.config = config;

new StartApplication();
