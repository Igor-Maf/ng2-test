import { MindspaceAppPage } from './app.po';

describe('mindspace-app App', function() {
  let page: MindspaceAppPage;

  beforeEach(() => {
    page = new MindspaceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
