import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  @Output() close = new EventEmitter<void>();
  @Output() bookAdded = new EventEmitter<Book>();

  constructor(private booksService: BooksService) { }

  closeModal() {
    this.close.emit();
  }
}