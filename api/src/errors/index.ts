abstract class HttpError extends Error {
    public status!: number
}

//create a file to categorise and make errors more specific
export class BadRequest extends HttpError {
    constructor (message = 'Bad Request') {
        super(message)
        this.status = 400
    }
}

export class Unauthorized extends HttpError {
    constructor (message = 'Unauthorized') {
        super(message)
        this.status = 400
    }
}