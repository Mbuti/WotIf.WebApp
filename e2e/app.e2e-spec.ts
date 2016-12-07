import { WotIfWebAppPage } from './app.po';

describe('wot-if-web-app App', function() {
  let page: WotIfWebAppPage;

  beforeEach(() => {
    page = new WotIfWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
