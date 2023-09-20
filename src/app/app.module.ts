import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddIssueComponent} from './components/add-issue/add-issue.component';
import {EditIssueComponent} from './components/edit-issue/edit-issue.component';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BugService} from './shared/bug.service';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        AddIssueComponent,
        EditIssueComponent,
        IssueListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule, // Para el toolbar
        MatIconModule // Para los iconos
    ],
    providers: [BugService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
