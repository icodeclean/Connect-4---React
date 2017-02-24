class Connect4
  @board = [
    [nil, nil, nil],
    [nil, nil, nil],
    [nil, nil, nil]
  ]

  @p1 = 1
  @p2 = 2
  @current_player_is_p1 = true


def self.show_board(array)
  puts 
  puts 'This is the Board'
  puts '*' * 10
  array.each do |row|
    print row
    puts
  end
  puts '*' * 10
  puts
end

def self.insert_player_coin(column, player)
  for row in @board.reverse do  #iterate starting from bottom row
    if row[column].nil?
      row[column]=player
      show_board(@board)
      break
    end
  end
end

def self.toggle_player
  @current_player_is_p1 = !@current_player_is_p1
end

def self.play_turn(column, player)
  insert_player_coin(column, player)
  toggle_player
end

def self.game_play(column)
  show_board(@board)
  i = 0
  column = 0
  while (i < 9) do
  #get user input (column)
    if @current_player_is_p1
      play_turn(column, @p1)
    else
      play_turn(column, @p2)
    end
    i += 1
    if column <2
      column += 1
    else
      column = 0
    end
  end
end


game_play(0)
# show_board(@board)
# play_turn(2, @p1)
# play_turn(0, @p2)
# play_turn(0,@p1)
# play_turn(0,@p2)
# play_turn(1,@p1)
# play_turn(2,@p2)
# play_turn(1,@p1)
# play_turn(2,@p2)
# play_turn(1,@p1)


end

start = Connect4.new