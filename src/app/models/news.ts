export class News {
    constructor(
        public _id: string,
        public title: string,
        public author: string,
        public date: Date,
        public article: string,
        public category?: string[],
    ) {}
}