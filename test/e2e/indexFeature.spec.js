describe("werewolvesApp", function () {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Werewolves");
  });

  it('should have a title', function () {
    browser.get('/');
    expect($('#header').getText()).toMatch('Werewolves');
  });

  it('should have a Rules button', function () {
    browser.get('/');
    expect($('#rules-btn').getText()).toMatch('Rules');

    $('#rules-btn').click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/rules?');
  });

});
