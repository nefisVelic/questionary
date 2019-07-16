import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Question } from './models/question.model';
let QuestionComponent = class QuestionComponent {
    constructor() {
        this.questions = [];
    }
    clickAddQuestion() {
        this.questions.push(new Question(this.questionIn));
    }
    clickRemoveQuestion(q) {
        this.questions.splice(this.questions.indexOf(q), 1);
    }
    onChange(event, q) {
        this.index = this.questions.indexOf(q);
        this.questions[this.index].qText = event.target.value;
        //console.log(this.questions[this.index], this.index);
    }
    viewForm(form) {
        console.log(form);
        console.log(this.questions);
    }
    ngOnInit() {
    }
};
QuestionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-question',
        templateUrl: './question.component.html',
        styleUrls: ['./question.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], QuestionComponent);
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map