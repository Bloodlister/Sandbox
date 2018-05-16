from importlib import import_module

class ToyFactory:
    @classmethod
    def create_toy(cls, name):
        try:
            name = name.capitalize() + "Toy"
            package_name = 'Toys'
            module = import_module(package_name+'.'+name, package=package_name)
            classObj = getattr(module, name)
            return classObj()
        except:
            return cls.create_toy(input('No such toy. Try again: '))

class AnimalFactory:
    @classmethod
    def create_animal(cls, name):
        try:
            name = name.capitalize()
            package_name = 'Animals'
            module = import_module(package_name+'.'+name, package=package_name)
            classObj = getattr(module, name)
            return classObj()
        except:
            return cls.create_animal(input('No such animal. Try again: '))

toy = ToyFactory.create_toy(input("What toy do you want?: "))
cat = AnimalFactory.create_animal(input('Pick an animal: '));
cat.play(toy)
