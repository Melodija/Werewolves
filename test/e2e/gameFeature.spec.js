describe('Game', function () {
  it('can input the number of players', function() {
    browser.get('/');
    $('#num-of-players').sendKeys("10");

    var todo = $$('#todos p').last().getText();
    expect(todo).toMatch('NewToDo: not completed');
  });
});
