export class RowData {
    firstDate: Date;
    maybeActiveDate?: Date;
    constructor(firstDate: Date, maybeActiveDate: Date) {
        this.firstDate = firstDate;
        this.maybeActiveDate = maybeActiveDate;
    }
}
