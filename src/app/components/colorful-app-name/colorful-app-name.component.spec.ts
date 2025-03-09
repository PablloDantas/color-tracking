import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulAppNameComponent } from './colorful-app-name.component';

describe('ColorfulAppNameComponent', () => {
  let component: ColorfulAppNameComponent;
  let fixture: ComponentFixture<ColorfulAppNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorfulAppNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorfulAppNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
