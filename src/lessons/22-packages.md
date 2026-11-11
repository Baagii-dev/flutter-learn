# Package ашиглах

Өөрөө бүгдийг бичих шаардлагагүй. [pub.dev](https://pub.dev) дээр мянга мянган бэлэн сан байна.

## Package нэмэх

```bash
flutter pub add http
```

Энэ нь `pubspec.yaml`-д автоматаар нэмнэ:

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0
```

Дараа нь код дотор:

```dart
import 'package:http/http.dart' as http;
```

## Алдартай package-ууд

| Package | Зориулалт |
|---|---|
| `http`, `dio` | API хүсэлт |
| `provider`, `flutter_riverpod` | State management |
| `shared_preferences` | Жижиг утга хадгалах |
| `go_router` | Navigation |
| `intl` | Огноо, мөнгөн дүн форматлах |
| `url_launcher` | Холбоос, утас, и-мэйл нээх |
| `image_picker` | Камер, галерей |
| `firebase_core` и др. | Firebase |

## Сайн package хэрхэн сонгох вэ?

pub.dev дээр шалгах зүйлс:

1. **Likes / Points / Popularity** өндөр эсэх
2. Сүүлд хэзээ шинэчлэгдсэн (1 жилээс дээш бол эргэлз)
3. Таны платформыг дэмждэг эсэх (Android, iOS, Web)
4. **Null safety** дэмждэг эсэх

## Жишээ: intl

```dart
import 'package:intl/intl.dart';

void main() {
  final price = NumberFormat('#,###').format(1500000);
  print('$price₮');  // 1,500,000₮

  final date = DateFormat('yyyy-MM-dd').format(DateTime.now());
  print(date);
}
```

## Анхааруулга

- Package нэмсний дараа заримдаа апп-аа **бүрэн зогсоогоод дахин** `flutter run` хийх хэрэгтэй (hot reload хүрэлцэхгүй).
- `pubspec.yaml`-ын догол мөр алдвал алдаа гарна.

## Даалгавар

`intl` package нэмээд тоог мөнгөн дүн (`1,250,000₮`), одоогийн огноог `2026-10-28` хэлбэрээр хэвлэ.
