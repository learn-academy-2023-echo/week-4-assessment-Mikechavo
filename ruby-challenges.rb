# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# input: any number
# ouput: blank number is even, blank number is odd

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# create a method that checks if the given number is .even? 
# the method should construct the desired outputs in a string using if and else 

def check_even_odd number
  if number.even?
    "#{number} is even"
  else
    "#{number} is odd"
  end
end

p check_even_odd(reposts1)
p check_even_odd(reposts2)
p check_even_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# input: '', 'Rubber Soul'
# output: removes all vowels, 'Rbbr Sl'
beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# create method, def end, using .gsub method to replace all occurrences of vowels upper and lower case also set an empty string to effectively remove the vowels (/[aeiouAEIOU]/, '')

def remove_vowel str
  str.gsub(/[aeiouAEIOU]/, '')
end

p remove_vowel(beatles_album1)
p remove_vowel(beatles_album2)
p remove_vowel(beatles_album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# input: 'Racecar'
# output: checks if the string is a palindrome, Racecar is a palindrome

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# create a method that returns a string stating while or not the string is a palindrome or not.
# we will need to use the .downcase method to ensure letter are of the same case
# we will need to use the .reverse method to ensure the letter are flipped
# we will need to create an if/else method to return the desired string.

def palindrome_or_not str
  if str.downcase == str.downcase.reverse
      "#{str} is a palindrome"
  else
    "#{str} is not a palindrome"
  end
end

p palindrome_or_not(palindrome_test_case1)
p palindrome_or_not(palindrome_test_case2)
p palindrome_or_not(palindrome_test_case3)