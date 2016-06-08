describe('Setup', function () {
  it('can input the number of players', function() {
    browser.get('/');
    $('#num-of-players').sendKeys("10");
    expect($('#num-of-wolves')).toBe(Number);
  });

  it('should have a Start Game button', function () {
    browser.get('/');
    expect($('#game-btn').getText()).toMatch('Start Game');

    $('#game-btn').click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/game?');
  });
});
