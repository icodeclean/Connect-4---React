class Connect4
  @board = [
    [nil, nil, nil],
    [nil, nil, nil],
    [nil, nil, nil]
  ]

  @p1 = 1
  @p2 = 2

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




show_board(@board)
insert_player_coin(2,@p1)
insert_player_coin(0,@p2)
insert_player_coin(0,@p1)
insert_player_coin(0,@p2)
insert_player_coin(1,@p1)
insert_player_coin(2,@p2)
insert_player_coin(1,@p1)
insert_player_coin(2,@p2)
insert_player_coin(1,@p1)


end

start = Connect4.new