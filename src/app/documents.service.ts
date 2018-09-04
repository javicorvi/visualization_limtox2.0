import { Injectable } from '@angular/core';
import { Document } from './document';
import { DOCUMENTS } from './documents-mock';

@Injectable()
export class DocumentsService {

  constructor() { }

  getDocuments(): Document[] {
    return DOCUMENTS;
  }
}



