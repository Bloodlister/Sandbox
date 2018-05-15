
class Toy():
    def make_sound(self): pass

class SqueakyToy(Toy):
    name = 'Squaky Toy'
    def make_sound(self):
        print('Squak!')

class RopeToy(Toy):
    name = 'Rope Toy'
    def make_sound(self):
        print('*Rustle*')

class Animal:
    def speak(self):
        print(self.type,"said",self.tongue)
    
    def play(self, toy: Toy):
        print(self.name,"is playing with a",toy.name)
        toy.make_sound()

class Cat(Animal):
    name = 'Cat'
    def __init__(self):
        self.type = 'Cat'
        self.tongue = 'Meow'

class Dog(Animal):
    name = 'Dog'
    def __init__(self):
        self.type = 'Dog'
        self.tongue = 'Woof'


class ToyFactory:
    @classmethod
    def create_toy(cls, name):
        name = name.capitalize() + "Toy"
        return globals()[name]()

toy = ToyFactory.create_toy(input("What toy do you want?"))
cat = Cat()
cat.play(toy)
