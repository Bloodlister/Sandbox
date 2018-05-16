from Toys.ToyBase import ToyBase

class AnimalBase:
    def speak(self):
        print(self.name,"said",self.tongue)
    
    def play(self, toy: ToyBase):
        print(self.name,"is playing with a",toy.name)
        toy.make_sound()