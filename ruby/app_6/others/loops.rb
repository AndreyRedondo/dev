x = 10
y = 9
z = 20
rango = 1..20
puts "This is IF"
if x == 10
    puts x
else
    puts 'No'
end 

puts "This is FOR"
for element in rango
    puts element
end

puts "This is WHILE"
while x <= z
    puts x
    x += 1
end

puts "This is LOOP DO"
loop do
    puts y
    y += 1
    if y == z 
        break
    end
end

