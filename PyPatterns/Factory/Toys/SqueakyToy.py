from .ToyBase import ToyBase

class SqueakyToy(ToyBase):
    name = 'Squeaky Toy'
    def make_sound(self):
        print('Squeak!')