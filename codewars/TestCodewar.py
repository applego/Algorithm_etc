import unittest

class Test(unittest.TestCase):#
  # def __init__(self):
  #   self.ut = unittest.TestCase()

  def describe(self,msg):
    print(msg)

  def assert_equals(self, myAnswer, expectedAnswer):
    try:
      self.assertEqual(myAnswer, expectedAnswer)
      print('Correct Answer')
      return True
      # self.assertEquals(myAnswer, expectedAnswer)
    except AssertionError as e:
      print('Wrong Answer----------------------------------------------------------')
      # print(e.args[0])
      print(myAnswer)
      print(expectedAnswer)
      return False

  def expect(self, isCorrect, msg):
    if isCorrect:
      print('correct')
    else:
      print(msg)



# todo static（classmethodにしたい）
  # @classmethod
  # def assert_equals(cls, myAnswer, expectedAnswer):
  #   # self.ut.assert_equals(myAnswer, expectedAnswer)
  #   # unittest.assertEqual(myAnswer, expectedAnswer)
  #   # ut = super()
  #   # ut.assertEquals(myAnswer, expectedAnswer)
  #   # ut.assertEqual(myAnswer, expectedAnswer)

  #   cls.assertEquals(myAnswer, expectedAnswer)
  #   cls.assertEqual(myAnswer, expectedAnswer)
  #   print('1')
