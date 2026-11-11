# Column ба Row

Flutter-ийн байрлалын хоёр үндсэн widget:

- `Column`: **босоо** (дээрээс доош)
- `Row`: **хэвтээ** (зүүнээс баруун)

## Column

```dart
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Нэг'),
    Text('Хоёр'),
    Text('Гурав'),
  ],
)
```

## Тэнхлэг (axis) ойлгох

| | Column | Row |
|---|---|---|
| **mainAxis** (үндсэн) | босоо | хэвтээ |
| **crossAxis** (хөндлөн) | хэвтээ | босоо |

`mainAxisAlignment` үнэт утгууд:

- `start`, `center`, `end`
- `spaceBetween` (хоорондоо тэнцүү зай, үзүүрт нь зайгүй)
- `spaceAround`, `spaceEvenly`

## Row жишээ

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  children: [
    Icon(Icons.menu),
    Text('Гарчиг'),
    Icon(Icons.search),
  ],
)
```

## Хоорондын зай

```dart
Column(
  children: [
    Text('Дээр'),
    SizedBox(height: 16),   // 16px зай
    Text('Доор'),
  ],
)
```

`Row` дотор `SizedBox(width: 8)` ашиглана.

## Column + Row хослуулах

```dart
Column(
  children: [
    Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(Icons.star, color: Colors.amber),
        SizedBox(width: 6),
        Text('4.8'),
      ],
    ),
    SizedBox(height: 8),
    Text('Маш сайн үнэлгээ'),
  ],
)
```

## Түгээмэл алдаа

Хэтэрсэн (`RenderFlex overflowed`) алдаа ирвэл: агуулга дэлгэцэнд багтахгүй байна. `SingleChildScrollView`-ээр хүрээлэх эсвэл `Expanded` ашигла (хичээл 15).

## Даалгавар

Профайл мөр хий: зүүн талд дугуй зураг (`CircleAvatar`), баруун талд нь нэр, доор нь мэргэжил (`Column`).
