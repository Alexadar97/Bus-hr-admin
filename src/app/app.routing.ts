import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './canactivate.service';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseQuestionComponent } from './course-question/course-question.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'courselist', pathMatch: 'full' },
            { path: 'courselist', component: CourselistComponent },
            { path: 'coursequestion', component: CourseQuestionComponent },
            { path: 'questionlist', component: QuestionlistComponent },
        ]
    },

]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
