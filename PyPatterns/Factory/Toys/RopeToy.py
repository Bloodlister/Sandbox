from .ToyBase import ToyBase

class RopeToy(ToyBase):
    name = 'Rope Toy'
    def make_sound(self):
        print('*Rustle*')