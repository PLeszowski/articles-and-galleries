import { ArticlesAndGalleriesPage } from './app.po';

describe('articles-and-galleries App', () => {
  let page: ArticlesAndGalleriesPage;

  beforeEach(() => {
    page = new ArticlesAndGalleriesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
