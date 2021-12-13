"""
Task:

    Count the number of each letter in a sentence.
    The department you work for undertook a project construction that makes word / text analysis. You are asked to calculate the number of letters or any chars in the sentences entered under this project.
    Write a Python program that;
    takes a sentence from the user,
    counts the number of each letter of the sentence,
    collects the letters/chars as a key and the counted numbers as a value in a dictionary."""

#ANSWER
sentence = input("write a sentence:")
setted = set(sentence)
dictionary = {}
for m in setted:
    dictionary[m]=sentence.count(m)
print(dictionary)
