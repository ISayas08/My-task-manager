export class TaskModel {
    constructor(
        public id: string,
        public name: string,
        public project: string,
        public limit_date: string,
        public comments: string = '',
        public isCompleted: boolean = false
    ) { }
}