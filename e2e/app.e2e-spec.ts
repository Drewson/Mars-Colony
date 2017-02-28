import { MarsColonyPage } from './app.po';

describe('mars-colony App', () => {
  let page: MarsColonyPage;

  beforeEach(() => {
    page = new MarsColonyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
