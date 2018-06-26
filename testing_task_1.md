<!-- ### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1. -->

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1       # missing ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)    # typo: dif/def  missing comma
  if card1.value > card2.value
    return card.name    #wrong variable(name), wrong reference(card), better to return an object
  else
    card2
  end
end
end      #excess end

def self.cards_total(cards)
  total    #must assign zero
  for card in cards
    total += card.value
    return "You have a total of" + total #wrong place to return and wrong way of doing it
  end
end
