import { EntrvistaAppPage } from './app.po';

describe('entrvista-app App', function() {
  let page: EntrvistaAppPage;

  beforeEach(() => {
    page = new EntrvistaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
