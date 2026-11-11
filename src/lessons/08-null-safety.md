# Null safety

`null` гэдэг нь "утга байхгүй" гэсэн үг. Dart-д хувьсагч **анхдагчаар null байж болохгүй**.

```dart
void main() {
  String a = 'Болд';
  // a = null;        // АЛДАА

  String? b = 'Болд'; // ? нь null байж болно
  b = null;           // зөв
}
```

## null-тэй ажиллах 4 арга

```dart
void main() {
  String? name;

  // 1. Шалгах
  if (name != null) {
    print(name.length);
  }

  // 2. ?. : null биш бол л дуудна
  print(name?.length);       // null

  // 3. ?? : null бол анхдагч утга
  print(name ?? 'Зочин');    // Зочин

  // 4. ! : "би null биш гэдэгт итгэлтэй" (болгоомжтой!)
  name = 'Болд';
  print(name!.length);       // 4
}
```

> `!`-г хэт их хэрэглэж болохгүй. Хэрвээ тэр үед null байвал програм унана.

## ??= оператор

```dart
void main() {
  String? city;
  city ??= 'Улаанбаатар'; // зөвхөн null бол оноо
  print(city);
}
```

## late

Дараа оноох боловч null биш гэдгээ амлах хувьсагч:

```dart
class Demo {
  late String title;

  void init() {
    title = 'Сайн уу';
  }
}
```

## Яагаад Flutter-д чухал вэ?

Widget-ийн олон параметр `String?`, `Widget?` төрөлтэй байдаг. `Text(user?.name ?? 'Нэргүй')` гэх мэтээр бичнэ.

## Даалгавар

`String? findUser(int id)` функц бич: `id == 1` бол `'Болд'`, бусад үед `null` буцаа. Дараа нь үр дүнг `??`-ээр `'Олдсонгүй'` гэж хэвлэ.
