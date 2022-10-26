import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListPageComponent } from './admin-list-page.component';

describe('AdminListPageComponent', () => {
  let component: AdminListPageComponent;
  let fixture: ComponentFixture<AdminListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
