class Connect4
  @board = [
    [nil, nil, nil],
    [nil, nil, nil],
    [nil, nil, nil]
  ]

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

show_board(@board)

end

start = Connect4.new