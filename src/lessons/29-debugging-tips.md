# Алдаа засах, сайн дадал

Хөгжүүлэгч өдрийн 50% нь алдаа засч өнгөрөөдөг. Үүнийг системтэй хийх нь чухал.

## Алдааны мессеж унших

Flutter алдааг **доороос нь дээш** унш. Эхний хэдэн мөрөнд ихэвчлэн шалтгаан бичигдсэн байдаг.

```
══╡ EXCEPTION CAUGHT BY RENDERING LIBRARY ╞══
A RenderFlex overflowed by 42 pixels on the bottom.
```

## Түгээмэл алдаанууд

| Алдаа | Шалтгаан | Засвар |
|---|---|---|
| `RenderFlex overflowed` | Агуулга дэлгэцэнд багтахгүй | `SingleChildScrollView`, `Expanded` |
| `Vertical viewport was given unbounded height` | `ListView`-ийг `Column` дотор шууд тавьсан | `Expanded(child: ListView(...))` |
| `setState() called after dispose()` | Widget устсаны дараа `setState` | `if (!mounted) return;` шалга |
| `Null check operator used on a null value` | `!` ашигласан боловч null | `?.`, `??`, шалгалт |
| `type 'Null' is not a subtype of type 'String'` | JSON дээр талбар байхгүй | `json['x'] as String? ?? ''` |
| `No Material widget found` | `MaterialApp`-ээс гадуур widget ашигласан | `MaterialApp`/`Scaffold` дотор тавь |
| `Navigator operation requested with a context that does not include a Navigator` | `MaterialApp`-ээс дээш context | `Builder` ашигла |

## Debug хийх хэрэгслүүд

```dart
print('count = $count');           // хамгийн энгийн
debugPrint('Урт текст');           // урт мессежийг тасалдуулахгүй
```

- **Flutter DevTools**: `flutter run` хийхэд гарах холбоосоор нээнэ. Widget Inspector-оор widget мод, хэмжээг харна.
- VS Code дээр мөрийн зүүн талд дарж **breakpoint** тавь, F5-аар debug горимд ажиллуул.

## Сайн дадал

1. **Widget-ээ жижиг болго.** `build()` 100 мөр давбал салга.
2. **`const` ашигла.** `const Text('...')` нь гүйцэтгэлд сайн.
3. **Нэр сайн өг.** `x1` биш `userEmail`.
4. **Давтахгүй байх.** Ижил UI хоёр удаа бичсэн бол widget болго.
5. **`flutter analyze` ажиллуул.** Анхааруулгыг арилга.
6. **Форматла:** `dart format .`
7. **Git ашигла.** Ажилладаг төлөв бүрт commit хий.

## Фолдерын бүтэц (дунд хэмжээний апп)

```
lib/
 ├─ main.dart
 ├─ models/        (Todo, User ...)
 ├─ screens/       (HomePage, LoginPage ...)
 ├─ widgets/       (дахин ашиглагдах жижиг widget)
 ├─ services/      (api.dart, storage.dart)
 └─ providers/     (state)
```

## Тест (товчхон)

```dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('1 + 1 = 2', () {
    expect(1 + 1, 2);
  });

  testWidgets('Counter нэмэгдэнэ', (tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();
    expect(find.text('1'), findsOneWidget);
  });
}
```

```bash
flutter test
```

## Даалгавар

Өмнөх апп-даа `flutter analyze` ажиллуулж гарсан анхааруулгыг бүгдийг нь засаарай.
