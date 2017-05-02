import { NgCompleteGuidePage } from './app.po';

describe('ng-complete-guide App', () => {
  let page: NgCompleteGuidePage;

  beforeEach(() => {
    page = new NgCompleteGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
