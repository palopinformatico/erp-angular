import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() messageToParent = new EventEmitter<string>();

  todos: any[] = [];
  filteredTodos: any[] = [];
  pagedTodos: any[] = [];
  isLoading: boolean = true;
  searchTerm: string = '';

  pageSize = 5;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data.slice(0, 10); // Mostramos solo 10 tareas
        this.applyFilter();
        this.isLoading = false;
      });
  }

  applyFilter() {
    this.filteredTodos = this.todos.filter(todo =>
      todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 0;
    this.updatePage();
  }

  updatePage() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedTodos = this.filteredTodos.slice(start, end);
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePage();
  }

  updateParent() {
    this.messageToParent.emit('Mensaje actualizado desde el hijo');
  }
}
