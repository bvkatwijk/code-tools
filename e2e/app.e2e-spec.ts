import { CodeToolsPage } from './app.po';

describe('code-tools App', () => {
  let page: CodeToolsPage;

  beforeEach(() => {
    page = new CodeToolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
