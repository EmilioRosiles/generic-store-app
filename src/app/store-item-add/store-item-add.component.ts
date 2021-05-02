import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { StoreService } from '../_services/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-store-item-add',
  templateUrl: './store-item-add.component.html',
  styleUrls: ['./store-item-add.component.css'],
})
export class StoreItemAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
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
  }
}
