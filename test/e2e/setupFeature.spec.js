describe('Setup', function () {
  it('can input the number of players', function() {
    browser.get('/');
    $('#setup-btn').click();
    $('#num-of-players').sendKeys("10");
    var wolfText = $('#num-of-wolves').getAttribute('placeholder');
    expect(wolfText).toMatch("Suggested number:2");
  });

  it('should have a Start Game button', function () {
    browser.get('/');
    $('#setup-btn').click();
    expect($('#game-btn').getText()).toMatch('Start Game');
    $('#game-btn').click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/game?');
  });

  it('should be able to select cards to play with', function() {
    browser.get('/');
    $('#setup-btn').click();
    $('#seer-check').click();
    $('#hunter-check').click();
    expect($('#selected-cards').getText()).toMatch('Seer, Hunter');

  });
});
