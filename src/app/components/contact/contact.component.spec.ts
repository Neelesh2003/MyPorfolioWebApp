import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule,    // Add ReactiveFormsModule to test forms
        MatFormFieldModule,     // Add Angular Material Form Field Module
        MatInputModule,         // Add Angular Material Input Module
        MatButtonModule,        // Add Angular Material Button Module
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form controls', () => {
    expect(component.contactForm.contains('name')).toBeTrue();
    expect(component.contactForm.contains('email')).toBeTrue();
    expect(component.contactForm.contains('subject')).toBeTrue();
    expect(component.contactForm.contains('message')).toBeTrue();
  });

  it('should make the name field required', () => {
    let nameControl = component.contactForm.get('name');
    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalsy();
  });

  it('should make the email field required and valid', () => {
    let emailControl = component.contactForm.get('email');
    emailControl?.setValue('test@domain.com');
    expect(emailControl?.valid).toBeTrue();
  });

  it('should show an error message for invalid email', () => {
    let emailControl = component.contactForm.get('email');
    emailControl?.setValue('invalidEmail');
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(By.css('.mat-error'));
    expect(errorMessage.nativeElement.textContent).toContain('Invalid Email, Please provide a valid email.');
  });

  it('should make the subject field valid when it contains at least 10 characters', () => {
    let subjectControl = component.contactForm.get('subject');
    subjectControl?.setValue('Short');
    expect(subjectControl?.valid).toBeFalsy();
    subjectControl?.setValue('Valid subject length');
    expect(subjectControl?.valid).toBeTrue();
  });

  it('should make the message field valid when it contains at least 20 characters', () => {
    let messageControl = component.contactForm.get('message');
    messageControl?.setValue('Short message');
    expect(messageControl?.valid).toBeFalsy();
    messageControl?.setValue('This is a sufficiently long message with more than 20 characters');
    expect(messageControl?.valid).toBeTrue();
  });

  it('should call onSubmit when the form is valid', () => {
    spyOn(component, 'onSubmit');
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a valid message with more than 20 characters',
    });
    fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should disable the submit button when the form is invalid', () => {
    component.contactForm.setValue({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTrue();
  });

  it('should enable the submit button when the form is valid', () => {
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a valid message with more than 20 characters',
    });
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeFalse();
  });
});
