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

  book: Omit<Book, 'id'> = {
    book_name: '',
    isbn_number: '',
    author: ''
  };

  constructor(private booksService: BooksService) { }

  /*saveBook() {
    this.profileService.createUser(this.profile).subscribe(
      (book: Profile) => {
        console.log('User created successfully:', createdProfile);
        this.userCreated.emit(createdProfile); // Emit the userCreated event
        this.closeModal();
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }*/

  closeModal() {
    this.close.emit();
  }
}