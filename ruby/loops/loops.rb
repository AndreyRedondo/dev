# LOOP DO
x = 0
puts "This is a LOOP-DO loop"
loop do
    x += 1
    puts x
    break if x == 6
end

x = 0
loop do
    x += 1
    puts x
    if x == 6
        break
    end
end

# LOOP WHILE
puts "This is a WHILE LOOP"
x = 0
while x <= 10
    puts x 
    x += 1
end

# UNTIL LOOP
x = 0
puts "This is an UNTIL LOOP"
until x >= 10
    puts x
    x += 1
end

#  FOR LOOP
array = [1, 2, 3, 4, 5, 6]
range = 1..20
puts "This is a FOR LOOP"

array.each do |x|
    puts x
end
puts "-" * 20
for a in range do
    puts a
end