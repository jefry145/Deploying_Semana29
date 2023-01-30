import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Store } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( 
    private firestore:Firestore
  ) { }

  addProduct(products:Store){
    const StoreRef = collection(this.firestore, 'StoreProducts');
    return addDoc(StoreRef, products)    
  }
  
  GetProduct():Observable<Store[]>{
    const StoreRef = collection(this.firestore,'StoreProducts');
    return collectionData(StoreRef, {idField:"id"})as Observable<Store[]>
  }
   
  DeleteProduct(products:Store){
   const StoreRef = doc(this.firestore, `StoreProducts/${products.id}`)
   return deleteDoc(StoreRef)
  }
}
