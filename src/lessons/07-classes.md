# Класс ба объект

**Класс** бол загвар, **объект** бол тэр загвараас үүссэн бодит зүйл. Flutter-д widget бүр класс.

## Анхны класс

```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduce() {
    print('Намайг $name гэдэг, $age настай.');
  }
}

void main() {
  final p = Person('Болд', 20);
  p.introduce();
  p.age = 21;
  print(p.age);
}
```

`Person(this.name, this.age);` нь **constructor**. `this.name` гэдэг нь параметрийг шууд талбарт онооно.

## Нэрлэсэн параметртэй constructor

Flutter-ийн хэв маяг (widget бүр ингэж бичигддэг):

```dart
class Product {
  final String title;
  final double price;

  const Product({required this.title, required this.price});
}

void main() {
  const p = Product(title: 'Цай', price: 2500);
  print('${p.title}: ${p.price}');
}
```

## Getter ба method

```dart
class Rectangle {
  final double width, height;
  const Rectangle(this.width, this.height);

  double get area => width * height;

  String describe() => 'Талбай: $area';
}

void main() {
  print(Rectangle(3, 4).describe());
}
```

## Удамшил (extends)

```dart
class Animal {
  void speak() => print('...');
}

class Dog extends Animal {
  @override
  void speak() => print('Хав хав');
}

void main() {
  Animal a = Dog();
  a.speak();
}
```

> Flutter-д `class MyApp extends StatelessWidget` гэж бичихдээ яг энэ удамшлыг хэрэглэж байгаа юм.

## Даалгавар

1. `Student` класс бич: `name`, `grade` талбартай, `isPassing` getter-тэй (`grade >= 60`).
2. 3 оюутны жагсаалт үүсгээд тэнцсэнийг нь хэвл.
