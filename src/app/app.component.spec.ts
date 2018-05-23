import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { configureTestSuite } from '../configure-test-suit/configure-test-suit';
import { ComponentFixture } from '@angular/core/testing';
describe('AppComponent', () => {

  configureTestSuite();

  beforeAll(done => (async () => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(async () => {
      fixture = await TestBed.createComponent(AppComponent);
    }));

    it('should create the app', async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));

    it('should render title in a h1 tag', async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
  });

});  
