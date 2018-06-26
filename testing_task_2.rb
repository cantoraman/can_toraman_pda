### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.


require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value == 1        // missing ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1, card2)     // typo: dif/def  missing comma
  if card1.value > card2.value
    return card1        #wrong variable(name), wrong reference(card), better to return an object
  else
    card2
  end
end
end         #excess end

def self.cards_total(cards)
  total=0         #must assign zero
  for card in cards
    total += card.value

  end
  return "You have a total of" + total   #right place to return
end

end     #missing end
