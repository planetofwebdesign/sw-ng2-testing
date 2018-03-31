import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SwHerosComponent } from './sw-heros.component';
import { SwHerosService } from './sw-heros.service';



describe('SWHerosComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SwHerosComponent],
      providers: [SwHerosService]
    }).compileComponents();
  }));

  it('should create the SWHerosComponent', async(() => {
    const fixture = TestBed.createComponent(SwHerosComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

















// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { SwHerosComponent } from './sw-heros.component';

// describe('SwHerosComponent', () => {
//   let component: SwHerosComponent;
//   let fixture: ComponentFixture<SwHerosComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SwHerosComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SwHerosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
