import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../_services/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreItem } from '../_models/store-item';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-store-item-add',
  templateUrl: './store-item-add.component.html',
  styleUrls: ['./store-item-add.component.css'],
})
export class StoreItemAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {}

  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    //here is where i left off
    this.storeService.addItem(this.form.value).pipe(first()).subscribe();
  }

  ngOnInit(): void {}
}
