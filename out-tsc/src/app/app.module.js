import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInquiryComponent } from './add-inquiry/add-inquiry.component';
import { QuestionGroupComponent } from './add-inquiry/question-group/question-group.component';
import { QuestionComponent } from './add-inquiry/question-group/question/question.component';
import { FormsModule } from '@angular/forms';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            AddInquiryComponent,
            QuestionGroupComponent,
            QuestionComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map