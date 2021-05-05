import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { StoreService } from '../_services/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreItem } from '../_models/store-item';

@Component({
  selector: 'app-store-item-add',
  templateUrl: './store-item-add.component.html',
  styleUrls: ['./store-item-add.component.css'],
})
export class StoreItemAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;
  storeItems?: any[];
  currentItem?: any;
  currentIndex = -1;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.getAll();
  }

  get f() {
    return this.form.controls;
  }

  addItem() {
    this.submitted = true;
    if (this.f.invalid) {
      return;
    }
    this.loading = true;
    this.storeService.create(this.form.value).subscribe();
    this.loading = false;
    this.refreshList();
    this.refreshList();
  }

  getAll() {
    this.storeService.getAllItems().subscribe(
      (data) => {
        this.storeItems = data;
        this.storeItems?.sort((a, b) => (a.name > b.name ? 1 : -1));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setActiveItem(item: StoreItem, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }
  refreshList(): void {
    this.currentItem = undefined;
    this.currentIndex = -1;
    this.getAll();
  }
  delete(item: any): void {
    this.storeService.delete(item.id).subscribe();
    this.refreshList();
    this.refreshList();
  }

  //do later
  seeImage(): void {}
  addImage(): void {}
}
