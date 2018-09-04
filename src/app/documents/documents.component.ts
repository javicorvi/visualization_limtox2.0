import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DOCUMENTS } from '../documents-mock';
import { DocumentsService } from '../documents.service';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Document[];
  constructor(private documentsService: DocumentsService) { }


  ngOnInit() {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documents = this.documentsService.getDocuments();
  }

}
