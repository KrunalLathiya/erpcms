import { MaterialPage } from './app.po';

describe('material App', () => {
  let page: MaterialPage;

  beforeEach(() => {
    page = new MaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
