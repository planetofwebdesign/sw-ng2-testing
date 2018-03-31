import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { AppComponent } from './app.component';
import { SwHerosService } from './sw-heros/sw-heros.service';
import { SwHerosComponent } from './sw-heros/sw-heros.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent, SwHerosComponent],
      providers: [SwHerosService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

