# Функц

Функц бол нэр өгсөн, дахин ашиглаж болдог код бүлэг. Flutter-д widget бүр функц/класс хэлбэртэй тул маш чухал.

## Үндсэн бүтэц

```dart
int add(int a, int b) {
  return a + b;
}

void main() {
  int result = add(3, 4);
  print(result); // 7
}
```

`int` нь буцаах утгын төрөл, `a`, `b` нь параметр.

## Богино (arrow) бичиглэл

Нэг илэрхийлэлтэй функцийг `=>`-аар богиносгоно:

```dart
int square(int x) => x * x;

void main() {
  print(square(5)); // 25
}
```

## Нэрлэсэн параметр (named parameters)

Flutter-ийн widget бүр үүнийг ашигладаг. **Анхааралтай ол!**

```dart
void greet({required String name, int age = 18}) {
  print('Сайн уу, $name! Нас: $age');
}

void main() {
  greet(name: 'Болд');
  greet(name: 'Сараа', age: 22);
}
```

- `{ }` дотор бичсэн параметрийг **нэрээр нь** дамжуулна.
- `required` заавал өгөх ёстой гэсэн үг.
- `= 18` бол анхдагч утга.

## Заавал биш (optional) параметр

```dart
String hello(String name, [String? title]) {
  return title == null ? 'Сайн уу, $name' : 'Сайн уу, $title $name';
}

void main() {
  print(hello('Болд'));
  print(hello('Болд', 'багш'));
}
```

`String?` дахь `?` нь `null` байж болно гэсэн үг (хичээл 8-д дэлгэрэнгүй).

## Функц бол утга

Функцийг хувьсагчид хадгалах, өөр функцэд дамжуулж болно:

```dart
void doTwice(void Function() action) {
  action();
  action();
}

void main() {
  doTwice(() => print('Сайн уу'));
}
```

`() => ...` бол **нэргүй функц**. Flutter-д `onPressed: () { ... }` гэж байнга бичнэ.

## Даалгавар

1. `bool isEven(int n)` функц бич.
2. `double average(double a, double b)` функц бич.
3. Нэрлэсэн параметртэй `introduce({required String name, required int age})` функц бичиж дууд.
