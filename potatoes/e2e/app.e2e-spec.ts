import { PotatoesPage } from './app.po';

describe('potatoes App', function() {
  let page: PotatoesPage;

  beforeEach(() => {
    page = new PotatoesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
