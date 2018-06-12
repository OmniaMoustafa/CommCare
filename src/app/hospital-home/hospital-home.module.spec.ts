import { HospitalHomeModule } from './hospital-home.module';

describe('HospitalHomeModule', () => {
  let hospitalHomeModule: HospitalHomeModule;

  beforeEach(() => {
    hospitalHomeModule = new HospitalHomeModule();
  });

  it('should create an instance', () => {
    expect(hospitalHomeModule).toBeTruthy();
  });
});
