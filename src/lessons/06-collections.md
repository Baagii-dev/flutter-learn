# List, Map, Set

## List (жагсаалт)

Flutter-д `ListView`, `Column`-ийн `children` бүгд List.

```dart
void main() {
  List<String> fruits = ['Алим', 'Усан үзэм', 'Лийр'];

  fruits.add('Жүрж');
  print(fruits.length);   // 4
  print(fruits[0]);       // Алим
  fruits.remove('Лийр');

  for (final f in fruits) {
    print(f);
  }
}
```

## map, where, toList

Flutter-д хамгийн их хэрэглэгдэх 3 арга:

```dart
void main() {
  final nums = [1, 2, 3, 4, 5, 6];

  final doubled = nums.map((n) => n * 2).toList();
  print(doubled); // [2, 4, 6, 8, 10, 12]

  final evens = nums.where((n) => n % 2 == 0).toList();
  print(evens);   // [2, 4, 6]

  final total = nums.fold(0, (sum, n) => sum + n);
  print(total);   // 21
}
```

`map` нь жагсаалтыг **өөр жагсаалт руу хөрвүүлнэ**. Дараа нь жагсаалтаас widget үүсгэхдээ яг үүнийг ашиглана.

## Map (түлхүүр: утга)

```dart
void main() {
  Map<String, int> scores = {'Болд': 90, 'Сараа': 85};

  scores['Тэмүүлэн'] = 77;
  print(scores['Болд']);   // 90

  scores.forEach((name, score) {
    print('$name: $score');
  });
}
```

## Set

Давхардалгүй утгын цуглуулга:

```dart
void main() {
  final s = {1, 2, 2, 3, 3};
  print(s); // {1, 2, 3}
}
```

## Spread ба collection if

Flutter UI-д маш их тааралдана:

```dart
void main() {
  final a = [1, 2];
  final b = [...a, 3, 4];           // [1, 2, 3, 4]
  final isAdmin = true;
  final menu = ['Нүүр', if (isAdmin) 'Тохиргоо'];
  print(b);
  print(menu);
}
```

## Даалгавар

1. Оюутны 5 оноог `List<int>`-д хадгалаад дундажийг ол.
2. 60-аас дээш оноотой оюутныг `where`-ээр шүү.
3. `Map`-д 3 хүний нэр, насыг хадгалаад бүгдийг хэвл.
