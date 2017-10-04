import { Angular2.RedditPage } from './app.po';

describe('angular2.reddit App', () => {
  let page: Angular2.RedditPage;

  beforeEach(() => {
    page = new Angular2.RedditPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
