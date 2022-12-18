export class BadQueryParameterError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BadQueryParameterError";
    }
}

export class MissingLoginInfoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MissingLoginInfoError";
    }
}

export class IncorrectLoginInfoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "IncorrectLoginInfoError";
    }
}
