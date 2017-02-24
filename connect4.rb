class Connect4
  @board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]

  @p1 = 1
  @p2 = 2
  @coins = 42
  @current_player_is_p1 = true



def self.show_board(array)
  puts 
  puts 'Connect 4'
  puts '*' * 20
  array.each do |row|
    print row
    puts
  end
  puts '*' * 20
  puts
end

def self.prompt
  print "> "
end


def self.get_player_input()
  puts "Player 1, what column would you like to play?"
  prompt
  column_picked = gets.chomp.to_i
  if (@board[0][column_picked] == 0)
    return column_picked
  else
    puts "That Column is Full! Please Select Another One"
    sleep(0.5)
    get_player_input
  end
end


def self.insert_player_coin(column, player)
  for row in @board.reverse do  #iterate starting from bottom row
    if row[column] == 0
      row[column] = player
      show_board(@board)
      puts "Player #{player} played in column #{column}!"
      puts
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

def self.computer_play
  if @board.first.include?(0)
    available_cells = []
    @board.first.each_with_index do |x , index|
      available_cells << index if x == 0
    end
  end
  column_picked = available_cells.sample if available_cells
  play_turn(column_picked, @p2) 
end


def self.game_play
  show_board(@board)
  i = 0
  while (i < @coins) do
    if @current_player_is_p1
      column = get_player_input
      play_turn(column, @p1)
    else
      computer_play
    end
    i += 1
  end
end

game_play()

end

start = Connect4.new