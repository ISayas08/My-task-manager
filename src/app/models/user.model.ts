import { TaskModel } from "./task.model";

export class UserModel {
    constructor(
        public id: string,
        public user: string,
        public email: string,
        public password: string,
        public tasks: TaskModel[] = []
    ) { }
}