import { nanoid } from "nanoid";

export const generateNenoId = (length = 7) => {
    return nanoid(length);
}