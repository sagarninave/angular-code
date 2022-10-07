import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-nested-dynamic-form-array',
  templateUrl: './reactive-form-nested-dynamic-form-array.component.html',
  styleUrls: ['./reactive-form-nested-dynamic-form-array.component.scss']
})
export class ReactiveFormNestedDynamicFormArrayComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      shift: this.fb.array([this.onAddShift()])
    });
  }

  ngOnInit() {
  }

  onAddShift(): FormGroup {
    return this.fb.group({
      shift_start: [],
      shift_end: [],
      break: this.fb.array([])
    });
  }

  addShift(): void {
    this.shiftArray.push(this.onAddShift());
  }

  removeShift(index: number): void {
    this.shiftArray.removeAt(index);
  }

  get shiftArray(): FormArray {
    return <FormArray>this.userForm.get('shift');
  }

  addBreak(index): void {
    (<FormArray>(<FormGroup>this.shiftArray.controls[index]).controls.break).push(this.breakGroup());
  }

  private breakGroup(): FormGroup {
    return this.fb.group({
      break_start: [""],
      break_end: [""],
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
