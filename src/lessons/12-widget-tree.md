# Widget гэж юу вэ?

Flutter-д **бүх зүйл widget**: текст, товч, зай, өнгө, бүр байрлал ч widget. Widget-үүд бие бие хоорондоо орж **мод (widget tree)** үүсгэнэ.

## Хамгийн жижиг апп

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Сайн уу, Flutter!'),
        ),
      ),
    );
  }
}
```

## Мод хэлбэрээр харвал

```
MaterialApp
 └─ Scaffold
     └─ Center
         └─ Text
```

- `runApp()` нь үндсэн widget-ийг дэлгэцэнд гаргана.
- `MaterialApp` нь Material Design-ийн суурь (theme, navigation).
- `Scaffold` нь хуудасны араг ясыг (AppBar, body, ...) өгнө.
- `Center` нь хүүхдээ голд байрлуулна.
- `Text` нь текст харуулна.

## child ба children

- Нэг хүүхэдтэй widget: `child:` (`Center`, `Padding`, `Container`)
- Олон хүүхэдтэй widget: `children: [...]` (`Column`, `Row`, `ListView`)

## build() функц

Widget бүр `build()` дотор өөрийгөө **юугаар харагдахаа** тодорхойлно. Өгөгдөл өөрчлөгдөх бүрт Flutter `build()`-г дахин дуудна.

> Бодлоо: Flutter-д UI бичих гэдэг нь "widget-үүдийг хэрхэн холбохыг тодорхойлох" гэсэн үг.

## Даалгавар

1. Дээрх кодыг шинэ төсөлд `lib/main.dart` болгон тавь.
2. `Text`-ийг өөр текстээр сольж hot reload хий.
3. `Scaffold`-д `appBar: AppBar(title: Text('Миний апп'))` нэм (`const`-г хасах хэрэгтэй байж болно).
