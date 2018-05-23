export class TaskModel {
    constructor(
        public name: string,
        public project: string,
        public limit_date: string,
        public comments: string = ''
    ) { }
}