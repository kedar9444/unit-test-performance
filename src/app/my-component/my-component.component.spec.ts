import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';
import { configureTestSuite } from '../../configure-test-suit/configure-test-suit';

describe('MyComponentComponent', () => {

  configureTestSuite();

  beforeAll(done => (async () => {

    TestBed.configureTestingModule({
      declarations: [MyComponentComponent]
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  describe('MyComponentComponent', () => {

    let component: MyComponentComponent;
    let fixture: ComponentFixture<MyComponentComponent>;

    beforeEach(async(async () => {
      fixture = await TestBed.createComponent(MyComponentComponent);
      component = fixture.componentInstance;
    }));

    it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });

});
