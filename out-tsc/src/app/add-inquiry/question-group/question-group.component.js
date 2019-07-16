import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { QuestionGroup } from './models/question-group.model';
let QuestionGroupComponent = class QuestionGroupComponent {
    constructor() {
        this.showQuestion = false;
        this.questionGroups = [];
    }
    clickAddQuestionGroup() {
        this.questionGroups.push(new QuestionGroup(this.questionGroupIn));
    }
    ngOnInit() {
    }
};
QuestionGroupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-question-group',
        templateUrl: './question-group.component.html',
        styleUrls: ['./question-group.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], QuestionGroupComponent);
export { QuestionGroupComponent };
//# sourceMappingURL=question-group.component.js.map