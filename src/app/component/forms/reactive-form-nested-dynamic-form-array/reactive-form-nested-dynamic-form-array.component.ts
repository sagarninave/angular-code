import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-nested-dynamic-form-array',
  templateUrl: './reactive-form-nested-dynamic-form-array.component.html',
  styleUrls: ['./reactive-form-nested-dynamic-form-array.component.scss']
})
export class ReactiveFormNestedDynamicFormArrayComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const data = [
      {
        shift_start: "shift start 1",
        shift_end: "shift end 1",
        break: [
          {
            break_start: "break start 1.1",
            break_end: "breakend 1.1",
          },
          {
            break_start: "break start 1.2",
            break_end: "breakend 1.2",
          },
          {
            break_start: "break start 1.3",
            break_end: "breakend 1.3",
          }
        ]
      },
      {
        shift_start: "shift start 2",
        shift_end: "shift end 2",
        break: [
          {
            break_start: "break start 2.1",
            break_end: "breakend 2.1",
          },
          {
            break_start: "break start 2.2",
            break_end: "breakend 2.2",
          },
          {
            break_start: "break start 2.3",
            break_end: "breakend 2.3",
          }
        ]
      }
    ]

    this.userForm = this.fb.group({
      shift: this.fb.array(data.map(item => this.populateShiftData(item)))
    });
  }

  populateShiftData(item) {
    return this.fb.group({
      shift_start: this.fb.control(item.shift_start),
      shift_end: this.fb.control(item.shift_end),
      break: this.fb.array(item.break.map(item => this.populateBreakData(item)))
    });
  }

  populateBreakData(item) {
    return this.fb.group({
      break_start: this.fb.control(item.break_start),
      break_end: this.fb.control(item.break_end)
    });
  }

  onAddShift(): FormGroup {
    return this.fb.group({
      shift_start: [""],
      shift_end: [""],
      break: this.fb.array([])
    });
  }

  addShift(): void {
    this.shiftArray.push(this.onAddShift());
  }

  removeShift(index: number): void {
    this.shiftArray.removeAt(index);
  }

  // removeBreak(index1: number, index2: number): void {
  //   this.userForm[index1].removeAt(index2);
  // }

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
