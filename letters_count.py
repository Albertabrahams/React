sentence = input("write a sentence:")
setted = set(sentence)
dictionary = {}
for m in setted:
      dictionary[m]=sentence.count(m)
      print(dictionary)
