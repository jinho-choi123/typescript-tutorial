import { Request } from "express";

interface authorizedRequest extends Request {
    user: String,
}

export default authorizedRequest