# Container, Padding, Expanded

## Padding ба Margin

```dart
// Padding widget
Padding(
  padding: EdgeInsets.all(16),
  child: Text('Дотор зайтай'),
)
```

`EdgeInsets` хувилбарууд:

```dart
EdgeInsets.all(16)
EdgeInsets.symmetric(horizontal: 20, vertical: 10)
EdgeInsets.only(left: 8, top: 4)
EdgeInsets.fromLTRB(8, 4, 8, 4)
```

## Container

Хүрээ, өнгө, хэмжээ, булан зэргийг нэг дор тохируулна:

```dart
Container(
  width: 200,
  height: 100,
  margin: const EdgeInsets.all(12),
  padding: const EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.blue.shade100,
    borderRadius: BorderRadius.circular(16),
    border: Border.all(color: Colors.blue, width: 2),
    boxShadow: [
      BoxShadow(color: Colors.black12, blurRadius: 8, offset: Offset(0, 4)),
    ],
  ),
  child: const Text('Карт'),
)
```

> Анхаар: `color:` ба `decoration:`-ыг **хамт** хэрэглэж болохгүй. Өнгөө `BoxDecoration` дотор бич.

## Expanded ба Flexible

`Row`/`Column` дотор үлдсэн зайг дүүргэнэ:

```dart
Row(
  children: [
    Expanded(
      flex: 2,
      child: Container(height: 50, color: Colors.red),
    ),
    Expanded(
      flex: 1,
      child: Container(height: 50, color: Colors.green),
    ),
  ],
)
```

`flex` нь харьцаа (2:1 → 2/3 ба 1/3).

## Align, Center, SizedBox

```dart
Center(child: Text('Голд'))
Align(alignment: Alignment.bottomRight, child: Text('Баруун доор'))
SizedBox(width: 100, height: 100, child: Placeholder())
```

## Card

```dart
Card(
  elevation: 4,
  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
  child: Padding(
    padding: const EdgeInsets.all(16),
    child: Text('Material карт'),
  ),
)
```

## Даалгавар

Бүтээгдэхүүний карт хий: дугуй булантай `Container`, дотор нь нэр, үнэ, "Худалдаж авах" товч.
