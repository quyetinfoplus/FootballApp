import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrandauPage } from './trandau.page';

describe('TrandauPage', () => {
  let component: TrandauPage;
  let fixture: ComponentFixture<TrandauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrandauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrandauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
