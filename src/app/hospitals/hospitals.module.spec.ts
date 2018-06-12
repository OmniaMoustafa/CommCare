import { HospitalsModule } from './hospitals.module';

describe('HospitalsModule', () => {
  let hospitalsModule: HospitalsModule;

  beforeEach(() => {
    hospitalsModule = new HospitalsModule();
  });

  it('should create an instance', () => {
    expect(hospitalsModule).toBeTruthy();
  });
});
