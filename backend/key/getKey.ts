import env from "../enviroment/env";
import crypto from "crypto";
import getWebUIKey from "./getWebUIKey";

const getKey = async() => {

    if (process.env.KEY) {
        // For Docker 
        
        const password = process.env.KEY;

        env.key = crypto.createHash("md5").update(password).digest("hex");

    } else {

        let password = "1234";

        password = crypto.createHash("md5").update(password).digest("hex");

        env.key = password;
    }
}

export default getKey;