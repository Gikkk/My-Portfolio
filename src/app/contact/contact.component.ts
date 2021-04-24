import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {

  signUpForm: FormGroup;
  submitted = false;

  @ViewChild('fadeInAnim') fadeInAnim: ElementRef;
  @ViewChild('fadeInRight') fadeInRight: ElementRef;
  @ViewChild('fadeInLeft') fadeInLeft: ElementRef;

  constructor( private http: HttpClient, private renderer: Renderer2, private title: Title, private meta: Meta ) { }

  ngOnInit(): void {
    // form group manage
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });

    // setting meta tags dynamically
    this.title.setTitle("Contact - Angular Developer Portfolio");
    this.meta.updateTag({ name: 'og:title', content: 'Contact - Developer portfolio' });
    this.meta.updateTag({ name: 'description', content: 'Contact page of front end developer portfolio - contact information' });
    this.meta.updateTag({ name: 'og:url', content: 'https://giorgi-portfolio.web.app/contact' });

    this.meta.updateTag({ name: 'twitter:title', content: 'Contact - Developer portfolio' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Contact page of front end developer portfolio - contact information' });
  }

  // http post request to database
  onSubmit(){
    this.http.post<{name: string, email: EmailValidator, subject: string, message: string}>('https://giorgi-zho-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
     this.signUpForm.value
     ).subscribe(data=>{
      this.submitted = true;

      setTimeout(() => {
        this.submitted = false;
      }, 3000);

      this.signUpForm.reset();
    });
  }

  // intersection observer of element going into view
  options = {
    rootMargin: '0px',
    threshold: 0.2
  };
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.fadeInAnim.nativeElement, 'fadeInAnim');
          this.observer.unobserve(entry.target);
        }
      });
    }, this.options);

    this.observer.observe(this.fadeInAnim.nativeElement as HTMLElement);
  }

  ngOnDestroy(){
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
