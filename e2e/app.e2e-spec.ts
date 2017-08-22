import { NgxGradientsPage } from './app.po';

describe('ngx-gradients App', () => {
  let page: NgxGradientsPage;

  beforeEach(() => {
    page = new NgxGradientsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
