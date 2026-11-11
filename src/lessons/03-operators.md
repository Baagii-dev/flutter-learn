# Оператор ба нөхцөл

## Арифметик оператор

```dart
void main() {
  int a = 10, b = 3;
  print(a + b);   // 13
  print(a - b);   // 7
  print(a * b);   // 30
  print(a / b);   // 3.3333 (үргэлж double)
  print(a ~/ b);  // 3 (бүхэл хуваалт)
  print(a % b);   // 1 (үлдэгдэл)
}
```

## Харьцуулалт ба логик

```dart
void main() {
  int age = 17;
  print(age >= 18);            // false
  print(age == 17);            // true
  print(age != 20);            // true
  print(age > 10 && age < 20); // true (бөгөөд)
  print(age < 5 || age > 15);  // true (эсвэл)
  print(!true);                // false (үгүйсгэл)
}
```

## if / else

```dart
void main() {
  int score = 78;

  if (score >= 90) {
    print('A');
  } else if (score >= 70) {
    print('B');
  } else {
    print('C');
  }
}
```

## Гурвалсан оператор

Богино `if` бичих арга. Flutter-д маш их ашиглагдана:

```dart
void main() {
  int age = 20;
  String status = age >= 18 ? 'Насанд хүрсэн' : 'Хүүхэд';
  print(status);
}
```

## switch

```dart
void main() {
  String day = 'Даваа';
  switch (day) {
    case 'Даваа':
      print('Долоо хоногийн эхлэл');
      break;
    case 'Бямба':
    case 'Ням':
      print('Амралт');
      break;
    default:
      print('Ажлын өдөр');
  }
}
```

## Даалгавар

Оноог (0-100) хувьсагчид хадгалаад дараах дүнг хэвлэ: 90+ → A, 80+ → B, 70+ → C, бусад → F.
