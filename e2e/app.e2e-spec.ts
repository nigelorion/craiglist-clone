import { CraiglistClonePage } from './app.po';

describe('craiglist-clone App', function() {
  let page: CraiglistClonePage;

  beforeEach(() => {
    page = new CraiglistClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
