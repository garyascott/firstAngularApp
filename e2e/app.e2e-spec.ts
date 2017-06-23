import { Go1Page } from './app.po';

describe('go1 App', () => {
  let page: Go1Page;

  beforeEach(() => {
    page = new Go1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
