import { SystemHomeModule } from './system-home.module';

describe('SystemHomeModule', () => {
  let systemHomeModule: SystemHomeModule;

  beforeEach(() => {
    systemHomeModule = new SystemHomeModule();
  });

  it('should create an instance', () => {
    expect(systemHomeModule).toBeTruthy();
  });
});
