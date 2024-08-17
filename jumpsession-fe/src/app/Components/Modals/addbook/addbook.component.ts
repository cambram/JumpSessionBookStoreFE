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

  book: Book = {
    id: 0,
    book_name: '',
    isbn_number: '',
    author: ''
  };

  constructor(private booksService: BooksService) { }

  saveBook() {
    this.booksService.addBook(this.book).subscribe({
      next: book => {
        console.log('User created successfully:', book);
        this.bookAdded.emit(book[0]); // Emit the userCreated event
        this.closeModal();
      },
      error: error => {
        console.error('Error creating user:', error);
      }
    });
    // this.booksService.addBook(this.book).subscribe(
    //   (addedBook: Book) => {
        // console.log('User created successfully:', addedBook);
        // this.bookAdded.emit(addedBook); // Emit the userCreated event
        // this.closeModal();
    //   },
    //   error => {
    //     console.error('Error creating user:', error);
    //   }
    // );
  }

  closeModal() {
    this.close.emit();
  }
}