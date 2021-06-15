import collections;

def groupAnagram(lists):
  anagram = collections.defaultdict(list);

  for word in lists:
    anagram[''.join(sorted(word))].append(word);

  return list(anagram.values());

lists = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
groupAnagram(lists);