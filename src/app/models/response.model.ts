export class Response {
    constructor(
        public message: string,
        public traceId: string,
        public data?: Client[]
    ) {}
}

export interface Client {
    id?: number,
    sharedId?: string,
    businessId: string,
    email: string,
    phone: string,
    createAt?: string
}