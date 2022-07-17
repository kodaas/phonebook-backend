export class CustomError extends Error {
    constructor(Message, Status) {
        super(Message)
        this.statusCode = Status
    }
}

export function createCustomErr(msg, status) {
    return new CustomError(msg,status)
}