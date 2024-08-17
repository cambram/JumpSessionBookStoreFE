import { Component } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';
  errorMessage: string = '';
  id : number = 0;

  isAddBookModalVisible: boolean = false;

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: (res) => {
        this.books = res;
        this.filteredBooks = this.books;
      },
      error: (err) => {
        console.log('Failed to fetch books: ',err)
      }
    })
  }

  filterBooks() {
    const term = this.searchTerm.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.book_name.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  }

  onRowClick(book: Book): void {
    console.log('Row clicked:', book);
    alert("Book ?");
    this.bookService.deleteBookById(book.id).subscribe({
      next: ()=>{
        console.log("Deleted");
      }

    })
  }

  openAddBookModal() {
    console.log('add book clicked');
    this.isAddBookModalVisible = true;
  }
  
  closeAddBookModal() {
    this.isAddBookModalVisible = false;
  }

  onBookAdded(book: Book): void {
    //this.loadUsers();
    this.closeAddBookModal();
  }
}