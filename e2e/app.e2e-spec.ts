import { browser, element, by } from 'protractor';

describe('Testes E2E', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('deve conter no logo a palavra "Kazale"', () => {
    expect(element(by.css('nav')).getText()).toContain('Kazale');
  });

});
