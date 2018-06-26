require("minitest/autorun")
require_relative("card.rb")
require_relative("testing_task_2.rb")
require("minitest/rg")

class Task2Test < Minitest::Test

  def setup
    @card = Card.new("Clubs", 2)
    @card2 = Card.new("Hearts", 6)
    @cardgame = CardGame.new()
  end

  def test_check_for_ace()
    assert_equal(false, @cardgame.checkforAce(@card))
  end

  def test_highest_card()
    assert_equal(@card2, @cardgame.highest_card(@card, @card2))
  end

  def test_card_total()
    cards = [@card, @card2]
    assert_equal("You have a total of 8", CardGame.cards_total(cards))
  end

end
